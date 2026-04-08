import styled from "styled-components";
import {
    backgroundSurface,
    buttonHover,
    lineClamp,
    maxWidthContent,
} from "../../styles/mixins";

export const FeaturedContainer = styled.section`
    ${backgroundSurface};
`;

export const FeaturedWrapper = styled.article`
    ${maxWidthContent};
    padding-top: 8rem;
    padding-bottom: 10rem;
    position: relative;
`;

export const ImageContainer = styled.figure`
    margin: 0;
    position: relative;
    width: 600px;
    height: 800px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const FeaturedHeader = styled.figcaption`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    background-color: ${(props) => props.theme.colors.background};
    position: absolute;
    box-sizing: border-box;
    width: 475px;
    height: 475px;
    padding: 2.5rem;
    bottom: -100px;
    left: 210px;
    transform: translateY(-50%);
    z-index: 10;
`;

export const Kicker = styled.p`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    /* word-spacing: 0.5rem; */
    letter-spacing: 0.063em;
    color: ${(props) => props.theme.colors.secondary2};
`;

export const FeaturedTitle = styled.h2`
    ${lineClamp(2)};
    font-size: 2rem;
`;

export const Description = styled.p`
    ${lineClamp(4)};
    color: ${(props) => props.theme.colors.secondary2};
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
    transition: all 0.3s ease-in-out;
    ${buttonHover("background", "primary")};
`;
