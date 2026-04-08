import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import * as S from "./styles";
import { stripHtml } from "../../utils/textUtils";
import { useNavigate } from "react-router-dom";
import { buildImageUrl } from "../../utils/imageUtils";

const FeaturedSection: React.FC = () => {
    const { featuredArtwork, iiifUrl, loading } = useSelector(
        (state: RootState) => state.artworks,
    );

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/artwork/${featuredArtwork.id}`);
    };

    return React.useMemo(() => {
        if (loading) return <p>Cargando la obra del día...</p>;

        if (loading || !featuredArtwork || !iiifUrl) return null;

        const imageUrl = buildImageUrl(
            featuredArtwork.image_id,
            featuredArtwork.thumbnail?.width,
        );

        return (
            <S.FeaturedContainer>
                <S.FeaturedWrapper>
                    <S.ImageContainer>
                        <S.Image
                            src={imageUrl}
                            referrerPolicy="no-referrer"
                            crossOrigin="anonymous"
                            alt={
                                featuredArtwork.thumbnail?.alt_text ||
                                `Imagen de ${featuredArtwork.title}`
                            }
                        />
                    </S.ImageContainer>

                    <S.FeaturedHeader>
                        <S.Kicker>obra del día</S.Kicker>

                        <S.FeaturedTitle>
                            {featuredArtwork.title}
                        </S.FeaturedTitle>

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
    }, [featuredArtwork, loading]);
};

export default FeaturedSection;
