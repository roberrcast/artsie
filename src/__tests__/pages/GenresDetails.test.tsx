import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen } from "../test-utils";
import GenreDetails from "../../pages/GenresDetails";
import { fetchGenreArtworks } from "../../store/genresSlice";

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useParams: () => ({ id: "Impressionism" }),
    };
});

vi.mock("../../store/genresSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchGenreArtworks: vi.fn(() => ({ type: "genres/fetch/noop" })),
    };
});

describe("Genres Details page", () => {
    it("renders artworks for the selected genre", () => {
        const mockArtworks = [
            {
                id: 1,
                title: "Mona Lisa",
                image_id: "m1",
                artist_display: "Da Vinci",
            },
        ];

        renderWithProviders(<GenreDetails />, {
            preloadedState: {
                genres: {
                    items: mockArtworks,
                    loading: false,
                    error: null,
                },
            },
        });

        expect(screen.getByText(/mona lisa/i)).toBeInTheDocument();
        expect(fetchGenreArtworks).toHaveBeenCalledWith({
            genre: "impressionism",
        });
    });
});
