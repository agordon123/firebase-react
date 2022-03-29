import { FormControl, FormErrorMessage, FormGroup, FormHelperText, FormLabel, Link, LinkBox, Modal ,Paper} from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { React, useContext, useHistory, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { auth, db, provider } from './constants/firebase';
import { AuthProvider } from './contexts/AuthContext';

export const Login = () => {
 
    const [auth,isAuth] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault()}

 
    return(
        
        <Box sx={{
          height:100,
          justifycontent:'center',
          paddingTop:10,
        }}>
        <AuthProvider>
        <FormGroup className='LoginForm'
        sx={{width:'30ch'}}>

        </FormGroup>
        </AuthProvider>
        </Box>
        
              )
}

export default Login;