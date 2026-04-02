import styled from "styled-components";
import { maxWidthContent } from "../../styles/mixins";

export const FeaturedContainer = styled.div`
    background-color: ${(props) => props.theme.colors.surface};
`;

export const FeaturedWrapper = styled.div`
    ${maxWidthContent};
    padding-top: 3rem;
`;

export const Image = styled.img`
    width: 600px;
    position: relative;
`;

export const FeaturedHeader = styled.header``;

export const Kicker = styled.p``;

export const FeaturedTitle = styled.h2``;

export const Description = styled.p``;

export const FeaturedButton = styled.button``;
