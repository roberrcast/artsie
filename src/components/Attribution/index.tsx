import React from "react";
import { ExternalLink } from "lucide-react";
import * as S from "./styles";

const Attribution: React.FC = () => {
    return (
        <S.Banner>
            <S.BannerWrapper>
                <S.BannerKicker>recursos públicos</S.BannerKicker>

                <S.BannerTitle>Impulsado por el Acceso Abierto</S.BannerTitle>

                <S.BannerText>
                    Todas las obras, descripciones, información e imágenes que
                    se muestran en esta plataforma son provistas a través de la
                    API de acceso público del Art Institute of Chicago,
                    fomentando el interés internacional por la colección del
                    museo y el arte.
                </S.BannerText>

                <S.ButtonContainer>
                    <S.LinkHome
                        href="https://www.artic.edu/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>visite el sitio del aic</span>
                        <span>
                            <ExternalLink />
                        </span>
                    </S.LinkHome>

                    <S.LinkDocs
                        href="https://api.artic.edu/docs/#introduction"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>documentación api</span>
                        <span>
                            <ExternalLink />
                        </span>
                    </S.LinkDocs>
                </S.ButtonContainer>
            </S.BannerWrapper>
        </S.Banner>
    );
};

export default Attribution;
