import React from "react";

import Home from "./pages/Home";
import Login from "./pages/login";
import Account from "../pages/Account";
import Register from "../pages/Register";

    const routes = [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/account",
        component: Account,
      },
      {
        path: "/login",
        component: Login,
      },
      {
        path: "/register",
        component: Register,
      },
      {path:'*', component:Home}

    ]; 

export default routes;
