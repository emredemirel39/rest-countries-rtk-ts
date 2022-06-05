import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ICountryState {
    data: null | CountryType[],
    loading: boolean,
    error: string
};

const initialState: ICountryState = {
    data: null,
    loading: false,
    error: ''
};

export const fetchCountries = createAsyncThunk('fetchCountries', async () => {
    const url: string = 'https://restcountries.com/v2/all'
    
    const response = await axios.get<CountryType[]>(url);

    return response.data;
})

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        sabir: (state, action) => {
            console.log(action.payload.name)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCountries.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        })
        .addCase(fetchCountries.fulfilled, (state, action: PayloadAction<CountryType[]>) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Error fetching countries';
        })
    }
});

export default countriesSlice.reducer;

export const {sabir} = countriesSlice.actions;

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherNames: string[];
    otherAcronyms: string[];
}

export interface CountryType {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    continent: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flags: string[];
    regionalBlocs: RegionalBloc[];
    cioc: string;
    independent: boolean;
};