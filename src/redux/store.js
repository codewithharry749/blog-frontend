import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from './slice/blogSlice';
import GoogleReducer from './slice/googleSlice';

export const store = configureStore({
    reducer: {
        blog: BlogReducer,
        google: GoogleReducer
    },
    devTools: true
});