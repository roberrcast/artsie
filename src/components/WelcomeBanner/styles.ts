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
`;

export const Content = styled.div`
    position: relative;
    z-index: 10;
    max-width: 56rem;
    padding: 0 2rem;
    text-align: center;
    color: white;
`;

export const Title = styled.h1`
    font-size: ${fluid("3rem", "4rem", "600px", "1500px")};
    font-weight: 700;
    color: ${(props) => props.theme.colors.background};
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
`;

export const Description = styled.p`
    font-size: ${fluid("1.1rem", "1.4rem", "768px", "1500px")};
    font-weight: 300;
    line-height: 1.625;
    color: ${(props) => props.theme.colors.rgba11};
    max-width: 42rem;
    margin: 0 auto 3rem;
`;

export const NoteContainer = styled.div`
    display: inline-block;
    background: ${(props) => props.theme.colors.rgba3};
    ${blur("12")};
    border: 1px solid ${(props) => props.theme.colors.rgba4};
    padding: 1.5rem;
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
    font-size: 0.875rem;
    line-height: 1.5;
    text-transform: uppercase;
    letter-spacing: 0.025em;
`;
