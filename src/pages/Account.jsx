import React,{useState} from 'react';
import { db } from '../firebase';
import { getDoc,updateDoc,deleteDoc, CollectionReference,DocumentReference } from 'firebase/firestore';



export const Account = () =>{
    const [user,setUser] = useState();
    const usersCollectionRef = db.collection('Accounts');
    return(
        <div>
            <h1>Account</h1>
            <h2>{user}</h2>
            <button onClick={()=>{
                usersCollectionRef.get().then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=>{
                        setUser(doc.data().email);
                    })
                }
                )
            }
            }>Get User</button>
        </div>
    )
}
                
  


export default Account;