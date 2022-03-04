import {createSlice} from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            console.log(action.payload)
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }, 
        signOut : (state) => {
            state.currentUser =  null;
            state.isFetching =  false;
            state.error =  false;
        }
    }
})

export const {loginStart, loginSuccess, loginFailure, signOut} = userSlice.actions
export default userSlice.reducer    