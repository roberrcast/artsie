import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import Artists from "../../pages/Artists";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

vi.mock("../../store/artistsSlice", async () => {
    const actual = await vi.importActual("../../store/artistsSlice");
    return {
        ...actual,
        fetchArtists: () => ({ type: "noop" }),
        fetchArtistsSearch: () => ({ type: "noop" }),
    };
});

describe("Artists page", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    const preloadedState = {
        artists: {
            items: [
                {
                    id: 1,
                    title: "Claude Monet",
                    birth_date: 1840,
                    death_date: 1926,
                },
                {
                    id: 2,
                    title: "Vincent Van Gogh",
                    birth_date: 1853,
                    death_date: 1890,
                },
            ],
            loading: false,
            currentPage: 1,
            totalPages: 5,
            searchResults: [],
        },
    };

    it("renders the list of artists", async () => {
        // Render with providers componente reutilisable @src/__tests__/test-utils.tsx
        renderWithProviders(<Artists />, { preloadedState });

        expect(await screen.findByText(/claude monet/i)).toBeInTheDocument();
        expect(
            await screen.findByText(/vincent van gogh/i),
        ).toBeInTheDocument();
    });

    it("navigates to artist details when a card is clicked", async () => {
        renderWithProviders(<Artists />, { preloadedState });

        const artist = await screen.findByText(/vincent van gogh/i);

        expect(artist).toBeInTheDocument();
        fireEvent.click(artist);

        expect(mockNavigate).toHaveBeenCalledWith("/artist/2");
    });
});
