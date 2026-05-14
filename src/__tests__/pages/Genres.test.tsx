import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import Genres from "../../pages/Genres";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("Genres page", () => {
    it("renders genres categories and navigates on click", () => {
        renderWithProviders(<Genres />);

        expect(screen.getByText(/impresionismo/i)).toBeInTheDocument();
        expect(screen.getByText(/neoclasicismo/i)).toBeInTheDocument();

        // Navegación
        const genreCard = screen.getByText(/impresionismo/i);
        fireEvent.click(genreCard);

        expect(mockNavigate).toHaveBeenCalledWith("/genres/Impressionism");
    });
});
