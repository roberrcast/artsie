import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Home from "../../pages/Home";
import artworksReducer from "../../store/artworksSlice";
import exhibitionsReducer from "../../store/exhibitionsSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

const createMockStore = () =>
    configureStore({
        reducer: {
            artworks: artworksReducer,
            exhibitions: exhibitionsReducer,
        },
        preloadedState: {
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
                items: [
                    { id: 101, title: "Mocked Expo", image_url: "test.jpg" },
                ],
                loading: false,
                error: null,
            },
        } as any,
    });

describe("Home Page", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it("renders all main sections and tests button click and navigation", async () => {
        render(
            <Provider store={createMockStore()}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <Home />
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>,
        );

        // Hero banner renderiza
        expect(screen.getByText(/Bienvenido a/i)).toBeInTheDocument();

        // Revisar si el featured section muestra la obra
        expect(screen.getAllByText(/Mock Masterpiece/i).length).toBeGreaterThan(
            0,
        );

        // Revisar exhibiciones se muestran
        expect(screen.getByText(/Mocked Expo/i)).toBeInTheDocument();

        // Buttons clicks (featured mobile)
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
    });
});
