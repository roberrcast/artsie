/* Función para solicitar dinámicamente el tamaño máximo de una obra, de otra manera habría un error
 * al solicitar un tamaño que no existe  386 */

export const getOptimalImageSize = (thumbnailWidth?: number): number => {
    if (!thumbnailWidth || thumbnailWidth < 200) {
        return 600;
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
