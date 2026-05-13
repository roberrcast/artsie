import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "../test-utils";
import BottomNavBar from "../../components/BottomNavBar";

describe("BottomNavBar component", () => {
    it("renders all four navigation links", () => {
        renderWithProviders(<BottomNavBar />);

        expect(screen.getByText(/Exhibiciones/i)).toBeInTheDocument();
        expect(screen.getByText(/Artistas/i)).toBeInTheDocument();
        expect(screen.getByText(/Galería/i)).toBeInTheDocument();
        expect(screen.getByText(/Estilos/i)).toBeInTheDocument();
    });

    it("navigates to the correct path when clicked", () => {
        renderWithProviders(<BottomNavBar />);

        const artistLink = screen.getByText(/Artistas/i).closest("a");
        expect(artistLink).toHaveAttribute("href", "/artists/");
    });
});
