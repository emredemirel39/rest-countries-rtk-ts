import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import countriesSlice from "../features/countriesSlice";

const store = configureStore({
    reducer: {
        countries: countriesSlice
    }
})

export default store;

// we can define type of states and dispatches not in component but in store file with this methods:

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;