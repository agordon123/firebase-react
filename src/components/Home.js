import React from "react";
import { useNavigate,Link,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import {GlobalFooter} from "./GlobalFooter";








export const Home = ({children}) => {
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
    <div className="Home">
    <Box display="grid" >
    <GlobalFooter/>
    </Box>
    </div>
)
}
export default Home;