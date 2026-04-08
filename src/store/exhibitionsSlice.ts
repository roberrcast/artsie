import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExhibitions, getPublicArtworkForExhibition } from "../services/api";

export const fetchExhibitionsWithImages = createAsyncThunk(
    "exhibitions/fetchExhibitionsWithImages",
    async () => {
        const response = await getExhibitions();
        const exhibitions = response.data.data.slice(0, 6);

        const enrichedExhibitions = await Promise.all(
            exhibitions.map(async (exh: any) => {
                try {
                    const artRes = await getPublicArtworkForExhibition(exh.id);
                    const artwork = artRes.data.data[0];
                    return {
                        ...exh,
                        publicImageId: artwork ? artwork.image_id : null,
                    };
                } catch (error) {
                    return { ...exh, publicImageId: null };
                }
            }),
        );

        return enrichedExhibitions;
    },
);

interface ExhibitionsState {
    items: any[];
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
            });
    },
});

export default exhibitionsSlice.reducer;
