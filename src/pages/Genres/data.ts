export interface Genre {
    id: string;
    label: string;
    query: string;
    description: string;
    coverId: string;
}

export const genreData: Genre[] = [
    {
        id: "Impressionism",
        label: "Impresionismo",
        query: "impressionism",
        description: "Capturando los efectos fugaces de luz y color.",
        coverId: "3c27b499-af56-f0d5-93b5-a7f2f1ad5813", // Monet's Water Lilies
    },

    {
        id: "Surrealism",
        label: "Surrealismo",
        query: "Surrealism",
        description: "Descubriendo el poder de la mente inconsciente",
        coverId: "91e4c46b-9ef3-ca78-148c-86845e457d88", // Magritte
    },

    {
        id: "ancient",
        label: "Antigüedad",
        query: "ancient",
        description: "Civilizaciones perdidas y legados eternos.",
        coverId: "9365a024-75ce-75e9-756f-1c2c96eadec9", // Wall Painting
    },

    {
        id: "animals",
        label: "Animales",
        query: "animals",
        description: "La fauna capturada a través  de los siglos.",
        coverId: "f1e03813-f9c7-f4f8-fbe8-a5eeae84fda4", // Advance Guard
    },

    {
        id: "Japanese (culture or style)",
        label: "Grabados Japoneses",
        query: "Japanese (culture or style)",
        description: "Elegancia, precisión y la belleza de lo efímero.",
        coverId: "2fa24f36-cc26-41b6-4b49-12bba2a6c1c8", // Kanagawa Great Wave
    },

    {
        id: "architecture",
        label: "Arquitectura",
        query: "architecture",
        description: "La estructura y el espacio como expresión artística.",
        coverId: "62fd0e14-d7fe-0d01-ab00-1eed84b4f294", // Fountains
    },
];
