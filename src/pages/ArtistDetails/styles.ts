import styled from "styled-components";
import {
    artworkHover,
    lineClamp,
    maxWidthContent,
    pillButton,
} from "../../styles/mixins";

export const MainContent = styled.article`
    padding: 4.84rem 0;
`;

export const HeroSection = styled.div<{ $bgImage?: string }>`
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 700px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 5rem;
    overflow: hidden;
    color: ${(props) => props.theme.colors.background};

    background: ${(props) =>
        props.$bgImage
            ? `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${props.$bgImage})`
            : "#18181b"};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`;

export const HeroContainer = styled.div`
    ${maxWidthContent};
`;

export const ArtistTag = styled.p`
    display: inline-block;
    padding: 0.25rem 1rem;
    background-color: ${(props) => props.theme.colors.artistTagBg};
    color: ${(props) => props.theme.colors.artistTagFont};
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`;

export const Name = styled.h1`
    font-size: 6rem;
    font-weigth: 700;
    color: ${(props) => props.theme.colors.background};
    margin-bottom: 1rem;
`;

export const Dates = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.8;
`;

export const BioSection = styled.section`
    ${maxWidthContent};
    padding: 6rem 0;
    display: grid;
    gap: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
    }
`;

export const BioWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.surface};
`;

export const BioTitleWrapper = styled.div`
    @media (min-width: 768px) {
        grid-column: span 4;
    }
`;

export const BioTitle = styled.h3`
    font-size: 2.25rem;
`;

export const TitleAccent = styled.div`
    width: 6rem;
    height: 0.25rem;
    background-color: ${(props) => props.theme.colors.tertiary};
    margin-top: 2rem;
    border-radius: 9999px;
`;

export const BioText = styled.div`
    font-size: 1.125rem;
    line-height: 1.8;
    color: ${(props) => props.theme.colors.textMuted};

    @media (min-width: 768px) {
        grid-column: span 8;
    }

    p {
        margin-bottom: 2rem;
    }
`;

export const GallerySection = styled.section`
    ${maxWidthContent};
`;

export const GalleryHeader = styled.div`
    margin-bottom: 2rem;
`;

export const SectionTitle = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const FeaturedCard = styled.div`
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    height: 600px;
    ${artworkHover(1.05)};

    @media (min-width: 768px) {
        grid-column: span 2;
    }

    h3 {
        font-size: 2rem;
    }
`;

export const CardOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
`;

export const WorkDate = styled.p`
    color: ${(props) => props.theme.colors.background};
    opacity: 0.8;
    font-weight: 700;
    font-size: 0.9rem;
`;

export const WorkTitle = styled.h3`
    ${lineClamp(1)};
    color: ${(props) => props.theme.colors.background};
    font-weight: 600;
`;

export const FeaturedDescription = styled.div`
    ${lineClamp(2)};
    color: ${(props) => props.theme.colors.background};
    max-width: 24rem;

    p {
        font-size: 0.9rem;
        display: inline;
        margin: 0;

        a {
            color: ${(props) => props.theme.colors.background};
        }
    }
`;

export const SideStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SmallCard = styled.div`
    position: relative;
    border-radius: 2rem;
    overflow: hidden;
    height: 285px;
    ${artworkHover(1.05)};
`;

export const RestrictedSection = styled.section`
    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
    padding-top: 3rem;
`;

export const RestrictedWrapper = styled.div`
    ${maxWidthContent};
    border-radius: 2rem;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 6rem;
`;

export const LockIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    svg {
        height: 50px;
        width: 50px;
        color: ${(props) => props.theme.colors.tertiary2};
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.05));
    }
`;

export const RestrictedTitle = styled.h3`
    font-size: 2.25rem;
    text-align: center;
`;

export const RestrictedText = styled.p`
    max-width: 42rem;
    line-height: 1.75rem;
    text-align: center;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
`;

export const ExternalLinkButton = styled.a`
    ${pillButton()};
`;
