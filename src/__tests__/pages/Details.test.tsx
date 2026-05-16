import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import Details from "../../pages/Details";

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useParams: () => ({ id: "123" }),
    };
});

vi.mock("../../store/artworksSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchArtworkDetails: vi.fn(() => ({ type: "artworks/details/noop" })),
    };
});

describe("Details page", () => {
    const mockArtwork = {
        id: 123,
        title: "La Noche Estrellada",
        artist_display: "Vincent van Gogh (Dutch, 1853–1890)",
        image_id: "vg-starry",
        date_display: "1889",
        medium_display: "Óleo sobre lienzo",
        dimensions: "73.7 cm × 92.1 cm",
        credit_line: "Bequest of Mrs. John Hay Whitney",
        description: "<p>Una obra maestra del post-impresionismo.</p>",
        thumbnail: { alt_text: "A starry night sky" },
    };

    it("renders artwork details correctly", () => {
        renderWithProviders(<Details />, {
            preloadedState: {
                artworks: { selectedArtwork: mockArtwork, loading: false },
            },
        });

        // Revisar información del encabezado
        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "La Noche Estrellada",
            }),
        ).toBeInTheDocument();

        expect(screen.getAllByText(/vincent van gogh/i)[0]).toBeInTheDocument();

        // Revisar los datos técnicos
        expect(screen.getAllByText("Óleo sobre lienzo")[0]).toBeInTheDocument();
        expect(screen.getAllByText("73.7 cm × 92.1 cm")[0]).toBeInTheDocument();

        // Revisar si la descripción se rendeiza (usa dangerouslySetInnerHTML)
        expect(screen.getByText(/la historia de la obra/i)).toBeInTheDocument();
        expect(screen.getByText(/una obra maestra/i)).toBeInTheDocument();
    });

    it("opens the modal when the image is clicked, open and close modal", () => {
        renderWithProviders(<Details />, {
            preloadedState: {
                artworks: { selectedArtwork: mockArtwork, loading: false },
            },
        });

        // Abrir el modal
        const image = screen.getByAltText("A starry night sky");
        fireEvent.click(image);

        // Verificar que está abierto
        const closeButton = screen.getByRole("button", {
            name: /cerrar pantalla completa/i,
        });
        expect(closeButton).toBeInTheDocument();

        const zoomButton = screen.getByRole("button", {
            name: /botón de zoom/i,
        });
        expect(zoomButton).toBeInTheDocument();

        // Cerrar modal
        fireEvent.click(closeButton);

        // Verificar que se cerró el modal
        expect(
            screen.queryByRole("button", { name: /cerrar/i }),
        ).not.toBeInTheDocument();
    });
});
