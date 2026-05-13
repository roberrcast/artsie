import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import ExhibitionDetails from "../../pages/ExhibitionDetails";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
    useParams: () => ({ id: "123" }),
}));

vi.mock("../../store/exhibitionsSlice", async (importantOriginal) => {
    const actual = await importantOriginal<any>();
    return {
        ...actual,
        fetchExhibitionDetails: vi.fn(() => ({ type: "exhibitions/noop" })),
    };
});

describe("Exhibitions details page", () => {
    it("renders exhibition details and related works", () => {
        const mockExhibition = {
            id: 123,
            title: "Gran Tour",
            image_url: "tour.jpg",
            short_description: "Lorem ipsum dolor si amet.",
            aic_start_at: "2026-01-01",
            aic_end_at: "2026-12-31",
        };
        const mockArtworks = [
            {
                id: 50,
                title: "Obra 1",
                image_id: "img1",
                artist_display: "Artista A",
            },
        ];

        renderWithProviders(<ExhibitionDetails />, {
            preloadedState: {
                exhibitions: {
                    selectedExhibition: mockExhibition,
                    relatedArtworks: mockArtworks,
                    loading: false,
                    error: null,
                },
            },
        });

        expect(screen.getByText("Gran Tour")).toBeInTheDocument();
        expect(screen.getByText("Obra 1")).toBeInTheDocument();

        // Navegación
        fireEvent.click(screen.getByText("Obra 1"));
        expect(mockNavigate).toHaveBeenCalledWith("/artwork/50");
    });
});
