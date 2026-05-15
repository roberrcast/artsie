import { describe, expect, vi, it, beforeEach } from "vitest";
import axios from "axios";
import {
    getArtworks,
    getArtworkById,
    searchArtworks,
    getArtists,
    getExhibitionById,
    searchArtists,
    getExhibitions,
    getArtworksByTerm,
    getArtworksByArtist,
    getArtworksByIds,
    getArtStyles,
    getArtistsList,
} from "../../services/api";

// Mock de axios
vi.mock("axios", () => {
    return {
        default: {
            create: vi.fn().mockReturnThis(),
            get: vi.fn(() => Promise.resolve({ data: {} })),
            post: vi.fn(() => Promise.resolve({ data: {} })),
            interceptros: {
                request: { use: vi.fn(), eject: vi.fn() },
                response: { use: vi.fn(), eject: vi.fn() },
            },
        },
    };
});

describe("API service", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("getArtworks should call the correct endpoint with pagination", async () => {
        await getArtworks(2, 10);

        // Revisar el primer argumento de la  llamada
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/artworks/search?params="),
        );

        const callUrl = vi.mocked(axios.get).mock.calls[0][0];
        expect(callUrl).toContain(encodeURIComponent('"from":10'));
        expect(callUrl).toContain(encodeURIComponent('"size":10'));
    });

    it("getArtworkById should fetch the specific artwork", async () => {
        await getArtworkById(12345);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/artworks/12345"),
        );
    });

    it("getArtists should handle both limit and specific IDs", async () => {
        await getArtists({ limit: 5 });
        expect(axios.get).toHaveBeenNthCalledWith(
            1,
            expect.stringContaining("limit=5"),
        );

        await getArtists({ ids: [1, 2] });
        expect(axios.get).toHaveBeenNthCalledWith(
            2,
            expect.stringContaining("ids=1,2"),
        );
    });

    it("should handle exhibition and search endpoints", async () => {
        // Exhibitions
        await getExhibitions(10);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/exhibitions/search"),
        );

        // Exhibition details
        await getExhibitionById("ex-1");
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/exhibitions/ex-1"),
        );

        // Search artists
        await searchArtists("Monet");
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/artists/search?q=Monet"),
        );
    });

    it("should handle artist portfolio and term searches", async () => {
        // Artist portfolio
        await getArtworksByArtist(50, 5);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("artist_id"),
        );

        // Term search (e.g., para Genres)
        await getArtworksByTerm("Watercolor", 10);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("Watercolor"),
        );
    });

    it("should handle bulk artwork fetching", async () => {
        await getArtworksByIds([101, 102]);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("ids=101,102"),
        );
    });

    it("should handle art styles and artist list", async () => {
        await getArtStyles(4);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/artwork-types?limit=4"),
        );

        await getArtistsList(1, 10);
        expect(axios.get).toHaveBeenCalledWith(
            expect.stringContaining("/artists?page=1&limit=10"),
        );
    });
});
