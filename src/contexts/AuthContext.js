import React,{useContext,useState,useEffect} from "react";
import { auth } from "../firebase";


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){

    const [currentUser,setCurrentUser] = useState();
    const[loading,setLoading] = useState(true);

    function signUp(email,password){
        auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password){
        auth.signInWithEmailAndPassword(email,password);
    }
    function logout(){
        return auth.signOut();
    }
    function resetPassword(email){
    return auth.sendPasswordResetEmail(email);
    }
    function updateEmail(email){
        return currentUser.updateEmail(email);
    }
    auth.onAuthStateChanged(user=>{
        setCurrentUser(user);
    })

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false);}
        )
        return unsubscribe
    },[])

    const value= {
        currentUser,
        signUp,
        login,
        logout,
        resetPassword,
        updateEmail
    } 
    return(
        <AuthContext.Provider value={value} >
           {!loading && children}
            </AuthContext.Provider>
    )
}