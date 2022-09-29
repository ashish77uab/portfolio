import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
// material

import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//



import shape from "./shape";
import palette from "./palette";
import palettelight from "./palettelight";
import breakpoints from "./breakpoints";
import typography from "./typography";
import shadows, { customShadows } from "./shadows";
import GlobalStyles from './globalStyles';
import { PortfolioContext } from '../../App'
import { useContext } from "react";
// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {

  const { portfolio, setPortfolio } = useContext(PortfolioContext);

  let mode;

  // useEffect(() => {

  //  mode = localStorage.getItem("mode");
  //   console.log(mode)
  //   if (mode && mode === 'darkmode') {
  //      console.log('ashish')
  //       setPortfolio({ ...portfolio, mode: 'dark' });
  //       enableDarkMode();
  //   }
   
  //   function enableDarkMode() {
  //     document.body.classList.remove("mode-light");
  //     document.body.classList.add("mode-dark");
  //     setPortfolio({ ...portfolio, mode: 'dark' });
  //   }

  //   function enableLightMode() {
  //     document.body.classList.remove("mode-dark");
  //     document.body.classList.add("mode-light");
  //      setPortfolio({ ...portfolio, mode: 'light' });
  //       localStorage.setItem("mode", 'lightmode');
  //   }

  //   function setThemePreference() {
  //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //        enableDarkMode();
  //       return;
  //     }
  //     else {
  //       console.log('system preferences')
  //        enableLightMode(); 
  //       }
  //   }

  //  setThemePreference();
  // },[mode]);

  const themeOptionslight = useMemo(
    () => ({
      breakpoints,
      palettelight,
      shape,
      typography,
      shadows,
      customShadows,
       components: {
    MuiContainer: {
      styleOverrides: {
       
        root: {
          "&.MuiContainer-root": {
            maxWidth:'1300px'
          },
         
          
        },
      },
    },
     },
    }),
    []
  );

  const themeOptionsdark = useMemo(
    () => ({
      palette,
      breakpoints,
      shape,
      typography,
      shadows,
      customShadows,
      components: {
    MuiContainer: {
      styleOverrides: {
       
        root: {
          "&.MuiContainer-root": {
            maxWidth:'1300px'
          },
         
          
        },
      },
    },
     },
    }),
    []
  );
  
  const theme = createTheme( themeOptionsdark);


  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
