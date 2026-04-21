import styled from "styled-components";
import {
    artworkHover,
    lineClamp,
    maxWidthContent,
    slideIconHover,
} from "../../styles/mixins";

export const PageContainer = styled.article`
    padding: 8rem 0;
    background-color: ${(props) => props.theme.colors.surface};
`;

export const PageWrapper = styled.div`
    ${maxWidthContent};
`;

export const HeaderSection = styled.header`
    padding-top: 2rem;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.footerColorTxt2};
    font-weight: 600;
    transition: 0.3s ease-in-out;

    span {
        display: inline-flex;
        transition: transform 0.3s ease;
    }

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${(props) => props.theme.colors.tertiary};

            span {
                transform: translateX(-0.5rem);
            }
        }
    }
`;

export const Title = styled.h2`
    font-size: 5.5rem;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const Description = styled.p`
    line-height: 1.625;
    max-width: 48rem;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    margin-bottom: 5rem;
`;

export const MasonryContainer = styled.section`
    column-count: 1;
    column-gap: 2rem;
    @media (min-width: 768px) {
        column-count: 2;
    }
    @media (min-width: 1024px) {
        column-count: 4;
    }
`;

export const ArtCard = styled.div`
    ${artworkHover(1.05)};
    margin-bottom: 2rem;
    break-inside: avoid;
`;

export const ImageWrapper = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    margin-bottom: 1rem;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;

export const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const ArtTitle = styled.h3`
    ${lineClamp(1)};
    font-size: 1.3rem;
    font-weight: 700;
`;

export const ArtArtist = styled.p`
    ${lineClamp(1)};
    font-weight: 500;
    color: ${(props) => props.theme.colors.exhibitionCardText};
`;
