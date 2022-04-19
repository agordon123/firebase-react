import React, { useState, useRef, useEffect } from 'react';
import { FaBars,HomeFc } from 'react-icons/fa';
import { Link,ListItem } from '@mui/material';
import { links, social } from '../simplifiedsrc/components/data';
import {commonLinks} from '../data/data';


const Navbar = (props) => {
  
  const [ user, setUser ] = useState([]);
  const [isAdmin,setIsAdmin] = useState(null);
  const fetchUser = () => {
    if(localStorage.getItem('user')){
      user = setUser(JSON.stringify(localStorage.getItem('user')));
      if(user.AccountType === 'Admin'){
        setIsAdmin(true);
      }
    } else {
      
    }
    
  }
  commonLinks = this.props;
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const style = { borderTop: 'gray solid 2px', display: 'none' };
  const style2 = { borderTop: 'gray solid 2px', display: 'block' };
  const style3 = { float: 'left' };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    setLoggedIn(false);
    
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <div>
        <ul className="main-navbar">
          
          <div id="right-side">
            <ListItem id="login-tab" class="loggedOut" onClick="modalOpen('login')">
              <Link to="/login">Login/Register</Link>
            </ListItem>
            <ListItem>
              <div className="loggedIn dropdown">
                <Link id="profile-tab" onClick={toggleLinks}>Profile</Link>
                <div class="dropdown-content">
                  <Link href="account.html">Account</Link>
                  <Link className="admin administrator-panel" to="/admin" style={style2}>Admin</Link>
                  <Link href="index.html" onclick="logout()">Logout</Link>
                </div>
              </div>
            </ListItem>
            <ListItem><Link to="/listings">Sold</Link></ListItem>
            <ListItem><Link href="index.html">Buy</Link></ListItem>
            <ListItem><Link href="rent.html">Rent</Link></ListItem>
            <ListItem><Link href="contact.html">Contact</Link></ListItem>
          </div>
    
         
 
    
          
        </ul>
        </div>
     
    )
}

export const NavBarLeftSide = () => {
  const style3 = { float: 'left' };
  return (
    <div>
    <ListItem style={style3}><Link to="/"><HomeFc class="fa fa-fw fa-home" aria-hidden="true"></HomeFc>MNC Development 3.20</Link></ListItem>
    </div>
  )
}
export const SmallScreenNavBar = () => {
  const handleSmallScreen = () => { 

  }
  return (
    <div className="SmallScreenNavBar">
             <ListItem style="float:left">
            <div class="navbar-menu">
              <Link id="small-screen-menu"><i class="fa fa-bars" onClick={handleSmallScreen} aria-hidden="true"></i></Link>
              <div id="navbar-menu-content">
                <Link to="/contact">Contact</Link>
                <Link to="/rent">Rent</Link>
                <Link  to="/buy">Buy</Link>
                <Link to="/sold">Sold</Link>
                <Link id="slide-down-login-tab" class="loggedOut" onclick="modalOpen('login')" href="/login">Login/Register</Link>
                <Link id="slide-down-account-tab" class="loggedIn" href="account.html" style="border-top: gray solid 2px;">Account</Link>
                <Link id="slide-down-logout-tab" class="loggedIn" href="index.html" onclick="logout()">Logout</Link>
                <Link class="admin administrator-panel" href="administrator.html" style="border-top: gray solid 2px; display: none;">Admin</Link>
              </div>
            </div>
      </ListItem>
      </div>
  )
}

export default Navbar;