import { describe, it, expect } from "vitest";
import reducer from "../store/artistsSlice";

describe("Artists slice", () => {
    const initialState = {
        items: [],
        searchResults: [],
        selectedArtist: null,
        artistWorks: [],
        loading: false,
        error: null,
        currentPage: 1,
        totalPages: 1,
    };

    it("should handle fetchArtists.pending without clearing items", () => {
        const previousState = {
            ...initialState,
            items: [{ id: 1, title: "Master Painter" }] as any,
        };

        const action = { type: "artists/fetchArtists/pending" };
        const state = reducer(previousState, action);

        expect(state.loading).toBe(true);
        expect(state.items).toHaveLength(1); // Para verificar la estabilidad del scroll
    });

    it("should handle fetchArtistsWithWorks.pending without clearing previous details", () => {
        const previousState = {
            ...initialState,
            selectedArtist: { id: 1, title: "Monet" } as any,
            artistWorks: [{ id: 101 }] as any,
        };

        const action = { type: "artists/fetchArtistsWithWorks/pending" };
        const state = reducer(previousState, action);

        expect(state.loading).toBe(true);
        // Not to be null para que el usuario vea lo mismo cuando presione o haga swipe 'back'
        expect(state.selectedArtist).not.toBeNull();
        expect(state.artistWorks).toHaveLength(1);
    });
});
