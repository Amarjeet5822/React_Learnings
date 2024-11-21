import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../store/authStore'

const store = configureStore({
    reducer :authReducer
});

export default store;