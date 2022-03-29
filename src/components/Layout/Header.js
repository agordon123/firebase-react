import {Container,Box, Link,Button,List,ListItem,Modal,Img, Grid,} from '@mui/material';
import React,{ useState ,useRef, useEffect} from 'react';
import { BsSearch } from 'react-icons/bs';
import { FcAbout, FcDown, FcHome, FcMenu } from 'react-icons/fc';
import { auth, provider } from '../../constants/firebase';
import { flexbox,item } from '@mui/system';
import { NavLink,Route,Routes } from 'react-router-dom';
import { useDetectOutsideClick } from './useDetectOutsideClick';

export const Header = () =>{
    const [loggedIn,setIsLoggedIn] = useState(false);
    const login = (email,password) =>{
    }


    return(
        <Grid className="headerContainer" container direction="row-reverse" justifyContent="flex-start"
        sx={{
            height:60,
            float:'right',
            gridTemplateColumns:'repeat(5fr 3fr)',
        position:'absolute',
        top:0,
        width:'auto',
        boxShadow:'0px 5px 10px 2px rgba(136,136,136,1)',
        backgroundColor:'rgb(196 196 196)',
        display:'grid',
        right:0,
        fontSize:25,
        fontFamily:'Garamond',
        fontWeight:'bold',
       
        zIndex:2,
        gap:1
        }}>
        <nav grid gridTemplateColumns={3} float="right" width="100%" container spacing={3} justifyContent="flex-start">
        <Link href='/Login' item xs="auto"
        sx={{  
        position:'relative',
        overflow:'hidden',
        color:'black',
        float:'right',
        gridColumn:3
        }}
        >Login/Register
        </Link>
        <Link href="/listings"
        sx={{color:'black',
        gridColumn:2,
        float:'right'
         }}>
         Browse Listings
         </Link>
        <Link href="/contact"
            sx={{color:'black',   
            float:'right',
            position:'relative',
            overflow:'hidden',
        gridColumn:1}}>
                Contact
        </Link> 
        </nav>
        </Grid>
    )

}

const DropDownMenu = () =>{
    const dropdownRef = useRef(null);
    const [isActive,setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);


    useEffect(()=>{
        const pageClickEvent = (e) =>{
            console.log(e);
        };

        if (isActive){
            window.addEventListener('click',pageClickEvent);
        }
        return () =>{
            window.removeEventListener('click',pageClickEvent);
        }
    },
    [isActive])


    return(
        <Box className="dropdownContainer">
        <div className="dropdown">
        

        <Link className='ProfileTab'  onClick={<Link href='/Account' />}>Profile</Link>
        <div className="dropdown-content">
        <Link href="account.html" >Account</Link>
        <Link class='admin administrator-panel' href="administrator.html" >Admin</Link>
        <Link href="index.html" >Logout</Link>
        
        </div>
        
        </div>
        </Box>
        
    )
}

    
Header.propTypes = {
}





export default Header;