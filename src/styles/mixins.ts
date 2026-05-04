import { css, ThemeProvider } from "styled-components";
import type { ThemeType } from "./theme";

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

export const backgroundSurface = css`
    background-color: ${(props) => props.theme.colors.surface};
`;

export const maxWidthContent = css`
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;

    @-moz-document url-prefix() {
        max-width: 1400px;
    }

    @media (max-width: 1499px) {
        padding-left: ${fluid("0.5rem", "1rem", "400px", "1499px")};
        padding-right: ${fluid("0.5rem", "1rem", "400px", "1499px")};
    }
`;

export const flexAlignCenter = css`
    display: flex;
    align-items: center;
`;

export const buttonAlignment = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const iconStyle = (
    value: string,
    color: keyof ThemeType["colors"],
    hoverColor?: keyof ThemeType["colors"],
) => css`
    width: ${value};
    height: ${value};
    color: ${(props) => props.theme.colors[color]}; //Primary
    transition: color 0.3s ease;

    ${hoverColor &&
    css`
        @media (hover: hover) {
            &:hover {
                color: ${(props) => props.theme.colors[hoverColor]};
                cursor: pointer;
            }
        }
    `}
`;

export const titleStyle = css`
    font-size: 1.3rem;
    font-weight: 600;
`;

export const lineClamp = (lines: number) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lines};
`;

export const buttonHover = (
    backgroundColor: keyof ThemeType["colors"],
    color: keyof ThemeType["colors"],
) => css`
    @media (hover: hover) {
        &:hover {
            background-color: ${(props) => props.theme.colors[backgroundColor]};
            color: ${(props) => props.theme.colors[color]};
            cursor: pointer;
        }
    }
`;

export const border = (
    direction: string,
    color: keyof ThemeType["colors"],
) => css`
    border-${direction}: 1px solid ${(props) => props.theme.colors[color]};
`;

export const blur = (value: number | string) => css`
    backdrop-filter: blur(${value}px);
    -webkit-backdrop-filter: blur(${value}px);
`;

/* Button Hover for Attribution Banner component */

export const bannerButtonHover = (
    bgInit: keyof ThemeType["colors"],
    borderInit: keyof ThemeType["colors"],
    textInit: keyof ThemeType["colors"],
    bgHover: keyof ThemeType["colors"],
) => css`
    background-color: ${({ theme }) => theme.colors[bgInit]};
    border: 1px solid ${({ theme }) => theme.colors[borderInit]};
    color: ${({ theme }) => theme.colors[textInit]};

    @media (hover: hover) {
        &:hover {
            background-color: ${({ theme }) => theme.colors[bgHover]};
        }
    }
`;

export const underlineHover = css`
    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }
        &:hover::after {
            transform: scaleX(0);
        }
    }
`;

// Hover animation para los botones de la atribución y demás
interface HoverAnimationProps {
    shiftText?: string;
    iconRight?: string;
    iconTranslateY?: string;
    iconTranslateX?: string;
}

export const slideIconHover = ({
    shiftText = "-10px",
    iconRight = "1rem",
    iconTranslateY = "5px",
    iconTranslateX = "0",
}: HoverAnimationProps = {}) => css`
    position: relative;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    span:first-of-type {
        transition: transform 0.3s ease-in-out;
        z-index: 1;
    }

    span:last-of-type {
        position: absolute;
        right: ${iconRight};
        display: inline-flex;
        align-items: center;
        opacity: 0;
        transform: translateY(${iconTranslateY});
        transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease;
    }

    @media (hover: hover) {
        &:hover {
            span:first-of-type {
                transform: translateX(${shiftText});
            }

            span:last-of-type {
                transform: translateY(${iconTranslateX});
                opacity: 1;
            }
        }
    }
`;

export const artworkHover = (scale: number = 1.1) => css`
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s ease;
    }

    @media (hover: hover) {
        &:hover img {
            transform: scale(${scale});
        }
    }

    &:active {
        transform: scale(0.97);
        opacity: 0.9;
        transition: transform 0.1s ease;
    }
`;

export const externalLinkIcon = css`
    width: ${fluid("15px", "24px", "400px", "1500px")};
    height: ${fluid("15px", "24px", "400px", "1500px")};
    display: flex;
    align-items: center;
`;

export const pillButton = (
    backgroundColor: keyof ThemeType["colors"] = "primary",
    textColor: keyof ThemeType["colors"] = "background",
) => css`
    margin-top: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${fluid("1.1rem", "1.25rem", "400px", "1500px")}
        ${fluid("1.5rem", "2.5rem", "400px", "1500px")};

    /* Visuales */
    background-color: ${(props) => props.theme.colors[backgroundColor]};
    color: ${(props) => props.theme.colors[textColor]};
    border-radius: 9999px;
    border: none;
    cursor: pointer;

    /* Tipografía */
    font-size: ${fluid(".7rem", ".8rem", "400px", "1500px")};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    ${slideIconHover({ iconTranslateX: "-2px" })};
`;
