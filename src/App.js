import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes,Route } from "react-router-dom";
import './App.css';
import Header from "./components/Layout/Header";
import {Account} from "./components/pages/Account";
import { Box } from "@mui/material";
import { Grid ,Stack} from "@mui/material";
import LoginPage from "./components/pages/Login";
import FirebaseAuth from "./components/auth/FirebaseAuth";
import Signup from "./components/pages/Register";
import { Login } from "@mui/icons-material";


export  const App = () =>{
    const [firebaseUser,setFirebaseUser] = useState("");

    
        return(
            <div className="App">
            
            <Box grid minHeight="100vh"  sx={{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)',
                gridTemplateRows:'repeat(3,1fr)',
                alignContent: 'space-evenly',
                justifyContent: 'center',
                alignItems: 'end',
                justifyItems:'stretch'
            }}>
            
            <Header />
            
            </Box>
           
            </div>
        )
    }


const routes = [
    {
        path: "/",
        component:App
    },
    {
        path:"/Account",
        component:Account
    },
    {
        path:"/Login",
        component:LoginPage
    },
    {
        path:"/Register",
        component:Signup
    }
]

export default App;