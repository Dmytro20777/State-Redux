import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceSlice";
import { localReducer } from "./localeSlcie";


export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        locale: localReducer
},
});