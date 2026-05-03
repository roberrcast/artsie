import styled from "styled-components";
import { blur, fluid } from "../../styles/mixins";

export const HeroSection = styled.section<{ $bgImage: string }>`
    padding: ${fluid("3rem", "6rem", "600px", "1500px")} 0 3rem 0;
    position: relative;
    width: 100%;
    min-height: 921px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    background:
        linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url(${(props) => props.$bgImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width: 500px) {
        background-image:
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url(${(props) => props.$bgImage});
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 10;
    max-width: 56rem;
    padding: 2rem 1rem;
    text-align: center;
    color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.h1`
    font-size: ${fluid("2rem", "4rem", "400px", "1500px")};
    font-weight: 700;
    color: ${(props) => props.theme.colors.background};
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    width: 100%;
`;

export const Description = styled.p`
    font-size: ${fluid("1rem", "1.4rem", "768px", "1500px")};
    font-weight: 300;
    line-height: 1.625;
    color: ${(props) => props.theme.colors.rgba11};
    max-width: 42rem;
    margin: 0 auto 3rem;

    @media (max-width: 550px) {
        font-weight: 400;
    }

    @media (max-width: 500px) {
        font-weight: 500;
    }
`;

export const NoteContainer = styled.div`
    display: inline-block;
    background: ${(props) => props.theme.colors.rgba3};
    ${blur("12")};
    border: 1px solid ${(props) => props.theme.colors.rgba4};
    padding: ${fluid(".75rem", "1.5rem", "500px", "1500px")};
    border-radius: 2rem;
    text-align: center;
    max-width: 900px;
`;

export const NoteTitle = styled.span`
    display: block;
    font-weight: 800;
    color: ${(props) => props.theme.colors.artistTagBg};
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
`;

export const NoteText = styled.p`
    color: ${(props) => props.theme.colors.noteText};
    font-size: ${fluid(".75rem", "0.875rem", "500px", "1500px")};
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.025em;
`;
