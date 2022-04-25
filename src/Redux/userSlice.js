import { createSlice } from "@reduxjs/toolkit";
import React, { useReducer } from "react";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: localStorage.getItem('user') || '',
    },
    reducers: {
        createUser: (state, action) => {
            state.value = action.payload;
        },
        login: (state) => {
            state.value = localStorage.getItem('user');
        },
        logout: (state) => {
            state.value = null;
        },
    },

})

export const { createUser, login, logout } = userSlice.actions;



export default userSlice.reducer;