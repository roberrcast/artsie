import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderWithProviders, screen, fireEvent, waitFor } from "../test-utils";
import Home from "../../pages/Home";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

describe("Home Page", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    const mockInitialState = {
        artworks: {
            items: [],
            artists: [],
            styles: [],
            loading: false,
            error: null,
            total: 0,
            currentPage: 1,
            totalPages: 1,
            featuredArtwork: {
                id: 1,
                title: "Mock Masterpiece",
                description: "Mock Description",
                image_id: "some-fake-id",
                thumnail: { width: 400, height: 400, alt_text: "Alt" },
            },
            iiifUrl: "https://example.com/",
            selectedArtwork: null,
            isSearchOpen: false,
        },

        exhibitions: {
            items: [{ id: 101, title: "Mocked Expo", image_url: "test.jpg" }],
            loading: false,
            error: null,
        },
    };

    it("renders all main sections and tests both navigations", async () => {
        renderWithProviders(<Home />, { preloadedState: mockInitialState });

        // Hero banner renderiza
        expect(screen.getByText(/Bienvenido a/i)).toBeInTheDocument();

        // Revisar si el featured section muestra la obra
        expect(screen.getAllByText(/Mock Masterpiece/i).length).toBeGreaterThan(
            0,
        );

        // Revisar exhibiciones se muestran
        expect(screen.getByText(/Mocked Expo/i)).toBeInTheDocument();

        // Button click (featured mobile)
        const featuredMobileButton = screen.getAllByLabelText(
            "Botón para ver obra",
        )[0];
        fireEvent.click(featuredMobileButton);

        await waitFor(
            () => {
                expect(mockNavigate).toHaveBeenCalledWith("/artwork/1");
            },
            { timeout: 1000 },
        );

        // Exhibition card click navigation
        const expoCard = screen.getByText(/mocked expo/i).closest("div");
        if (expoCard) fireEvent.click(expoCard);

        expect(mockNavigate).toHaveBeenCalledWith("/exhibition/101");
    });
});
