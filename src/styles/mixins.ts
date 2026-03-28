import { css } from "styled-components";

// Tipado interno
interface ParsedValue {
    val: number;
    unit: string;
}

//Funciones no exportadas para uso interno

// Función para separar números de unidades
const parseUnit = (value: string | number): ParsedValue => {
    const match = String(value).match(/(-?[\d.]+)([a-z%]*)/);
    if (!match) return { val: parseFloat(String(value)), unit: "" };
    return { val: parseFloat(match[1]), unit: match[2] };
};

//Función interna para convertir a pixeles
const convertToPx = (value: string | number, rootFontSize = 16) => {
    const { val, unit } = parseUnit(value);
    if (unit === "rem") {
        return val * rootFontSize;
    }

    return val;
};

// --Funciones y mixins exportados--

// una función auxiliar para generar un clamp() en CSS para fluidamente escalar valores
// @param {string} min - el valor mínimo (p.ej., '0.7rem').
// @param {string} pref - el valor preferido (p.ej., 1rem) .
// @param {string} max - el valor máximo (p.ej., 22rem).
// @returns {string} una función clamp() CSS.

export const fluid = (
    minSize: string | number,
    maxSize: string | number,
    minBreakpoint: string | number,
    maxBreakpoint: string | number,
) => {
    //Convertimos todos los inputs a pixeles para calcular correctamente
    const minSizePx = convertToPx(minSize);
    const maxSizePx = convertToPx(maxSize);
    const minBreakpointPx = convertToPx(minBreakpoint);
    const maxBreakpointPx = convertToPx(maxBreakpoint);

    const slope = (maxSizePx - minSizePx) / (maxBreakpointPx - minBreakpointPx);

    //El intercept ahora está calculado en pixeles
    const interceptPx = minSizePx - slope * minBreakpointPx;

    //La parte media de la función clamp(), usando el slope e intercept calculados
    const preferredValue = `${(slope * 100).toFixed(4)}vw + ${(interceptPx / 16).toFixed(4)}rem`;

    //Usamos los valores originales de min/max en el clamp() final para precisión
    return `clamp(${minSize}, ${preferredValue}, ${maxSize})`;
};

export const flexAlignCenter = css`
    display: flex;
    align-items: center;
`;
