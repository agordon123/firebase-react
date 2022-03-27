import {
    Box, Container, FormControl, FormErrorMessage,
    FormHelperText, FormLabel, Grid, GridItem, Heading, Text, Textarea,Input,Button,Stack,useDisclosure
} from "@chakra-ui/react";
import { addDoc, collection, deleteDoc, doc, DocumentReference, getDocs, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db,database } from '../firebase';
import {ref,child,get} from 'firebase/database';
import Header from "./Header";


const  UserSearchArea = () =>{
    const {isOpen,onOpen,onClose} = useDisclosure();
    
    const [input,setInput] = useState([]);
    const accountsRef = db.collection('Accounts');
    const docRef = DocumentReference(db, 'Accounts');
    const UUID = ref(database,'Accounts').key;
    const searchUser = ({input}) =>get(child(ref(database,`Accounts/${UUID}`)),(snapshot)=>{
        if(snapshot.exists()){
            return [snapshot.val(),snapshot.val().Email,snapshot.val().Username,snapshot.val().AccountType];
        }
    })

    const handleInputChange = (e) => setInput(e.target.value);

    const isError = input === ''
    const handleOnSubmit = async (input) => {
        searchUser({input});
        console.log(searchUser({input}));
    }
    useEffect(()=>{
        setInput(input);
    }
    ,[])

    return(
        <UserSearchArea>
        <Box position="relative" textAlign="left" backgroundColor="gray.200" display="grid" margin="auto">
        <FormControl as="user-search" isInvalid={isError}>
        <Grid as="account-grid" column="auto">
            <GridItem>
            <FormLabel color="gray.500" alignItems="center">Search Up User</FormLabel>
            </GridItem>
            <GridItem>
                <Input as="user-search" 
                placeholder="Enter username of target user"
                _placeholder={{color:'inherit'}}
                isRequired 
                errorBorderColor="red.500"
                value={input}
                onChange={handleInputChange}
                onSubmit={handleOnSubmit}
                onMouseEnter={onOpen} 
                onMouseLeave={onClose}/>
                <FormErrorMessage id="error-msg-user-search-box" class="error-msg">User does not exist</FormErrorMessage>
            
            <Button text="Search User" as="user=search"> </Button>
            </GridItem>

            
        </Grid>
        </FormControl>
    </Box>
    </UserSearchArea>
    )
}

function viewAuditLog(){

    
    document.getElementById('AuditLog').style.display = 'block';
    document.getElementById('AdminPage').style.display = 'none';
    let docs = [];
    let logContainer = document.getElementById('AuditLog');
    const showLog = () =>{ 
        getDocs('auditLog', 'desc').orderBy('DateTime').limit(100).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            docs.push(doc);
        });
        for (let i = docs.length - 1; i >= 0; i--) {
            let logData = docs[i].data();
            let docId = docs[i].id;
            let dateFormat = Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            }).format(logData.DateTime.toDate());
        
        let logDiv = document.createElement('div');
                let descriptionLabel = document.createElement('label');
                let brElement = document.createElement('br');
                let dateLabel = document.createElement('label');
                let d = document.createElement('div');
                let moreDetails = document.createElement('div');
                let detailsAuthorId = document.createElement('div');
                let detailsDescription = document.createElement('p');
                let detailsAuditId = document.createElement('div');
                let descriptionBtn = document.createElement('button');

                logDiv.setAttribute('class', 'log');
                descriptionLabel.innerHTML = '<b style="color:rgb(197, 197, 197)">' + logData.Username + '</b> ' + logData.Action;
                descriptionLabel.setAttribute('class', 'descriptionLabel');
                dateLabel.innerHTML = dateFormat;

                moreDetails.setAttribute('id', docId);
                moreDetails.setAttribute('class', 'more-details');

                detailsAuditId.innerHTML = '<b>Audit ID:</b> ' + docId;
                detailsAuthorId.innerHTML = '<b>Author ID:</b> ' + logData.UserID;
                detailsDescription.innerHTML = logData.Description;

                descriptionBtn.setAttribute('id', docId + '_button');
                descriptionBtn.setAttribute('class', 'detailsBtn');
                descriptionBtn.innerHTML = 'More Details';
                descriptionBtn.setAttribute('onclick', 'openMoreDetails("' + docId + '")');

                moreDetails.appendChild(detailsDescription);
                moreDetails.appendChild(detailsAuthorId);
                moreDetails.appendChild(detailsAuditId);

                d.appendChild(descriptionBtn);

                logDiv.appendChild(descriptionLabel);
                logDiv.appendChild(brElement);
                logDiv.appendChild(dateLabel);
                logDiv.appendChild(moreDetails);
                logDiv.appendChild(d);

                logContainer.appendChild(logDiv);
        }   
        });
 
    }

    return(
        <Box position="relative" textAlign="left" backgroundColor="gray.200" display="grid" margin="auto">
            <Grid as="AuditLog">
            <GridItem class="account-grid-information">
                <Heading>Audit Log</Heading>
              
                    <Button onClick={showLog()} class="gray">View Audit Log</Button>
                
            </GridItem>
            </Grid>
        </Box>
    )
}

function AddListingBox(){


    const [input,setInput] = useState('');
    const handleInputChange = (e) => setInput(e.target.value);
    const addListing = (input) =>{
        const listingRef = db.collection('Listings').doc();
        listingRef.set({
            ListingID: listingRef.id,
            ListingType: input,
            ListingDescription: '',
            ListingPrice: 0,
            ListingAvailability: true,
            ListingDate: Timestamp.now(),
            ListingSeller: '',
            ListingBuyer: '',
            ListingSellerRating: 0,
            ListingBuyerRating: 0
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        addListing({input});
    }
        return(
            <Grid position="relative" textAlign="left" backgroundColor="gray.200" display="grid" margin="auto">
               <GridItem>
                    <Heading>
                        Add New Listing
                    </Heading>
                </GridItem>
            <FormControl as="add-listing">
            <FormLabel 
            placeholder="Add Listing"
            color="gray.500"
            textSize="lg"
                >

                </FormLabel>
            <GridItem>
                <FormLabel
                 placeholder="Buy,Rent">
                </FormLabel>    
                <Input 
                as="listing-type"
                placeholder="Buy,Rent"
                isRequired
                >
                </Input>
                <FormErrorMessage>
                Must specify For_Sale,For_Rent,or Sold
                </FormErrorMessage>       
            </GridItem>
            <GridItem>
                <FormLabel>Price:</FormLabel>
                    <Input placeholder="Enter Listing Price" 
                    onChange={handleInputChange}
                    >
                    </Input>
                    <FormErrorMessage color="red.500">Can
                                only contain , or numbers
                    </FormErrorMessage>
            </GridItem>
            <GridItem>
                <FormLabel>
                Address:
                </FormLabel>
                    <Input placeholder="Enter Listing Address" onChange={handleInputChange}>
                    </Input>
                </GridItem>
                <GridItem>
                    <FormLabel>City:</FormLabel>
                    <Input placeholder="Enter Listing City" onChange={handleInputChange}
                                >

                                </Input>
                        </GridItem>
                        <GridItem>
                            <FormLabel>Zip Code:</FormLabel>
                            <Input placeholder="Enter Listing Zip Code" onChange={handleInputChange}></Input>
                        </GridItem>
                        <GridItem>
                            <FormLabel>State:</FormLabel>
                            <Input placeholder="Enter Listing State" 
                            onChange={handleInputChange}></Input>
                        </GridItem>
                        <GridItem>
                            <FormLabel>
                                Bedrooms:
                            </FormLabel>
                            <Input placeholder="Enter # Bedrooms" 
                            onChange={handleInputChange}>

                                </Input>
                        </GridItem>
                        <GridItem>
                            <FormLabel>
                                Bathroom:
                            </FormLabel>
                            <Input placeholder="Enter # of Bathroom" 
                            onChange={handleInputChange}>

                                </Input>
                        </GridItem>
                        <GridItem>
                            <FormLabel>Description:</FormLabel>
                            <Textarea placeholder="Enter Listing Description" 
                            onChange={handleInputChange}
                            
                                >  
                                </Textarea>
                        </GridItem>
                        <GridItem>
                            <Button text="Add Listing"
                            onSubmit={handleOnSubmit}
                            >

                            </Button>
                        </GridItem>
                        
                        </FormControl>
               </Grid>
               
                
                
        )
}




export const AdminPage =({isAuth})=>{
    const navigate = useNavigate();
    if(!isAuth ){
        navigate("/");
    }
    /* collection and doc refs */
    const listingsCollectionRef = collection(db,"Listings");
    const newListingRef = doc(listingsCollectionRef);
    /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const newDoc = async () => addDoc(newListingRef, {
            id: newListingRef.id,
            type:newListingRef.type,
            description: newListingRef.description,
            bathrooms:newListingRef.bathrooms,
            bedrooms:newListingRef.bedrooms,
            listed_at:Timestamp.now(),
            street:newListingRef.street,
            available:newListingRef.available,
            price:newListingRef.price,
          })
          console.log(newDoc);

        } catch (err) {
          alert(err)
        }
      }

    const [admin,setAdmin] = useState([]);
    

    const deleteListing = async(id) =>{
        const listingDoc = doc(db,"Listings",id);
        await deleteDoc(listingDoc);
    }


    return(
      <>
      <Container as="AdminPage" paddingTop="100px" h="100%" centerContent maxW="50%">
            <Heading color="#808080" ><u>Administrator Page</u></Heading>
        <Stack spacing={12}>
            <AddListingBox />



        

 
        </Stack>
        </Container>
      </>
    )
}

export default AdminPage;