import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import * as S from "./styles";
import { stripHtml } from "../../utils/textUtils";
import { useNavigate } from "react-router-dom";
import { buildImageUrl } from "../../utils/imageUtils";
import LoadingSpinner from "../LoadingSpinner";

const FeaturedSection: React.FC = () => {
    const { featuredArtwork, iiifUrl, loading } = useSelector(
        (state: RootState) => state.artworks,
    );

    const navigate = useNavigate();

    if (loading)
        return (
            <LoadingSpinner fullScreen message="Cargando la obra del día..." />
        );

    if (loading || !featuredArtwork || !iiifUrl) return null;

    const imageUrl = buildImageUrl(featuredArtwork.image_id, 800);

    const handleViewDetails = () => {
        setTimeout(() => {
            navigate(`/artwork/${featuredArtwork.id}`);
        }, 200);
    };

    return (
        <S.FeaturedContainer>
            <S.FeaturedWrapper>
                <S.ImageContainer>
                    <S.Image
                        src={imageUrl}
                        decoding="async"
                        referrerPolicy="no-referrer"
                        crossOrigin="anonymous"
                        alt={
                            featuredArtwork.thumbnail?.alt_text ||
                            `Imagen de ${featuredArtwork.title}`
                        }
                    />

                    <S.MobileHeader>
                        <S.MobileKicker>obra del día</S.MobileKicker>

                        <S.MobileTitle>{featuredArtwork.title}</S.MobileTitle>

                        <S.MobileDescription>
                            {featuredArtwork.description
                                ? stripHtml(featuredArtwork.description)
                                : "Haz clic en el botón para más detalles acerca de la obra"}
                        </S.MobileDescription>

                        <S.MobileButton onClick={handleViewDetails}>
                            ver obra
                        </S.MobileButton>
                    </S.MobileHeader>
                </S.ImageContainer>

                <S.FeaturedHeader>
                    <S.Kicker>obra del día</S.Kicker>

                    <S.FeaturedTitle>{featuredArtwork.title}</S.FeaturedTitle>

                    <S.Description>
                        {featuredArtwork.description
                            ? stripHtml(featuredArtwork.description)
                            : "Haz clic en el botón para más detalles acerca de la obra"}
                    </S.Description>

                    <S.ButtonContainer>
                        <S.FeaturedButton onClick={handleViewDetails}>
                            ver obra maestra
                        </S.FeaturedButton>
                    </S.ButtonContainer>
                </S.FeaturedHeader>
            </S.FeaturedWrapper>
        </S.FeaturedContainer>
    );
};

export default FeaturedSection;
