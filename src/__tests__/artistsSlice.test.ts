import { describe, it, expect, vi } from "vitest";
import reducer, {
    fetchArtists,
    fetchArtistSearch,
} from "../store/artistsSlice";
import { configureStore } from "@reduxjs/toolkit";
import * as api from "../services/api";

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

    it("should handle fetchArtists.rejected", () => {
        const action = {
            type: "artists/fetchArtists/rejected",
            error: { message: "Error de red" },
        };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("Error de red");
    });

    it("should handle fetchArtistSearch.rejected", () => {
        const action = {
            type: "artists/fetchArtistSearch/rejected",
            error: { message: "Sin resultados" },
        };
        const state = reducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toBe("Sin resultados");
    });
});

vi.mock("../services/api");

describe("Artists thunk", () => {
    it("dispatches fetchArtists and updates state", async () => {
        const mockData = {
            data: [{ id: 1, title: "Claude Monet" }],
            pagination: { total: 1, total_pages: 1 },
        };

        vi.mocked(api.getArtistsList).mockResolvedValue({
            data: mockData,
        } as any);

        const store = configureStore({ reducer: { artists: reducer } });

        await store.dispatch(fetchArtists(1));

        const state = store.getState().artists;

        expect(state.items).toHaveLength(1);
        expect(state.items[0].title).toBe("Claude Monet");
        expect(state.loading).toBe(false);
    });

    it("dispatches fetchArtistSearch and updates searchResults", async () => {
        const mockData = [{ id: 2, title: "Vincent van Gogh" }];
        vi.mocked(api.searchArtists).mockResolvedValue({
            data: { data: mockData },
        } as any);

        const store = configureStore({ reducer: { artists: reducer } });

        await store.dispatch(fetchArtistSearch("Vincent"));

        const state = store.getState().artists;
        expect(state.searchResults).toHaveLength(1);
        expect(state.searchResults[0].title).toBe("Vincent van Gogh");
    });
});
