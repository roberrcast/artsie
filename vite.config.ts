import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/iiif": {
                target: "https://www.artic.edu",
                changeOrigin: true,
                headers: {
                    "AIC-User-Agent":
                        "art-school-project (dunamis1.16@gmail.com)",
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
                },
            },
        },
        hmr: {
            protocol: "ws",
            host: "localhost",
        },

        open: true,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
    },
});
