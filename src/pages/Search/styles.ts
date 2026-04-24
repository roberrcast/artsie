import styled from "styled-components";
import { maxWidthContent } from "../../styles/mixins";

export const PageContainer = styled.article`
    padding: 8rem 0;
    background-color: ${(props) => props.theme.colors.surface};
`;

export const PageWrapper = styled.div`
    ${maxWidthContent};
`;

export const HeaderSection = styled.section`
    margin-bottom: 3rem;
`;

export const Kicker = styled.p`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
    letter-spacing: 0.15rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};

    span {
        font-style: italic;
        font-weight: 400;
        opacity: 0.8;
    }
`;

export const SearchBarSection = styled.section`
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    position: relative;
    width: 100%;
    max-width: 42rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 1rem 4rem 1rem 2rem;
    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 9999px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.outlineColor};
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
`;

export const SearchIconWrapper = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            color: ${(props) => props.theme.colors.tertiary};
        }
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;
