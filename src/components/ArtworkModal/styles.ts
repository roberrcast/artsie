import styled from "styled-components";
import { blur, flexAlignCenter, lineClamp } from "../../styles/mixins";

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    inset: 0;
    z-index: 2000;
    background-color: ${(props) => props.theme.colors.modalBg};
    ${blur(24)};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    transition:
        opacity 0.5s ease,
        visibility 0.5s ease;
`;

export const ModalHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem 2rem;
    ${flexAlignCenter};
    justify-content: space-between;
    z-index: 70;
`;

export const ModalLogo = styled.span`
    font-family: ${(props) => props.theme.fonts.display};
    font-style: italic;
    color: ${(props) => props.theme.colors.rgba};
    font-size: 1.25rem;
`;

export const ModalActions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const CloseButton = styled.button`
    position: relative;
    background: ${(props) => props.theme.colors.rgba3};
    color: ${(props) => props.theme.colors.background};
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    font-weight: 700;
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    ${blur(12)};
    transition: all 0.3s ease-in-out;

    @media (hover: hover) {
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const MainDisplaySection = styled.section<{ $isOpen: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem;
    position: relative;
    z-index: 60;

    transform: ${({ $isOpen }) => ($isOpen ? "scale(1)" : "scale(0.9)")};
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const ImageButtonContainer = styled.div`
    position: relative;
    max-width: 80vw;
    max-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageFrame = styled.div<{ $isZoomed: boolean; $isOpen: boolean }>`
    position: relative;
    max-width: 100%;
    max-height: 100%;
    transition: all 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    box-shadow: 0 50px 100px ${(props) => props.theme.colors.rgba10};
    cursor: ${(props) => (props.$isZoomed ? "zoom-out" : "zoom-in")};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

    img {
        max-width: 100%;
        max-height: 70vh;
        transform: ${(props) => (props.$isZoomed ? "scale(2)" : "scale(1)")};
        object-fit: contain;
        display: block;
        transition:
            transform 0.5s ease,
            tranform-origin 0.1s ease-out;
    }
`;

export const ZoomButton = styled.div`
    position: absolute;
    bottom: 0.75rem;
    right: 0.85rem;
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }

    align-items: center;
    gap: 0.75rem;

    background: ${(props) => props.theme.colors.rgba5};
    backdrop-filter: blur(12px);
    padding: 0.5rem;
    border-radius: 9999px;
    z-index: 100;

    button {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme.colors.rgba3};
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;

        @media (hover: hover) {
            &:hover {
                background: ${(props) => props.theme.colors.rgba9};
            }
        }
    }
`;

export const ContextPanel = styled.div`
    position: fixed;
    top: 6rem;
    left: 2rem;
    max-width: 250px;
    z-index: 40;
`;

export const ContextLabel = styled.span`
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: ${(props) => props.theme.colors.rgba6};
    margin-bottom: 0.75rem;
    display: block;
`;

export const ContextText = styled.p`
    color: ${(props) => props.theme.colors.rgba7};
    font-size: 0.8rem;
    line-height: 1.6;
`;

export const DecorativeLine = styled.div`
    width: 2px;
    height: 100px;
    background: ${(props) => props.theme.colors.rgba3};
    margin-top: 2rem;
`;

export const ModalFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 3rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 50;
    pointer-events: none;

    & > div {
        pointer-events: auto;
    }
`;

export const ModalTitle = styled.h1`
    ${lineClamp(1)};
    color: white;
    font-size: 3rem;
    margin-bottom: 0.5rem;
`;

export const ModalSubMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme.colors.rgba8};
`;

export const StyleTag = styled.span`
    color: ${(props) => props.theme.colors.tertiary};
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
`;

export const Separator = styled.div`
    width: 40px;
    height: 1px;
    background: ${(props) => props.theme.colors.rgba4};
`;

export const FooterInfoLeft = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60%;
`;

export const FooterInfoRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    color: white;

    span:last-child {
        font-size: 0.9rem;
        opacity: 0.8;
    }
`;

export const FooterGradient = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
        to top,
        ${(props) => props.theme.colors.primary} 0%,
        transparent 100%
    );
    opacity: 0.8;
    pointer-events: none;
`;
