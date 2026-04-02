import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import * as S from "./styles";
import { stripHtml } from "../../utils/textUtils";

const FeaturedSection: React.FC = () => {
    const { featuredArtwork, iiifUrl, loading } = useSelector(
        (state: RootState) => state.artworks,
    );

    return React.useMemo(() => {
        if (loading) return <p>Cargando la obra del día...</p>;

        if (loading || !featuredArtwork || !iiifUrl) return null;

        const imageUrl = `/iiif/2/${featuredArtwork.image_id}/full/843,/0/default.jpg`;

        return (
            <S.FeaturedContainer>
                <S.FeaturedWrapper>
                    <S.Image
                        src={imageUrl}
                        referrerPolicy="no-referrer"
                        crossOrigin="anonymous"
                        alt={
                            featuredArtwork.thumbnail?.alt_text ||
                            `Imagen de ${featuredArtwork.title}`
                        }
                    />

                    <S.FeaturedHeader>
                        <S.Kicker>obra del día</S.Kicker>

                        <S.FeaturedTitle>
                            {featuredArtwork.title}
                        </S.FeaturedTitle>

                        <S.Description>
                            {featuredArtwork.description
                                ? stripHtml(featuredArtwork.description)
                                : "Haz clic en el botón para más detalles de la imagen."}
                        </S.Description>

                        <S.FeaturedButton>ver obra maestra</S.FeaturedButton>
                    </S.FeaturedHeader>
                </S.FeaturedWrapper>
            </S.FeaturedContainer>
        );
    }, [featuredArtwork, loading]);
};

export default FeaturedSection;
