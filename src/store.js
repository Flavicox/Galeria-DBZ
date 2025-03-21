import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { dbzApi } from "./api/dbzApi";

export const store = configureStore({
    reducer: {
        [dbzApi.reducerPath]: dbzApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dbzApi.middleware),
});

setupListeners(store.dispatch);
