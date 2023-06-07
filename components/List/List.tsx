import { styled } from "@/config/stitches.config";

export const List = styled("ul", {
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const ListItem = styled("li", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
  height: "48px",
  padding: "0px $12",
  border: "1px solid $grey20",
  borderRadius: "$8",
  transition: "$base",

  label: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "&:hover": {
    background: "$grey10",
  },
});
