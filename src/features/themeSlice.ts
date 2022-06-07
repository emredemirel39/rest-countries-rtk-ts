import { createSlice } from "@reduxjs/toolkit";

interface IThemeState {
    mode: string
};

const initialState: IThemeState = {
    mode: 'light'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

        setTheme: (state) => {
            state.mode === 'light'
            ? state.mode = 'dark' 
            : state.mode = "light"
        }
    }
});

export default themeSlice.reducer;
export const {
    setTheme
} = themeSlice.actions;