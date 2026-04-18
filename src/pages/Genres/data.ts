export interface Genre {
    id: string;
    label: string;
    query: string;
    description: string;
    coverId: string;
}

export const genreData = [
    {
        id: "impressionism",
        label: "Impresionismo",
        query: "impressionism",
        description: "Capturando los efectos fugaces de luz y color.",
        coverId: "25c31d56-66c3-0305-797c-ad3f07f2083b", // Monet's Water Lilies
    },

    {
        id: "surrealism",
        label: "Surrealismo",
        query: "surrealism",
        description: "Descubriendo el poder de la mente inconsciente",
        coverId: "a937a34c-6f81-5e2a-14d2-d85c822e0388", // Magritte
    },

    {
        id: "ancient-egyptian",
        label: "Antiguo Egipto",
        query: "ancient egyptian",
        description: "Símbolos eternos y tradiciones artísticas monumentales.",
        coverId: "4463a8e9-d779-197e-1282-e3251e605d8f", // Wall Painting
    },

    {
        id: "pop-art",
        label: "Arte Pop",
        query: "pop art",
        description:
            "Un tributo a la estética de la cultura de masas y el consumismo.",
        coverId: "3d64115e-8557-074f-955a-e47854f386f6", // Warhol
    },

    {
        id: "japanese-prints",
        label: "Grabados Japoneses",
        query: "japanese prints",
        description:
            "Dominio del trazo, el color plano y las evocadoras escenas grabadas en madera.",
        coverId: "2d30800b-6893-b64f-40e9-91340b001a4e", // Hokusai Great Wave
    },

    {
        id: "contemporary",
        label: "Arte Contemporáneo",
        query: "contemporary art",
        description:
            "Cuestionando las definiciones de arte en la era global moderna.",
        coverId: "30f40d6c-6745-f04b-741c-3081e7f3844f", // Modern Installation
    },
];
