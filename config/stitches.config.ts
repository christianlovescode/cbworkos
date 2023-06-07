import { createStitches, CSS as StitchesCSS } from "@stitches/react";
import toRem from "@/lib/toRem";

const spaceScale = [
  1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 256,
];
const space = Object.fromEntries(spaceScale.map((size) => [size, `${size}px`]));

export type CSS = StitchesCSS<typeof config>;

const defaultColors = {
  primary10: "$blue10",
  primary20: "$blue20",
  primary30: "$blue30",
  primary40: "$blue40",
  primary50: "$blue50",
  primary60: "$blue60",
  primary70: "$blue70",
  primary80: "$blue80",
  primary90: "$blue90",

  primary: "$primary50",

  background: "#fff",
  backgroundPrimary: "$primary10",
  backgroundElevated: "$background",
  backgroundOverlay: "rgba(0 0 0 / 60%)",
  shimmerAccent: "$grey10",

  textStrong: "$grey80",
  textHover: "$grey70",
  textMuted: "$grey60",
  textDisabled: "$grey40",
  textInverse: "#fff",

  danger: "$red50",

  grey10: "#f7f8fa",
  grey20: "#f1f2f5",
  grey30: "#e4e6eb",
  grey40: "#bdbfc7",
  grey50: "#8f94a2",
  grey60: "#696e7c",
  grey70: "#4f5461",
  grey80: "#2c3242",
  grey90: "#1b1f29",

  blue10: "#ecf2ff",
  blue20: "#d6e3ff",
  blue30: "#bdd2ff",
  blue40: "#578dff",
  blue50: "#175fff",
  blue60: "#1043b2",
  blue70: "#0034a3",
  blue80: "#002066",
  blue90: "#000d29",

  red10: "#fff2f2",
  red20: "#ffd3d3",
  red30: "#ff5c5c",
  red40: "#ff4040",
  red50: "#ee0007",
  red60: "#da0f15",
  red70: "#8f0005",
  red80: "#5c0003",
  red90: "#290001",

  green10: "#e2f8ed",
  green20: "#c5f2dc",
  green30: "#5aca93",
  green40: "#21bb6f",
  green50: "#0d9c56",
  green60: "#0a8046",
  green70: "#0a8047",
  green80: "#06552f",
  green90: "#032615",

  yellow10: "#fff2dd",
  yellow20: "#ffcc65",
  yellow30: "#ffab00",
  yellow40: "#ef950d",
  yellow50: "#d68101",
  yellow60: "#ac5a0b",
  yellow70: "#9d5f01",
  yellow80: "#603a00",
  yellow90: "#291800",

  purple10: "#f1e7fe",
  purple20: "#d2afff",
  purple30: "#b073ff",
  purple40: "#9444fb",
  purple50: "#7a1cf2",
  purple60: "#6211ca",
  purple70: "#460995",
  purple80: "#2b055c",
  purple90: "#120227",
};

export const {
  getCssText,
  styled,
  globalCss,
  createTheme,
  theme,
  keyframes,
  config,
} = createStitches({
  media: {
    mobile: "(max-width: 640px)",
    tablet: "(max-width: 1200px)",
    laptop: "(max-width: 1440px)",
  },
  theme: {
    transitions: {
      base: "150ms",
      fast: "100ms",
      slow: "400ms",
    },
    space,
    colors: defaultColors,
    shadows: {
      base: "2px -2px 8px rgba(0, 0, 0, 0.04), 4px 4px 4px rgba(0, 0, 0, 0.02), 4px 4px 4px rgba(0, 0, 0, 0.02);",
      low: "2px 2px 2px rgba(0, 0, 0, 0.02), 4px 4px 4px rgba(0, 0, 0, 0.02), 4px 8px 8px rgba(0, 0, 0, 0.04), -2px 8px 16px rgba(0, 0, 0, 0.04);",
      medium:
        "0px 8px 32px rgba(0, 0, 0, 0.08), 4px 8px 16px rgba(0, 0, 0, 0.04), 4px 4px 4px rgba(0, 0, 0, 0.02), 2px 2px 2px rgba(0, 0, 0, 0.02);",
      high: "rgb(0 0 0 / 40%) 0px 12px 50px",
    },
    fontSizes: {
      1: toRem(10),
      2: toRem(12),
      3: toRem(14),
      4: toRem(16),
      5: toRem(18),
      6: toRem(24),
      7: toRem(32),
      8: toRem(40),
      9: toRem(48),
      10: toRem(56),
    },
    lineHeights: {
      1: toRem(10),
      2: toRem(12),
      3: toRem(14),
      4: toRem(16),
      5: toRem(18),
      6: toRem(24),
      7: toRem(32),
      8: toRem(40),
      9: toRem(48),
      10: toRem(56),
    },
    fontWeights: {
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
    },
    zIndices: {
      min: "-1",
      0: 0,
      1: "100",
      2: "200",
      3: "300",
      4: "400",
      max: "999",
    },
    radii: {
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      round: "50%",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    ...defaultColors,

    background: "#121212",
    backgroundPrimary: "$grey10",
    backgroundElevated: "#202020",

    shimmerAccent: "#202020",

    primary: "$primary40",

    grey10: "rgba(255,255,255, .10)",
    grey20: "rgba(255,255,255, .15)",
    grey30: "rgba(255,255,255, .20)",
    grey40: "rgba(255,255,255, .25)",
    grey50: "rgba(255,255,255, .30)",
    grey60: "rgba(255,255,255, .60)",
    grey70: "rgba(255,255,255, .70)",
    grey80: "rgba(255,255,255, 1)",
    grey90: "rgba(255,255,255, 1)",

    textInverse: "#1b1f29",
  },
});

const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "greyscale",
  },
  html: {
    overflow: "hidden",
    minHeight: "100%",
    height: "100%",
  },
  body: {
    height: "100%",
    /**
     * Overrides Radix's context menus applying pointer-events: "none" to body,
     * which causes _all_ hidden scrollbars on the page to display.
     */
    pointerEvents: "inherit !important",
    padding: "$12",
  },
  a: {
    color: "$primary",
    textDecoration: "none",
  },
  button: {
    fontFamily: "inherit",
  },
  "#__next": {
    height: "100%",
  },
});

globalStyles();
