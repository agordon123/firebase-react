import { initializeApp } from "firebase/app";
import { getFirestore,DocumentReference,DocumentSnapshot,addDoc,getDoc,getDocs ,serverTimestamp} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export const auth = getAuth(app);
  export const provider = new GoogleAuthProvider();

  export const storage = getStorage(app);

  export const database = getDatabase();

  export const listingData = {
    id:{id},
    bedrooms:{bedrooms},
    bathrooms:{bathrooms},
    description:{description},
    price:{price},
    street:{street},
    city:{city},
    state:{state},
    zip:{zip},
    listedOn:serverTimestamp(),
    type:{type},


  }