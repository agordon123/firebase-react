import React, { useState ,useEffect,useReducer,useRef} from "react";
import './App.css';
import {Account} from "./components/Account/Account";
import { Box, Container } from "@mui/material";
import { Grid } from "@mui/material";
import Header from './components/Header/Header';
import {app, auth} from "./components/auth/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { signIn,signUp,signOut } from "./components/auth/firebase";
import Login from "./components/pages/Login";
import Form from './components/common/Form';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Register from "./components/pages/Register";
import { ListItem,Link,ListItemAvatar } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MultiActionAreaCard from "./components/MultiActionCard";


export const App = () =>{

    
    const [data,setData] = useState({});
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleInput = (e) =>{
        let inputs = { [e.target.name]: e.target.value };
        setData({...data,...inputs});
        
    }
    const handleAction = () =>{

    }
    const handleSubmit = () =>{
        signInWithEmailAndPassword(auth,data.email,data.password);
    }
    const handleLogout = () =>{
        signOut(getAuth(auth));
    }

    const addNewUser = () =>{
        createUserWithEmailAndPassword(auth,data.email,data.password).then(()=>{
            let user = auth.currentUser;
            let db = getFirestore(app);
            db.collection("users").doc(data.email).set({
                email: data.email,
                password: data.password,
                uid: user.uid,
                AccountType:'Regular'
            }).then(()=>{
                setData(user);
            })
        });
        handleSubmit(data.email,data.password);
    }


    
    return(
        <>
        <ResponsiveAppBar />
            <MultiActionAreaCard />
            
        
      </>
        )
    }

        
 





export default App;