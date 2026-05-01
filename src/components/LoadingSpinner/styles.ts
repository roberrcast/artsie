import styled, { keyframes } from "styled-components";
import { fluid } from "../../styles/mixins";

const rotate = keyframes`
from { transform: rotate(0deg); }
to { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 2rem;
    background-color: ${(props) => props.theme.colors.surface};
    min-height: 300px;
    width: 100%;
    position: relative;
    z-index: 10;
    margin: auto;
`;

export const SpinnerCircle = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid ${(props) => props.theme.colors.loadingSpinner};
    border-top: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    animation: ${rotate} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    margin-bottom: 2rem;
`;

export const MessageWrapper = styled.div`
    text-align: center;
`;

export const Message = styled.p`
    font-family: ${(props) => props.theme.fonts.display};
    font-style: italic;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.secondary};
    letter-spacing: 0.05;
    opacity: 0.8;
`;

export const DecorativeLine = styled.div`
    margin: 1rem auto 0;
    width: 3rem;
    height: 1px;
    background-color: ${(props) => props.theme.colors.secondary};
    opacity: 0.2;
`;

export const BackgroundAura = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${fluid("300px", "800px", "375px", "1500px")};
    height: ${fluid("300px", "800px", "375px", "1500px")};
    background-color: ${(props) => props.theme.colors.secondary};
    opacity: 0.05;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: -1;
`;
