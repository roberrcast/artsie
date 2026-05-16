import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import FeaturedSection from "../../components/FeaturedSection";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

describe("FeaturedSection component", () => {
    const mockArtwork = {
        id: 1,
        title: "El Grito",
        description: "<p>Obra de Maestra</p>",
        image_id: "img1",
        thumbnail: { alt_text: "Alt text" },
    };

    it("renders the featured artwork and navigates on click", () => {
        vi.useFakeTimers();

        renderWithProviders(<FeaturedSection />, {
            preloadedState: {
                artworks: {
                    featuredArtwork: mockArtwork,
                    iiifUrl: "https://example.com",
                    loading: false,
                },
            },
        });

        expect(screen.getAllByText("El Grito")[0]).toBeInTheDocument();

        const button = screen.getAllByLabelText(/botón para ver obra/i)[0];
        fireEvent.click(button);

        vi.runAllTimers();

        expect(mockNavigate).toHaveBeenCalledWith("/artwork/1");

        vi.useRealTimers();
    });

    it("renders loading spinner when fetching", () => {
        renderWithProviders(<FeaturedSection />, {
            preloadedState: {
                artworks: { featuredArtwork: null, loading: true },
            },
        });

        expect(
            screen.getByText(/cargando la obra del día/i),
        ).toBeInTheDocument();
    });
});
