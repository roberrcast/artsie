import styled, { css } from "styled-components";
import {
    fluid,
    lineClamp,
    maxWidthContent,
    underlineHover,
} from "../../styles/mixins";

export const SectionContainer = styled.section`
    background-color: ${(props) => props.theme.colors.surface2};
`;

export const SectionWrapper = styled.div`
    ${maxWidthContent};
    padding: ${fluid("3.5rem", "8rem", "600px", "1500px")} 0;

    @media (max-width: 768px) {
        padding-right: unset;
    }
`;

export const Kicker = styled.p`
    font-size: ${fluid(".75rem", "1rem", "500px", "1500px")};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textMuted};
    letter-spacing: 0.1rem;
    font-weight: 500;

    @media (max-width: 768px) {
        margin-bottom: 0.5rem;
    }
`;

export const TitleNavContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding-right: 1rem;
    }

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Explore = styled.button`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.tertiary};
    font-size: ${fluid(".75rem", "1.1rem", "500px", "1500px")};
    letter-spacing: 0.1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};
    position: relative;
    border: none;
    background: transparent;

    @media (max-width: 499px) {
        font-size: 0.95rem;
        width: 175px;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: ${(props) => props.theme.colors.tertiary};
        transition: transform 0.4s ease;
        transform-origin: left center;
    }

    ${underlineHover};
`;

export const Title = styled.h2`
    font-size: ${fluid("1.2rem", "2.5rem", "375px", "1500px")};
`;

export const Grid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;

    @media (max-width: 768px) {
        display: flex;
        overflow-x: auto;
        gap: 1.5rem;
        padding: 0 1.5rem 2rem;
        scroll-snap-type: x mandatory;
        &::-webkit-scrollbar {
            displayl: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;

const commonSpacing = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Card = styled.div`
    ${commonSpacing};
    cursor: pointer;

    @media (max-width: 768px) {
        flex: 0 0 280px;
        scroll-snap-align: start;
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.textMuted};
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: 3rem;

    @media (min-width: 768px) {
        aspect-ratio: 3 / 4;
        border-radius: 0rem;
    }

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: auto;

        object-fit: cover;
        object-position: center;

        min-width: 100%;
        min-height: 100%;
    }
`;

export const Content = styled.div`
    ${commonSpacing};
`;

export const Type = styled.p`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
    font-size: ${fluid(".9rem", "1rem", "600px", "1500px")};
`;

export const ExhibitionTitle = styled.h3`
    font-size: ${fluid("1rem", "1.5rem", "600px", "1500px")};
    font-weight: 500;
    ${lineClamp(2)};

    @media (max-width: 768px) {
        ${lineClamp(1)};
    }
`;

export const Description = styled.p`
    ${lineClamp(4)};
    line-height: 1.5;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
    font-size: ${fluid(".95rem", "1rem", "600px", "1500px")};

    @media (max-width: 900px) {
        ${lineClamp(2)};
    }
`;

export const DetailsLink = styled.a`
    display: inline-flex;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.tertiary};
    font-size: ${fluid(".85rem", "1rem", "600px", "1500px")};
    font-weight: 600;
    transition: color 0.3s ease;
    align-items: center;
    gap: 10px;

    span {
        display: inline-flex;
        transition: transform 0.3s ease;
    }

    @media (hover: hover) {
        ${Card}:hover & {
            color: ${(props) => props.theme.colors.tertiary2};
        }

        ${Card}:hover & span {
            transform: translateX(1rem);
        }
    }
`;
