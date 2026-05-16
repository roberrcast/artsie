import { describe, it, expect, vi } from "vitest";
import reducer, {
    fetchExhibitionDetails,
    fetchExhibitionsWithImages,
} from "../store/exhibitionsSlice";
import { configureStore } from "@reduxjs/toolkit";
import * as api from "../services/api";

vi.mock("../services/api");

describe("Exhibitions slice", () => {
    const initialState = {
        items: [],
        selectedExhibition: null,
        relatedArtworks: [],
        loading: false,
        error: null,
    };

    it("should handle fetchExhibitionsWithImages.pending", () => {
        const previousState = {
            ...initialState,
            items: [{ id: 1, title: "Current Expo" }] as any,
        };

        const action = {
            type: "exhibitions/fetchExhibitionsWithImages/pending",
        };
        const state = reducer(previousState, action);

        expect(state.loading).toBe(true);
        expect(state.items).toHaveLength(1);
    });

    it("should handle fetchExhibitionsWithImages.rejected", () => {
        const action = {
            type: "exhibitions/fetchExhibitionsWithImages/rejected",
            error: { message: "Error al cargar" },
        };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("Error al cargar");
    });

    it("dispatches fetchExhibitionsWithImages and updates items", async () => {
        const mockExhibitions = [{ id: 1, title: "Expo 1" }];
        vi.mocked(api.getExhibitions).mockResolvedValue({
            data: { data: mockExhibitions },
        } as any);

        const store = configureStore({ reducer: { exhibitions: reducer } });

        await store.dispatch(fetchExhibitionsWithImages());

        const state = store.getState().exhibitions;
        expect(state.items).toHaveLength(1);
    });

    it("dispatches fetchExhibitionDetails and handles missing artworks", async () => {
        const mockExhibition = { id: 1, title: "Expo 1", artwork_ids: [] };
        vi.mocked(api.getExhibitionById).mockResolvedValue({
            data: { data: mockExhibition },
        } as any);

        const store = configureStore({ reducer: { exhibitions: reducer } });

        await store.dispatch(fetchExhibitionDetails(1));

        const state = store.getState().exhibitions;
        expect(state.selectedExhibition!.title).toBe("Expo 1");
        expect(state.relatedArtworks).toHaveLength(0);
    });
});
