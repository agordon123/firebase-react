import React,{useEffect,useState} from "react";
import './styles.css';
import {signIn,signOut,signUp} from './components/auth/firebase';
import { Dialog,Image, Paper, Typography,Container, Button,Link ,FormLabel} from '@mui/material';
import modalNames from '../data/data.js.js';
import { FormContainer,TextFieldElement } from 'react-hook-form-mui';
import { ErrorOutline } from "@mui/icons-material";
const RegistrationModal = () =>{
    const handleOnClick = () => {
        
    }
    return (
         <div class="bottom-modal" >

    </div>
    )
}
const LoginPaper =(props) =>{
    const [isOpen,setIsOpen] = useState(false);
    const [modal, setModal] = useState('');
    const { modalName } = props;
    const handleOnClick = () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const login = async () => {
            await signIn(email, password);
        }
        login();
    }
    const handleOnChange = () => {
        
    }
    const handleCloseModal = () => {
        setIsOpen(false);
        
    }

    return (
      <>
        <Paper id="modal-content-animate" sx={{}}>
          <Typography
            onclick={handleCloseModal()}
            class="close"
            title="Close Modal"
            sx={{ float: "right", cursor: "pointer" }}
          >
            Close
          </Typography>

          <Container container id="header-modal">
            <Image
              src="/assets/mncdevelopmentlogo.jpg"
              alt="Avatar"
              class="avatar"
            />
            <Typography variant="h1">Login</Typography>
          </Container>
          <Container container id="middle-modal">
            <ErrorOutline id="incorrect-login-info" class="error-msg">
              Incorrect Email/Password
            </ErrorOutline>
            <FormContainer>
              <TextFieldElement
                id="login-email"
                class="input"
                type="email"
                placeholder="Enter Email"
                required
              />
              <TextFieldElement
                id="login-password"
                class="input"
                type="password"
                placeholder="Enter Password"
                required
              />
              <Button onClick={handleOnClick()} id="login-register-btn">
                Login
              </Button>
                    </FormContainer>
                    <FormContainer>
            <TextFieldElement class="register" onClick={setModal('registration')}>
              {" "}
              <FormLabel class="modal-link">
                <u>Register</u>
              </FormLabel>
                        </TextFieldElement>
                        </FormContainer>

            <Typography variant="underlined" onClick="modalOpen('forgotPw')">
              <label class="modal-link">
                <u>Forgot Password?</u>
              </label>
                    </Typography>
            <div class="bottom-modal" style="color: black;">
                <Link class="register" onclick={handleOnClick()}>
                            
                            <u>Register</u>
                       
                    </Link>

        <span onclick="modalOpen('forgotPw')"><label class="modal-link"><u>Forgot Password?</u></label></span>
      </div>
          </Container>
        </Paper>
      </>
    );
}
const DialogFrame = (props) => {
    
    const [modal, setModal] = useState('');
    const [open, setOpen] = useState(false);
    const { modalName } = props;
    useEffect(() => { 
        if(props.modalName === 'login-modal'){
            setModal(<LoginPaper />);
        }
        else if(modal === 'registration'){
            setModal(<RegistrationModal />);
        }
        else if(modal === 'forgotPw'){
            setModal(<ForgotPwModal />);
        }
    }, [modal,props.modalName]);
        
    
    
    return (
        <Dialog id="modal-frame" className="LoginModal" open={setOpen()}  PaperComponent={setModal(props.modalName) }>
            {setModal(props.modalName)}
        </Dialog>
        
    )
}

const ForgotPwModal = () =>{
    
}

export const Modals = () =>{

    return(
        <>
        </>


     
    )
}
