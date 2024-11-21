import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})

// configureStore :- The standard method for creating a Redux store.

// reducer :- 