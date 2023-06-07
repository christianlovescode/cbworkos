import { useState, useEffect } from "react";
import { Users, User } from "types";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/Tabs";
import { PageContainer, Box } from "@/components/Container";
import { Text } from "@/components/Text";
import { Skeleton } from "@/components/Skeleton";
import { List } from "@/components/List";
import { UserListItem } from "./components/UserListItem";
import { Empty } from "@/components/Empty";
import { Icon } from "@/components/Icons";

const WorkspaceFeature = () => {
  const [isLoading, setIsLoading] = useState(true);

  /** NOTE:
   * If I were actually saving user updates to a db, I would likely _not_
   * fetch the users and save into a local state object like I'm doing in this project.
   * I would lean towards using SWR for initial fetch (and the numerous benefits like revalidation, caching, dedupe, etc.)..
   * When we update the user's admin status, I'd make the request to save the data, and use a mutation to optimistically update the UI
   */
  const [users, setUsers] = useState<User[] | []>([]);
  const adminUsers = users.filter((u) => u.admin);
  const nonAdminUsers = users.filter((u) => !u.admin);

  const getUsers = async () => {
    try {
      const req = await fetch(`/api/workspace`);
      const data: Users = await req.json();

      setUsers([...data.users]);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleAdminStatus = async ({ userId }: { userId: string }) => {
    /** NOTE:
     * We could map over the user array and update
     * the user object matching `userId` here, which would _look_
     * cleaner but is not as performant, since we're building up the entire
     * array again.. imagine if we had 800 users instead of 8.
     */

    // 1. Find the user
    const currentUserIndex = users.findIndex((user) => user.id === userId);

    // 2. Toggle admin status
    const updatedUser = {
      ...users[currentUserIndex],
      admin: !users[currentUserIndex].admin,
    };

    // 3. Update the user list with the updated user
    const newUsersList = [...users];
    newUsersList[currentUserIndex] = updatedUser;
    setUsers(newUsersList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <PageContainer fadeIn>
        <Box css={{ marginBottom: "$24" }}>
          <Text size="huge" weight="semibold">
            Workspace Management
          </Text>
          <Text>View and manage all workspace users and groups.</Text>
        </Box>
        <Box>
          <Tabs defaultValue="Members">
            <TabsList>
              <TabsTrigger value="Members">
                <Box flexRow>
                  <Icon type="members" /> Members
                </Box>
              </TabsTrigger>
              <TabsTrigger value="Groups" data-testid="groups-tab">
                <Box flexRow>
                  <Icon type="groups" /> Groups
                </Box>
              </TabsTrigger>
            </TabsList>

            {isLoading && (
              <Box data-testid="skeleton-loader">
                <Skeleton count={8} height={48} />
              </Box>
            )}

            {!isLoading && (
              <>
                <TabsContent value="Members">
                  <List>
                    {users.map((user) => (
                      <UserListItem
                        key={user.id}
                        user={user}
                        onToggleAdmin={handleToggleAdminStatus}
                        allowToggle
                      />
                    ))}
                  </List>
                </TabsContent>
                <TabsContent value="Groups">
                  <Box css={{ marginBottom: "$24" }}>
                    <Text
                      size="big"
                      weight="medium"
                      css={{ marginBottom: "$8" }}
                    >
                      Administrators
                    </Text>

                    {adminUsers.length ? (
                      <List data-testid="admin-user-list">
                        {adminUsers.map((user) => (
                          <UserListItem key={user.id} user={user} />
                        ))}
                      </List>
                    ) : (
                      <Empty
                        title="No admin users found"
                        message="Get started by toggling admin permissions from the Members tab."
                      />
                    )}
                  </Box>

                  <Box>
                    <Text
                      size="big"
                      weight="medium"
                      css={{ marginBottom: "$8" }}
                    >
                      Standard
                    </Text>
                    {nonAdminUsers.length ? (
                      <List data-testid="standard-user-list">
                        {nonAdminUsers.map((user) => (
                          <UserListItem key={user.id} user={user} />
                        ))}
                      </List>
                    ) : (
                      <Empty
                        title="No standard users found"
                        message="Get started by toggling admin permissions from the Members tab."
                      />
                    )}
                  </Box>
                </TabsContent>
              </>
            )}
          </Tabs>
        </Box>
      </PageContainer>
    </>
  );
};

export default WorkspaceFeature;
