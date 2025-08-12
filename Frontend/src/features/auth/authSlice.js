import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



// create initials States

const initialState = {
    user: "",
    userLoading: false,
    userError: false,
    userSuccess: false,
    userMessage: ""
}



export const regUsers = createAsyncThunk("register", async (userData, thunkAPI) => {

    console.log(userData);

    try {
        let response = await axios.post("http://localhost:5174/api/users/register-Users", userData)
        localStorage.setItem('user', JSON.stringify(response.data))

        return response.data

    } catch (error) {
        console.log(error);

        return thunkAPI.rejectWithValue(error.response.data.message)
    }


})




// create auth Slice
export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {


        builder
            .addCase(regUsers.pending, (state, action) => {

                state.userLoading = true
            })

            .addCase(regUsers.rejected, (state, action) => {
                state.userLoading = false
                state.userError = true
                state.userMessage = action.payload
            })


            .addCase(regUsers.fulfilled, (state, action) => {
                state.userError = false
                state.userSuccess = true
                state.user = action.payload
            })


    }
})



//now export it to store
export default authSlice.reducer