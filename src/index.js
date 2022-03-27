import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/color-mode";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import './index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";




ReactDOM.render(
  <Router>
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
  </Router>,
  document.getElementById("root")
  
);

