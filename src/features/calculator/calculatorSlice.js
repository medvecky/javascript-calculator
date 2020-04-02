import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'calculator',
    initialState: {
        expresion: "",
        currentValue: "",
        result: 0
    },
    reducers: {
    },
});

export const selectExpression = state => state.calculator.expression;
export const selectCurrentValue = state => state.calculator.value;
export const selectResult = state => state.calculator.result;

export default slice.reducer;
