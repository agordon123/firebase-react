import React ,{useState,useContext, useEffect} from 'react';
import {List,ListItem} from '@mui/material';
import { Link } from 'react-router-dom';
import { db } from '../components/auth/firebase';
import { getDoc ,where,query} from 'firebase/firestore';


const SearchResult = ({props}) =>{

    const {user,setUser} = useState({props}); 
    const getData = async () =>{
            const data = await getDoc('users',user);
            setUser({data});
        }
    useEffect(()=>{
     getData(user);
       
    },[user]);
    return(
        <>
        <p>
        <b>User ID:</b>
        <label id='user-id-label'>{
            ...user.map(user=>{})
        }</label>
        </p>
        </>
    )
}

