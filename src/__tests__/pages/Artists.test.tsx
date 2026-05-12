import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import Artists from "../../pages/Artists";
import artistsReducer from "../../store/artistsSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
