import React from "react";
import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import { theme } from "../styles/theme";
import type { RootState, AppStore } from "../store";

// Reducers
import artworksReducer from "../store/artworksSlice";
import artistsReducer from "../store/artistsSlice";
import exhibitionsReducer from "../store/exhibitionsSlice";
import genresReducer from "../store/genresSlice";
import searchReducer from "../store/searchSlice";

// Auxiliar para crear un store por default o personalizado
export const createTestStore = (preloadedState = {}) => {
    return configureStore({
        reducer: {
            artworks: artworksReducer,
            artists: artistsReducer,
            exhibitions: exhibitionsReducer,
            genres: genresReducer,
            search: searchReducer,
        },
        preloadedState,
    });
};

// Función auxiliar
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? DeepPartial<U>[]
        : T[P] extends object
          ? DeepPartial<T[P]>
          : T[P];
};

/* Componente reutilizable para evitar escribir el bloque <Provider> <BrowserRouter> <ThemeProvider> etc... una y
 * otra vez y mantener el código los más DRY posible */

const renderWithProviders = (
    ui: ReactElement,
    {
        preloadedState = {},
        store = createTestStore(preloadedState),
        ...renderOptions
    }: { preloadedState?: DeepPartial<RootState>; store?: AppStore } & Omit<
        RenderOptions,
        "queries"
    > = {},
) => {
    function Wrapper({ children }: { children: React.ReactNode }) {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export * from "@testing-library/react";

export { renderWithProviders };
