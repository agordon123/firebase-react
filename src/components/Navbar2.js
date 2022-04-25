import React, { useState, useRef, useEffect } from 'react';
import { MdHome } from 'react-icons/md';
import { ListItem } from '@mui/material';
import { HomeMaxTwoTone } from '@mui/icons-material';
import { Link, LinkProps ,useNavigate} from 'react-router-dom';
import { signOut } from '../auth/firebase';
import { Modals } from './Modals';

const commonLinks = [
    {
      id: "Home",
      label: "Home",
      type: "text",
      path: "/",
    },
    {
      id: "Listings",
      label: "Listings",
      type: "text",
      path: "/listings",
    },
    {
      id: "Contact",
      label: "Contact",
      type: "text",
      path: "/contact",
    },
    {
      id: "Login",
      label: "Login/Register",
      type: "text",
      path: "/login",
    },
];
  


/*const ListItemLink = (props) => {


  const { to, primary,commonLinks,style } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef < HTMLAnchorElement, Omit < RouterLinkProps, 'to' >> (function Link(
        linkProps,
        ref,
      ) {
      return <Link ref={ref} to={commonLinks.path} type={commonLinks.type } id={commonLinks.id} {...linkProps} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem component={CustomLink} style={style} primary={primary}
        label={commonLinks.label}
        
        sx={{
        fontSize: '20px',
        display: 'block',
        color: 'white', /*686868*//*
        textAlign: 'center',
        padding: '19px 20px',
        textDecoration: 'none',
      }}>
      
      </ListItem>
        
    </li>
  )
} */


export const Navbar = (props) => {
  const { commonLinks } = props;

  const [user, setUser] = useState([]);
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const style = { borderTop: "gray solid 2px", display: "none" };
  const style2 = { borderTop: "gray solid 2px", display: "block" };
  const style3 = { float: "left" };





  const checkUser = (props) => {

    

    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };

    const handleLogout = async () => {
      signOut();
      localStorage.removeItem('user');
      setLoggedIn(false);
    }
    const handleOnClick = (e) => {
      e.preventDefault();

    }
    const renderLinks = (props) => {
      return (
        <div ref={linksContainerRef} className="links-container" style={showLinks ? style2 : style}>
          <div className="links" ref={linksRef}>
            {commonLinks.map((commonLink) => {
              return (
                <ListItem
                  key={commonLink.id}
                  label={commonLink.label}
                  type={commonLink.type}
                  path={commonLink.path}
                  onClick={handleOnClick}
                  sx={{
                    fontSize: '20px',
                    display: 'block',
                    color: 'white', /*686868*/
                    textAlign: 'center',
                    padding: '19px 20px',
                    textDecoration: 'none',
                  }}
                />
              );
            })}
          </div>
          </div>
       )
    }
		
		
    return (
      <div className="main-navbar">
        <ul className="main-navbar">
          
          <div id="right-side">
            <ListItem id="login-tab" className="loggedOut" onClick={<Link />}>
              <Link to="/login">Login/Register</Link>
            </ListItem>
            <ListItem>
              <div className="loggedIn dropdown">
                <Link id="profile-tab" onClick={toggleLinks}>Profile</Link>
                <div class="dropdown-content">
                  <Link href="account.html">Account</Link>
                  <Link className="admin administrator-panel" to="/admin" style={style2}>Admin</Link>
                  <Link href="index.html" onClick={<Link to="/" />}>Logout</Link>
                </div>
              </div>
            </ListItem>
            <ListItem><Link to="/listings">Sold</Link></ListItem>
            <ListItem><Link to="/">Buy</Link></ListItem>
            <ListItem><Link to="/rent">Rent</Link></ListItem>
            <ListItem><Link to="/contact">Contact</Link></ListItem>
          </div>
        </ul>
      </div>
     
    )
  }

  Navbar.initialProps = {
    commonLinks,
  };
  




  const NavBarLeftSide = () => {
    const [isAdmin, setIsAdmin] = useState([]);
    const style3 = { float: 'left' };
    const style = { borderTop: "gray solid 2px", display: "none" };
    const style2 = { borderTop: "gray solid 2px", display: "block" };
	
    return (
      <div>
        <ListItem style={style3}><Link to="/"><HomeMaxTwoTone aria-hidden="true"></HomeMaxTwoTone>MNC Development 3.20</Link></ListItem>
      </div>
    )
  }

  const SmallScreenNavBar = () => {
	  

    const handleLogout = () => {
      signOut();
      localStorage.removeItem('user');
      setLoggedIn(false);
    }
    const style3 = { float: "left" };
    const slideStyle = { borderTop: 'gray solid 2px' };
    useEffect = () => {
		
    }
    return (
      <div className="SmallScreenNavBar">
        <ListItem style={style3}>
          <div class="navbar-menu">
            <Link id="small-screen-menu"><i class="fa fa-bars"  aria-hidden="true"></i></Link>
            <div id="navbar-menu-content">
              <Link to="/contact">Contact</Link>
              <Link to="/rent">Rent</Link>
              <Link to="/buy">Buy</Link>
              <Link to="/sold">Sold</Link>
              <Link id="slide-down-login-tab" class="loggedOut" onclick="modalOpen('login')" href="/login">Login/Register</Link>
              <Link id="slide-down-account-tab" class="loggedIn" href="account.html" style="border-top: gray solid 2px;">Account</Link>
              <Link id="slide-down-logout-tab" class="loggedIn" href="index.html" onClick={handleLogout()}>Logout</Link>
              <Link class="admin administrator-panel" href="administrator.html" sx={{
                display: 'none'
              }} style={slideStyle}>Admin</Link>
            </div>
          </div>
        </ListItem>
      </div>
    )
  }
}
