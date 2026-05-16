import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import ExhibitionsPage from "../../pages/Exhibitions";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

describe("Exhibitions page", () => {
    it("renders loading spinner when fetching", () => {
        renderWithProviders(<ExhibitionsPage />, {
            preloadedState: {
                exhibitions: { items: [], loading: true, error: null },
            },
        });

        expect(screen.getByText(/cargando exhibiciones/i)).toBeInTheDocument();
    });

    it("renders exhibitions and navigates on click", () => {
        const mockExhibitions = [
            {
                id: 1,
                title: "Exposición de Oro",
                image_url: "gold.jpg",
                gallery_title: "Sala 1",
            },
            {
                id: 2,
                title: "Modernismo",
                image_url: "modern.jpg",
                gallery_title: "Sala 2",
            },
        ];

        renderWithProviders(<ExhibitionsPage />, {
            preloadedState: {
                exhibitions: {
                    items: mockExhibitions,
                    loading: false,
                    error: null,
                },
            },
        });

        expect(screen.getByText("Exposición de Oro")).toBeInTheDocument();
        expect(screen.getByText("Modernismo")).toBeInTheDocument();

        // Click en la primera tarjeta
        fireEvent.click(screen.getByText("Exposición de Oro"));

        // Navigate
        expect(mockNavigate).toHaveBeenCalledWith("/exhibition/1");
    });
});
