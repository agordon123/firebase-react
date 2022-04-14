import React from "react";
import { useState, useEffect } from "react";
import {Box, Grid,Input  } from "@mui/material";
import {query,where,getDoc} from 'firestore';
import {db} from '../auth/firebase';
const PageLayout = () =>{

    return(
        <Grid container="true"
        gridAutoColumns={3}
        gridAutoRows={3}
        >
        <Grid item={true} gridRow={1} gridColumn={2}>
        <AccountGridSearch></AccountGridSearch>
        </Grid>
        <Grid item={true} gridRow={2} gridColumn={2}>
        </Grid>
        <Grid item={true} gridRow={3} gridColumn={3}>
        </Grid>
        </Grid>
    )
}
const AccountGridSearch = (props) =>{

    const handleOnClick = (e) =>{
        SearchUsers(e.input.value);

    }
    return(
        <Box container="true" className="AccountGridContainer" style="display:none;" id="account-search-grid" >
            <h4>
            Search Up User
            </h4>
            <Box item={true} className="AccountGrid">
                <Input id="userSearch" placeholder="Enter username of target user" ></Input>
                <label id="error-msg-user-search-box" class="error-msg">User does not exist</label>
            </Box>
            <Box item="true" >
                <input id='user-search' class="AccountGridContainer"
                    placeholder="Enter username of target user">
                </input>
            <Box item="true" className="AccountGridContainer">
                <button class="save" onclick={handleOnClick}>Search</button>
            </Box>
            </Box>
        </Box>
    )
}
export const SearchUsers = (props) => {
    const [userName,setUserName] = useState(props.userName);
    const [accountType,setAccountType] = useState(props.accountType);
    const {user,userId,userEmail,userAccountType}= props;
    //Get value in search box
    const handleSubmit = ()=>{
    }
    //Retrieving user ID based on the value in the search box (usernameInput)
    const q = query(db.collection('users'),where('user','===',props.user));
    //Searching User
  
    const editUserData = ()=>{
        document.getElementById('account-type-input').value = props.userAccountType;
        
    }
    
    // returning the user as a string of objects if found
    useEffect(()=>{
        const querySnapshot = getDoc(q);
        querySnapshot.forEach(doc => {
        if(doc.exists){
            return(
                <>
              
                <p>
                    <b>Email: </b>
                    <label id='email-label'>{doc.data().userEmail}</label>
                </p>
                <p>
                    <b>Username: </b>
                    <label id='username-label'>{doc.data().user}</label>
                </p>
                <p>
                    <b>Account Type: </b>
                    <input id='account-type-input' className="input account-input">{doc.data().userAccountType}</input>
                    <label id="error-msg-account-type" class="error-msg">Account type must be "Administrator" or
                        "Regular"</label>
                </p>
                <button id='editButton' onclick={editUserData()} class="save">Save Changes</button>
                </>
            )
        }else{
            console.log('error')
            alert('User not found');
        }
    })
    },[]);

    return(
        <>
        </>
 )
    }
const AccountSearchResults = (props)=>{

    return(
        <div id='account-info' style="display: none;">
                    
                    
                   
                   
                    
                </div>
            
        

    )
}
const AuditLog = () => {

    return(
        <div class="account-grid-item administrator-audit-log">
            <div class="account-grid-information">
                <h4>Audit Log</h4>
                <p>
                    <label></label>
                    <button onclick="AuditLog()" class="gray">View Audit Log</button>
                </p>
            </div>
        </div>

    )
}

const AddListing = () =>{

    return(
        <>
            <h4 id="listing-control-panel-header">Add Listing</h4>
                <form id="add-listing-form">
                    <div id="listing-content-div">
                        <p id="listing-type-p">
                            <label id="get-data-type-label">Type:</label>
                            <input placeholder="Enter Listing Type (For_Sale,For_Rent,Sold)" id="listing-type-input"
                                class="input account-input"></input>
                            <label id="error-msg-add-listing-type" class="error-msg" style="padding-top: 10px;">Must specify For_Sale,For_Rent,or Sold</label>
                        </p>
                        <p id="listing-price-p">
                            <label id="add-data-price-label">Price:</label>
                            <input placeholder="Enter Listing Price" id="listing-price-input"
                                class="input account-input"></input>
                            <label id="error-msg-add-listing-price" class="error-msg" style="padding-top: 10px;">Can
                                only contain , or numbers</label>
                        </p>
                        <p id="listing-address-p">
                            <label>Address:</label>
                            <input placeholder="Enter Listing Address" id="listing-address-input"
                                class="input account-input"></input>
                        </p>
                        <p>
                            <label>City:</label>
                            <input placeholder="Enter Listing City" id="listing-city-input"
                                class="input account-input"></input>
                        </p>
                        <p>
                            <label>Zip Code:</label>
                            <input placeholder="Enter Listing Zip Code" id="listing-zip-code-input"
                                class="input account-input"></input>
                        </p>
                        <p>
                            <label>State:</label>
                            <input placeholder="Enter Listing State" id="listing-state-input"
                                class="input account-input"></input>
                        </p>
                        <p>
                            <label>Bedrooms:</label>
                            <input placeholder="Enter # Bedrooms" id="listing-bedrooms-input"
                                class="input account-input"></input>
                        </p>
                        <p>
                            <label>Bathroom:</label>
                            <input placeholder="Enter # of Bathroom" id="listing-bathrooms-input"
                                class="input account-input"></input>
                        </p>
                        <p>
                            <label>Description:</label>
                            <textarea placeholder="Enter Listing Description" id="listing-description-input"
                                class="input account-text-area"></textarea>
                        </p>
                    </div>
                <input type="submit" id="listing-control-panel-btn" class="save" onclick="addListing()" />
                </form>
    </>
    )
}
const AddPictureToListing = () =>{


    return(
        <>
        <p>
        <div id="images">
            <label>
                Images
            </label>
        </div>
        </p>
        <br />
        <input type="file" class="gray" id='file-input' onclick="openFiles()"></input>
        <p>
            <label>Preview Image:</label>
        </p>
        <p>
        <img id="myImg"
            style="min-width: 200px; min-height: 200px; max-width: 200px; max-height: 200px; border: black 2px solid;" alt="" />
        </p>
        </>
    )
}
const AdminPage = () =>{
    
    return(
        <>
        <h1><u>Administrator Page</u></h1>
        </>
            
    )
}

export default AdminPage;