import React from "react";
import { useNavigate,Link,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';








export const Menu = ({isAuth}) => {
    let navigate = useNavigate();
    const [showMenu,setShowMenu] = useState();
    const location = useLocation();
    const pathName = location.pathname;

    useEffect(()=>{
        if(!isAuth && pathName !== "/"){
            setShowMenu(false);
        }else{
            setShowMenu(true);
        }
    },[]);


    return(
            <div className="TopMenu">
                <Navbar as="nav-bar" collapseOnSelect={true} bg="dark" expand="lg" fixed="top" variant="dark" flex-direction="row-reverse">
                    <Container justifyContent="right" >
                    <Navbar.Brand href="/" display="flex"  ><Nav.Link href="/login">Login/Register</Nav.Link></Navbar.Brand>
    
                    <Navbar.Collapse id="responsive-navbar-nav" onTouchMoveCapture={false}>
                    <Nav className="main-navbar" justifycontent="flex-end">
                        <Nav.Link href="/">Welcome User</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" showOnSelect="true">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}
export default Menu;