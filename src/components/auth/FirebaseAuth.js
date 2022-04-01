import {
    FirebaseAuthProvider,
    FirebaseAuthConsumer,
    IfFirebaseAuthed,
    IfFirebaseAuthedAnd,
  } from "@react-firebase/auth";
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import React,{ useContext,useState,useEffect } from "react";
import{ AuthProvider,useAuthValue} from "../contexts/AuthContext";
import { auth ,provider,firebaseConfig, app} from "../firebase/firebase";
import { Button,Dialog,DialogActions,DialogTitle,List,ListItem,ListItemAvatar } from "@mui/material";

export function ChildOfAuthProvider(){
    const {currentUser} = useAuthValue([]);
}


export default function FirebaseAuth(props){
    const {
      user,
      setUser,
      setStateLoginDialog,
      openLoginDialogState
    } = useContext(useAuthValue);

    const [firebaseUser,setFirebaseUser] = useState(null);
    useEffect(
      () => {
        console.log("firebaseUser",firebaseUser);
        setFirebaseUser(firebaseUser);
      
    },
    [firebaseUser,setFirebaseUser]
    );

    const handleLogout  = () => {
      auth.signOut();
      setTimeout(()=>{
        setFirebaseUser(null);
        setUser(null);
      },10);
    };
    const loginWithEmail = async(email,password) =>{
      
        await auth.signInWithEmailAndPassword(email,password);
        setStateLoginDialog(false);
      }
    
    const loginWithGoogle= () =>{
      auth.signInWithPopup(provider);
      setStateLoginDialog(false);
    };

    
    return(
      <>
      <FirebaseAuthProvider {...firebaseConfig} firebase={app}>
      {user ?(
        <div className="user-info">
          <div className="user-actions">
            <span className="user-name">
            {user.displayName}
            </span>
            <Button
                size="small"
                className="user-logout"
                onClick={() => handleLogout()}
            >
                Logout
            </Button>
          </div>
        </div>
        ) : (
          <Button variant="contained" onClick={() => setStateLoginDialog(true)}>
            Login
          </Button>
        )}
        <FirebaseAuthConsumer>
        {userInfo=>{
          console.log(userInfo)
          if(userInfo.user){
            setFirebaseUser(userInfo.user);
          }
        }}
        </FirebaseAuthConsumer>
        <Dialog aria-labelledby="auth-dialog-title" open={openLoginDialogState}>
          <DialogTitle>Login</DialogTitle>
            <List>
              <ListItem button onClick={()=>loginWithEmail()}>
                <ListItemAvatar>
                <LoginTwoToneIcon />
                </ListItemAvatar>
              </ListItem>
              <ListItem button onClick={()=>loginWithGoogle()}>
               
              </ListItem>
            </List>
            <DialogActions>
            <Button onClick={()=>setStateLoginDialog(false)}>
              Cancel
            </Button>
            </DialogActions>
        </Dialog>
      </FirebaseAuthProvider>
      </>
    );
}


