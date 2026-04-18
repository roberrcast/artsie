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
    getArtworkById,
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
    medium_display?: string;
    dimensions?: string;
    credit_line?: string;
}

interface ArtworksState {
    items: Artwork[];
    artists: { id: number; title: string }[];
    styles: { id: number; title: string }[];
    loading: boolean;
    error: string | null;
    total: number;
    currentPage: number;
    totalPages: number;
    featuredArtwork: Artwork | null;
    iiifUrl: string | null;
    selectedArtwork: Artwork | null;
    isSearchOpen: boolean;
}

const initialState: ArtworksState = {
    items: [],
    artists: [],
    styles: [],
    loading: false,
    error: null,
    total: 0,
    currentPage: 1,
    totalPages: 1,
    featuredArtwork: null,
    iiifUrl: null,
    selectedArtwork: null,
    isSearchOpen: false,
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
            (artwork: any) => artwork.image_id != null && artwork.description,
        );

        const dayOfYear = getDayOfYear();

        console.log(
            `[Artwork of the day] Day of year: ${dayOfYear}, Selection Index: ${dayOfYear % artworks.length}`,
        );

        const artworkOfTheDay = artworks[dayOfYear % artworks.length];

        console.log(
            `[Artwork of the day] Selected: ${artworkOfTheDay.title} by ${artworkOfTheDay.artist_display}`,
        );

        return { artWork: artworkOfTheDay, iiifUrl };
    },
);

// fetch para los detalles de una obra
export const fetchArtworkDetails = createAsyncThunk(
    "artworks/fetchArtworkDetails",
    async (id: string | number) => {
        const response = await getArtworkById(id);
        return response.data.data;
    },
);

const artworkSlice = createSlice({
    name: "artworks",
    initialState,
    reducers: {
        setSearchOpen: (state, action: PayloadAction<boolean>) => {
            state.isSearchOpen = action.payload;
        },

        toggleSearch: (state) => {
            state.isSearchOpen = !state.isSearchOpen;
        },
    },

    extraReducers: (builder) => {
        builder
            // fetch de las artworks

            .addCase(fetchArtworks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArtworks.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.total = action.payload.pagination.total;

                state.currentPage = action.payload.pagination.current_page;
                state.totalPages = Math.min(
                    action.payload.pagination.total_pages,
                    50,
                );
            })
            .addCase(fetchArtworks.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ||
                    "Hubo un error al tratar de conseguir obras de arte";
            })

            // Casos del submenu en el search bar del header

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

            // Casos del artwork of the day en Featured

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
            })

            // Casos para los detalles de una obra
            .addCase(fetchArtworkDetails.pending, (state) => {
                state.loading = true;
                state.selectedArtwork = null; // para limpiar la obra anterior con la nueva
            })
            .addCase(fetchArtworkDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedArtwork = action.payload;
            })
            .addCase(fetchArtworkDetails.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message ||
                    "Hubo un error al tratar de conseguir los detalles";
            });
    },
});

export default artworkSlice.reducer;
export const { setSearchOpen, toggleSearch } = artworkSlice.actions;
