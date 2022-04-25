import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userSignOut, db } from "../auth/firebase";
import {
getDoc
} from "firebase/firestore";
import {Typography, Button, Grid, Link,Input, Container,TextField,OutlinedInput} from "@mui/material";
import './styles.css';


export const Account = () => {
  
  const [user, setUser] = useState({});
  const [loggedIn,setLoggedIn] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();


  const handleLogout = async () => {
    await userSignOut();
    setLoggedIn(false);
  };
  


  return (
    <div className="Account">
        <section>
          <AccountBox />
       
      </section>
      </div>
  );
};
// Scenarios is a stateful class component that'll act as the parent 
// for its "Scenario" children. The children will update the parent via 
// "this.handleOpenModal". Meanwhile, "Modal" will sit inside the parent
// waiting for the parent state updates to affect how its rendered. The 
// Modal will close itself via the parent's "this.handleCloseModal"
// class method when the "Okay" button is clicked.

export const AccountBox = () => {
    
  
   const scenarios = [
     {
       id: "account-page-uuid",
       title: "UserID",
     },
     {
       id: "account-page-email",
       title: "Email",
     },
     {
       id: "account-page-type",
       title: "Role",
     },
     {
       id: "account-page-username",
       title: "Username",
     },
   ];
  
    const generateContent =() => scenarios.map(
        (object, index) => {
            return (
              <div key={object.id}>
                <Typography variant="h6" children={true}>{object.label}</Typography>
                <Input
                  id={object.inputId}
                  className={index}
                  label={object.label}
                >
                  {object.label}
                </Input>
              </div>
            );
        }
    )
    

    const genErrorMessage = () => {
        const errorMessage = "Usernames can only use letters, numbers, underscores and periods between 3-16 characters"
        return <label>{errorMessage}</label>
  }
  
    const generateTextFields = () => {
        
        return scenarios.map((inputId, index) => {
          return (
            <TextField key={index} id={inputId} type="text" />)
        })}
    const renderOutput = () => {
        return (
            <Typography>
                {generateContent()}
                
            </Typography>
        )}
  

    const handleOnClick = (input) => {
        db.collection('users').doc(input).get().then(doc => {
            if (doc.exists) {
                const userId = doc.data().userId;
                const userAccountType = doc.data().userAccountType;
                const userEmail = doc.data().userEmail;
                const user = doc.data().user;
                const userData = [userId, userAccountType, userEmail, user];
                const userDataIds = ["account-page-uuid", "account-page-type,", "account-page-email", "account-page-username"];
                userDataIds.map((id, index) => {
                    return (
                      <TextField>
                        document.getElementById(userDataIds).value = userData[index]
                      </TextField>
                    );
                })
            } else {
                alert("User does not exist");
            };
    
        })
  }
  useEffect(() => {
    
  })

    return (
      <React.Fragment>
        
          <Typography
            align="center"
            children
            sx={{
              
              alignContents: "center",
              position: "relative",
              paddingBottom: "15px",
              fontFamily: "Garamond",
              display: "block",
              fontSize: "2em",
              marginBlockStart: ".67em",
              color:'rgb(128, 128, 128)',
            }}
          >
            Account Page
          </Typography>
     
        <div className="account-grid-item account-grid-profile">
          <Container className="account-grid-information" container>
            <Typography
                        variant="h5"
                        paragraph={true}
              sx={{ fontWeight: "bold", justifyContent: "center",padding:'2',fontFamily:'Garamond' }}
            >
              Profile
            </Typography>
            {generateContent()}

            <Button onClick={handleOnClick} class="submit">
              Save
            </Button>
          </Container>
        </div>
      </React.Fragment>
    );
}



export const AccountPassword = () => {
  let user = () => localStorage.getItem('user');
  
  const getUserInfo = (e) => {
    e.preventDefault();
    if (e.target.value ===user()) {
      const userInfo = JSON.stringify(user());
      return userInfo;
    } else {
      user = user();
      let userData = JSON.parse(localStorage.getItem(user));
      userData = JSON.stringify(userData);
      return userData;

    }
  };
  const handleSUbmit = (e) => {
    
  }
  const searchUserInfo = () => {
      const loggedInUser = JSON.parse(localStorage.getItem(user()));
        db.collection('users').doc(user).get().then(doc => {
            db.getDoc().then((data) => {
                if (data.exists) {
                    return data.data().map((data) => {
                      document.getElementById('account-page-uuid').value = data.userId;
                      document.getElementById('account-page-type').value = data.userAccountType;
                      document.getElementById('account-page-email').value = data.userEmail;
                      document.getElementById('account-page-username').value = data.user;
                    }
                    )
                };
            })
    
        })
    }

        
    const objects = [
        {
        label: 'Old Password: ',
        inputId: 'account-page-old-password',
        },
        {
            label: 'New Password: ',
            inputId: 'account-page-new-password',
        },
        {
            label: 'Confirm Password: ',
            inputId: 'account-page-confirm-password',
        }
    ]

    const generateContent = objects.map((object, index) => {
        return (
            <div key={index}>
                <p children={index}>
              <Typography component={AccountPassword} children={ index}variant="body" label={object.label}></Typography>
                </p>
            </div>
        )
    })


    


    

  return (
    <div className="AccountPassword">
      <div class="account-grid-item account-grid-security">
        <div class="account-grid-information">
          <h4>Change Password</h4>

          {generateContent}
          <Button class="save" onClick={searchUserInfo}>Change</Button>
        </div>
      </div>
    </div>
  );
}


export default Account;

