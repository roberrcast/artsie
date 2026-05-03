import styled from "styled-components";

import { border, fluid, iconStyle, maxWidthContent } from "../../styles/mixins";

export const Footer = styled.footer`
    background-color: ${(props) => props.theme.colors.footerBg};
`;

export const FooterWrapper = styled.div`
    ${maxWidthContent};
    display: flex;
    flex-direction: row;
    gap: ${fluid("2.5rem", "4rem", "500px", "1500px")};
    padding: ${fluid("3.5rem", "5rem", "600px", "1500px")} 0;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const TitleColumn = styled.div`
    flex: 1;
    width: 350px;
`;

export const FooterTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: 600;
`;

export const FooterKicker = styled.h3`
    font-family: ${(props) => props.theme.fonts.body};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.1rem;
`;

export const FooterDescription = styled.p`
    font-size: ${fluid(".95rem", "1rem", "500px", "1500px")};
    line-height: 1.7;
    margin-top: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    width: 350px;
`;

export const NavColumn = styled.div`
    flex: 0.5;
`;

export const NavList = styled.ul`
    line-height: 2.5;
    margin-top: 1.5rem;

    li {
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.1rem;

        a {
            color: ${(props) => props.theme.colors.footerColorTxt};
        }
    }
`;

export const DevColumn = styled.div`
    flex: 0.5;
`;

export const DevList = styled.ul`
    display: flex;
    gap: 1rem;
    line-height: 1.6;
    margin-top: 1.5rem;
`;

export const SocialLink = styled.a`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;

    svg {
        width: 35px;
        height: 35px;
    }

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
        transform: translateY(-4px);
    }
`;

export const SearchColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const SearchCard = styled.div`
    background-color: ${(props) => props.theme.colors.surfaceHighest};
    padding: 2.5rem 2rem;
    padding: ${fluid("1.5rem", "2.5rem", "500px", "1500px")}
        ${fluid("1rem", "2rem", "500px", "1500px")};
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
`;

export const SearchSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
`;

export const SearchLabel = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${(props) => props.theme.colors.secondary};
`;

export const SearchInputWrapper = styled.form`
    position: relative;
    width: 100%;

    svg {
        position: absolute;
        left: 1.2rem;
        top: 50%;
        transform: translateY(-50%);
        color: ${(props) => props.theme.colors.outlineColor};
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 1rem 1rem 1rem 3.5rem;
    border-radius: 9999px;
    border: 1px solid transparent;
    font-family: ${(props) => props.theme.fonts.body};
    background-color: ${(props) => props.theme.colors.background};
    text-overflow: ellipsis;
    transition:
        box-shadow 0.2s ease-in-out,
        border 0.2s ease-in-out;


    &:focus {
        outline: none;
        border: 1px solid ${(props) => props.theme.colors.tertiary2};
        box-shadow: 0 0 0 1px ${(props) => props.theme.colors.tertiary2};
    }

    &::placeholder {
    font-family: font-famiy: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.placeHolderText2};
    }
`;

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const Tag = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${(props) => props.theme.colors.background};
    padding: 0.55rem 1rem;
    border-radius: 9999px;
    border: 1px solid ${(props) => props.theme.colors.surfaceHighest};
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.footerColorTxt2};
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s ease;

    svg {
        ${iconStyle("16px", "secondary")};
    }

    @media (hover: hover) {
        &:hover {
            border-color: ${(props) => props.theme.colors.tertiary2};
            color: ${(props) => props.theme.colors.tertiary2};
            transform: scale(1.1);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            svg {
                color: ${(props) => props.theme.colors.tertiary2};
            }
        }
    }
`;

export const BottomBar = styled.div`
    ${border("top", "border2")};
`;

export const BottomBarWrapper = styled.div`
    ${maxWidthContent}
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;

    @media (max-width: 500px) {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }

    p {
        font-size: ${fluid(".75rem", ".9rem", "500px", "1500px")};
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.footerColorTxt3};
        letter-spacing: 0.1rem;
    }
`;
