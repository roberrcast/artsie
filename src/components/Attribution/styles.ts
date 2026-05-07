import styled from "styled-components";
import {
    bannerButtonHover,
    fluid,
    maxWidthContent,
    slideIconHover,
} from "../../styles/mixins";
import { ExternalLink } from "lucide-react";

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
    padding: ${fluid("3.5rem", "5rem", "600px", "1500px")};
`;

export const BannerKicker = styled.p`
    color: ${(props) => props.theme.colors.background};
    text-transform: uppercase;
    font-size: ${fluid(".85rem", "1rem", "500px", "1500px")};
    font-weight: 600;
    letter-spacing: 0.1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
`;

export const BannerTitle = styled.h2`
    color: ${(props) => props.theme.colors.background};
    font-size: ${fluid("1.75rem", "3rem", "500px", "1500px")};
    margin-bottom: 2.5rem;
    text-align: center;
`;

export const BannerText = styled.p`
    font-size: ${fluid(".85rem", "1.1rem", "500px", "1500px")};
    color: ${(props) => props.theme.colors.background};
    font-weight: 600;
    opacity: 0.9;
    max-width: 42rem;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const BaseButton = styled.a`
    font-size: ${fluid(".75rem", "1rem", "500px", "1500px")};
    text-transform: uppercase;
    font-weight: 900;
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    ${slideIconHover()};
    text-align: center;
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

    &:active {
        transition: all 0.3s ease;
        background-color: ${(props) => props.theme.colors.surfaceTint};
        color: ${(props) => props.theme.colors.background};
        transform: scale(0.95);
        border-color: color: ${(props) => props.theme.colors.background};;
    }
`;

export const LinkDocs = styled(BaseButton)`
    ${bannerButtonHover(
        "surfaceTint",
        "surface",
        "surface",
        "backgroundLink2",
    )};

    &:active {
        transition: all 0.1s ease;
        background-color: ${(props) => props.theme.colors.surface};
        color: ${(props) => props.theme.colors.surfaceTint};
        transform: scale(0.95);
    }
`;

export const Link = styled(ExternalLink)`
    width: ${fluid("15px", "24px", "500px", "1500px")};
    height: ${fluid("15px", "24px", "500px", "1500px")};
`;
