import styled from "styled-components";
import { maxWidthContent } from "../../styles/mixins";

export const PageContainer = styled.article`
    background-color: ${(props) => props.theme.colors.background};
    min-height: 100vh;
    padding: 8rem 0;
`;

export const PageWrapper = styled.div`
    ${maxWidthContent};
`;

export const HeaderSection = styled.section`
    margin-bottom: 4rem;
    max-width: 800px;
`;

export const Title = styled.h2`
    font-size: 5.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
`;

export const Subtitle = styled.p`
    font-size: 1.15rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.exhibitionCardText};
`;

export const SearchSection = styled.form`
    margin-bottom: 5rem;
`;

export const SearchBarWrapper = styled.div`
    position: relative;
    width: 100%;

    span {
        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: ${(props) => props.theme.colors.textMuted};
        display: flex;
        align-items: center;

        svg {
            width: 28px;
            height: 28px;
        }
    }

    input {
        width: 100%;
        padding: 1.5rem 1.5rem 1.5rem 4rem;
        border-radius: 9999px;
        border: 2px solid transparent;
        background-color: ${(props) => props.theme.colors.artistsSearchBarBg};
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.textMuted};
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

        &:focus {
            outline: none;
            border: 2px solid
                ${(props) => props.theme.colors.artistSearchBarRing};
        }
    }
`;

export const ArtistGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 3rem;
    row-gap: 4rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const ArtistEntry = styled.section`
    cursor: pointer;
    border-bottom: 1px solid ${(props) => props.theme.colors.artistBorder};
    padding-bottom: 2rem;
    transition: opacity 0.3s ease;

    @media (hover: hover) {
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const EntryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
`;

export const ArtistName = styled.h3`
    font-size: 1.875rem;
    font-weight: 700;
`;

export const AgentTag = styled.p`
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.colors.tertiary2};
    font-weight: 600;
`;

export const ArtistDates = styled.div`
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.textMuted};
    margin-bottom: 1.5rem;
`;

export const ViewDetails = styled.div`
    display: flex;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.artistSubFont};
    transition: color 0.3s ease;

    span {
        display: inline-flex;
        transition: transform 0.3s ease;
    }

    @media (hover: hover) {
        ${ArtistEntry}:hover & {
            cursor: pointer;
            color: ${(props) => props.theme.colors.primary};

            span {
                transform: translateX(1rem);
            }
        }
    }
`;

export const PaginationWrapper = styled.div`
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    button {
        background: ${(props) => props.theme.colors.background};
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0.75rem;
        border-radius: 40%;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;

        &:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            background: ${(props) => props.theme.colors.surface};
            transform: translateY(-2px);
        }
    }
`;
