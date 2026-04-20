import { configureStore } from "@reduxjs/toolkit";
import artworksReducer from "./artworksSlice";
import exhibitionsReducer from "./exhibitionsSlice";
import artistsReducer from "./artistsSlice";
import genresReducer from "./genresSlice";

export const store = configureStore({
    reducer: {
        artworks: artworksReducer,
        exhibitions: exhibitionsReducer,
        artists: artistsReducer,
        genres: genresReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
