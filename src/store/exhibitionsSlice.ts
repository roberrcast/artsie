import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getArtStyles,
    getArtworkById,
    getArtworksByIds,
    getExhibitionById,
    getExhibitions,
} from "../services/api";

export const fetchExhibitionsWithImages = createAsyncThunk(
    "exhibitions/fetchExhibitionsWithImages",
    async () => {
        const response = await getExhibitions();
        return response.data.data.slice(0, 19);
    },
);

export const fetchExhibitionDetails = createAsyncThunk(
    "exhibitions/fetchExhibitionDetails",
    async (id: string | number) => {
        const response = await getExhibitionById(id);
        const exhibition = response.data.data;
        let relatedArtworks = [];

        const artworkIds = exhibition.artwork_ids?.slice(0, 20) || [];

        if (artworkIds.length > 0) {
            const artRes = await getArtworksByIds(artworkIds);
            relatedArtworks = artRes.data.data
                .filter((art: any) => art.is_public_domain && art.image_id)
                .slice(0, 4);
        }

        return { exhibition, relatedArtworks };
    },
);

interface ExhibitionsState {
    items: any[];
    selectedExhibition: any | null;
    relatedArtworks: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ExhibitionsState = {
    items: [],
    loading: false,
    error: null,
};

const exhibitionsSlice = createSlice({
    name: "exhibitions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExhibitionsWithImages.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchExhibitionsWithImages.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchExhibitionsWithImages.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Error al cargar las exhibiciones";
            })

            // Casos para los detalles de la exhibición
            .addCase(fetchExhibitionDetails.pending, (state) => {
                state.loading = true;
                state.error = null;

                // Se limpia la exhibición para que
                // el usuario no vea la misma
                state.selectedExhibition = null;
                state.relatedArtworks = [];
            })

            .addCase(fetchExhibitionDetails.fulfilled, (state, action) => {
                state.loading = false;

                // Se guardan los detalles de la exhibición y 4 obras de arte
                state.selectedExhibition = action.payload.exhibition;
                state.relatedArtworks = action.payload.relatedArtworks;
            })

            .addCase(fetchExhibitionDetails.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.error.message || "Error al cargar la exhibición";
            });
    },
});

export default exhibitionsSlice.reducer;
