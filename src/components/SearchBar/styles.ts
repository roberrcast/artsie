import styled, { keyframes } from "styled-components";
import { X, Search } from "lucide-react";
import {
    blur,
    flexAlignCenter,
    fluid,
    iconStyle,
    maxWidthContent,
    titleStyle,
} from "../../styles/mixins";

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
    background-color: ${(props) => props.theme.colors.background};
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: opacity 0.4s ease;
    opacity: ${(props) => (props.$isClosing ? 0 : 1)};
    overflow-y: auto;

    @media (min-width: 1024px) {
        background-color: ${(props) => props.theme.colors.rgba};
        ${blur(24)};
    }
`;

export const SearchContainer = styled.div<StyledProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    padding: ${fluid(".65rem", "1.5rem", "600px", "1500px")} 0;
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
    padding-bottom: ${fluid(".65rem", "1.5rem", "600px", "1500px")};
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
    margin-top: ${fluid("2rem", "5rem", "375px", "1500px")};
    box-sizing: border-box;
`;

export const SearchSection = styled.div.attrs({ role: "search" })`
    padding: 0 1rem;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};

    @media (min-width: 770px) {
        border: 2px solid ${(props) => props.theme.colors.searchInputBorder};
        padding: 0.5rem;
    }
`;

export const Input = styled.input`
    border: none;
    outline: none;
    background: transparent;
    font-family: ${(props) => props.theme.fonts.display};
    font-size: ${fluid("1.4rem", "2rem", "375px", "1500px")};
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
    flex-direction: column;
    justify-content: flex-start;
    gap: ${fluid("2rem", "5rem", "770px", "1500px")};
    margin-top: 2rem;
    padding-bottom: 5rem;

    @media (min-width: 1024px) {
        flex-direction: row;
    }
`;

export const SubmenuContainer = styled.div``;

export const SubmenuTitle = styled.h3`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.searchBarFont};
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 1rem;
`;

export const SubmenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    li a {
        display: inline-block;
        transition: all 0.2s ease-in-out;
        padding: 0.6rem 1.25rem;
        background-color: ${(props) => props.theme.colors.footerBg};
        border: 1px solid ${(props) => props.theme.colors.mobileSubmenuBorder};
        border-radius: 9999px;
        font-size: 0.875rem;
        font-weigth: 600;

        @media (hover: hover) {
            &:hover {
                background-color: ${(props) =>
                    props.theme.colors.mobileSubmenuBorder};
                transform: translateY(-1px);
            }
        }
    }

    @media (min-width: 1024px) {
        flex-direction: column;
        li a {
            font-family: ${(props) => props.theme.fonts.display};
            background-color: transparent;
            border: none;
            padding: 0;
            font-size: 1rem;

            &:hover {
                background-color: transparent;
                color: ${(props) => props.theme.colors.tertiary};
            }
        }
    }
`;

export const SubmenuCollection = styled.div`
    @media (max-width: 768px) {
        padding-bottom: 80px;
    }
`;

export const CollectionItem = styled.div`
    display: flex;
    align-items: center;
    gap: ${fluid(".5rem", "1rem", "770px", "1500px")};
    cursor: pointer;
    margin-top: 1.5rem;

    @media (hover: hover) {
        &:hover h4 {
            color: ${(props) => props.theme.colors.tertiary};
        }
    }
`;

export const CollectionImageWrapper = styled.div`
    width: 64px;
    height: 64px;
    background-color: ${(props) => props.theme.colors.surface2};
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.4s ease;

        @media (min-width: 1024px) {
            filter: grayscale(100%);
        }
    }

    @media (min-width: 1024px) {
        @media (hover: hover) {
            ${CollectionItem}:hover & img {
                filter: grayscale(0%);
                transform: scale(1.1);
            }
        }
    }
`;

export const CollectionInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CollectionTitle = styled.h4`
    font-size: 1.1rem;
    transition: color 0.3 ease;
`;

export const CollectionCount = styled.p`
    font-size: 0.75rem;
    color: ${(props) => props.theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.05rem;
`;
