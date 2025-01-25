import { configureStore } from "@reduxjs/toolkit";
import { api } from "./users/user.api";
import errorReducer from "./slices/errorSlice";
import userReducer from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import paginationReducer from "@/store/slices/paginationSlice";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        users: persistedReducer,
        error: errorReducer,
        pagination: paginationReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/REGISTER",
                    "persist/FLUSH",
                    "persist/PAUSE",
                    "persist/PURGE",
                ],
            },
        }).concat(api.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
