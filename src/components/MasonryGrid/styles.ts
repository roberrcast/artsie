import styled from "styled-components";
import { artworkHover, lineClamp } from "../../styles/mixins";

export const MasonryContainer = styled.section<{ $isLoading?: boolean }>`
    column-count: 1;
    column-gap: 2rem;
    row-gap: 2rem;
    transition: opacity 0.3s ease;
    opacity: ${(props) => (props.$isLoading ? 0.5 : 1)};

    @media (min-width: 768px) {
        column-count: 3;
    }

    @media (min-width: 1024px) {
        column-count: 4;
    }
`;

export const ArtCard = styled.div`
    cursor: pointer;
    ${artworkHover(1.05)};
    margin-bottom: 2rem;
    break-inside: avoid;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ImageWrapper = styled.section`
    overflow: hidden;
    border-radius: 2rem;

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

export const ArtworkTitle = styled.h3`
    ${lineClamp(1)};
    font-size: 1.3rem;
    font-weight: 700;
`;

export const ArtworkArtist = styled.p`
    ${lineClamp(1)};
    font-weight: 500;
    color: ${(props) => props.theme.colors.exhibitionCardText};
`;
