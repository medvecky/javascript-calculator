function addNumberToExpression(state, action) {
    if (state.expression === '0' || isCompletedExpression(state)) {
        if (action.payload !== '0') {
            state.expression = action.payload;
        }
    } else {
        state.expression += action.payload;
    }
}

function addNumberToCurrentValue(state, action) {
    if (state.currentValue === '0'
        || "*/+-=".includes(state.currentValue)) {
        if (action.payload !== '0') {
            state.currentValue = action.payload;
        }
    } else {
        state.currentValue += action.payload;
    }
}

function handleOperation(state, action) {
    if (state.currentValue !== action.payload) {
        if ("*/+-=".includes(state.currentValue)) {
            state.expression = state.expression.slice(0, -1);
        }
        state.expression += action.payload;
        if (action.payload === '=') {
            let expression = state.expression = state.expression.slice(0, -1);
            let result = eval(expression);
            state.expression += '=' + result;
            state.currentValue = result;
        } else {
            state.currentValue = action.payload;
        }
    }
}

function isCompletedExpression(state) {
    let pattern = new RegExp('.+=-?\\d+')
    return pattern.test(state.expression);
}

function handleNumber(state, action) {
    if (isCompletedExpression(state)) {
        state.expression = '0';
        state.currentValue = '0';
        addNumberToExpression(state, action);
        addNumberToCurrentValue(state, action);
    } else {
        addNumberToExpression(state, action);
        addNumberToCurrentValue(state, action);
    }
}

export {handleNumber, handleOperation};