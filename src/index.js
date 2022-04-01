import React from "react";
import {render} from "react-dom";
import App from "./App";
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


render(
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , document.getElementById("root")
    );

