import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { localReducer } from "./localeSlcie";


const rootReducer = combineReducers({
    balance: balanceReducer,
    locale: localReducer
});


export const store = createStore(rootReducer, devToolsEnhancer());