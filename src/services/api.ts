import axios from "axios";

// Creamos una base para axios para DRY
const api = axios.create({
    baseURL: "https://api.artic.edu/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

// Definimos las llamadas a la API
// 1) Lista de artworks (paginados)
export const getArtworks = (page = 1, limit = 12) => {
    return api.get(`/artworks?page=${page}&limit=${limit}`);
};

// 2) Buscar obras de arte (texto-completo)
export const searchArtworks = (query: string) => {
    return api.get(`/artworks/search?q=${query}`);
};

// 3) Detalles de una obra de arte (id específica)
export const getArtworkById = (id: number) => {
    return api.get(`/artworks/${id}`);
};

// Hacer fetch de lista para artistas (populares/featured)
export const getArtists = (limit = 4) => {
    return api.get(`/agents?limit=${limit}&fields=id,title`);
};

// Fetch para los géneros/estilos (estilos artísticos)
export const getArtStyles = (limit = 4) => {
    return api.get(`/art-styles?limit=${limit}&fields=id, title`);
};

export default api;
