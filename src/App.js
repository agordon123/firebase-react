import React, { useState ,useEffect,useReducer,useRef} from "react";
import './App.css';
import {app, auth} from "./auth/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { signIn,signUp,userSignOut} from "./auth/firebase";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import MultiActionAreaCard from "./components/MultiActionCard";
import { Container } from "@mui/material";
import LogRocket from "logrocket";
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { NavBar } from "./components/ResponsiveAppBar";

LogRocket.init("3fiizl/mnc-consulting");

export const App = () =>{

    const [user,setUser] = useState([])
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleInput = (e) =>{
        let inputs = { [e.target.name]: e.target.value };
       
        
    }
    const handleAction = () =>{

    }
    const handleSubmit = () =>{
        signInWithEmailAndPassword(auth,user.email,user.password);
    }
    const handleLogout = () =>{
        userSignOut(getAuth(auth));
    }

    const addNewUser = () =>{
        createUserWithEmailAndPassword(auth,user.email,user.password).then(()=>{
            let user = auth.currentUser;
            let db = getFirestore(app);
            db.collection("users").doc(user.email).set({
                email: user.email,
                uid: user.uid,
                AccountType:'Regular'
            }).then(()=>{
                setUser(user);
            })
        });
        handleSubmit(user.email,user.password);
    }


    
    return(
        <Container maxWidth="xxl" sx={{  }}>
            
          
            
            
        
      </Container>
        )
    }








export default App;