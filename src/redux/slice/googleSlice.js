import { createSelector, createSlice } from "@reduxjs/toolkit";


const googleSlice = createSlice({
    name: "Google",
    initialState: {
        google: [],
        profile: []
    },
    reducers: {

        googleLogin: (state, action) => {
            state.google.push(action.payload)

        },
        profile: (state, action) => {
            state.profile.push(action.payload)

        }
    }
})

export const gooleSelector = createSelector(
    (state) => state.google,
    (state) => state
)



export const { googleLogin, profile } = googleSlice.actions;

export default googleSlice.reducer;