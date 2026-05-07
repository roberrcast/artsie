import styled from "styled-components";
import {
    backgroundSurface,
    buttonHover,
    fluid,
    lineClamp,
    maxWidthContent,
} from "../../styles/mixins";

export const FeaturedContainer = styled.section`
    ${backgroundSurface};
`;

export const FeaturedWrapper = styled.article`
    ${maxWidthContent};
    padding-top: ${fluid("3.5rem", "6.5rem", "600px", "1500px")};
    padding-bottom: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px) {
        padding-bottom: 3.5rem;
    }
`;

export const ImageContainer = styled.figure`
    margin: 0;
    position: relative;
    aspect-ratio: 4/5;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

    will-change: transform;

    @media (min-width: 700px) {
        width: 600px;
        height: 800px;
        aspect-ratio: auto;
        border-radius: 0rem;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const FeaturedHeader = styled.figcaption`
    display: none;

    @media (min-width: 700px) {
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        gap: 1.2rem;
        background-color: ${(props) => props.theme.colors.background};
        width: 475px;
        height: 475px;
        padding: 2.5rem;
        bottom: -100px;
        left: 210px;
        transform: translateY(-50%);
        z-index: 10;
        box-sizing: border-box;
    }
`;

export const Kicker = styled.p`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.063em;
    color: ${(props) => props.theme.colors.rgba11};

    @media (min-width: 700px) {
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const FeaturedTitle = styled.h2`
    ${lineClamp(2)};
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
`;

export const Description = styled.p`
    ${lineClamp(4)};
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    font-weight: 500;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const FeaturedButton = styled.button`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.secondary2};
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.secondary2};
    transition:
        background-color 0.3s ease,
        transform 0.3s ease,
        color 0.3s ease;
    ${buttonHover("background", "primary")};

    &:active {
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.background};
        transform: scale(0.94);
    }
`;

// --- COMPONENTES MÓVILES ---
export const MobileHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    inset: 0;
    padding: 2rem;
    overflow: hidden;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        transparent 100%
    );
    z-index: 5;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const MobileKicker = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.tertiary2};
    margin-bottom: 0.5rem;
`;

export const MobileTitle = styled.h3`
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    ${lineClamp(2)};
`;

export const MobileDescription = styled.p`
    color: ${(props) => props.theme.colors.rgba};
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    ${lineClamp(2)};
`;

export const MobileButton = styled.button`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    font-weight: 900;
    font-size: 0.7rem;
    text-transform: uppercase;
    align-self: flex-start;
    flex-shrink: 0;
    transition:
        background-color 0.3s ease,
        transform 0.3s ease,
        color 0.3s ease;
    pointer-events: auto;
    ${buttonHover("tertiary2", "primary")};

    &:active {
        /* transition: all 0.1s ease; */
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.background};
        transform: scale(0.94);
    }
`;
