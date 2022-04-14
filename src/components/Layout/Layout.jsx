import Header from "../Header/Header";
import Footer from "./Footer";
import './styles.css';
import { Container, Grid, ListItem,ListItemAvatar,ListItemIcon, ListItemText} from "@mui/material";
import 'react-icons';
import Content from './Content';
import React from "react";
import {Link,LinkProps} from 'react-router-dom'

const ListItemLink = (props) =>{
    const {icon,primary,to} = props;
    const CustomLink = React.useMemo(
        ()=> React.forwardRef<HTMLAnchorElement,  to>>(function Link(
            linkProps,
            ref,
        ){
            return <Link ref={ref} to={to} {...linkProps} />;
        }),
        [to],
    
    );

    return(
        <li>
        <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary}></ListItemText>
        </ListItem>
        </li>
    )
}


const Navbar = () =>{
    const style = {
        boxShadow: '0px 5px 10px 2px #888888',
        backgroundColor: 'rgb(196, 196, 196)',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        zIndex: 2,
    }

          return(
           
            <>
            <ListItem id="login-tab" className="loggedOut">
              <Link href="/login">Login/Register</Link>
            </ListItem>
            <ListItem>
              <div class="loggedIn dropdown">
                <Link href id="profile-tab" onClick="showMenu()">Profile</Link>
                <div class="dropdown-content">
                  <a href="account.html">Account</a>
                  <a class="admin administrator-panel" href="administrator.html" sx={{display:'none'}}>Admin</a>
                  <a href="index.html" >Logout</a>
                </div>
              </div>
            </ListItem>
            <li><a href="sold.html">Sold</a></li>
            <li><a href="index.html">Buy</a></li>
            <li><a href="rent.html">Rent</a></li>
            <li><a href="contact.html">Contact</a></li>
          </>
          )
    }

      const links = {
        
        "Contact":"/contact","Rent":"/","Buy":"/","Sold":"/","Profile":"/account"
      }