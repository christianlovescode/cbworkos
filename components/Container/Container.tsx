import { styled, keyframes } from "@/config/stitches.config";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const Box = styled("div", {
  variants: {
    flexRow: {
      true: {
        display: "flex",
        alignItems: "center",
        gap: "$8",
      },
    },
    fadeIn: {
      true: {
        animation: `${fadeIn} $transitions$base linear`,
      },
    },
  },
});

export const PageContainer = styled(Box, {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "$48 $12",
});
