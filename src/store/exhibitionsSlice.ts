import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getExhibitions } from "../services/api";

export const fetchExhibitionsWithImages = createAsyncThunk(
    "exhibitions/fetchExhibitionsWithImages",
    async () => {
        const response = await getExhibitions();
        return response.data.data.slice(0, 6);
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
