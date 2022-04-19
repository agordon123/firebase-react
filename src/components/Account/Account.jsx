import React, { useContext,useState } from "react";
import { signOut, db } from "../../auth/firebase";
import {
getDoc
} from "firebase/firestore";
import "../AuthContext.js";
import {Typography, Button, Grid, Link,Input, Container} from "@mui/material";
import './styles.css';


export const Account = () => {
  
    const [loggedIn,setLoggedIn] = useState('user');

  const handleLogout = async () => {
    await signOut();
  };
  return (
        <section>
          <AccountBox />
       
      </section>
  );
};

export const AccountBox = () => {
    
  
    const inputIds = ["account-page-uuid", "account-page-type,", "account-page-email", "account-page-username"];
    const objects = [
        {
        label: 'UserID: ',
        inputId: 'account-page-uuid',
        },
        {
            label: 'Account Type: ',
            inputId: 'account-page-type',
        },
        {
            label: 'Email: ',
            inputId: 'account-page-email',
        },
        {
            label: 'User Name: ',
            inputId: 'account-page-username',
        }
    ]
    const generateContent =() => objects.map(
        (object, index) => {
            return (
              <div key={index}>
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
        
        return inputIds.map((inputId, index) => {
            return <input key={index} id={inputId} type="text" />
        })
    }
    const renderOutput = () => {
        return (
            <Typography>
                {generateContent()}
                
            </Typography>
        )

    }
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
                    return document.getElementById(id).value = userData[index];
                })
            } else {
                alert("User does not exist");
            };
    
        })
    }

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

            <Button onClick={handleOnClick} class="save">
              Save
            </Button>
          </Container>
        </div>
      </React.Fragment>
    );
}

export const AccountPassword = () => {
    const user = () => localStorage.getItem('user');
    const getUserInfo = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user;
    }
    const renderUserInfo = () => {
        db.collection('users').doc(user).get().then(doc => {
            db.getDoc().then((data) => {
                if (data.exists) {
                    return data.data().map((data) => {
                        return <div>{data}</div>
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
                <p>
                    <Typography variant="h6" label={object.label}>{object.inputId}</Typography>
                </p>
            </div>
        )
    })


    


    

    return (
      <div class="account-grid-item account-grid-security">
        <div class="account-grid-information">
          <h4>Change Password</h4>
            {generateContent}
          <Button class="save">
            Change
          </Button>
        </div>
      </div>
    );
}

export default Account;

AccountPassword.propTypes = {}