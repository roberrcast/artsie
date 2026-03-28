import styled from "styled-components";
import { flexAlignCenter } from "../../styles/mixins";
import { Search } from "lucide-react";

const headerFontSize = "1.5rem";

export const Header = styled.header`
    ${flexAlignCenter};
    justify-content: space-between;
`;

export const HeaderContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    padding: 1.5rem 0;
    ${flexAlignCenter};
    justify-content: space-between;
    width: 100%;

    @-moz-document url-prefix() {
        max-width: 1400px;
    }
`;

export const Title = styled.h1`
    font-size: ${headerFontSize};
    font-weight: 700;
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${flexAlignCenter};
    font-size: ${headerFontSize};
    color: ${(props) => props.theme.colors.textMuted};
    font-weight: 500;
    gap: 2rem;
    text-transform: uppercase;
`;

export const ButtonWrapper = styled.div``;

export const SearchButton = styled.button`
    background: transparent;
    border: none;
`;

export const SearchButtonIcon = styled(Search)`
    width: 30px;
    heigth: 30px;
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.3s ease;

    @media (hover: hover) {
        &:hover {
            color: ${(props) => props.theme.colors.textMuted};
        }
    }
`;
