import React, { Component, useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import {AuthContext} from "./AuthContext";
import {FirebaseAuth}from '../firebase/firebase';
import { render } from "react-dom";

export default class GlobalState extends Component {
    constructor(props){
        super(props);
        this.state  ={
            isAuth:false,
            user:''
            
        }
        this.props = props;

    };
    


}