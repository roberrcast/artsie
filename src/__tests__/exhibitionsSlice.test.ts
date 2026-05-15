import { describe, it, expect } from "vitest";
import reducer from "../store/exhibitionsSlice";

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
});
