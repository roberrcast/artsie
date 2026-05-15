import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, fireEvent } from "../test-utils";
import SearchBar from "../../components/SearchBar";
import { fetchSubmenuData } from "../../store/artworksSlice";
