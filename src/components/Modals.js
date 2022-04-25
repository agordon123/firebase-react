import React,{useEffect,useState} from "react";
import './styles.css';
import { signIn, signOut, signUp ,auth} from '../auth/firebase';
import { Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle, Paper, Typography, Container, Button, Link, FormLabel } from '@mui/material';
import PropTypes from 'prop-types';

import { onAuthStateChanged } from "firebase/auth";
import { FormContainer,TextFieldElement } from 'react-hook-form-mui';
import { ErrorOutline, Login } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import modalNames from "../data/data";

const Input = ({label,register,required}) => {
  <React.Fragment>
    <label>{label}</label>  
    <input {...register(label,{required})} />
  </React.Fragment>
}

export const Register = () => {
  const [user, setUser] = [];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [password2, setPassword2] = useState("");
  const {register,handleSubmit,formState:errors} = useForm();

  const handleInput = (e) => {
    let inputs = { [e.target.name]: e.target.value };
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError("Passwords do not match");
    } else {
      signUp(email, password).then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          setEmail("");
          setPassword("");
          setPassword2("");
          user = setUser(localStorage.setItem("user", JSON.stringify(data)));
          setUser(user);
        }
      });
    }
  };

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));

        console.log(user);
      } else {
        console.log("not logged in");
      }
    });
  }, []);

  return (
    <div className="Register">
      <h2>Sign Up</h2>
      <Paper>
        <div>
          {error ? <div>{error}</div> : null}
          <form onSubmit={handleSubmit}>
            <Input
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
            <Button type="submit" component="Register" onClick={handleSignUp}>
              Submit
            </Button>
          </form>
          <p>
            already registered?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </Paper>
    </div>
  );
};


const RegistrationModal = () => {
  

    return (
         <div class="bottom-modal" >

    </div>
    )
}
const LoginPaper =(props)=>{
    const [isOpen,setIsOpen] = useState(false);
    const [modal, setModal] = useState('');
  const { modalNames } = props;
  
    const handleOnClick = () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const login = async () => {
            await signIn(email, password);
        }
        login();
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;
      setModal({ [name]: value });
      
        
  }
  const handleOpenModal = (e) => {
    e.preventDefault();
    let newModal = document.getElementById(e.target.name).value;
  }
    const handleCloseModal = () => {
        setIsOpen(false);
        
    }

    return (
      
        <Paper id="modal-content-animate" sx={{}}>
          <Typography
            onclick={handleCloseModal}
            class="close"
            title="Close Modal"
            sx={{ float: "right", cursor: "pointer" }}
          >
            Close
          </Typography>

          <Container container id="header-modal">
            <image
              src="/assets/mncdevelopmentlogo.jpg"
              alt="Avatar"
              class="avatar"
            />
            <Typography variant="h1">
              Login
            </Typography>
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
                <Typography variant="underlined"sx={{fontWeight:'bold',fontStyle:'underlined'}}>Register</Typography>
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

        <Typography variant="body" onClick={handleOnChange}><label class="modal-link"><u>Forgot Password?</u></label></Typography>
      </div>
          </Container>
        </Paper>
      
    );
}
export const DialogFrame = (props) => {
    
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

export const Modals = (props) =>{

    return(
      <React.Fragment>
        <DialogFrame modalName={props} />
        </React.Fragment>


     
    )
}

LoginPaper.propTypes = {

}

export { LoginPaper, RegistrationModal, ForgotPwModal };