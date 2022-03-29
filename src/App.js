import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./components/Layout/Header";

import { Box } from "@mui/material";
import { Grid ,Stack} from "@mui/material";
import {Login} from "./components/Login";
import {AuthProvider} from "./components/contexts/AuthContext";
class App extends React.Component{


    render(){
        return(
            <div className="App">
            <AuthProvider>
            <Box grid minHeight="100vh" gridAutoColumns={3} gridAutoRows={3} sx={{
                
            }}>
            <Stack><Header  /></Stack> 
            <Stack><Login /></Stack>
            </Box>
            </AuthProvider>
            </div>
        )
    }
}

const routes = [
    {
        path: "/",
        component:App
    }
]

export default App;