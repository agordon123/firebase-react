import React ,{useRef} from "react";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import { useAuth} from ".../contexts/AuthContext";
import { Flex } from "@chakra-ui/react";

export const SignUp = () =>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const {signUp} = useAuth();
    const passwordConfirmRef = useRef();

    return(
        <>
        
        </>
    )
}