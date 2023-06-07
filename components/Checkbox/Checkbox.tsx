import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { styled } from "@/config/stitches.config";
import { Check } from "@phosphor-icons/react";
import { Box } from "@/components/Container";

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  backgroundColor: "$background",
  border: "1px solid $grey40",
  borderRadius: 2,
  color: "white",
  display: "flex",
  height: "16px",
  transition: "all $fast",
  outline: "2px solid transparent",
  outlineOffset: 2,
  width: "16px",
  "&:hover": {
    borderColor: "$grey60",
  },
  "&:focus": {
    outlineColor: "$primary",
  },
  "&[data-state='checked']": {
    borderColor: "$primary",
    backgroundColor: "$primary",
  },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: "center",
  color: "white",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  transition: "all $fast",
  width: "100%",
});

export const Checkbox = (
  props: React.ComponentProps<typeof StyledCheckbox>,
) => (
  <Box>
    <StyledCheckbox {...props}>
      <StyledIndicator>
        <Check size={12} weight="bold" />
      </StyledIndicator>
    </StyledCheckbox>
  </Box>
);
