import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
