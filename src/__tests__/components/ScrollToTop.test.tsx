import { describe, it, expect, vi, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import {
    BrowserRouter,
    useLocation,
    useNavigationType,
} from "react-router-dom";
import type { NavigationType } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

// Mock de los hooks de react-router-dom
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useLocation: vi.fn(),
        useNavigationType: vi.fn(),
    };
});

describe("ScrollToTop component", () => {
    beforeEach(() => {
        // mock del window.scrollTo
        window.scrollTo = vi.fn();
    });

    it("scrolls to top on PUSH navigation", () => {
        // Click simulado para navegación
        vi.mocked(useLocation).mockReturnValue({
            pathname: "/artists/",
            search: "",
            hash: "",
            state: null,
            key: "test",
        } as any);

        vi.mocked(useNavigationType).mockReturnValue("PUSH" as NavigationType);

        render(
            <BrowserRouter>
                <ScrollToTop />
            </BrowserRouter>,
        );

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it("does NOT scroll to top on POP navigation (back button)", () => {
        // Simulación back button
        vi.mocked(useLocation).mockReturnValue({
            pathname: "/home/",
            search: "",
            hash: "",
            state: null,
            key: "test2",
        } as any);
        vi.mocked(useNavigationType).mockReturnValue("POP" as NavigationType);

        render(
            <BrowserRouter>
                <ScrollToTop />
            </BrowserRouter>,
        );

        expect(window.scrollTo).not.toHaveBeenCalled();
    });
});
