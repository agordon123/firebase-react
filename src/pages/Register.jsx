import { useState } from "react";
import { Link } from "react-router-dom";
import { db, signUp,auth ,signIn} from "../auth/firebase";
import { Button } from "@mui/material";
import {query, getDocs,addDoc,serverTimestamp} from "firebase/firestore";
import React,{ useEffect } from "react";
import {userSignOut } from "../auth/firebase";
import {getAuth,onAuthStateChanged} from "firebase/auth";




    

