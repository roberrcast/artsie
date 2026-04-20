import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getArtworksByTerm } from "../services/api";

interface GenreState {
    items: any[];
    selectedGenre: string;
    loading: boolean;
    error: null | string;
}

const initialState: GenreState = {
    items: [],
    selectedGenre: "impressionism",
    loading: false,
    error: null,
};

export const fetchGenreArtworks = createAsyncThunk(
    "genres/fetchGenreArtworks",
    async ({ genre, page }: { genre: string; page?: number }) => {
        const response = await getArtworksByTerm(genre, page);
        return response.data.data;
    },
);

const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchGenreArtworks.pending, (state) => {
                state.loading = true;
                state.items = [];
            })

            .addCase(fetchGenreArtworks.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })

            .addCase(fetchGenreArtworks.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Error al cargar el género";
            });
    },
});

export const { setSelectedGenre } = genresSlice.actions;
export default genresSlice.reducer;
