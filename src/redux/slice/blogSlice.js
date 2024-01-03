import { createSlice } from "@reduxjs/toolkit";


const blogSlice = createSlice({
    name: "Blog",
    initialState: {
        isLogin: false,
    },
    reducers: {
        login: (state) => { state.isLogin = true },
        logout: (state) => { state.isLogin = false }
    }
}
)

export const getItemSelector = (state) => state.blog;


export const { login, logout } = blogSlice.actions;

export default blogSlice.reducer;