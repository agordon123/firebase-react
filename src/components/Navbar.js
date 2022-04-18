import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from '@mui/material';
import { links, social } from '../simplifiedsrc/components/data';

const style ={ borderTop: 'gray solid 2px',display:'none'}

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const[loggedIn,setLoggedIn] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <>
        <ul class="main-navbar">
          
          <div id="right-side">
            <li id="login-tab" class="loggedOut" onclick="modalOpen('login')">
              <Link>Login/Register</Link>
            </li>
            <li>
              <div class="loggedIn dropdown">
                <Link id="profile-tab" onclick="showMenu()">Profile</Link>
                <div class="dropdown-content">
                  <a href="account.html">Account</a>
                  <a class="admin administrator-panel" href="administrator.html" style="display: none;">Admin</a>
                  <a href="index.html" onclick="logout()">Logout</a>
                </div>
              </div>
            </li>
            <li><a href="sold.html">Sold</a></li>
            <li><a href="index.html">Buy</a></li>
            <li><a href="rent.html">Rent</a></li>
            <li><a href="contact.html">Contact</a></li>
          </div>
    
         
          <li style="float:left">
            <div class="navbar-menu">
              <a id="small-screen-menu"><i class="fa fa-bars" onclick="showNavbarMenu()" aria-hidden="true"></i></a>
              <div id="navbar-menu-content">
                <a href="contact.html">Contact</a>
                <a href="rent.html">Rent</a>
                <a href="index.html">Buy</a>
                <a href="sold.html">Sold</a>
                <a id="slide-down-login-tab" class="loggedOut" onclick="modalOpen('login')" href="/login">Login/Register</a>
                <a id="slide-down-account-tab" class="loggedIn" href="account.html" style="border-top: gray solid 2px;">Account</a>
                <a id="slide-down-logout-tab" class="loggedIn" href="index.html" onclick="logout()">Logout</a>
                <a class="admin administrator-panel" href="administrator.html" style="border-top: gray solid 2px; display: none;">Admin</a>
              </div>
            </div>
          </li>
    
          <li style="float:left"><a href="index.html"><i class="fa fa-fw fa-home" aria-hidden="true"></i>MNC Development 3.20</a></li>
        </ul>
        </>
     
    )
}

export default Navbar;