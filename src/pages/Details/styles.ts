import styled from "styled-components";
import { border, maxWidthContent } from "../../styles/mixins";

export const DetailsContainer = styled.section`
    background-color: ${(props) => props.theme.colors.surface};
    padding: 3rem 0 7rem;
`;

export const DetailsWrapper = styled.article`
    ${maxWidthContent};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4rem;
`;

export const ImageContainer = styled.figure`
    flex: 1;
    height: 700px;
    background-color: ${(props) => props.theme.colors.frame};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem;
    border-radius: 10px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1;
`;

export const MetaContainer = styled.aside`
    width: 30%;
`;

export const ArtistInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 2rem;
    ${border("bottom", "textMuted")};
`;

export const DateDisplay = styled.p`
    color: ${(props) => props.theme.colors.textMuted};
    font-weight: 600;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
`;

export const ArtistDisplay = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 1.2rem;
    font-weight: 500;

    span {
        display: block;
        color: ${(props) => props.theme.colors.textMuted};
        text-transform: uppercase;
        font-size: 0.9rem;
    }
`;

export const ArtworkDetails = styled.section`
    padding-top: 2rem;
`;

export const DetailsTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
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
    padding: 7rem 2rem 7rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
`;

export const DescriptionTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.2;
    max-width: 300px;
    flex-shrink: 0;
`;

export const DescriptionTextContainer = styled.div`
    width: 900px;
    max-width: 800px;

    p {
        font-size: 1.25rem;
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
        font-size: 3.5rem;
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
    }
`;
