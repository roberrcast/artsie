import styled from "styled-components";
import { fluid, lineClamp, maxWidthContent } from "../../styles/mixins";

export const PageContainer = styled.article`
    background-color: ${(props) => props.theme.colors.surface};
    padding: 8rem 0;
`;

export const PageWrapper = styled.div`
    ${maxWidthContent};
`;

export const Header = styled.div`
    max-width: 42rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: ${fluid("2.5rem", "3.5rem", "500px", "1500px")};
    font-weight: 700;
    color: ${(props) => props.theme.colors.exhibitionsHeaderText};
`;

export const Subtitle = styled.h3`
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.exhibitionCardText};
    margin-top: 1rem;
`;

export const ExhibitionsGrid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 650px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }
`;

export const ExhibitionCard = styled.div`
    @media (hover: hover) {
        &:hover {
            cursor: pointer;

            img {
                transform: scale(1.1);
            }
        }
    }
`;

export const ImageContainer = styled.div`
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    aspect-ratio: 4/5;
    width: 100%;
    border-radius: 2rem;

    /* Para firefox porque a veces falla el border radius en scale */
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: radial-gradient(white, black);
    transform: translateZ(0);

    img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        margin: auto;

        object-fit: cover;
        object-position: center;

        min-width: 100%;
        min-height: 100%;
        transition: transform 0.7s cubic-bezier(0.33, 1, 0.68, 1);
    }
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Type = styled.p`
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: 700;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
`;

export const CardTitle = styled.h4`
    ${lineClamp(2)};
    font-size: 1.3rem;
    font-weight: 700;
`;

export const Date = styled.p`
    color: ${(props) => props.theme.colors.exhibitionCardText};
    font-weight: 500;
`;
