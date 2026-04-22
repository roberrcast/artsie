import styled from "styled-components";
import { maxWidthContent } from "../../styles/mixins";

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
