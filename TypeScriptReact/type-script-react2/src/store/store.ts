import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./slices/rootSlice";
import { rootReducer } from "./reducer/rootReducer";

export const store = configureStore({
    reducer:{
        rootSlice:rootSlice,
        rootReducer:rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch