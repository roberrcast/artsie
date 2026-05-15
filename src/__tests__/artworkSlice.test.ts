import { describe, it, expect, vi } from "vitest";
import reducer, {
    setSearchOpen,
    toggleSearch,
    fetchArtworks,
} from "../store/artworksSlice";
import * as api from "../services/api";
import { configureStore } from "@reduxjs/toolkit";

describe("Artworks slice", () => {
    const initialState = {
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

    it("should return the initial state", () => {
        expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
    });

    it("should handle setSearchOpen", () => {
        const actual = reducer(initialState, setSearchOpen(true));
        expect(actual.isSearchOpen).toBe(true);
    });

    it("should handle toggleSearch", () => {
        const stateWithSearchOpen = { ...initialState, isSearchOpen: true };
        const actual = reducer(stateWithSearchOpen, toggleSearch());
        expect(actual.isSearchOpen).toBe(false);
    });

    it("should handle fetchArtworks.pending and NOT clear items", () => {
        const previousState = {
            ...initialState,
            items: [{ id: 1, title: "Old Artwork" }] as any,
        };

        const action = { type: "artworks/fetchArtworks/pending" };
        const state = reducer(previousState, action);

        expect(state.loading).toBe(true);
        // Crucial para probar que 'scroll restoration' funciona
        expect(state.items).toHaveLength(1);
        expect(state.items[0].title).toBe("Old Artwork");
    });

    it("should handle fetchArtworks.rejected", () => {
        const action = {
            type: "artworks/fetchArtworks/rejected",
            error: { message: "API Error" },
        };
        const state = reducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.error).toBe("API Error");
    });
});

// Thunk

vi.mock("../services/api");

describe("Artworks thunk", () => {
    it("dispatches fetchArtworks and updates state", async () => {
        // Mock del response de la API
        const mockData = {
            data: [{ id: 1 }],
            pagination: { total: 1, current_page: 1, total_pages: 1 },
        };
        vi.mocked(api.getArtworks).mockResolvedValue({ data: mockData } as any);

        // Crear store con reducer
        const store = configureStore({ reducer: { artworks: reducer } });

        // Dispatch del store
        await store.dispatch(fetchArtworks(1));

        // Verificar el update del estado
        const state = store.getState().artworks;
        expect(state.items).toHaveLength(1);
        expect(state.loading).toBe(false);
    });
});
