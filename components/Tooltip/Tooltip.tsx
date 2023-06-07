import React from "react";
import { styled } from "@/config/stitches.config";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Text } from "@/components/Text";

const StyledTooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: "#fff",
  padding: "$12",
  border: "1px solid $grey30",
  borderRadius: "$8",
  boxShadow: "$base",
});

const StyledTooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: "#fff",
});

export const ToolTip = ({
  children,
  content,
}: {
  children: React.ReactElement | React.ReactElement[];
  content: string;
}) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledTooltipContent sideOffset={5}>
          <Text size="small">{content}</Text>
          <StyledTooltipArrow />
        </StyledTooltipContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);
