import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@/config/stitches.config";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const Tabs = StyledTabs;
