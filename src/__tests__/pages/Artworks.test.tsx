import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import ArtworksPage from "../../pages/Artworks";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => ({
    ...(await vi.importActual("react-router-dom")),
    useNavigate: () => mockNavigate,
}));

vi.mock("../../store/artworksSlice", async (importantOriginal) => {
    const actual = await importantOriginal<any>();
    return {
        ...actual,
        fetchtArtworks: vi.fn((page) => ({
            type: "artworks/fetch/noop",
            payload: page,
        })),
    };
});
