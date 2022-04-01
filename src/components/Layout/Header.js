import {Box, Link,Grid,Modal,Paper} from '@mui/material';
import React,{ useState ,useRef, useEffect} from 'react';
import './styles.css';
import {LoginPage} from '../pages/Login';
import {FirebaseAuth} from '../auth/FirebaseAuth';
import { useAuthValue } from '../contexts/AuthContext';





export const Header = ({FirebaseAuth:currentUser})=>{
    const [user,setUser] = useState("");
    const [open,isOpen] = useState(false);
    const [firebaseUser,setFirebaseUser] = useState("");
   

    const navbarProps = {
        height:60,
        float:'right',
    position:'absolute',
    top:0,
    boxShadow:'0px 5px 10px 2px rgba(136,136,136,1)',
    backgroundColor:'rgb(196 196 196)',
    display:'block',
    right:0,
    fontSize:20,
    fontFamily:'Garamond',
    fontWeight:'bold',
    textAlign:'center',
    zIndex:2,
    gap:100,
    alignContent: 'center',
    columnSpan:'all',
    borderBottom:'1px solid black',
    paddingBottom:2,
    paddingTop:2
    }


    const onClick = () =>{
        return(
            <div>
            <Modal open={isOpen} onClose={()=>isOpen(false)}></Modal>
            </div>
        )
        
    }
    useEffect(()=>{
        console.log(currentUser);
        setFirebaseUser(currentUser);
    },[currentUser])
    
    return(
        <Grid flex className="navbar" container direction="row-reverse" justifyContent="flex-end" width="100%" 
        sx={{
           ...navbarProps
        }}>
        <nav sx={{
    
        
        }} >
        <Link href='/' 
        
        
        sx={{  
        position:'relative',
        overflow:'hidden',
        color:'white',
        float:'right',
        gridColumn:12,
        paddingRight:2,
        paddingLeft:2
        }}
        >Login/Register
        </Link>
        
        <Link href="/listings"
        sx={{color:'black',
        gridColumn:2,
        float:'right',
        span:3,
        paddingRight:2,
        paddingLeft:2
         }}>
         Browse Listings             
         </Link>
        <Link href="/contact"
            sx={{color:'black',   
            float:'right',
            position:'relative',
            overflow:'hidden',
            paddingRight:2,
            paddingLeft:2,
            gridColumn:3,
        }}>
                Contact
        </Link>
        <Link href="/" sx={{
            color:'black',   
        float:'left',
        position:'relative',
        overflow:'hidden',
        paddingRight:2,
        paddingLeft:2
    }}>
        MNC Development 3.20
        
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

