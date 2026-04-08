import styled from "styled-components";
import {
    blur,
    buttonAlignment,
    flexAlignCenter,
    iconStyle,
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
    background-color: ${(props) => props.theme.colors.backgroundRGBA};
    width: 100%;
    ${blur("24")};

    transition:
        transform 0.4s ease-in-out,
        opacity 0.3s ease-in-out;
    transform: ${(props) =>
        props.isHidden ? "translateY(-100%)" : "translateY(0)"};
    opacity: ${(props) => (props.isHidden ? 0 : 1)};
    pointer-events: ${(props) => (props.isHidden ? "none" : "auto")};
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
    ${titleStyle};
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${flexAlignCenter};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textMuted};
    font-weight: 500;
    gap: 3rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
`;

export const ButtonWrapper = styled.div``;

export const SearchButton = styled.button`
    ${buttonAlignment};
`;

export const SearchButtonIcon = styled(Search)`
    ${iconStyle("25px", "primary", "textMuted")};
`;
