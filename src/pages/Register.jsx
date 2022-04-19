import { useState } from "react";
import { Link } from "react-router-dom";
import { db, signUp,auth } from "../auth/firebase";
import { Button } from "@mui/material";
import {query, getDocs,addDoc,serverTimestamp} from "firebase/firestore";
import React,{ useEffect } from "react";
import { signIn,app } from "../auth/firebase";
import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";


export const Register = () => {
    const [user,setUser] = ([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [password2,setPassword2] = useState("");

    


    const handleInput = (e) =>{
        let inputs = { [e.target.name]: e.target.value };
        
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== password2) {
        setError("Passwords do not match");
        } else{
            signUp(email,password).then(data =>{
                if(data.error){
                    setError(data.error);
                }else{
                    setError("");
                    setEmail("");
                    setPassword("");
                    setPassword2("");
                    setUser(localStorage.setItem('user',JSON.stringify(data)));
                   
                }
            })
        }     
    }


 
    useEffect(()=>{
        let auth = getAuth(app);
        onAuthStateChanged(auth,(data) =>{
            if(data){
                sessionStorage.setItem('user',JSON.stringify(data));
                
                console.log(data);
            }else{
                console.log("not logged in");
            }
        })
    },[])


    
        return (
                <React.Fragment>
                <h2>Sign Up</h2>
                <div>
                {error ? <div>{error}</div> : null}
                <form onSubmit={handleSignUp}>
                <input
                
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Your Email"
                    autoComplete="true"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                        />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Your Password"
                    required
                    autoComplete="false"
                    onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                    type="password"
                    name="password"
                    value={password2}
                    placeholder="Confirm Password"
                    required
                    autoComplete="false"
                    onChange={(e) => setPassword2(e.target.value)}
                        />
                <Button type="submit"
                component="Register"
                onClick={handleSignUp}
                >Submit</Button>
                </form>
                <p>
                already registered? 
                <Link to="/login">Login</Link>
                </p>
                </div>
                </React.Fragment>
                    );
    }

    

export default Register