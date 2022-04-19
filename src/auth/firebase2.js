// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
import {
  getAuth,
  setPersistence,
  inMemoryPersistence,
  GoogleAuthProvider,
  CreateUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzY9yZML1DtsXG_LXhHpIfWwNbBGZeI54",
  authDomain: "mnc-react.firebaseapp.com",
  databaseURL: "https://mnc-react-default-rtdb.firebaseio.com",
  projectId: "mnc-react",
  storageBucket: "mnc-react.appspot.com",
  messagingSenderId: "795985707037",
  appId: "1:795985707037:web:c1e377aa8dec34172846f4",
  measurementId: "G-0FH0JNZQ3D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Firebase
export class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(app);
    this.functions = getFunctions(app);
    this.auth = getAuth(app);
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth().signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default app;
