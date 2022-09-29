import React, { useState } from "react";
import { Grid, Box, Stack, Typography, Container} from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import { aboutme, projects, skills, socials } from "../constants";
import about from '../assets/bg.jpg'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { GoPrimitiveDot } from 'react-icons/go'
import { useTheme } from "@mui/material/styles";


const Home = ({page, setPage}) => {
 
  const [hoverImg, setHoverImg] = useState(false);
  const [ind, setInd] = useState(null);
  const theme = useTheme();



  return (
    <Box sx={{ position: 'relative', zIndex: 20, height:'100vh',  overflow:'auto', color: 'primary.textl' }}>
      
    {/* Home */}
      <Box className="animate__fadeInUp animate__animated animate__faster  " sx={{
        height: {xs:`${page !== 'home' ? `70px` : `100vh`}` ,sm:`${page !== 'home' ? `100px` : `100vh`}`},
        backgroundColor: `${page !== 'home' ? `grey.900` : ``}`,
        transition: '0.3s',
        padding:'20px 0',
        width: '100%', color: 'primary.textl', display: 'grid', placeItems: 'center',
        position: `${page !== 'home' ? `sticky` : ``}`,
        top: '0',
        zIndex:1000
        
      }} >
      <Container>
          <Grid container justifyContent={'center'} alignItems='center'>
            <Grid item lg={12}>
              <Box sx={{
                display:'flex',
                flexDirection: `${page === 'home' ?`column` :`row` }` ,
                justifyContent: `${page === 'home' ? `` : `space-between`}`,
                rowGap:'8px'


              }}  >
                <Typography sx={{
                  cursor: 'pointer',
                  marginRight:{xs:10}
                
                }} onClick={() => setPage('home')} variant={`${page !== 'home' ? `h3` : `h2`}`}>
                  Ashish Patel
                </Typography>
                {page==='home'&&  <Typography variant="h6">
                I'm a passionate <Box component={'span'} sx={{
                  color: 'success.main', position: 'relative',  display:'inline-block', '&::after': {
                   content: `''`,
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'success.main',
                    zIndex:'2',
                    bottom: '0',
                    left:'0'
                } }}>Web Designer</Box> from Indore
              </Typography>}
             
                <Navbar page={page} setPage={setPage} />
                {page === 'home' &&
                  <Box sx={{marginTop:{xs:'10px', sm:'20px',lg:'28px'}}} >
                    <Stack direction={'row'} spacing={2}>
                    {socials.map((icon, index) => (
                      <Box key={index} component={'a'} sx={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'grey.500',
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: "50%",
                        fontSize: '18px',
                        cursor: 'pointer'
                    
                      }}
                      href={icon.path}>
                        {icon.iconlogo}
                      </Box>
                    ))}
                
                    </Stack>
                  </Box>
                }
                
             </Box>
            </Grid>
           
          </Grid>
      </Container>
     
     
    
      </Box>
      {/* About */}
      
      {page === 'about' &&
        <Box className="animate__fadeInUp animate__animated animate__faster  " sx={{ position: 'relative', paddingBottom:'50px', top:{xs:'20px',sm:'50px'}, zIndex: 20 }}>
          <Container sx={{ backgroundColor: 'grey.900', padding: '20px', borderRadius: '10px' }}>
            <Grid container rowSpacing={3} columnSpacing={{xs:0,sm:4}}>
              <Grid item sm={12}>
                <Stack spacing={1}>
                  <Typography variant="body1" textTransform={'uppercase'} fontSize={'15px'} color='grey.200' fontWeight={'500'}>About <Box component={'span'} sx={{
                    display: 'inline-block',
                    width: '100px',
                    marginLeft:'10px',
                    height: '1px',
                    verticalAlign:'middle',
                    backgroundColor:'success.main'
                  }}></Box> </Typography>
                  <Typography variant="h3" textTransform={'uppercase'} >Learn More About Me</Typography>
                </Stack>

              </Grid>
              <Grid item lg={4} xs={12}>

                <Box
                  sx={{ height: {xs:'400px',sm:'400px' ,md:'500px',lg:'550px' }, width: '100%', borderRadius: '10px',overflow:'hidden',margin:{xs:'0 auto' ,sm:'0'} }}>
                   <img style={{objectPosition: 'top', objectFit: 'cover',  width: '100%' }} src={about} alt="" />
                  </Box>
               
              </Grid>
              <Grid item lg={8}>
                <Stack spacing={1}>
                  <Typography variant="h4" color='success.main'>Web Designer  &  Front End Developer</Typography>
                  <Typography variant="subtitle1" >Hello Friends,Currently I am woking as a Front End Developer having 9 months experience as a Web Designer </Typography>
                  <Grid container rowSpacing={2}>
                    {
                      aboutme.map((data, index) => (
                        <Grid key={index} item sm={6}  xs={12}>
                          <Stack spacing={1} direction='row' alignItems={'center'}>
                            <Box color='success.main' component={'span'}><HiOutlineChevronRight fontSize={'20px'} /></Box>
                            <Typography variant="subtitle1" >{data.title} &nbsp; :</Typography>
                            <Typography variant="subtitle1" color='grey.200' >{data.content}</Typography>
                          </Stack>
                        </Grid>
                      ))
                    }
                 
                  
                  </Grid>
                
                </Stack>
                <Box marginTop={'30px'} marginBottom={'10px'}>
                  <Typography variant="subtitle2" color="grey.100">I have good skills in HTML, CSS, Javascript, TailwindCSS, Bootstrap, Material UI, Chakra UI, React JS.And I have Completed more than 10 projects using this Framewroks. </Typography>
                </Box>

                <Grid container sm={12} spacing={3}>
                  {
                    skills.map((skill, index) => (
                      
                   
                  <Grid key={index} item sm={6} xs={12}>
                    <Stack direction={'column'} spacing={1}>
                      <Stack direction={'row'} justifyContent='space-between'>
                            <Typography variant="subtitle2">{ skill.title}</Typography>
                            <Typography variant="subtitle2">{ skill.percent}%</Typography>
                        
                      </Stack>
                      <Box sx={{
                        width: '100%',
                        height: '10px',
                        backgroundColor: 'grey.800',
                        borderRadius:'10px'
                      }}>
                        <Box
                        sx={{
                        width: '80%',
                        height: '10px',
                        backgroundColor: 'success.main',
                        borderRadius:'10px'
                      }}
                        ></Box>
                      </Box>
                    </Stack>
                  </Grid>
 ))
                  }
                </Grid>

              </Grid>


            </Grid>
          </Container>

        </Box>
      }
      {page === 'resume' &&
        <Box className="animate__fadeInUp animate__animated animate__faster  " sx={{ position: 'relative', top:{xs:'20px',sm:'50px'}, paddingBottom:'50px', zIndex: 20 }}>
          <Container sx={{ backgroundColor: 'grey.900', padding: '20px', borderRadius: '10px' }}>
            <Grid container rowSpacing={2}>
              <Grid item sm={12}>
                <Stack spacing={1}>
                  <Typography variant="body1" textTransform={'uppercase'} fontSize={'15px'} color='grey.200' fontWeight={'500'}>Resume <Box component={'span'} sx={{
                    display: 'inline-block',
                    width: '100px',
                    marginLeft:'10px',
                    height: '1px',
                    verticalAlign:'middle',
                    backgroundColor:'success.main'
                  }}></Box> </Typography>
                  <Typography variant="h3" textTransform={'uppercase'} >Check My Resume</Typography>
                </Stack>

              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack spacing={2}>

             
                <Stack spacing={2}>
                  <Typography variant="h4" >Summary</Typography>
                  <Stack spacing={1}
                   sx={{
                  paddingLeft: {xs:'30px',sm:'40px'},
                  position:'relative',
                  "&::after": {
                    content: `''`,
                    left: '0',
                    top:'5px',
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor:'success.main'
                  },
                   "&::before": {
                    content: `''`,
                    left: '10px',
                    top:'20px',
                  position: 'absolute',
                  width: '1px',
                  height: '86%',
                  
                  backgroundColor:'grey.600'
                  }
                  
                  
                }}
                  >
                    <Typography variant="h6" color='success.main' textTransform={'uppercase'}>Ashish Patel</Typography>
                    <Typography variant="subtitle2" fontStyle={'italic'}>Innovative and deadline-driven Web Designer with 9+ months of experience in designing and developing user-centered website from initial concept to final, polished deliverable.
                     
                    </Typography>
                    <Stack spacing={1} >
                      <Box display={'flex'} columnGap='10px' alignItems='center' marginTop={'10px'} ><GoPrimitiveDot/> <Typography variant="body1" >Indore, Madhya Pradesh, India</Typography></Box>
                      <Box display={'flex'} columnGap='10px' alignItems='center'  ><GoPrimitiveDot/><Typography variant="body1" >+917509650490</Typography></Box>
                      <Box display={'flex'} columnGap='10px' alignItems='center'  ><GoPrimitiveDot/><Typography variant="body1" >ashish77uab@gmail.com</Typography></Box>

                    </Stack>
                  </Stack>
                </Stack>
                 <Stack spacing={2}>
                  <Typography variant="h4" >Education</Typography>
                  <Stack spacing={1}
                   sx={{
                   paddingLeft: {xs:'30px',sm:'40px'},
                  position:'relative',
                  "&::after": {
                    content: `''`,
                    left: '0',
                    top:'5px',
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor:'success.main'
                  },
                   "&::before": {
                    content: `''`,
                    left: '10px',
                    top:'20px',
                  position: 'absolute',
                  width: '1px',
                  height: '86%',
                  
                  backgroundColor:'grey.600'
                  }
                  
                  
                }}
                  >
                      <Typography variant="h6" color='success.main' textTransform={'uppercase'}>Bachelor of Technology</Typography>
                      <Box sx={{
                        backgroundColor: 'grey.800',
                        padding: '4px 10px',
                        width:'fit-content',
                        
                      }}><Typography variant="body2">2017 - 2021</Typography></Box>
                    <Typography variant="subtitle2" fontStyle={'italic'}>University Institute of Tecnology ,RGPV, Bhopal, Madhya Pradesh
                     
                    </Typography>
                    <Typography variant="subtitle2">I have completed Btech in Computer Science , having good command in Mathematics so as in the Programming Language.
                     
                    </Typography>
                   
                  </Stack>
                </Stack>
                  </Stack>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Stack spacing={2}>

             
                <Stack spacing={2}>
                  <Typography variant="h4" >Professional Experience</Typography>
                  <Stack spacing={1}
                   sx={{
                   paddingLeft: {xs:'30px',sm:'40px'},
                  position:'relative',
                  "&::after": {
                    content: `''`,
                    left: '0',
                    top:'5px',
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor:'success.main'
                  },
                   "&::before": {
                    content: `''`,
                    left: '10px',
                    top:'20px',
                  position: 'absolute',
                  width: '1px',
                  height: '86%',
                  
                  backgroundColor:'grey.600'
                  }
                  
                  
                }}
                  >
                      <Typography variant="h6" color='success.main' textTransform={'uppercase'}>SENIOR WEB DESIGN SPECIALIST</Typography>
                      <Box sx={{
                        backgroundColor: 'grey.800',
                        padding: '4px 10px',
                        width:'fit-content',
                        
                      }}><Typography variant="body2">Jan 2022 - Present</Typography></Box>
                    <Typography variant="subtitle2" fontStyle={'italic'}>Indore, Madhya Pradesh
                     
                    </Typography>
                    <Stack spacing={1} >
                      <Box display={'flex'} columnGap='10px' alignItems='start' marginTop={'10px'} ><Box marginTop={'3px'}><GoPrimitiveDot/></Box>  <Typography variant="body1" >Lead in the design, development, and implementation of the Webiste, layout, and production communication materials.</Typography></Box>
                      <Box display={'flex'} columnGap='10px' alignItems='start'  ><Box marginTop={'3px'}><GoPrimitiveDot/></Box> <Typography variant="body1" >Delegate tasks to the 4 members of the design team and provide counsel on all aspects of the project.</Typography></Box>
                      <Box display={'flex'} columnGap='10px' alignItems='start'  ><Box marginTop={'3px'}><GoPrimitiveDot/></Box> <Typography variant="body1" >Supervise the assessment of all layouts in order to ensure quality and accuracy of the design.</Typography></Box>

                    </Stack>
                  </Stack>
                </Stack>
                 <Stack spacing={2}>
                 
                  <Stack spacing={1}
                   sx={{
                   paddingLeft: {xs:'30px',sm:'40px'},
                  position:'relative',
                  "&::after": {
                    content: `''`,
                    left: '0',
                    top:'5px',
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor:'success.main'
                  },
                   "&::before": {
                    content: `''`,
                    left: '10px',
                    top:'20px',
                  position: 'absolute',
                  width: '1px',
                  height: '86%',
                  
                  backgroundColor:'grey.600'
                  }
                  
                  
                }}
                  >
                      <Typography variant="h6" color='success.main' textTransform={'uppercase'}>FRONT END DEVELOPER</Typography>
                      <Box sx={{
                        backgroundColor: 'grey.800',
                        padding: '4px 10px',
                        width:'fit-content',
                        
                      }}><Typography variant="body2">Sept 2022 - Present</Typography></Box>
                    <Typography variant="subtitle2" fontStyle={'italic'}>Codes For Tomorrow, Indore, Madhya Pradesh                     
                    </Typography>
                    <Stack spacing={1} >
                      <Box display={'flex'} columnGap='10px' alignItems='start' marginTop={'10px'} ><Box marginTop={'3px'}><GoPrimitiveDot/></Box>  <Typography variant="body1" >Managed up to 5 projects or tasks at a given time while under pressure.</Typography></Box>
                      <Box display={'flex'} columnGap='10px' alignItems='start'  ><Box marginTop={'3px'}><GoPrimitiveDot/></Box> <Typography variant="body1" >Know how to write the logic or code and be able to work in the project as a business environment.</Typography></Box>
                    

                    </Stack>
                   
                  </Stack>
                </Stack>
                  </Stack>

              </Grid>


            </Grid>
          </Container>

        </Box>
      }
      {page === 'projects' &&
         <Box className="animate__fadeInUp animate__animated animate__faster  " sx={{ position: 'relative', top:{xs:'20px',sm:'50px'}, paddingBottom:'50px', zIndex: 20 }}>
          <Container sx={{ backgroundColor: 'grey.900', padding: '20px ', borderRadius: '10px' }}>
            <Grid container rowSpacing={2}>
              <Grid item sm={12}>
                <Stack spacing={1}>
                  <Typography variant="body1" textTransform={'uppercase'} fontSize={'15px'} color='grey.200' fontWeight={'500'}>Portfolio <Box component={'span'} sx={{
                    display: 'inline-block',
                    width: '100px',
                    marginLeft:'10px',
                    height: '1px',
                    verticalAlign:'middle',
                    backgroundColor:'success.main'
                  }}></Box> </Typography>
                  <Typography variant="h3" textTransform={'uppercase'} >MY WORKS</Typography>
                </Stack>

              </Grid>
              <Grid container sm={12} marginTop={'30px'} spacing={3}>
                {
                  projects.map((item, index) => (
                     <Grid key={index} item sm={6} lg={4} >
                      <Box
                        onMouseEnter={() => {
                          setHoverImg(true);
                          setInd(index);
                        }}
                        onMouseLeave={() => {
                          setHoverImg(true);
                          setInd(null);
                        }}
                        sx={{
                            transition: 'all 0.4s ease',
                          position:'relative',
                          backgroundColor: 'grey.900',
                          boxShadow: `0 0px 8px 0.8px ${theme.palette.success.main}`,
                        
                          '&:hover': {
                          boxShadow: `0 0px 16px 2px ${theme.palette.success.main}`,
                       },
                        width:'100%',
                        height: '350px',
                        overflow: 'hidden',
                    
                    
                           }}
                      
                  >
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={item.imgpath} alt="" />

                        <Box sx={{
                          position: 'absolute',
                          transition: 'all 0.4s ease',
                          top: `${hoverImg&&ind===index ? '0':'-100%'}`,
                          left: '0',
                          width: '100%',
                          height: '100%',
                          zIndex: 40,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor:'pointer',
                          color:'primary.textl',
                          backgroundColor: 'grey.800',
                          
                        }}
                         
                        >
                          <Box sx={{
                            position:'relative',
                            width: '80px',
                            height: '80px',
                            borderRadius: '5px',
                            backgroundColor: 'success.main',
                            display: 'grid',
                            placeItems: 'center',
                             
                            '&::after': {
                              content: `''`,
                              position:'absolute',
                              left: '-8px',
                              top: '-8px',
                              zIndex:'-1',
                               width: '100%',
                            height: '100%',
                            borderRadius: '5px',
                            backgroundColor: 'success.light',
                            display: 'grid',
                              placeItems: 'center',
                            transition:'all 0.3s ease'
                            },
                            '&:hover::after': {
                           backgroundColor: 'success.main',
                }
                          }}
                            mb={2}
                          >
                             <Typography variant="h4" > { item.name.slice(0,1)}</Typography>
                           
                          </Box>
                           <Typography variant="h4">{ item.name}</Typography>
                  </Box>
                  </Box>
                </Grid>
                  ))
               }
                
              </Grid>


            </Grid>
          </Container>

        </Box>
        
      }


      </Box>
  );
};

export default Home;
