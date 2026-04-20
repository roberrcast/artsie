import styled from "styled-components";
import { artworkHover, maxWidthContent } from "../../styles/mixins";

export const PageContainer = styled.article`
    padding: 8rem 0;
    background-color: ${(props) => props.theme.colors.surface};
`;

export const PageWrapper = styled.div`
    ${maxWidthContent};
`;

export const HeaderSection = styled.header`
    margin-bottom: 4rem;
    max-width: 800px;
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
`;

export const Subtitle = styled.p`
    font-size: 1.17rem;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 400;
`;

export const GenreGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const GenreCard = styled.section`
    position: relative;
    aspect-ratio: 4 / 5;
    border-radius: 2rem;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
    }

    ${artworkHover(1.08)};
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 60%);
    opacity: 0.7;
    transition: opacity 0.5s ease;

    @media (hover: hover) {
        ${GenreCard}:hover & {
            opacity: 1;
        }
    }
`;

export const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2rem;
    width: 100%;
    color: ${(props) => props.theme.colors.background};
`;

export const GenreLabel = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.background};
`;

export const GenreDescription = styled.p`
    font-size: 0.875rem;
    line-height: 1.4;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.4s ease;
    font-weight: 500;

    @media (hover: hover) {
        ${GenreCard}:hover & {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
