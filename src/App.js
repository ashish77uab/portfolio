import {  Box, Drawer, List,  Stack, Typography, useTheme} from "@mui/material";

import * as React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import ThemeConfig from "./styles/theme";
import Home from './pages/Home';
import 'animate.css';
import { createContext } from "react";
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';
import { useEffect } from "react";
import {CgMenuRight} from 'react-icons/cg'
import { links } from "./constants";
export const PortfolioContext = createContext(null);

function App() {
   const [page, setPage] = useState('home');
  const [portfolio, setPortfolio] = useState({
    mode: 'dark',
    themeColor: null,
    fontFamily:'montserrat'
  })
 

  const theme = useTheme();
 const [drawer, setDrawer] = React.useState(false)
 const toggleDrawer = (drawer) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
setDrawer(false)
   
  };

 

  return (
   
       <Router>
       <PortfolioContext.Provider value={{ portfolio, setPortfolio }}>
            <ThemeConfig >
                    <Box className="App">
                  
                    <Routes>
              <Route exact path="/" element={<Home page={page } setPage={setPage} /> } />
                  
                   </Routes>
          
                    
                      
                      <Box sx={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex:1000
                        
                      }}
                      color='primary.textl'>
                        <Typography variant="body2" > Designed By <Box color={'success.main'} component={'span'}>Ashish Patel</Box>  </Typography>
                     </Box>
            
            {/* Mobile menu */}
            <Box onClick={()=>setDrawer(true)}
              sx={{
                        display:{xs:'flex',sm:'none'},
                        position: 'fixed',
                        top: '20px',
                         width: '38px',
                         height: '38px',
                        borderRadius: '50%',
                        backgroundColor: 'grey.800',
                        border:`2px solid ${theme.palette.success.main}`,
                       
                        left: '10px',
                       
                        justifyContent: 'center',
                        alignItems:'center',
                        zIndex: 1000,
                        cursor: 'pointer',
                        fontSize: '24px'
                        
                        
                      }}
              color='primary.textl' >
              <CgMenuRight/>
                       
                      </Box>
            
            {/* dark mode */}


                    {/* <Box sx={{
                        position: 'fixed',
                        top: '20px',
                         width: '40px',
                         height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'grey.800',
                        border:`1px solid ${theme.palette.success.main}`,
                       
                        right: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        zIndex: 1000,
                        cursor: 'pointer',
                        fontSize: '21px'
                        
                        
                      }}
              color='primary.textl' >
              
              {portfolio.mode==='dark'?
                   <FiSun onClick={() => {
                  setPortfolio({ ...portfolio, mode: 'light' });
                 
                       }}/>:
                <FiMoon onClick={() => {
                  setPortfolio({ ...portfolio, mode: 'dark' });
                 
                       }}/>
              }
            
                       
                      </Box> */}
          </Box>
           <Drawer
            anchor='left'
            open={drawer}
        onClose={toggleDrawer(drawer)}
          >
        <Box
              sx={{
          
            backgroundColor: 'grey.900',
            height: '100%',
            minWidth: '280px',
                color: 'primary.textl',
                padding: '20px 10px 20px 20px',
            
            
          }}
        >
              <Typography onClick={() => {
                setPage('home');
                setDrawer(false)
          }} variant="h2" >Ashish Patel</Typography>
          <List sx={{ marginTop: '40px' }}>
             
            

            <Stack spacing={2}>
              {links.map((link, index) => (
           <Box onClick={() => {
                setPage(link.path);
                setDrawer(false)
          }}  key={index} disablePadding>
           
                  <Typography
                    sx={{
                     position: 'relative',
                        cursor:'pointer',
                        paddingBottom: '8px',
                       '&::after , &::before': {
                    content: `''`,
                    position: 'absolute',
                    display:`${page===link.path?`block`:'none'}`,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'success.main',
                    zIndex:'2',
                    bottom: '0',
                    left: '0',
                   '&:hover': {
                      display:'block',
                    }
              }
                    }}
                    
                    component={'span'} variant="body1" fontWeight='600'>{link.name}</Typography>
            
            </Box>
              ))}
          
            </Stack>
           
             </List>
        </Box>
          </Drawer>
            </ThemeConfig>
      </PortfolioContext.Provider>
      

         </Router>
   
  );
}

export default App;
