export const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, "");
};

/**
 * Separa el string artist_display en nombre y detalles
 * Maneja:
 * 1. "Name\nDetails" (Formto de nueva línea)
 * 2. "Name (Details)" (Formato de paréntesis)
 * 3. "Name" (Formato Simple)
 */

export const splitArtistDisplay = (display: string | undefined | null) => {
    if (!display) return { name: "Artista Desconocido", details: "" };

    // Revisa primero si hay \n para darle más prioridad
    if (display.includes("\n")) {
        const parts = display.split("\n");
        return {
            name: parts[0].trim(),
            details: parts.slice(1).join("\n").trim(),
        };
    }

    // Revisa si hay paréntesis
    if (display.includes("(")) {
        const openingParenIndex = display.indexOf("(");
        const name = display.substring(0, openingParenIndex).trim();
        const details = display.substring(openingParenIndex).trim();

        return { name, details };
    }

    // Si no hay algún formto especial simplemente regresa el string como nombre
    return {
        name: display.trim(),
        details: "",
    };
};

export const parseHtmlParagraphs = (html: string): string[] => {
    const div = document.createElement("div");
    div.innerHTML = html;

    const paragraphs = Array.from(div.querySelectorAll("p"));

    if (paragraphs.length === 0) return [div.textContent?.trim() ?? ""];

    return paragraphs
        .map((p) => p.textContent?.trim() ?? "")
        .filter((text) => text.length > 0);
};
