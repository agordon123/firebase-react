import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import './index.css';
import {AuthProvider} from './auth/AuthProvider';
import Register from './pages/Register';
import Login from './pages/Login';
import Account from './components/Account/Account';
import Form from './common/Form';
import AdminPage from './pages/Admin';

ClassNameGenerator.configure((App) => App.replace('Mui', 'App'));

ReactDOM.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Form title="Register" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path ="/admin" element={<AdminPage />}></Route>
      </Routes>
    </Router>
  </AuthProvider>,

  document.getElementById("root")
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