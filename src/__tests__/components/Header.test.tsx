import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import Header from "../../components/Header";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("Header component", () => {
    it("should render the Header and tests link click", () => {
        renderWithProviders(<Header />);

        // Logo title
        expect(screen.getAllByText(/the open gallery/i)[0]).toBeInTheDocument();

        // Links
        expect(screen.getAllByText(/Exhibiciones/i)[0]).toBeInTheDocument();
        expect(screen.getAllByText(/Galería/i)[0]).toBeInTheDocument();

        // Test click
        const exhibitionsLink = screen.getAllByText(/exhibiciones/i)[0];
        fireEvent.click(exhibitionsLink);

        expect(window.location.pathname).toBe("/exhibitions/");
    });

    it("should open search", () => {
        const { store } = renderWithProviders(<Header />);

        const searchButton = screen.getByLabelText("Abrir búsqueda");

        fireEvent.click(searchButton);

        const state = store.getState();
        expect(state.artworks.isSearchOpen).toBe(true);
    });
});
