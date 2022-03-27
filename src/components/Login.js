import {React,useContext,useHistory,useRef,useState} from "react";
import {FormControl,FormLabel,FormErrorMessage,FormHelperText,} from '@chakra-ui/react';
  import { useAuth } from "../contexts/AuthContext";
  import { LinkBox,Link } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";

  export const LoginPage = ({useAuth}) => {
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
        </>
    )
}

export default LoginPage;