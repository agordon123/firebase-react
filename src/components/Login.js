import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Link, LinkBox, Modal } from '@chakra-ui/react';
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { React, useContext, useHistory, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { auth, db, provider } from './firebase';

  export const Login = ({useAuth}) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()}

        try {
            setError("")
            setLoading(true)
            login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
          } catch {
            setError("Failed to log in")
          }
          setLoading(false)
    
          const isLoggedIn = useContext(useAuth);
    return(
        <>
        <Modal isOpen={isLoggedIn}>
        </Modal>
        </>
    )
}

export default LoginPage;