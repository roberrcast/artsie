import styled from "styled-components";
import {
    buttonAlignment,
    flexAlignCenter,
    iconStyle,
    titleStyle,
} from "../../styles/mixins";
import { Search } from "lucide-react";

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
    ${titleStyle};
`;

export const Nav = styled.nav``;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    ${flexAlignCenter};
    font-size: 1.3rem;
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
