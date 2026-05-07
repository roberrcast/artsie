import styled from "styled-components";
import {
    blur,
    externalLinkIcon,
    fluid,
    lineClamp,
    maxWidthContent,
    pillButton,
} from "../../styles/mixins";
import { ExternalLink } from "lucide-react";

export const MainContent = styled.article`
    padding: ${fluid("3rem", "4.84rem", "449.09px", "1500px")} 0 0 0;
    width: 100%;
`;

export const HeroSection = styled.section<{ $bgImage?: string }>`
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: ${(props) => props.theme.colors.background};

    background: ${(props) =>
        props.$bgImage
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.$bgImage})`
            : "#18181b"};

    background-size: cover;
    background-position: center;
    transform: translateZ(0);
    background-attachment: scroll;

    will-change: transform;

    @media (min-width: 1024px) {
        background-attachment: fixed;
        transform: none;
        will-change: auto;
    }
`;

export const HeroContainer = styled.div`
    ${maxWidthContent};
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Kicker = styled.p`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.tertiary2};
    font-weight: 600;
    letter-spacing: 0.2rem;
`;

export const Title = styled.h2`
    font-size: ${fluid("2.5rem", "3.5rem", "375px", "1500px")};
    color: ${(props) => props.theme.colors.background};
    font-weight: 700;
    text-align: center;
`;

export const DataBadge = styled.div`
    display: inline-block;
    padding: 0.75rem 2rem;
    margin-top: 1rem;
    background: ${(props) => props.theme.colors.rgba3};
    ${blur("12")};

    border: 1px solid ${(props) => props.theme.colors.rgba4};
    border-radius: 9999px;

    p {
        text-align: center;
        color: ${(props) => props.theme.colors.background};
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.05em;
    }
`;

export const ScrollIndicator = styled.div``;

export const ContentWrapper = styled.div`
    ${maxWidthContent};
`;

export const DescriptionSection = styled.section`
    background-color: ${(props) => props.theme.colors.surface};
    padding: 5rem 0;
`;

export const DescriptionWrapper = styled.div`
    ${maxWidthContent};
`;

// Palette
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.tertiary};

    svg {
        width: 54px;
        height: 54px;
    }
`;

export const DescriptionTitle = styled.h3`
    text-align: center;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
`;

export const DescriptionText = styled.p`
    max-width: 48rem;
    margin: 0 auto;
    padding-top: 1rem;
    text-align: center;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 600;
`;

export const ButtonContainer = styled.div``;

export const PrimaryButton = styled.a``;

export const SecondaryButton = styled.div``;

export const CollectionSection = styled.section`
    background-color: ${(props) => props.theme.colors.surface2};
    padding: 5rem 0;
    width: 100%;
`;

export const CollectionWrapper = styled.div`
    margin: 0 auto;
    ${maxWidthContent};
`;

export const CollectionHeader = styled.header``;

export const CollectionTitle = styled.h4`
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
`;

export const CollectionSubtitle = styled.p`
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 600;
`;

export const BentoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    height: auto;
    margin-top: 3rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(3, 300px);
        grid-auto-rows: 350px;
    }
`;

export const ArtCard = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.background};
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.7s ease;
    }

    @media (hover: hover) {
        &:hover img {
            transform: scale(1.1);
        }
    }

    &:nth-child(1) {
        @media (min-width: 768px) {
            grid-column: span 8;
            grid-row: span 2;
        }
    }

    &:nth-child(2) {
        @media (min-width: 768px) {
            grid-column: span 4;
            grid-row: span 2;
        }
    }

    &:nth-child(3),
    &:nth-child(4) {
        @media (min-width: 768px) {
            grid-column: span 6;
            grid-row: span 1;
        }
    }
`;

export const ArtInfoOverlay = styled.div`
    position: absolute;
    inset: 0;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );

    opacity: 0;
    transition: opacity 0.5s ease;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;

    @media (hover: hover) {
        ${ArtCard}:hover & {
            opacity: 1;
        }
    }
`;

export const OverlayTitle = styled.h4`
    color: ${(props) => props.theme.colors.background};
    font-size: 1.5rem;
    font-weight: 700;
    ${lineClamp(2)};
`;

export const OverlayDisplay = styled.p`
    color: ${(props) => props.theme.colors.placeHolderText};
    font-style: italic;
    ${lineClamp(1)};
`;

export const EmptyState = styled.div`
    background-color: ${(props) => props.theme.colors.surface2};
    padding: 5rem 0;

    @media (max-width: 1499px) {
        padding: 5rem 1rem;
    }
`;

export const EmptyWrapper = styled.div`
    ${maxWidthContent};
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 3rem;
    padding: ${fluid("1rem", "5rem", "500px", "1500px")};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;

export const IconWrapperEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${fluid("0rem", "1rem", "500px", "1500px")};
    color: ${(props) => props.theme.colors.tertiary};

    svg {
        width: "30px";
        height: "30px";
    }
`;

export const EmptyTitle = styled.h4`
    font-size: ${fluid("1.15rem", "1.875rem", "400px", "1500px")};
    font-weight: 700;
    text-align: center;
`;

export const EmptyText = styled.p`
    text-align: center;
    max-width: 36rem;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
`;

export const ExternalIcon = styled(ExternalLink)`
    ${externalLinkIcon};
`;

export const EmptyButton = styled.a`
    ${pillButton()};
`;
