import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react"; // We can use regular render
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import MasonryGrid from "../../components/MasonryGrid";
import { MasonryContainer } from "../../components/MasonryGrid/styles";

// Hacer mock de la imagen para evitar lógica compleja de la URL
vi.mock("../../utils/imageUtils", () => ({
    buildImageUrl: vi.fn((id) => `https://example.com/${id}.jpg`),
}));

describe("MasonryGrid component", () => {
    const mockItems = [
        {
            id: 1,
            title: "Obra 1",
            artist_display: "Artista 1",
            image_id: "img1",
        },
        {
            id: 2,
            title: "Obra 2",
            artist_display: "Artista 2",
            image_id: "img2",
        },
    ];

    const mockOnCardClick = vi.fn();

    it("renders the list of artworks correctly", () => {
        render(
            <ThemeProvider theme={theme}>
                <MasonryGrid items={mockItems} onCardClick={mockOnCardClick} />
            </ThemeProvider>,
        );

        expect(screen.getByText(/obra 1/i)).toBeInTheDocument();
        expect(screen.getByText(/obra 2/i)).toBeInTheDocument();
        expect(screen.getByText(/artista 1/i)).toBeInTheDocument();
    });

    it("calls onCardClick with the correct ID when a card is clicked", () => {
        render(
            <ThemeProvider theme={theme}>
                <MasonryGrid items={mockItems} onCardClick={mockOnCardClick} />
            </ThemeProvider>,
        );

        fireEvent.click(screen.getByText("Obra 1"));
        expect(mockOnCardClick).toHaveBeenCalledWith(1);
    });

    it("returns null when loading and no items are present", () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <MasonryGrid
                    items={[]}
                    loading={true}
                    onCardClick={mockOnCardClick}
                />
            </ThemeProvider>,
        );

        expect(container.firstChild).toBeNull();
    });
});
