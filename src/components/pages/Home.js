import React,{useState,useContext} from "react";
import { useNavigate,Link,useLocation } from "react-router-dom";
import { FirebaseAuth } from "../auth/FirebaseAuth";
import { Box } from "@mui/material";
import {GlobalFooter} from "./GlobalFooter";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import Header from "../Layout/Header";








export const Home = () => {
 


return(
    <div className="Home">
    <Box display="grid" paddingTop={8}>
    
    <Header />
     
    <GlobalFooter/>
    </Box>
    </div>
)
}
export default Home;