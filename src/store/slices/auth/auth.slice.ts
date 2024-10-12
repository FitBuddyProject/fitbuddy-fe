import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { UserDTO } from "../../../types/user.types";
import { AuthState } from "../../../types/auth.types";

// initial state
const initialState: AuthState = {
    userData: null,
    headers: null,
    isLoading: false,
    isSuccess: false,
    isError: false
};

// helper
const helperClear = (state: any) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = false;
    state.headers = null
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginRequest(state, action: PayloadAction<any>) {
            state.isLoading = true;
        },
        loginRequestSuccess(state, action: PayloadAction<UserDTO>) {
            state.isLoading = false;
            state.userData = action.payload;
        },
        loginRequestSuccessSetHeaders(state, action: PayloadAction<any>) {
            console.log("loginRequestSuccessSetHeaders:::", action)
            state.headers = action.payload.headers;
        },

        loginRequestFailed(state) {
            helperClear(state);
        },

        logout(state) {
            helperClear(state);
            state.userData = null;
        },


    }
});


export const authActions = authSlice.actions;
export default authSlice.reducer;