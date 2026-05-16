import { describe, it, expect } from "vitest";
import reducer, { clearSearchBarResults } from "../store/searchSlice";

describe("Search slice", () => {
    const initialState = { results: [], loading: false, error: null };

    it("should clear results", () => {
        const stateWithResults = {
            ...initialState,
            results: [
                {
                    id: 1,
                    title: "Mock",
                    artist_display: "Artist",
                    image_id: "img1",
                },
            ],
        };
        const nextState = reducer(stateWithResults, clearSearchBarResults());

        expect(nextState.results).toHaveLength(0);
    });

    it("should handle fetchSearchResults.fulfilled", () => {
        const mockData = [{ id: 10, title: "Result" }];
        const action = {
            type: "search/fetchSearchResults/fulfilled",
            payload: mockData,
        };

        const nextState = reducer(initialState, action);

        expect(nextState.loading).toBe(false);
        expect(nextState.results).toEqual(mockData);
    });

    it("should handle fetchSearchResults.rejected", () => {
        const action = {
            type: "search/fetchSearchResults/rejected",
            error: { message: "Falla de búsqueda" },
        };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("Falla de búsqueda");
    });
});
