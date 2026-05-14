import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import Details from "../../pages/Details";
import { fetchArtworkDetails } from "../../store/artworksSlice";
