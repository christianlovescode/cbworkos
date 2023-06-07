import { styled } from "@/config/stitches.config";

export const Text = styled("p", {
  lineHeight: 1.5,

  variants: {
    size: {
      tiny: {
        fontSize: "$1",
      },
      small: {
        fontSize: "$2",
      },
      base: {
        fontSize: "$3",
      },
      big: {
        fontSize: "$4",
      },
      huge: {
        fontSize: "$5",
      },
    },
    multiline: {
      true: {
        whiteSpace: "pre-wrap",
      },
    },
    align: {
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    color: {
      regular: {
        color: "$textStrong",
      },
      lighter: {
        color: "$grey60",
      },
      muted: {
        color: "$textMuted",
      },
      blue: {
        color: "$primary",
      },
      red: {
        color: "$red50",
      },
      inverse: {
        color: "$textInverse",
      },
      white: {
        color: "white",
      },
    },
    weight: {
      regular: {
        fontWeight: "$regular",
      },
      medium: {
        fontWeight: "$medium",
      },
      semibold: {
        fontWeight: "$semibold",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
    truncated: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 1,
        whiteSpace: "break-spaces",
      },
    },
  },

  defaultVariants: {
    size: "base",
    color: "regular",
    weight: "regular",
    truncated: false,
    multiline: false,
  },
});
