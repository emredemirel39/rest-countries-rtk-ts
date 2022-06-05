import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import countriesSlice from "../features/countriesSlice";

const store = configureStore({
    reducer: {
        countries: countriesSlice
    }
})

export default store;

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;