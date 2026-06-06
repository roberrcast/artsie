/* Función para solicitar dinámicamente el tamaño máximo de una obra, de otra manera habría un error
 * al solicitar un tamaño que no existe  386 */

export const getOptimalImageSize = (thumbnailWidth?: number): number => {
    if (!thumbnailWidth || thumbnailWidth < 200) {
        return 550;
    }
    return Math.min(843, thumbnailWidth);
};

export const buildImageUrl = (
    imageId: string | null | undefined,
    thumbnailWidth?: number,
): string => {
    if (!imageId) return "";
    const size = getOptimalImageSize(thumbnailWidth);
    return `/iiif/2/${imageId}/full/${size},/0/default.jpg`;
};

/* Función para optimizar el tamaño de las imágenes que obtenemos para la sección de exhibiciones
 * en home page */

export const optimizeExhibitionImage = (
    url: string | null | undefined,
): string => {
    if (!url) return "";

    if (url.includes("imgix.net")) {
        const baseUrl = url.split("?")[0]; // quitar la alta resolución de las imágenes de exhibiciones

        // Paramétros optimizados
        // w=600: suficiente para tarjetas
        // q=60: buen balance de calidad/tamaño
        // auto=format,compress: mejor compresión (webp/avif)
        // fit=crop: llena el contenedor
        return `${baseUrl}?auto=format,compress&fit=crop&w=600&q=60`;
    }

    return url;
};
