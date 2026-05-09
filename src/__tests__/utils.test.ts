import { describe, it, expect } from "vitest";
import {
    buildImageUrl,
    optimizeExhibitionImage,
    getOptimalImageSize,
} from "../utils/imageUtils";
import { stripHtml, splitArtistDisplay } from "../utils/textUtils";
import { formatDate } from "../utils/dateUtils";

describe("Image Utilities", () => {
    it("should build a correct IIIF URL", () => {
        const url = buildImageUrl("12345", 400);
        expect(url).toContain("/iiif/2/12345/full/");
    });

    it("should optimize imgix exhibition URLs", () => {
        const highResUrl =
            "https://artic-web.imgix.net/image.jpg?rect=0,0,100,10";
        const optimized = optimizeExhibitionImage(highResUrl);
        expect(optimized).toContain("w=600");
        expect(optimized).toContain("q=60");
        expect(optimized).toContain("auto=format");
    });

    it("should return default size if thumbnail width is missing", () => {
        expect(getOptimalImageSize()).toBe(550);
    });
});

describe("Text utilities", () => {
    it("should strip HTML tags from strings", () => {
        const html = "<p>Hello <strong>World</strong></p>";
        expect(stripHtml(html)).toBe("Hello World");
    });

    it("should split artist display strings correctly", () => {
        const display = "Claude Monet (French, 1840-1926)";
        const { name, details } = splitArtistDisplay(display);
        expect(name).toBe("Claude Monet");
        expect(details).toBe("(French, 1840-1926)");
    });

    describe("Date utilities", () => {
        it("should format ISO dates correctly", () => {
            const date = "2023-05-20T00:00:00Z";
            expect(formatDate(date)).toContain("2023");
        });
    });
});
