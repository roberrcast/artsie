import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    searchArtists,
    getArtistById,
    getArtistsList,
    getArtworksByIds,
    getArtworksByArtist,
} from "../services/api";

interface Artist {
    id: number;
    title: string;
    birth_date?: number;
    death_date?: number;
    description?: string;
    is_artist?: boolean;
    input?: string[];
}

interface ArtistsState {
    items: Artist[];
    searchResults: Artist[];
    selectedArtist: Artist | null;
    artistWorks: any[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
}

const initialState: ArtistsState = {
    items: [],
    searchResults: [],
    selectedArtist: null,
    artistWorks: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
};

export const fetchArtistSearch = createAsyncThunk(
    "artists/fetchArtistSearch",
    async (query: string) => {
        const response = await searchArtists(query);
        return response.data.data;
    },
);

export const fetchArtistDetails = createAsyncThunk(
    "artists/fetchArtistDetails",
    async (id: string | number) => {
        const response = await getArtistById(id);
        return response.data.data;
    },
);

export const fetchArtists = createAsyncThunk(
    "artists/fetchArtists",
    async (page: number = 1) => {
        const response = await getArtistsList(page);
        return {
            artists: response.data.data,
            total: response.data.pagination.total,
            totalPages: response.data.pagination.total_pages,
        };
    },
);

export const fetchArtistsWithWorks = createAsyncThunk(
    "artists/fetchArtistsWithWorks",
    async (id: string | number) => {
        const [artistRes, worksRes] = await Promise.all([
            getArtistById(id),
            getArtworksByArtist(id),
        ]);

        return {
            artist: artistRes.data.data,
            works: worksRes.data.data,
        };
    },
);

const artistsSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {
        clearSearchResults: (state) => {
            state.searchResults = [];
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchArtistSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchArtistSearch.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload;
            })

            .addCase(fetchArtistSearch.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Error al buscar artistas";
            })

            // Detalles para un artista
            .addCase(fetchArtistDetails.pending, (state) => {
                state.loading = true;
                state.selectedArtist = null; // limpiar artista previo
            })

            .addCase(fetchArtistDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedArtist = action.payload;
            })

            .addCase(fetchArtistDetails.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Error al cargar el artista";
            })

            // Lista de artistas
            .addCase(fetchArtists.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArtists.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.artists;

                state.totalPages = Math.min(action.payload.totalPages, 20);
                state.currentPage = action.meta.arg;
            })
            .addCase(fetchArtists.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Error al cargar los artistas";
            })

            // Fetch de los detalles de un artista
            .addCase(fetchArtistsWithWorks.pending, (state) => {
                state.loading = true;
                state.selectedArtist = null;
                state.artistWorks = [];
            })

            .addCase(fetchArtistsWithWorks.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedArtist = action.payload.artist;
                state.artistWorks = action.payload.works;
            })

            .addCase(fetchArtistsWithWorks.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ||
                    "Error al cargar los detalles del artista";

                state.selectedArtist = null;
                state.artistWorks = [];
            });
    },
});

export const { clearSearchResults } = artistsSlice.actions;
export default artistsSlice.reducer;
