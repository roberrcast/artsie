import { describe, it, expect } from "vitest";
import reducer, { setSelectedGenre } from "../store/genresSlice";

describe("Genres Slice", () => {
    const initialState = {
        items: [],
        selectedGenre: "impressionism",
        loading: false,
        error: null,
    };

    it("should handle setSelectedGenre", () => {
        const nextState = reducer(initialState, setSelectedGenre("modernism"));
        expect(nextState.selectedGenre).toBe("modernism");
    });

    it("should handle fetchGenreArtworks.pending", () => {
        const action = { type: "genres/fetchGenreArtworks/pending" };
        const nextState = reducer(initialState, action);
        expect(nextState.loading).toBe(true);
        expect(nextState.error).toBe(null);
    });

    it("shold handle fetchGenreArtworks.fulfilled", () => {
        const mockItems = [{ id: 1, title: "Monet's Garden" }];
        const action = {
            type: "genres/fetchGenreArtworks/fulfilled",
            payload: mockItems,
        };

        const nextState = reducer(initialState, action);

        expect(nextState.loading).toBe(false);
        expect(nextState.items).toEqual(mockItems);
    });
});
