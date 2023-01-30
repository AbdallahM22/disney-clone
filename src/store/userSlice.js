import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        id: null,
        email: null,
        photo: null
    }
}
const userSlice = createSlice({
    name: 'user', 
    initialState,
    reducers: {
        login: (state, action)=> {
            state.user.id = action.payload.id;
            state.user.email = action.payload.email;
            state.user.photo = action.payload.photo;
        },
        logout: (state, action)=> {
            state.user.id = null;
            state.user.email = null;
            state.user.photo = null;
        }
    }
});


export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
