import { describe, vi, it, beforeEach, expect } from "vitest";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { createTestStore } from "./test-utils";
import { render, screen, act } from "@testing-library/react";
import App from "../App";

// Mock storage session
const mockSessionStorage = () => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value;
        },
        clear: () => {
            store = {};
        },
    };
};

vi.mock("../store/artworksSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchArtworks: vi.fn(() => ({ type: "noop" })),
        fetchFeaturedArtwork: vi.fn(() => ({ type: "noop" })),
    };
});

vi.mock("../store/exhibitionsSlice", async (importOriginal) => {
    const actual = await importOriginal<any>();
    return {
        ...actual,
        fetchExhibitionsWithImages: vi.fn(() => ({ type: "noop" })),
    };
});

Object.defineProperty(window, "sessionStorage", {
    value: mockSessionStorage(),
});

describe("App component", () => {
    beforeEach(() => {
        sessionStorage.clear();
        vi.useFakeTimers();
    });

    const store = createTestStore();

    it("renders the loading screen initially and transitions to the home page", async () => {
        render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>,
        );

        // Loading screen
        expect(screen.getByText(/the open gallery/i)).toBeInTheDocument();

        // Avanzar el tiempo por 3.5s
        act(() => {
            vi.advanceTimersByTime(3500);
        });

        expect(screen.getByText(/bienvenido a/i)).toBeInTheDocument();

        expect(sessionStorage.getItem("hasSeenLoader")).toBe("true");

        vi.useRealTimers();
    });

    it("skips the loading screen if 'hasSeenLoader' is set", () => {
        sessionStorage.setItem("hasSeenLoader", "true");

        render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Provider>,
        );

        expect(screen.getByText(/bienvenido a/i)).toBeInTheDocument();
    });
});
