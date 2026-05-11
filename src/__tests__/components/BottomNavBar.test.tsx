import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import BottomNavBar from "../../components/BottomNavBar";
import artworksReducer from "../../store/artworksSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const createMockStore = () =>
    configureStore({
        reducer: {
            artworks: artworksReducer,
        },
    });

describe("BottomNavBar component", () => {
    it("renders all four navigation links", () => {
        render(
            <Provider store={createMockStore()}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <BottomNavBar />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>,
        );

        expect(screen.getByText(/Exhibiciones/i)).toBeInTheDocument();
        expect(screen.getByText(/Artistas/i)).toBeInTheDocument();
        expect(screen.getByText(/Galería/i)).toBeInTheDocument();
        expect(screen.getByText(/Estilos/i)).toBeInTheDocument();
    });

    it("navigates to the correct path when clicked", () => {
        render(
            <Provider store={createMockStore()}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <BottomNavBar />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>,
        );

        const artistLink = screen.getByText(/Artistas/i).closest("a");
        expect(artistLink).toHaveAttribute("href", "/artists/");
    });
});
