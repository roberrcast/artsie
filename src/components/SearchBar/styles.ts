import styled, { keyframes } from "styled-components";
import { X } from "lucide-react";
import {
    flexAlignCenter,
    iconStyle,
    maxWidthContent,
    titleStyle,
} from "../../styles/mixins";
import { Search } from "lucide-react";

const slideDown = keyframes`
from { transform: translateY(-100%); opacity: 0; }
to { transform: translateY(0); opacity: 1}
`;

const slideUp = keyframes`
from { transform: translateY(0); opacity: 1;}
to { transform: translateY(-100%); opacity: 0;}
`;

interface StyledProps {
    $isClosing: boolean;
}

export const Overlay = styled.div<StyledProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.backgroundRGBA};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: opacity 0.4s ease;
    opacity: ${(props) => (props.$isClosing ? 0 : 1)};
`;

export const SearchContainer = styled.div<StyledProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    padding: 1.5rem 0;
    ${flexAlignCenter};
    animation: ${(props) => (props.$isClosing ? slideUp : slideDown)} 0.4s
        ease-in-out forwards;
`;

export const SearchContainerWrapper = styled.div`
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
`;

export const TitleButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    ${maxWidthContent};
    margin: 0 auto;
    padding-bottom: 1.5rem;
`;

export const Title = styled.h1`
    ${titleStyle};
    text-transform: capitalize;
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textMuted};
    font-size: 0.8rem;
    font-weight: 600;
    gap: 0.3rem;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
        }
    }
`;

export const CloseButtonIcon = styled(X)`
    ${iconStyle("25px", "primary", "textMuted")};
    stroke-width: 2.2px;
`;

export const SearchWrapper = styled.div`
    margin-top: 5rem;
`;

export const SearchSection = styled.div.attrs({ role: "search" })``;

export const Form = styled.form`
    display: flex;
    align-items: center;
    border: 2px solid ${(props) => props.theme.colors.searchInputBorder};
    width: 830px;
    justify-content: space-between;
    padding: 0.5rem;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-family: ${(props) => props.theme.fonts.display};
    font-size: 2rem;
    width: 100%;

    &::placeholder {
        font-family: ${(props) => props.theme.fonts.display};
        color: ${(props) => props.theme.colors.placeHolderText};
    }
`;

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.colors.secondary};
    background: transparent;
`;

export const StyledSearchButton = styled(Search)`
    ${iconStyle("30px", "secondary", "textMuted")};
    transition: color 0.3s ease;
`;

export const Submenu = styled.section`
    display: flex;
    justify-content: flex-start;
    gap: 5rem;
    margin-top: 2rem;
`;

export const SubmenuContainer = styled.div``;

export const SubmenuTitle = styled.h3`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.placeHolderText};
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1rem;
`;

export const SubmenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    li {
        font-family: ${(props) => props.theme.fonts.display};
    }
`;

export const SubmenuCollection = styled.ul``;
