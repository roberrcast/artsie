import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderWithProviders, screen, fireEvent, waitFor } from "../test-utils";
import SearchPage from "../../pages/Search";
import { fetchSearchResults } from "../../store/searchSlice";

const mockNavigate = vi.fn();
const mockSetSearchParams = vi.fn();

vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useSearchParams: () => [
            new URLSearchParams("q=monet"),
            mockSetSearchParams,
        ],
    };
});

vi.mock("../../store/searchSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchSearchResults: vi.fn((query) => ({
            type: "search/fetch/noop",
            payload: query,
        })),
    };
});

describe("Search page", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
        mockSetSearchParams.mockClear();
        vi.mocked(fetchSearchResults).mockClear();
    });

    it("performs search and renders results", async () => {
        const mockResults = [
            {
                id: 10,
                title: "Lirios",
                artist_display: "Monet",
                image_id: "m1",
            },
        ];

        renderWithProviders(<SearchPage />, {
            preloadedState: {
                search: { results: mockResults, loading: false, error: null },
            },
        });

        // Initial mount
        await waitFor(() => {
            expect(fetchSearchResults).toHaveBeenCalledWith("monet");
        });

        // Revisar si el título muestra el query
        expect(screen.getByText(/"monet"/i)).toBeInTheDocument();
        expect(screen.getByText(/lirios/i)).toBeInTheDocument();

        // Probar con un nuevo query
        const input = screen.getByPlaceholderText(/buscar en la colección/i);
        fireEvent.change(input, { target: { value: "paris" } });
        expect(input).toHaveValue("paris");

        // Envpío de la forma
        fireEvent.submit(screen.getByRole("button", { name: /buscar/i }));

        expect(mockSetSearchParams).toHaveBeenCalledWith({ q: "paris" });
    });
});
