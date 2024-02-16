export const deposit = value => {
    return {
        type: 'balance/deposit',
        payload: value
    }
};

export const minusDeposit = value => {
    return {
        type: 'balance/minusDeposit',
        payload: value
    }
};

const balanceItitialState = {
    value: 0
}

export const balanceReducer = (state = balanceItitialState, action) => {

    switch (action.type) {

        case 'balance/deposit':
            return {
                ...state,
                value: state.value + action.payload
            };
        
        case 'balance/minusDeposit':
            return {
                ...state,
                value: state.value - action.payload
            }


        default:
            return state;
    }
}