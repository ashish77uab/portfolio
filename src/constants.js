import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
export const links = [
   { path:'home',name:'Home'},
   { path:'about',name:'About'},
   { path:'resume',name:'Resume'},
   { path:'projects',name:'Projects'},
]
export const aboutme = [
   { title:'Birthday',content:'14 June 1998'},
   { title:'Age',content:'24'},
   { title:'Degree',content:'Btech'},
   { title:'Mobile',content:'+917509650490'},
   { title:'Email',content:'ashish77uab@gmail.com'},
   { title:'City',content:'Indore, Madhya Pradesh'},
]
export const skills = [
   { title:'HTML & CSS',percent:80},
   { title:'Javascript',percent:65},
   { title:'Tailwind CSS',percent:90},
   { title:'BootStrap',percent:95},
   { title:'Chakra UI',percent:90},
   { title:'Material Ui',percent:90},
   { title:'React JS',percent:70},
  
]
export const projects = [
   { name:'CardPooler',imgpath:"/img/cardpooler.png"},
   { name:'Notarize',imgpath:"/img/notarize.png"},
   { name:'Agaya',imgpath:"/img/agaya.png"},
   { name:'Spoutube',imgpath:"/img/spoutube.png"},
   { name:'Snaptaz',imgpath:"/img/snaptaz.png"},
   { name:'Jigsaw',imgpath:"/img/jigsaw.png"},
   { name:'Mortal Arena',imgpath:"/img/mortalarena.png"},
   { name:'Bullet Train',imgpath:"/img/bullettrain.jpg"},
   { name:'Texas Holdem',imgpath:"/img/texasholdem.png"},
  
]

   
export const socials = [
   {path:'https://www.facebook.com/Ashishak45' ,iconlogo:<FaFacebookSquare />},
   {path:'https://www.instagram.com/ashish____ak47/' ,iconlogo:<FaInstagram />},
   {path:'https://twitter.com/ashish77uab' ,iconlogo:<FaTwitterSquare />},
   {path:'https://www.linkedin.com/in/ashish-patel-1a406615a/' ,iconlogo: <BsLinkedin />}
   



      
  ]