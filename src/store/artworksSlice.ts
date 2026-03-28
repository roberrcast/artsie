import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from "@reduxjs/toolkit";
import { getArtworks, searchArtworks } from "../services/api";

interface Artwork {
    id: number;
    title: string;
    artist_display: string;
    image_id: string;
    date_display: string;
}

interface ArtworksState {
    items: Artwork[];
    loading: boolean;
    error: string | null;
    total: number;
}

const initialState: ArtworksState = {
    items: [],
    loading: false,
    error: null,
    total: 0,
};

// El thunk para hacer fetch del data
export const fetchArtworks = createAsyncThunk(
    "artworks/fetchArtworks",
    async (page: number = 1) => {
        const response = await getArtworks(page);
        return response.data;
    },
);

const artworkSlice = createSlice({
    name: "artworks",
    initialState,
    reducers: {
        //placeholder
    },

    extraReducers: (builder) => {
        builder
            // Cuando se empieza la solicitud
            .addCase(fetchArtworks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Cuando la solicitud tiene éxito
            .addCase(fetchArtworks.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.total = action.payload.pagination.total;
            })
            // Cuando la solicitud falle
            .addCase(fetchArtworks.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ||
                    "Hubo un error al tratar de conseguir obras de arte";
            });
    },
});

export default artworkSlice.reducer;
