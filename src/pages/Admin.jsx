import React from "react";
import { useState, useEffect } from "react";
import {Box, Grid,Input  } from "@mui/material";
import {query,where,getDoc} from 'firestore';
import { db } from '../auth/firebase';
import {ResponsiveAppBar} from '../components/ResponsiveAppBar';
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
        <Box container="true" className="AccountGridContainer" style="display:none;" id="account-search-grid" sx={{justifyContent:'center',alignItems:'center'}} >
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
    const { user, userId, userEmail, userAccountType } = props;
    const [userInfo,setUserInfo] = useState([]);
    //Get value in search box
    const handleSubmit = () => {
        const querySnapshot = getDoc(q);
        querySnapshot.forEach(doc => {
            if (doc.exists) {
                return (
                    <div>
                        <section className="container">
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
                                <input id='account-type-input' class="input account-input">{doc.data().userAccountType}</input>
                                <label id="error-msg-account-type" class="error-msg">Account type must be "Administrator" or
                                    "Regular"</label>
                            </p>
                            <button id='editButton' onclick={editUserData()} class="save">Save Changes</button>
                        </section>
                    </div>
                )
            } else {
                alert("User does not exist");
            };
        });
                }
    
    //Retrieving user ID based on the value in the search box (usernameInput)
    const q = query(db.collection('users'), where('user', '===', props.user));
        //Searching User
  
        const editUserData = () => {
            document.getElementById('account-type-input').value = props.userAccountType;
        
        }
        const labels = [
            {
        
                id: 'email-label',
                text: 'Email:',

        
        
        }]
    return (
        <div>
        </div>
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

    const labels = [{
        label: 'Type',
        id: 'listing-name-input',
        type: 'text',
        placeholder: 'Enter listing type',
        class: 'input'
       
    }, {
        label: 'Price',
        id: 'listing-price-input',
        type: 'number',
        placeholder: 'Enter listing price',
        class: 'input',
        errorLabel: 'error-msg-listing-price',

    }, {
        label: 'Description',
        id: 'listing-description-input',
        type: 'text',
        placeholder: 'Enter listing description',
        class: 'input',
        errorLabel: 'error-msg-listing-description',
    }, {
        label: 'Address',
        id: 'listing-address-input',
        type: 'text',
        placeholder: 'Enter listing address',
        class: 'input',
        errorLabel: 'error-msg-listing-address',
    }, {
        label: 'City',
        id: 'listing-city-input',
        type: 'text',
        placeholder: 'Enter listing city',
        class: 'input',
        errorLabel: 'error-msg-listing-city',
    }, {
        label: 'State',
        id: 'listing-state-input',
        type: 'text',
        placeholder: 'Enter listing state',
        class: 'input',
        errorLabel: 'error-msg-listing-state',
    }, {
        label: 'Zip Code',
        id: 'listing-zip-input',
        type: 'number',
        placeholder: 'Enter listing zip code',
        class: 'input',
        errorLabel: 'error-msg-listing-zip',
    }, {
        label: 'Image',
        id: 'listing-image-input',
        type: 'text',
        placeholder: 'Enter listing image',
        class: 'input',
        errorLabel: 'error-msg-listing-image',
    }, {
        label: 'Image',
        id: 'listing-image-input',
        type: 'text',
        placeholder: 'Enter listing image',
        class: 'input',
        errorLabel: 'error-msg-listing-image',
    }, {
        label: 'Image',
        id: 'listing-image-input',
        type: 'text',
        placeholder: 'Enter listing image',
        class: 'input',
        errorLabel: 'error-msg-listing-image',
        }]
    
    const addListing = () => {
        
    }
    const generateInputs = () => {
        let inputs = [];
        for (let i = 0; i < labels.length; i++) {
            const addListing = inputs.push(
                <div class="account-grid-item">
                    <div class="account-grid-information">
                        <label>{labels[i].label}</label>
                        <input id={labels[i].id} type={labels[i].type} placeholder={labels[i].placeholder} class={labels[i].class}></input>
                    </div>
                </div>
            )
            return (
                <>
                    {addListing}
                </>
            )
        }
    }

    return(
        <>
            <h4 id="listing-control-panel-header">Add Listing</h4>
                <form id="add-listing-form">
                    {generateInputs()}
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