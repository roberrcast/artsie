import styled from "styled-components";
import { fluid, maxWidthContent } from "../../styles/mixins";

export const PageContainer = styled.article`
    background-color: ${(props) => props.theme.colors.surface};
`;

export const PageWrapper = styled.div`
    ${maxWidthContent};
    padding-top: 5rem;
`;

export const HeaderSection = styled.header`
    max-width: 1100px;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    // Medida para firefox
    @-moz-document url-prefix() {
        & {
            max-width: 1000px;
        }
    }
`;

export const Kicker = styled.p`
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-size: 0.75rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.tertiary};
`;

export const Title = styled.h2`
    font-size: ${fluid("2.4rem", "4rem", "400px", "1500px")};
    font-weight: 700;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
`;

export const Description = styled.p`
    max-width: 36rem;
    color: ${(props) => props.theme.colors.footerColorTxt2};
    font-size: ${fluid("1rem", "1.17rem", "400px", "1500px")};
    font-weight: 400;
`;

export const PaginationWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    padding: 4rem 0;
    gap: ${fluid("1rem", "2rem", "400px", "1500px")};

    border-top: 1px solid ${(props) => props.theme.colors.borderColor};
`;

export const PaginationButton = styled.button<{ $isNext: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-size: ${fluid("0.658rem", "0.875rem", "400px", "1500px")};
    font-weight: 600;
    color: ${(props) => props.theme.colors.textMuted};

    transition: all 0.3s ease;

    &:disabled {
        opacity: 0.3;
        cursor: unset;
    }

    &:not(:disabled):hover {
        color: ${(props) => props.theme.colors.primary};
        transform: translateX(${(props) => (props.$isNext ? "5px" : "-5px")});
    }

    svg {
        width: 16px;
        height: 16px;
    }

    @media (max-width: 560px) {
        padding: ${fluid(".5rem", "1rem", "400px", "1500px")};
    }
`;

export const PageIndicator = styled.span`
    font-weight: 700;
    font-size: ${fluid("0.658rem", "1rem", "400px", "1500px")};
    color: ${(props) => props.theme.colors.primary};

    background-color: ${(props) => props.theme.colors.surface2};
    padding: 0.5rem 1.25rem;
    border-radius: 9999px;

    @media (max-width: 560px) {
        padding: ${fluid(".3rem", "1rem", "400px", "1500px")};
    }
`;
