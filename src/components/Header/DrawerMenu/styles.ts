import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { blur } from "../../../styles/mixins";

export const Backdrop = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    inset: 0;
    background-color: ${(props) => props.theme.colors.drawerBackdrop};
    ${blur(8)};
    z-index: 3000;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: all 0.4s ease-in-out;
`;

export const Drawer = styled.aside<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 288px;
    background-color: ${(props) => props.theme.colors.neutral};
    z-index: 3001;
    display: flex;
    flex-direction: column;
    border-radius: 0 2rem 2rem 0;
    box-shadow: 20px 0 50px rgba(0, 0, 0, 0.1);
    border-right: 1px solid ${(props) => props.theme.colors.border2};

    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    transition: transform 0.4s cubic-bezier(0.33, 1, 0.68, 1);
`;

export const DrawerHeader = styled.div`
    padding: 2.5rem 2rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.primary};
    }
`;

export const NavMenu = styled.nav`
    flex-grow: 1;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
    margin: 0 1rem;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    border-radius: 9999px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    transition: all 0.3s ease;

    span:last-child {
        font-size: 0.85rem;
        letter-spacing: 0.2rem;
        font-weight: 700;
        text-transform: uppercase;
    }

    &.active {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.background};
        transform: scale(0.99);
    }

    @media (hover: hover) {
        &:hover:not(.active) {
            background-color: ${(props) => props.theme.colors.drawerHover};
            color: ${(props) => props.theme.colors.background};
        }
    }
`;

export const CloseButton = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 3002;
    cursor: pointer;

    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transform: scale(${({ $isOpen }) => ($isOpen ? 1 : 0.5)});
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
`;
