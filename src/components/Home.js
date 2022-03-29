import React from "react";
import { useNavigate,Link,useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import { Box } from "@mui/material";
import {GlobalFooter} from "./GlobalFooter";








export const Home = ({children}) => {
 


return(
    <div className="Home">
    <Box display="grid" paddingTop={8}>
    <GlobalFooter/>
    </Box>
    </div>
)
}
export default Home;