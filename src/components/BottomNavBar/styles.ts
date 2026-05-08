import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.75rem 0.3rem 1.5rem 0.3rem;
    background-color: ${(props) => props.theme.colors.background};
    border-top: 1px solid ${(props) => props.theme.colors.border2};
    border-radius: 1.5rem 1.5rem 0 0;
    z-index: 1500;
    box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.05);

    @media (min-width: 769px) {
        display: none;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.1rem;
    color: ${(props) => props.theme.colors.secondary};
    transition: all 0.3s ease;
    border-radius: 9999px;

    span:last-child {
        font-size: 0.625rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin-top: 0.25rem;
    }

    &.active {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.background};
        transform: scale(0.95);
    }

    &:active {
        transform: scale(0.9);
    }
`;

export const IconContainer = styled.svg`
    width: 20px;
    height: 20px;
    display: inline-block;
    vertical-align: middle;
    overflow: visible;
    flex-shrink: 0;
`;
