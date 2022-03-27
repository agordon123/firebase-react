import { signInWithEmailAndPassword,signInWithGoogle } from "firebase/auth";
import React  ,{ useEffect,useState } from "react";
import {db,auth,provider,storage} from '../../firebase'
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { Button,Grid,GridItem ,Text,Input} from "@chakra-ui/react";

const Authenticate = ({setIsAuth}) =>{
    let navigate = useNavigate();
    const [state,setState]= useState(null);
    
    const signInWithGoogle = () =>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true);
            const user = result.user;
            setIsAuth(true);
            navigate("/");
        }).catch((r)=>{
          console.error(r);
        })
    }

    const useEffect = () =>{

    }

    return(
        <div className="Auth">
        <Authenticate>
            <Button>
                {...this.props.user}
            </Button>
        </Authenticate>
        </div>

    )
}

export default Authenticate;

function AccountInfoDisplay(){


    return(
        <>
        <Grid>
                <GridItem>
                    <Text>User ID: </Text>
                    <label id='user-id-label'></label>
                </GridItem>
                <GridItem>
                    <Text>Email: </Text>
                    <label id='email-label'></label>
                </GridItem>
                <GridItem>
                    <Text>Username: </Text>
                    <label id='username-label'></label>
                </GridItem>
                <GridItem>
                    <Text>Account Type: </Text>
                    <Input id='account-type-input' class="input account-input"></Input>
                    <label id="error-msg-account-type" class="error-msg">Account type must be "Administrator" or
                        "Regular"</label>
                        <Button id='editButton' onclick="editUserData()" class="save">Save Changes</Button>
                </GridItem>
                
            </Grid>
            </>
    )
}