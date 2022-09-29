import { alpha } from "@mui/material/styles";
import { green, grey, lightBlue, lime,  red, } from "@mui/material/colors"
// ----------------------------------------------------------------------

function createGradient(color1, color2) {
 
  return `linear-gradient(to right, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: grey[50],
  100: grey[100],
  200: grey[200],
  300: grey[300],
  400: grey[400],
  500: '#262626',
  600: grey[600],
  700: grey[700],
  800: '#FAFAFA',
  900: '#FAFAFA',
  A100: grey['A100'],
  A200: grey['A200'],
  A300: grey['A300'],
  A400: grey['A400'],
  
};

const PRIMARY = {
  lighter:"#D1E9E4",
  light:"#ADD6CD",
  main:'#2A7665',
  dark:'#20594D',
  darker: '#184239',
  darkalt:' #266A5B',
  text:'#323130',
  textlight:'#605E5C',
  textlighter: '#A19F9D',
  tertiary:'#6AAC9E',
  contrastText: '#fff',
  textl:'#000'
  
};
const SECONDARY = {
  lighter:grey[200],
  light:grey[300],
  main:grey[500],
  dark:grey[800],
  darker:grey[900],
  contrastText:'#fff',
};
const INFO = {
   lighter:lightBlue[200],
  light:'#E3EFF9',
  main:'#1890FF',
  dark:lightBlue[800],
  darker:lightBlue[900],
  contrastText:'#fff',
};
const SUCCESS = {
   lighter:green[200],
  light:alpha('#2196f3',0.2),
  main:"#2196f3",
  dark:green[800],
  darker:green[900],
  contrastText:'#fff',
};
const WARNING = {
   lighter:lime[200],
  light:alpha('#D5B031' ,0.2),
  main:"#D5B031",
  dark:lime[800],
  darker:lime[900],
  contrastText:'#fff',
};
const ERROR = {
  lighter:red[200],
  light: alpha("#A4262C", 0.2),
  main:"#A4262C",
  dark:red[800],
  darker:red[900],
  contrastText:'#fff',
};

export const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};



const palette = {
  mode: "light",
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  divider: grey['A200'],
  text: { primary: PRIMARY.text, secondary: PRIMARY.textlight, disabled: PRIMARY.textlighter },
  background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500],
    selected:  grey['A200'],
    disabled:  grey['A200'],
    disabledBackground: grey['A200'],
    focus: grey['A200'],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
