import * as React from "react";
import { useFormContext } from "react-hook-form";
import {Grid,Link,ListItem} from "@mui/material";


export default function Test() {
 

  return
    <>
   <Grid container element="App" disablegutters="true" fixed="true" id="header"
   sx={{
       boxShadow: '0px 5px 10px 2px #888888',
   backgroundColor: 'rgb(196, 196, 196)',
   position: 'absolute',
   left: '0',
   top:'0',
   width: "100%",
   margin: 0,
   padding: 0,
   zIndex: 2,
height:60,
color:'white'}}
   >
       <ListItem sx={{fontSize:'20px'}} > 
       <Link sx={{color:"white",    
               display: 'block',
               textAlign:'center',
               padding: '10px 10px',
               textDecoration: 'none'}} >MNC Development 3.20</Link></ListItem>   
   </Grid>

   </>
   }      
