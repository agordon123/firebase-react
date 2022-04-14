import { getAuth,GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection, serverTimestamp} from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import {getDatabase} from 'firebase/database';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const storage = getStorage(app);

export const database = getDatabase(app);

export const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
              password
                );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
        AccountType:'Regular',
        CreatedOn:serverTimestamp
      });
      return true
      } catch (error) {
      return {error: error.message}
      }
    };

export const signIn = async (email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
          );
          const user = userCredential.user;
          return true
          } catch (error) {
          return {error: error.message}
        }
      };

export const signOut = async() => {
          try {
            await signOut(auth)
            return true
          } catch (error) {
            return false
          }
          };


export default app;