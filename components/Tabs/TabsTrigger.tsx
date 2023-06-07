import * as TabsPrimitive from "@radix-ui/react-tabs";
import { styled } from "@/config/stitches.config";

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  cursor: "pointer",
  fontWeight: "semibold",
  lineHeight: 1.65,
  position: "relative",
  padding: "$12 $16",
  background: "none",
  border: "none",
  borderBottom: "1px solid transparent",
  borderColor: "$grey20",
  color: "$textStrong",
  '&[data-state="active"]::before': {
    backgroundColor: "$primary50",
  },
  "&::before": {
    content: "",
    position: "absolute",
    bottom: "-1px",
    left: "0px",
    right: "0px",
    height: "4px",
    width: "100%",
    borderRadius: "$8",
  },
});

export const TabsTrigger = StyledTrigger;
