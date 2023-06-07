import { styled } from "@/config/stitches.config";
import { ListItem } from "@/components/List";
import { User } from "types";
import { Box } from "@/components/Container";
import { Avatar } from "@/components/Avatar";
import { Text } from "@/components/Text";
import { Checkbox } from "@/components/Checkbox";
import { ToolTip } from "@/components/Tooltip";
import { Icon } from "@/components/Icons";

const StyledUserListItem = styled(ListItem, {
  cursor: "pointer",

  "&:has(button:focus)": {
    background: "$grey20",
  },

  ".avatar-container": {
    transition: "$base",
  },

  "&:has([data-state='checked'])": {
    background: "$grey10",

    ".avatar-container": {
      transform: "translateX(50px)",
    },
  },
});

type Props = {
  user: User;
  onToggleAdmin?: ({ userId }: { userId: string }) => void;
  allowToggle?: boolean;
};

export const UserListItem = ({
  user,
  onToggleAdmin,
  allowToggle = false,
}: Props) => {
  const { id, first, last, admin, photo, role } = user;
  return (
    <StyledUserListItem data-testid={`admin-user-${id}`}>
      <label htmlFor={id}>
        <Box flexRow className="avatar-container">
          <Avatar
            src={photo}
            alt={`Avatar for ${first} ${last}`}
            fallback={`${first.charAt(0)}${last.charAt(0)}`}
          />
          <Box>
            <Text size="small">
              {first} {last}
            </Text>
            <Text size="tiny">{role}</Text>
          </Box>
        </Box>

        {allowToggle && (
          <ToolTip content="Check to grant this user admin permissions">
            <Box
              flexRow
              css={{
                gap: "4px",
              }}
            >
              <Icon type="admin" size={16} />
              <Checkbox
                id={id}
                checked={admin}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onToggleAdmin && onToggleAdmin({ userId: id });
                  }
                }}
                onCheckedChange={() =>
                  onToggleAdmin && onToggleAdmin({ userId: id })
                }
              />
            </Box>
          </ToolTip>
        )}
      </label>
    </StyledUserListItem>
  );
};
