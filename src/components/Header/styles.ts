import styled from "styled-components";
import {
    blur,
    buttonAlignment,
    flexAlignCenter,
    fluid,
    iconStyle,
    maxWidthContent,
    titleStyle,
} from "../../styles/mixins";
import { Search } from "lucide-react";

export const Header = styled.header<{ isHidden: boolean }>`
    ${flexAlignCenter};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: ${(props) => props.theme.colors.rgba};
    width: 100%;
    ${blur("24")};

    transition:
        transform 0.4s ease-in-out,
        opacity 0.3s ease-in-out;
    transform: ${(props) =>
        props.isHidden ? "translateY(-100%)" : "translateY(0)"};
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
    pointer-events: ${(props) => (props.isHidden ? "none" : "auto")};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

export const HeaderContainer = styled.div`
    ${maxWidthContent};
    padding: ${fluid("1rem", "1.5rem", "600px", "1500px")} 0;
    ${flexAlignCenter};
    justify-content: space-between;
    width: 100%;

    @-moz-document url-prefix() {
        max-width: 1400px;
    }
`;

export const Title = styled.h1`
    ${titleStyle};
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${flexAlignCenter};
    font-size: ${fluid("0.75rem", "1rem", "650px", "1500px")};
    font-weight: 500;
    gap: ${fluid("1rem", "3rem", "700px", "1500px")};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${(props) => props.theme.colors.textMuted};
    transition: all 0.3s ease-in-out;

    a {
        color: ${(props) => props.theme.colors.textMuted};

        &.active {
            color: ${(props) => props.theme.colors.primary};
            border-bottom: 2px solid ${(props) => props.theme.colors.tertiary2};
            pointer-events: none;
            cursor: default;
        }
    }
`;

export const ButtonWrapper = styled.div``;

export const SearchButton = styled.button`
    ${buttonAlignment};
`;

export const SearchButtonIcon = styled(Search)`
    ${iconStyle("25px", "primary", "textMuted")};
`;
