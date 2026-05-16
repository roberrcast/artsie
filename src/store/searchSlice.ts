import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Artwork } from "../types";
import { searchArtworks } from "../services/api";

interface SearchState {
    results: Artwork[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    results: [],
    loading: false,
    error: null,
};

export const fetchSearchResults = createAsyncThunk(
    "search/fetchSearchResults",
    async (query: string) => {
        const response = await searchArtworks(query, 22);
        return response.data.data;
    },
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        clearSearchBarResults: (state) => {
            state.results = [];
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })

            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error en la búsqueda";
            });
    },
});

export const { clearSearchBarResults } = searchSlice.actions;
export default searchSlice.reducer;
