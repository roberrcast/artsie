import styled from "styled-components";
import {
    bannerButtonHover,
    maxWidthContent,
    slideIconHover,
} from "../../styles/mixins";

export const Banner = styled.section`
    background-color: ${(props) => props.theme.colors.surfaceTint};
`;

export const BannerWrapper = styled.section`
    ${maxWidthContent};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 5rem;
`;

export const BannerKicker = styled.p`
    color: ${(props) => props.theme.colors.background};
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
`;

export const BannerTitle = styled.h2`
    color: ${(props) => props.theme.colors.background};
    font-size: 3rem;
    margin-bottom: 2.5rem;
`;

export const BannerText = styled.p`
    color: ${(props) => props.theme.colors.background};
    font-weight: 600;
    opacity: 0.9;
    max-width: 42rem;
    text-align: center;
    line-heigth: 1.5rem;
    margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
`;

export const BaseButton = styled.a`
    text-transform: uppercase;
    font-weight: 900;
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    ${slideIconHover()};
`;

// -- bannerButtonHover --
// surface: color de fondo
// surfaceTint: color de border
// surfaceTint: color de texto
// surfaceTint: color de fondo en hover
//  -- bannerButtonHover --

export const LinkHome = styled(BaseButton)`
    background-color: ${(props) => props.theme.colors.surface};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors.surfaceTint};
    ${bannerButtonHover(
        "surface",
        "surfaceTint",
        "surfaceTint",
        "backgroundLink1",
    )};
`;

export const LinkDocs = styled(BaseButton)`
    ${bannerButtonHover(
        "surfaceTint",
        "surface",
        "surface",
        "backgroundLink2",
    )};
`;
