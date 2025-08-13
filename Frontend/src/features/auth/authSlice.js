import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";



// create initials States


let isUser = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: isUser ? isUser : null,
    userLoading: false,
    userError: false,
    userSuccess: false,
    userMessage: ""
}



export const regUser = createAsyncThunk("register", async (userData, thunkAPI) => {
    try {
        let response = await axios.post("http://localhost:5174/api/users/register-Users", userData)
        localStorage.setItem('user', JSON.stringify(response.data))


        return response.data

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }


})




// create auth Slice
export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        userReset: (state) => {
            state.userError = false
            state.userLoading = false
            state.userSuccess = false
            state.userMessage = ""

        }

    },
    extraReducers: (builder) => {


        builder
            .addCase(regUser.pending, (state, action) => {

                state.userLoading = true
            })

            .addCase(regUser.rejected, (state, action) => {
                state.userLoading = false
                state.userError = true
                state.userMessage = action.payload
            })


            .addCase(regUser.fulfilled, (state, action) => {
                state.userError = false
                state.userLoading = false
                state.userSuccess = true
                state.user = action.payload
            })


    }
})



//now export it to store
export default authSlice.reducer
export const { userReset } = authSlice.actions