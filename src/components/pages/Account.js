import React from "react";
import { signOut } from "firestore";


export const Account =() =>{

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