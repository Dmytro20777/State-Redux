import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const balanceSlice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    },
    reducers: {
        deposit: (state, action) => {
            state.value += action.payload;
        },
        minusDeposit: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { deposit, minusDeposit } = balanceSlice.actions;

const persistBalanceConfig = {
    key: "balance",
    storage,
    whitelist: ["value"]
}

export const balanceReducer = persistReducer(persistBalanceConfig, balanceSlice.reducer);



// export const balanceReducer = balanceSlice.reducer;

// export const deposit = createAction('balance/deposit');


// export const minusDeposit = createAction('balance/minusDeposit');

// const balanceItitialState = {
//     value: 0
// }

 
// export const balanceReducer = createReducer(balanceItitialState, (builder) => {
//     builder
//         .addCase(deposit, (state, action) => {
//             state.value += action.payload
//         })
//         .addCase(minusDeposit, (state, action) => {
//             state.value -= action.payload
//         });
// });



// export const balanceReducer = (state = balanceItitialState, action) => {

//     switch (action.type) {

//         case 'balance/deposit':
//             return {
//                 ...state,
//                 value: state.value + action.payload
//             };
        
//         case 'balance/minusDeposit':
//             return {
//                 ...state,
//                 value: state.value - action.payload
//             }


//         default:
//             return state;
//     }
// }