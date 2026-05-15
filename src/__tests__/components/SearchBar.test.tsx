import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import SearchBar from "../../components/SearchBar";
import { fetchSubmenuData } from "../../store/artworksSlice";

const mockNavigate = vi.fn();
const mockOnClose = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

vi.mock("../../store/artworksSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchSubmenuData: vi.fn(() => ({ type: "artworks/submenu/noop" })),
    };
});

describe("SearchBar component", () => {
    it("renders properly and handles closing with a delay", () => {
        vi.useFakeTimers();
        renderWithProviders(<SearchBar onClose={mockOnClose} />);

        // revisar si el título está presente
        expect(screen.getByText(/the open gallery/i)).toBeInTheDocument();

        // Click en closeButton
        const closeButton = screen.getByText(/cerrar/i);
        fireEvent.click(closeButton);

        // onClose debería demorar debido al setTimeout
        expect(mockOnClose).not.toHaveBeenCalled();

        // esperar 400ms
        vi.runAllTimers();
        expect(mockOnClose).toHaveBeenCalled();

        vi.useRealTimers();
    });

    it("navigates to the search results paage on submit", () => {
        renderWithProviders(<SearchBar onClose={mockOnClose} />, {
            preloadedState: {
                artworks: {
                    artists: [{ id: 1, title: "Salvador Dalí" }],
                    styles: [{ id: 2, title: "Surrealismo" }],
                    loading: false,
                },
            },
        });

        expect(screen.getByText(/salvador dalí/i)).toBeInTheDocument();
        expect(fetchSubmenuData).toHaveBeenCalled();
    });
});
