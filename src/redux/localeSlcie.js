import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
    name: "locale",
    initialState: {
        lang: 'uk',
    },
    reducers: {
        selectLang: (state, action) => {
            state.lang = action.payload;
        },
    },
});

export const { selectLang } = localeSlice.actions;
export const localReducer = localeSlice.reducer;

// export const selectLang = newLang => {
//     return {
//         type: 'locale/selectLang',
//         payload: newLang
//     }
// }

// const localeItitialState = {
//     lang: 'uk',
// };

// export const localReducer = (state = localeItitialState, action) => {

//     switch (action.type) {

//         case 'locale/selectLang':
//             return {
//                 ...state,
//                 lang: action.payload,
//             };

//         default:
//             return state;
//     }

// }