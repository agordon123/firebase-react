import { Button, Dialog, FormControl, FormErrorMessage, FormGroup, FormHelperText, FormLabel, Input, Link, LinkBox, Modal ,Paper, TextareaAutosize, TextField} from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { addDoc, collection, CollectionReference, doc, getDocs, updateDoc } from 'firebase/firestore';
import { React, useContext, useEffect, useHistory, useRef, useState } from "react";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';
import FirebaseAuth from '../auth/FirebaseAuth';
import { AuthProvider } from '../contexts/AuthContext';
import { alignProperty } from '@mui/material/styles/cssUtils';


function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <div className='textInputFocus'>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}


export const LoginPage = ({props}) => {
    
  const [user,setUser] = useState(null);
  const [open,setOpen] = useState(false);

    
    return( 
        <Box grid sx={{
          height:100,
          justifyContent:'center',
          paddingTop:10,   
        }}>
        
        
        </Box>
              )
}

export default LoginPage;
