import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../utils/constant';

const initialState = {
    users: [],
}

export const getUsers = createAsyncThunk('users/getUsers', async() => {
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraREducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    },
});
