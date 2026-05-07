import styled from "styled-components";
import { border, fluid, maxWidthContent } from "../../styles/mixins";

export const DetailsContainer = styled.section`
    background-color: ${(props) => props.theme.colors.surface};
    padding: ${fluid("5rem", "8rem", "400px", "1500px")} 0
        ${fluid("1rem", "7rem", "400px", "1500px")};
`;

export const DetailsWrapper = styled.article`
    ${maxWidthContent};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;

    @media (max-width: 770px) {
        flex-direction: column;
        gap: 0;
    }
`;

export const ImageContainer = styled.figure`
    flex: 1;
    height: 700px;
    background-color: ${(props) => props.theme.colors.frame};
    display: flex;
    justify-content: center;
    align-items: 8enter;
    margin: 0;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 770px) {
        height: auto;
        width: 100%;
        border-radius: 0;
        padding: 2rem;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.colors.frameMobile};
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1;
`;

export const MetaContainer = styled.aside`
    width: 30%;

    @media (max-width: 770px) {
        width: 100%;
        padding: 2rem 0.5rem;
        box-sizing: border-box;
    }
`;

export const ArtistInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 2rem;
    ${border("bottom", "textMuted")};

    @media (max-width: 770px) {
        border-bottom: none;
    }
`;

export const DateDisplay = styled.p`
    color: ${(props) => props.theme.colors.textMuted};
    font-weight: 600;

    @media (max-width: 770px) {
        display: none;
    }
`;

export const Title = styled.h1`
    font-size: ${fluid("1.75rem", "2rem", "400px", "1500px")};
    font-weight: 600;

    @media (max-width: 770px) {
        font-weight: 700;
    }
`;

export const ArtistDisplay = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    font-size: ${fluid("1rem", "1.2rem", "400px", "1500px")};
    font-weight: 500;

    span {
        display: block;
        color: ${(props) => props.theme.colors.textMuted};
        text-transform: uppercase;
        font-size: ${fluid("0.875rem", "0.9rem", "400px", "1500px")};
    }
`;

export const ArtworkDetails = styled.section`
    padding-top: 2rem;

    @media (max-width: 770px) {
        display: none;
    }
`;

export const DetailsTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;

    @media (max-width: 770px) {
        display: none;
    }
`;

// definition list por eso la etiqueta 'dl' en html semántico
const MetaDataBase = styled.dl`
    margin-bottom: 1.5rem;
`;

export const Medium = styled(MetaDataBase)``;

export const Dimensions = styled(MetaDataBase)``;

export const CreditLine = styled(MetaDataBase)``;

// definition term dt
export const Label = styled.dt`
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.textMuted};
    font-weight: 500;
`;

// definition description
export const Value = styled.dd`
    font-weight: 500;
`;

export const Description = styled.section`
    background-color: ${(props) => props.theme.colors.surface2};
`;

export const DescriptionWrapper = styled.div`
    ${maxWidthContent};
    box-sizing: border-box;
    padding: 4rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 900px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 7rem 2rem 7rem 0;
    }
`;

export const DescriptionTitle = styled.h4`
    font-size: ${fluid("1.5rem", "1.8rem", "400px", "1500px")};
    font-weight: 500;
    line-height: 1.2;
    max-width: 300px;
    flex-shrink: 0;
    padding-left: 0.5rem;

    @media (max-width: 899px) {
        padding-left: 0;
    }
`;

export const DescriptionTextContainer = styled.div`
    max-width: 800px;

    p {
        font-size: ${fluid("1rem", "1.25rem", "400px", "1500px")};
        line-height: 1.8;
        color: ${(props) => props.theme.colors.textMuted};
        font-weight: 500;
        margin-bottom: 3rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    p:first-of-type::first-letter {
        font-family: ${(props) => props.theme.fonts.display};
        font-size: ${fluid("2.6rem", "3.5rem", "400px", "1500px")};
        float: left;
        line-height: 1;
        padding-top: 4px;
        padding-right: 8px;
        padding-left: 3px;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 700;
    }

    a {
        color: ${(props) => props.theme.colors.primary};
        font-weight: 500;
        transition: all 0.3s ease;

        @media (hover: hover) {
            &:hover {
                color: ${(props) => props.theme.colors.tertiary};
            }
        }

        // For mobile accesibility
        @media (max-width: 600px) {
            color: ${(props) => props.theme.colors.tertiary};
            font-weight: 600;
            border-bottom: 2.5px solid ${(props) => props.theme.colors.tertiary};
        }
    }
`;

export const MobileArtworkDetails = styled.section`
    display: none;

    @media (max-width: 770px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 1rem;
    }
`;

export const MobileData = styled.dl`
    margin-bottom: 0;
    background-color: ${(props) => props.theme.colors.surface2};
    padding: 1.5rem;
    border: 1px solid ${(props) => props.theme.colors.border3};
`;

export const MobileDate = styled(MobileData)``;

export const MobileMedium = styled(MobileData)``;

export const MobileDimensions = styled(MobileData)`
    grid-column: span 2;
`;

export const MobileLabel = styled.dt`
    font-size: 0.625rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors.footerColorTxt2};
`;

export const MobileValue = styled.dd`
    font-size: ${fluid(".75rem", "1rem", "400px", "770px")};
    color: ${(props) => props.theme.colors.mobileDetailsText};
    font-weight: 600;
`;
