import React,{useContext} from "react";
import { signOut } from "../auth/firebase";
import {AuthContext} from '../AuthContext.js'



export const Account =() =>{

    const {user} = useContext(AuthContext);

    const handleLogout = async() =>{
        await signOut();
    };
    return(
        <div className="Account">
        <h1>Account</h1>
        </div>
    )
}

export default Account;