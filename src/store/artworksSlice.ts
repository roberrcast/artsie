import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from "@reduxjs/toolkit";
import {
    getArtworks,
    searchArtworks,
    getArtists,
    getArtStyles,
    getFeaturedBatch,
} from "../services/api";
import { getDayOfYear } from "../utils/dateUtils";

interface Artwork {
    id: number;
    title: string;
    artist_display: string;
    image_id: string;
    date_display: string;
    description: string | null;
    thumbnail?: {
        alt_text: string;
        width: number;
        height: number;
        lqip?: string;
    };
}

interface ArtworksState {
    items: Artwork[];
    artists: { id: number; title: string }[];
    styles: { id: number; title: string }[];
    loading: boolean;
    error: string | null;
    total: number;
    featuredArtwork: Artwork | null;
    iiifUrl: string | null;
}

const initialState: ArtworksState = {
    items: [],
    artists: [],
    styles: [],
    loading: false,
    error: null,
    total: 0,
    featuredArtwork: null,
    iiifUrl: null,
};

// El thunk para hacer fetch del data
export const fetchArtworks = createAsyncThunk(
    "artworks/fetchArtworks",
    async (page: number = 1) => {
        const response = await getArtworks(page);
        return response.data;
    },
);

// fetch del submenu
export const fetchSubmenuData = createAsyncThunk(
    "artworks/fetchSubmenuData",
    async () => {
        // Hacemos fetch de ambos para más eficiencia
        const [artistsRes, stylesRes] = await Promise.all([
            getArtists(4),
            getArtStyles(4),
        ]);

        return {
            artists: artistsRes.data.data,
            styles: stylesRes.data.data,
        };
    },
);

// fetch del la obra del día
export const fetchFeaturedArtwork = createAsyncThunk(
    "artworks/fetchFeaturedArtwork",
    async () => {
        const response = await getFeaturedBatch();
        const iiifUrl = response.data.config.iiif_url;
        const artworks = response.data.data.filter(
            (artwork: any) => artwork.image_id != null,
        );

        const dayOfYear = getDayOfYear();
        const artworkOfTheDay = artworks[dayOfYear % artworks.length];

        return { artWork: artworkOfTheDay, iiifUrl };
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
            // fetch de las artworks
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
            })

            // Fetch del submenu en el search bar del header

            .addCase(fetchSubmenuData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchSubmenuData.fulfilled, (state, action) => {
                state.loading = false;
                state.artists = action.payload.artists;
                state.styles = action.payload.styles;
            })

            .addCase(fetchSubmenuData.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ||
                    "Hubo un error al intentar la información";
            })

            // Fetch del artwork of the day en Featured

            .addCase(fetchFeaturedArtwork.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(fetchFeaturedArtwork.fulfilled, (state, action) => {
                state.loading = false;
                state.featuredArtwork = action.payload.artWork;
                state.iiifUrl = action.payload.iiifUrl;
            })

            .addCase(fetchFeaturedArtwork.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Hubo un error en la solicitud";
            });
    },
});

export default artworkSlice.reducer;
