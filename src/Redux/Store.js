import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from './TaskSlice';

export const Store=configureStore({
    reducer:{
        Task:TaskReducer
    }
})