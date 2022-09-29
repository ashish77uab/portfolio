import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { links } from '../../constants'

const Navbar = ({page, setPage}) => {
  return (
    <Box sx={{
      display: { xs: 'none', sm: 'block' },
     
                  
                 
      }}>
          <Stack direction={'row'} spacing={3} mt={{xs:2 ,sm:0 ,lg:2}}>
        {links.map((link, index) => (
          <Box key={index}>
            <Typography  onClick={()=>setPage(link.path)} sx={{
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
              , '&::before': {
                display: 'block',
                width: '0%',
                transition:'width 0.3s ease'
               
                
              },
               '&:hover::before': {
                width: '80%',
                color:'red'
                }
            }} component={'span'} variant='body1' fontWeight={'500'}>{link.name}</Typography>
            </Box>
             ))}
            
          </Stack>
      </Box>
  )
}

export default Navbar