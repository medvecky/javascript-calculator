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
    if (action.payload === '-') {
        handleMinus(state, action);
    } else if (state.currentValue !== action.payload) {
        if ("*/+-=".includes(state.currentValue)) {
            if (!isMinusValid(state)) {
                state.expression = state.expression.slice(0, -3);
            } else {
                state.expression = state.expression.slice(0, -1);
            }
        }
        state.expression += action.payload;
        if (action.payload === '=') {
            evaluate(state);
            handleExpressionsChain(state);
        } else {
            state.currentValue = action.payload;
        }
    }
}

function handleMinus(state, action) {
    if (state.expression === '0') {
        state.expression = action.payload;
        state.currentValue = action.payload;
    } else if (isNumeric(state.currentValue)) {
        state.expression += action.payload;
        state.currentValue = action.payload;
    } else if (isMinusValid(state)) {
        state.expression += ' ' + action.payload;
        state.currentValue = action.payload;
    }
}

function isMinusValid(state) {
    let pattern = new RegExp('[-\/*+] -$')
    return !pattern.test(state.expression);
}

function handleExpressionsChain(state) {
    if(state.expression.includes('=')) {
        state.expression = state.currentValue;
    }
}

function isCompletedExpression(state) {
    let pattern = new RegExp('.+=-?\\d+')
    return pattern.test(state.expression);
}

function isNumeric(num) {
    return !isNaN(num)
}

function evaluate(state) {
    let expression = state.expression = state.expression.slice(0, -1);
    if (!expression.includes('=')) {
        let result = eval(expression).toString();
        state.expression += '=' + result;
        state.currentValue = result;
    }
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