import axios from "axios";

// Creamos una base para axios para DRY
const api = axios.create({
    baseURL: "https://api.artic.edu/api/v1",
    headers: {
        "Content-Type": "application/json",
        "AIC-User-Agent": "art-project (dunamis1.16@gmail.com)",
    },
});

// Definimos las llamadas a la API
//  Lista de artworks (paginados)
export const getArtworks = (page = 1, limit = 12) => {
    return api.get(`/artworks?page=${page}&limit=${limit}`);
};

//  Buscar obras de arte (texto-completo)
export const searchArtworks = (query: string) => {
    return api.get(`/artworks/search?q=${query}`);
};

//  Detalles de una obra de arte (id específica)
export const getArtworkById = (id: number) => {
    const fields =
        "id,title,artist_display,date_display,medium_display,dimensions,credit_line,description,image_id,thumbnail";
    return api.get(`/artworks/${id}?fields=${fields}`);
};

// Hacer fetch de lista para artistas (populares/featured)
export const getArtists = (limit = 4) => {
    return api.get(`/agents?limit=${limit}&fields=id,title`);
};

// Fetch para los géneros/estilos (estilos artísticos)
export const getArtStyles = (limit = 4) => {
    return api.get(`/artwork-types?limit=${limit}&fields=id,title`);
};

// Fetch para el featured artworks (dominio público)
export const getFeaturedBatch = () => {
    // Usamos el endpoint búsqueda con el filtro para dominio público
    return api.get(
        `/artworks/search?query[term][is_public_domain]=true&limit=50&fields=id,title,artist_display,image_id,description,thumbnail&sort=id`,
    );
};

// Fetch para las exhibiciones actuales
export const getExhibitions = (limit = 20) => {
    const query = { query: { term: { is_featured: true } }, size: limit };
    const encodedParams = encodeURIComponent(JSON.stringify(query));
    return api.get(
        `/exhibitions/search?params=${encodedParams}&fields=id,title,short_description,image_url,gallery_title,api_model,is_featured,aic_start_at,aic_end_at`,
    );
};

// Fetch de los deatalles de una exhibición
export const getExhibitionById = (id: string | number) => {
    return api.get(
        `/exhibitions/${id}?fields=id,title,image_url,short_description,web_url,aic_start_at,aic_end_at,gallery_title,api_model,description,artwork_ids`,
    );
};

export const getArtworksByIds = (ids: number[]) => {
    const idsString = ids.join(",");
    const fields = "id,title,artist_display,image_id";
    return api.get(`/artworks?ids=${idsString}&fields=${fields}`);
};

export default api;
