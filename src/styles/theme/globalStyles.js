// material
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";


import { GlobalStyles as GlobalThemeStyles } from "@mui/material";
import bg from '../../assets/bg.jpg'
// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();


  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100vh",
          background:  `url(${bg})`,
          backgroundPosition: '100% 30%',
          backgroundSize: 'cover',
          backgroundRepeat:'repeat',
          position: 'relative',
           overflowY:'auto',
          '&::after': {
              content: `''`,
            position: 'absolute',
            zIndex:'10',
            inset:'0',
            width: '100%',
            height: '100%',
            background: `linear-gradient(to right ,${theme.palette.grey[900]} ,${theme.palette.grey[900]})`,
             backgroundPosition: '100% 30%',
            backgroundSize: 'cover',
            backgroundRepeat:'repeat',
            opacity:0.8
            
            
            
          }
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        a: {
          color: theme.palette.primary.textl,
          textDecoration: 'none',
          '&:visited': {
            color:theme.palette.primary.textl,
          }
        },
        img: { display: "block", },

       
       
      }}
    />
  );
}
