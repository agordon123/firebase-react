import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HouseTwoToneIcon from "@mui/icons-material/HouseTwoTone";
import './styles.css'
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import * as propTypes from 'prop-types';
import { useFirebase,useFirebaseConnect } from "react-redux-firebase";
import { type } from "@testing-library/user-event/dist/type";
import { links } from "../data/data";




const pages = ["Home", "Listings", "Account","Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

const ResponsiveAppBar = ({id,label,type,path}) => {

  const props = [id, label, type, path];

  const firebase = useFirebase();
  const [loggedIn, setLoggedIn] = React.useState([]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pushLinks = (id, label, type, path) => { 
    links = [...commonLinks, { id, label, type, path }];
    return (
      <Button children component={Link} href={path}>
        {label}
      </Button>
    );
    
  };

  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const userCheck = () => {
    
  }
  return (
    <div className="ResponsiveAppBar" id="main-navbar">
      <AppBar position="static" sx={{ backgroundColor: "rgb(196, 196, 196)" }}>
        <Container component="ResponsiveAppBar" maxWidth="xl">
          <Toolbar disableGutters component="ResponsiveAppBar">
            <Typography
              variant="inherit"
              noWrap
              component="ResponsiveAppBar"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: "bold",
                fontFamily: "Garamond",
                fontSize: "20px",
                alignItems: 'left',
              }}
            >
              MNC Consulting 3.20
            </Typography>
            <HouseTwoToneIcon />
            <Box
              component="ResponsiveAppBar"
              variant="inherit"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                boxShadow: "0px 5px 10px 2px #888888",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                component="ResponsiveAppBar"
                
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                component="ResponsiveAppBar"
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pushLinks(commonLinks.map())}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="ResponsiveAppBar"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              MNC Development 3.2
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } ,float:'right',justifyContent:'center',fontFamily:'Garamond' }}>
              {commonLinks.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

ResponsiveAppBar.defaultProps = {
  pages: commonLinks.page,
  id: commonLinks.id,
  label: commonLinks.label,
  type:commonLinks.type,
};

ResponsiveAppBar.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
  path: propTypes.string,
}
export default ResponsiveAppBar;
