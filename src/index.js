import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/material/className';
import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import './index.css';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Account from './pages/Account';
import Form from './common/Form';
import AdminPage from './pages/Admin';
import Home from './pages/Home';
import { firebaseConfig, auth, db,app } from './auth/firebase';
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";







const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
  // enableClaims: true // Get custom claims along with the profile
};
const rrfProps = {
  firebase:app,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};


ClassNameGenerator.configure((App) => App.replace('Mui', 'MNC'));

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Form title="Register" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
      
    </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

