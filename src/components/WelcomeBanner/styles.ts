import styled from "styled-components";
import { blur, fluid, maxWidthContent } from "../../styles/mixins";

export const HeroSection = styled.section<{ $bgImage: string }>`
    padding: ${fluid("3rem", "6rem", "600px", "1500px")} 0 3rem 0;
    position: relative;
    width: 100%;
    min-height: 90vh;
    overflow: hidden;

    background:
        linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
        url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width: 1024px) {
        background-attachment: scroll;
    }
`;

export const ContentWrapper = styled.div`
    ${maxWidthContent};
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Frame = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 10;
    width: 50%;
    padding: 2rem 0 2rem 0;
    color: ${(props) => props.theme.colors.background};

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: ${fluid("2rem", "3rem", "400px", "1500px")};
    font-weight: 700;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
    width: 100%;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const Description = styled.p`
    font-size: ${fluid("1rem", "1.2rem", "768px", "1500px")};
    font-weight: 300;
    line-height: 1.625;
    color: ${(props) => props.theme.colors.mobileSubmenuBorder};
    max-width: 40rem;
    margin: 0 0 3rem 0;

    @media (max-width: 550px) {
        font-weight: 400;
    }

    @media (max-width: 500px) {
        font-weight: 500;
    }
`;

export const NoteContainerWrapper = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const NoteContainer = styled.div`
    display: inline-block;
    background: ${(props) => props.theme.colors.rgba3};
    ${blur("12")};
    border: 1px solid ${(props) => props.theme.colors.rgba4};
    padding: ${fluid(".75rem", "1.5rem", "500px", "1500px")};
    border-radius: 1rem;
    text-align: center;
    max-width: 700px;
`;

export const NoteTitle = styled.span`
    display: block;
    font-weight: 800;
    color: ${(props) => props.theme.colors.gold};
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
`;

export const NoteText = styled.p`
    /* color: ${(props) => props.theme.colors.noteText}; */
    color: rgba(255, 255, 255, 0.95);
    font-size: ${fluid(".75rem", "0.875rem", "500px", "1500px")};
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.025em;
`;
