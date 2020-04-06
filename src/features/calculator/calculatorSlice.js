import {createSlice} from '@reduxjs/toolkit';
import {
    handleNumber,
    handleOperation
} from './reducerFunctions';

export const slice = createSlice({
    name: 'calculator',
    initialState: {
        expression: "0",
        currentValue: "0"
    },
    reducers: {
        clear: state => {
            state.expression = "0";
            state.currentValue = "0";
        },
        addNumber: (state, action) => {
            handleNumber(state, action);
        },
        addOperation: (state, action) => {
            handleOperation(state, action);
        },
        addDecimal: state => {
            if(!state.currentValue.includes('.')) {
                state.currentValue += '.';
                state.expression += '.';
            }
        }
    },
});

export const {clear, addNumber, addOperation, addDecimal} = slice.actions;

export const selectExpression = state => state.calculator.expression;
export const selectCurrentValue = state => state.calculator.currentValue;

export default slice.reducer;
