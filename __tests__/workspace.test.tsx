import { render, screen, act, fireEvent } from "@testing-library/react";
import WorkspaceFeature from "@/features/workspace/workspace";

describe("Workspace Feature", () => {
  it("renders loading state when fetching users", async () => {
    render(<WorkspaceFeature />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const loader = screen.getByTestId("skeleton-loader");
      expect(loader).toBeInTheDocument();
    });
  });

  it("renders user list after fetch", async () => {
    render(<WorkspaceFeature />);

    const user1 = await screen.findByText("Christian Bryant");
    const user2 = await screen.findByText("Christine Young");

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
  });

  it("adds admin user to admin section under group tab", async () => {
    render(<WorkspaceFeature />);

    // toggle a user as an admin
    const adminToggleButton = await screen.findAllByRole("checkbox");
    expect(adminToggleButton).toHaveLength(2);

    // toggle the first user in the list to be an admin
    fireEvent.click(adminToggleButton[0]);

    // user should show up in the group list under "admin"
    const groupTab = await screen.findByTestId("groups-tab");
    fireEvent.mouseDown(groupTab);

    const adminUserList = await screen.findByTestId("admin-user-list");
    expect(adminUserList).toHaveTextContent("Christian Bryant");
    expect(adminUserList).not.toHaveTextContent("Christine Young");

    // check that second user shows up in the standard, non-admin list
    const standardUserList = await screen.findByTestId("standard-user-list");
    expect(standardUserList).toHaveTextContent("Christine Young");
    expect(standardUserList).not.toHaveTextContent("Christian Bryant");
  });
});
