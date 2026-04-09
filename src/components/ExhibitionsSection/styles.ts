import styled, { css } from "styled-components";
import {
    lineClamp,
    maxWidthContent,
    underlineHover,
} from "../../styles/mixins";

export const SectionContainer = styled.section`
    background-color: ${(props) => props.theme.colors.surface2};
`;

export const SectionWrapper = styled.div`
    ${maxWidthContent};
    padding: 8rem 0;
`;

export const Kicker = styled.p`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textMuted};
    letter-spacing: 0.1rem;
    font-weight: 500;
`;

export const TitleNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Explore = styled.button`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.tertiary};
    position: relative;
    border: none;
    background: transparent;

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
    font-size: 2.5rem;
`;

export const Grid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 4rem;
`;

const commonSpacing = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Card = styled.div`
    ${commonSpacing};
`;

export const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.textMuted};
    aspect-ratio: 3/4;
    width: 100%;

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
`;

export const ExhibitionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const Description = styled.p`
    ${lineClamp(4)};
    line-height: 1.5;
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
`;

export const DetailsLink = styled.a`
    display: inline-flex;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: 600;
    transition: color 0.3s ease;
    align-items: center;
    gap: 10px;

    span {
        display: inline-flex;
        transition: transform 0.3s ease;
    }

    @media (hover: hover) {
        &:hover {
            span {
                transform: translateX(1rem);
            }
        }
    }
`;
