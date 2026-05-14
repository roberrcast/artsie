import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen } from "../test-utils";
import GenreDetails from "../../pages/GenresDetails";
import fetchArtworksByTerm from "../../store/genresSlice";
