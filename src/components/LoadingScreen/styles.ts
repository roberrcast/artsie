import styled, { keyframes } from "styled-components";
import canvasImg from "../../assets/loading_canvas.png";
import { fluid } from "../../styles/mixins";

const drawLine = keyframes`
0% { width: 0; opacity: 0; }
50% { width: 120px; opacity: 1;}
100% { width: 0; opacity: 0;}
`;

const fadeInOut = keyframes`
0%, 100% { opacity: 0.2; }
50% { opacity: 1; }
`;

export const LoadingOverlay = styled.main`
    position: fixed;
    inset: 0;
    z-index: 9999;
    background-color: ${(props) => props.theme.colors.surface};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100vw;
    box-sizing: border-box;
`;

export const CanvasBackground = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.5;
    pointer-events: none;
    background-image: url(${canvasImg});
    background-size: cover;
    z-index: 0;
`;

export const CenterContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    /* max-width: 42rem; */
    padding: 0 1.5rem;
`;

export const ImageWrapper = styled.div`
    margin-bottom: 4rem;
    animation: ${fadeInOut} 4s ease-in-out infinite;

    @media (max-width: 480px) {
        margin-bottom: 2rem;
    }

    div {
        width: 6rem;
        height: 8rem;
        border: 1px solid rgba(26, 26, 26, 0.2);
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(0.3);
        opacity: 0.8;
        mix-blend-mode: multiply;
    }
`;

export const Title = styled.h1`
    font-size: ${fluid("1rem", "2.25rem", "480px", "1500px")};
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    letter-spacing: -0.02rem;
    margin-bottom: ${fluid("1rem", "2rem", "480px", "1500px")};
    width: 100%;
    word-wrap: break-word;
`;

export const LoaderContainer = styled.div`
    position: relative;
    height: 1px;
    width: 8rem;
    background-color: ${(props) => props.theme.colors.borderColor};
    overflow: hidden;
    margin-bottom: 3rem;
    border-radius: 9999px;
`;

export const LineLoader = styled.div`
    height: 1px;
    background-color: ${(props) => props.theme.colors.primary};
    margin: 0 auto;
    animation: ${drawLine} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

export const Subtitle = styled.p`
    color: ${(props) => props.theme.colors.footerColorTxt2};
    font-size: ${fluid("0.875rem", "1rem", "480px", "1500px")};
    width: 100%;
    max-width: 28rem;
    line-height: 1.625;
    opacity: 0.6;
`;

export const Footer = styled.footer`
    position: absolute;
    bottom: ${fluid("2rem", "3rem", "480px", "1500px")};
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const Branding = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.primary};
`;

export const CopyrightContainer = styled.div`
    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    width: 6rem;
    padding-top: 1.5rem;
    text-align: center;
`;

export const CopyrightText = styled.p`
    font-size: 9px;
    color: ${(props) => props.theme.colors.footerColorTxt2};
    letter-spacing: 0.2rem;
    text-transform: uppercase;
`;

export const TopLeftBranding = styled.div`
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-family: ${(props) => props.theme.fonts.display};
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.primary};

    @media (max-width: 480px) {
        top: 1.5rem;
        left: 1.5rem;
        font-size: 1rem;
    }
`;

export const TopRightIcon = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        top: 1.5rem;
        right: 1.5rem;
    }
`;
