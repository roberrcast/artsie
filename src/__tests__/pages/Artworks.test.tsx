import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import ArtworksPage from "../../pages/Artworks";
import { fetchArtworks } from "../../store/artworksSlice";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

vi.mock("../../store/artworksSlice", async (importantOriginal) => {
    const actual = await importantOriginal<any>();
    return {
        ...actual,
        fetchArtworks: vi.fn((page) => ({
            type: "artworks/fetch/noop",
            payload: page,
        })),
    };
});

describe("Arworks Page", () => {
    const mockState = {
        artworks: {
            items: [
                {
                    id: 1,
                    title: "Starry Night",
                    artist_display: "Van Gogh",
                    image_id: "vg1",
                },
            ],
            loading: false,
            currentPage: 1,
            totalPages: 10,
            iiifUrl: "https://www.artic.edu/iiif/2",
        },
    };

    it("renders artworks and handles pagination", () => {
        renderWithProviders(<ArtworksPage />, { preloadedState: mockState });

        expect(screen.getByText("Starry Night")).toBeInTheDocument();
        expect(screen.getByText("Página 1 de 10")).toBeInTheDocument();

        const nextButton = screen.getByRole("button", { name: /siguiente/i });
        fireEvent.click(nextButton);

        expect(fetchArtworks).toHaveBeenCalledWith(2);
    });

    it("navigates to artwork details once card is clicked", () => {
        renderWithProviders(<ArtworksPage />, { preloadedState: mockState });

        const artworkCard = screen.getByText("Starry Night");

        fireEvent.click(artworkCard);

        expect(mockNavigate).toHaveBeenCalledWith("/artwork/1");
    });
});
