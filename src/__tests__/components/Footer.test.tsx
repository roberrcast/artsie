import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

describe("Footer component", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it("renders the main sections and social links", () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>,
        );

        expect(screen.getByText(/Inicio/i)).toBeInTheDocument();

        expect(screen.getByText(/Developer/i)).toBeInTheDocument();

        const gitHubLink = screen.getByRole("link", {
            name: /github profile/i,
        });
        expect(gitHubLink).toBeInTheDocument();
        expect(gitHubLink).toHaveAttribute(
            "href",
            "https://github.com/roberrcast",
        );

        const linkedInLInk = screen.getByRole("link", {
            name: /linkedin profile/i,
        });
        expect(linkedInLInk).toBeInTheDocument();
        expect(linkedInLInk).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer",
        );
    });

    it("navigates to the search page once a query is submitted in the footer", () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>,
        );

        const searchInput = screen.getByPlaceholderText(
            /explora los archivos del aic/i,
        );

        fireEvent.change(searchInput, { target: { value: "monet" } });
        expect(searchInput).toHaveValue("monet");

        const form = searchInput.closest("form");
        if (form) {
            fireEvent.submit(form);
        }

        expect(mockNavigate).toHaveBeenCalledWith("/search?q=monet");
    });

    it("navigagtes to the specific search when a tag is clicked", () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>,
        );

        const tag = screen.getByText(/óleo sobre lienzo/i);
        fireEvent.click(tag);

        // expect(window.location.pathname).toBe("/search");
        // expect(window.location.search).toContain("");
        expect(mockNavigate).toHaveBeenCalledWith("/search?q=Oil on Canvas");
    });
});
