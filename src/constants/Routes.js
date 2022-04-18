import React from "react";

import Home from "./pages/Home";
import Login from "./pages/login";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  { path: "*", Component: () => <div>ERROR 404: Page not found</div> },
];

export default routes;
