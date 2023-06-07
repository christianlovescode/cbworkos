"use client";

import { styled } from "@/config/stitches.config";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  flexShrink: 0,
  fontWeight: "$medium",
  textAlign: "center",
  textDecoration: "none",
  transition: "all $fast",
  color: "$grey80",
});
