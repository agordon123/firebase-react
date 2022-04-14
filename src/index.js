import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import './index.css';
import {AuthProvider} from './components/auth/AuthProvider';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import Form from './components/common/Form';

ClassNameGenerator.configure((App) => App.replace('Mui', 'App'));

ReactDOM.render(
    

   
        <Router>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path='/register' element={<Form title="Register"/> } />
        <Route path="/login" element={<Form title="Login" /> } ></Route>

        </Routes>
        
        </Router>
        
    
  
    , document.getElementById("root")
    );

    const routes = [
        {
            path: "/",
            component:App
        },
        {
            path:"/account",
            component:Account
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        }
    
    ] 