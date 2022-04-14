import { Box, Grid, Modal, Paper ,Container, List,ListItem,Typography,Link} from '@mui/material';
import React, { useEffect, useRef, useState,createClass } from 'react';
import {  LinkProps, Navigate, NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import './styles.css';
import LinkRow from './LinkRow';


const Header = (LinkProps)=>
{

  const showLinks = () =>{
    
  }
  
  return(
    <Grid item
   sx={{    display: 'none',
    position: 'absolute',
    backgroundColor: '#f1f1f1',
    minWidth: 160,
    overflow: 'auto',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,}}>
    <Grid item sx={{

    }}>
    
    
    </Grid>
    
    </Grid>
  )
}


  


export default Header;










