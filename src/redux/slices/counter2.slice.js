import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count2: 0
}

const counter2Slice = createSlice({
    name: 'counter2Slice',
    initialState,
    reducers: {
        inc: (state, action) => {
            state.count2 += action.payload;
        },
        dec: (state, action) => {
            state.count2 -= action.payload
        },
        reset: (state, action) => {
            state.count2 = action.payload
        }
    }
})

const {reducer: count2Reducer, actions: {inc, dec, reset}} = counter2Slice;

const count2Action = {inc, dec, reset};

export {
    count2Action,
    count2Reducer
}