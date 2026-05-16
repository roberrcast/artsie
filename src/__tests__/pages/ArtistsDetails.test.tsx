import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import ArtistDetails from "../../pages/ArtistDetails";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useParams: () => ({ id: "1" }),
    };
});

vi.mock("../../store/artistsSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchArtistsWithWorks: vi.fn(() => ({ type: "artists/details/noop" })),
    };
});

describe("ArtistsDetails page", () => {
    const mockArtist = {
        id: 1,
        title: "Claude Monet",
        birth_date: 1840,
        death_date: 1926,
        description: "<p>Líder del movimiento impresionista.</p>",
    };

    const mockWorks = [
        {
            id: 10,
            title: "Lirios",
            image_id: "m1",
            date_display: "1914",
            description: "Lorem Ipsum",
        },
        { id: 11, title: "Pajaros", image_id: "m2", date_display: "1890" },
    ];

    it("renders artist details and their gallery", () => {
        renderWithProviders(<ArtistDetails />, {
            preloadedState: {
                artists: {
                    selectedArtist: mockArtist,
                    artistWorks: mockWorks,
                    loading: false,
                },
            },
        });

        expect(screen.getByText(/claude monet/i)).toBeInTheDocument();
        expect(screen.getByText(/1840 — 1926/i)).toBeInTheDocument();
        expect(screen.getByText(/líder del movimiento/i)).toBeInTheDocument();

        // Revisar los items de la galería
        expect(screen.getByText(/lirios/i)).toBeInTheDocument();
        expect(screen.getByText(/pajaros/i)).toBeInTheDocument();

        // Revisar navegación
        fireEvent.click(screen.getByText(/lirios/i));
        expect(mockNavigate).toHaveBeenCalledWith("/artwork/10");
    });

    it("shows restricted access message when no works are found", () => {
        renderWithProviders(<ArtistDetails />, {
            preloadedState: {
                artists: {
                    selectedArtist: mockArtist,
                    artistWorks: [],
                    loading: false,
                },
            },
        });

        expect(
            screen.getByText(/no hay obras disponibles/i),
        ).toBeInTheDocument();
        expect(
            screen.getByText(/visite el aic para más detalles/i),
        ).toBeInTheDocument();
    });
});
