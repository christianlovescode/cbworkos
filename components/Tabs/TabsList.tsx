import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@/config/stitches.config";

const StyledList = styled(TabsPrimitive.List, {
  display: "flex",
  flexWrap: "wrap",
  gap: "$12",
  width: "100%",
  marginBottom: "$16",
});

export const TabsList = StyledList;
