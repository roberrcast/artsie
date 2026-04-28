import React from "react";
import * as S from "./styles";
import loadingImg from "../../assets/loading_image.png";

const LoadingScreen: React.FC = () => {
    return (
        <S.LoadingOverlay>
            <S.CanvasBackground />

            <S.TopLeftBranding>The Open Gallery</S.TopLeftBranding>

            <S.TopRightIcon>
                <svg viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520zm40-80h80v-80h-80zM120-280h400v-400H120zm40-80h320L375-500l-75 100-55-73zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200zm40-80h80v-80h-80zm-640 0v-400zm640-320v-80zm0 320v-80z" />
                </svg>
            </S.TopRightIcon>

            <S.CenterContent>
                <S.ImageWrapper>
                    <div>
                        <img src={loadingImg} alt="Miniamlist Sculpture" />
                    </div>
                </S.ImageWrapper>

                <S.Title>Curando su experiencia...</S.Title>

                <S.LoaderContainer>
                    <S.LineLoader />
                </S.LoaderContainer>

                <S.Subtitle>
                    Cargando recursos del sistema y sincronizando la interfaz de
                    la galería.
                </S.Subtitle>
            </S.CenterContent>

            <S.Footer>
                <S.CopyrightContainer>
                    <S.CopyrightText>
                        Cortesía del Art Institute of Chigago
                    </S.CopyrightText>
                </S.CopyrightContainer>
            </S.Footer>
        </S.LoadingOverlay>
    );
};

export default LoadingScreen;
