// ----------------------------------------------------------------------

function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: `${xs}px`,
    },
    "@media (min-width:900px)": {
      fontSize: `${md}px`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${lg}px`,
    },
  };
}

const FONT_PRIMARY = "Sora, sans-serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: 40,

    ...responsiveFontSizes({ xs: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: 32,
    ...responsiveFontSizes({ xs: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 22,
    ...responsiveFontSizes({ xs: 22, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 20,
    ...responsiveFontSizes({ xs: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 18,
    ...responsiveFontSizes({ xs: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: 17,
    ...responsiveFontSizes({ xs: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 17,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: 14,
  },
  body1: {
    lineHeight: 1.5,
    fontSize: 16,
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: 14,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: 12,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 12,
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: 14,
    textTransform: "capitalize",
  },
};
export default typography;
