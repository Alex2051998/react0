import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";

import {genreService, moviService} from "../../services";

const initialState = {
    movies: [],
    movi: [],
    genres: [],
    genresByMovi: null,
    poster: null,

};

const getAll = createAsyncThunk(
    'moviSlice/getAll',
    async () => {
        const {data} = await moviService.getAll();
        return data;
    }
);

const getAllGenres = createAsyncThunk(
    'moviSlice/getAllGenres',
    async () => {
        const {data} = await genreService.getAll();
        return data;
    }
);

const moviSlice = createSlice({
    name: 'moviSlice',
    initialState,
    reducers: {
        moviActionsInfo: (state, action) => {
            state.movi = action.payload;
            console.log(JSON.stringify(state.movi));
        },
        getPoster: (state, action) => {
            state.poster = action.payload;
        }

    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })

});

const {reducer: moviReducer, actions: {moviActionsInfo, getPoster}} = moviSlice;

const moviAction = {
    getAll,
    moviActionsInfo,
    getAllGenres,
    getPoster
};

export {
    moviReducer,
    moviAction
};