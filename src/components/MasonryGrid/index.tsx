import React from "react";
import { buildImageUrl } from "../../utils/imageUtils";
import * as S from "./styles";
import placeHolder from "../../assets/place_holder.png";
import type { Artwork } from "../../types";

interface MasonryGridProps {
    items: Artwork[];
    loading?: boolean;
    onCardClick: (id: number) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({
    items,
    loading,
    onCardClick,
}) => {
    if (loading && items.length === 0) return null;

    const noImage = placeHolder;

    return (
        <S.MasonryContainer $isLoading={loading}>
            {items.map((artwork) => (
                <S.ArtCard
                    key={artwork.id}
                    onClick={() => onCardClick(artwork.id)}
                >
                    <S.ImageWrapper>
                        <img
                            src={buildImageUrl(artwork.image_id) || noImage}
                            alt={artwork.title}
                            loading="lazy"
                            lang="en"
                        />
                    </S.ImageWrapper>

                    <S.InfoCard>
                        <S.ArtworkTitle lang="en">
                            {artwork.title}
                        </S.ArtworkTitle>

                        <S.ArtworkArtist lang="en">
                            {artwork.artist_display}
                        </S.ArtworkArtist>
                    </S.InfoCard>
                </S.ArtCard>
            ))}
        </S.MasonryContainer>
    );
};

export default MasonryGrid;
