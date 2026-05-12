import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Header from "../../components/Header";
import artworksReducer from "../../store/artworksSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const createMockStore = () =>
    configureStore({
        reducer: { artworks: artworksReducer },
    });

describe("Header component", () => {
    it("should render the Header and tests link click", () => {
        render(
            <Provider store={createMockStore()}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <Header />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>,
        );

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
        const store = createMockStore();
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <Header />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>,
        );

        const searchButton = screen.getByLabelText("Abrir búsqueda");

        fireEvent.click(searchButton);

        const state = store.getState();
        expect(state.artworks.isSearchOpen).toBe(true);
    });
});
