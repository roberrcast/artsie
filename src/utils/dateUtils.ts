export const getDayOfYear = () => {
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const start = new Date(now.getFullYear(), 0, 0);

    const diff = today.getTime() - start.getTime();

    const oneDay = 1000 * 60 * 60 * 24;

    return Math.floor(diff / oneDay);
};

export const formatDate = (isoString: string | null): string => {
    if (!isoString) return "Fecha por confirmar";

    const date = new Date(isoString);

    return new Intl.DateTimeFormat("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
};
