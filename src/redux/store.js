import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./balanceSlice";
import { localReducer } from "./localeSlcie";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        locale: localReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);