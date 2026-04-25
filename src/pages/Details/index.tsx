import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworkDetails } from "../../store/artworksSlice";
import type { RootState, AppDispatch } from "../../store";
import * as S from "./styles";
import { splitArtistDisplay } from "../../utils/textUtils";
import { buildImageUrl } from "../../utils/imageUtils";
import DOMPurify from "dompurify";
import placeHolderImage from "../../assets/no_image.png";
import ArtworkModal from "../../components/ArtworkModal";

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { selectedArtwork, loading } = useSelector(
        (state: RootState) => state.artworks,
    );

    // State del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const noImage = placeHolderImage;

    useEffect(() => {
        if (id) dispatch(fetchArtworkDetails(id));
    }, [id, dispatch]);

    if (loading) return <p>Descubriendo detalles...</p>;
    if (!selectedArtwork) return null;

    const imageUrl = buildImageUrl(
        selectedArtwork.image_id,
        selectedArtwork.thumbnail?.width,
    );

    const artist = splitArtistDisplay(selectedArtwork.artist_display);

    return (
        <>
            <S.DetailsContainer>
                <S.DetailsWrapper>
                    <S.ImageContainer onClick={() => setIsModalOpen(true)}>
                        <S.Image
                            src={imageUrl || noImage}
                            alt={selectedArtwork.thumbnail?.alt_text}
                        />
                    </S.ImageContainer>

                    {/* This is going to the right of the image */}
                    <S.MetaContainer>
                        <S.ArtistInfo>
                            <S.DateDisplay>
                                {selectedArtwork.date_display}
                            </S.DateDisplay>

                            <S.Title>{selectedArtwork.title}</S.Title>

                            <S.ArtistDisplay>
                                {artist.name}
                                <span>{artist.details}</span>
                            </S.ArtistDisplay>
                        </S.ArtistInfo>

                        <S.ArtworkDetails>
                            <S.DetailsTitle>Detalles de la Obra</S.DetailsTitle>

                            <S.Medium>
                                <S.Label>Medio</S.Label>
                                <S.Value>
                                    {selectedArtwork.medium_display}
                                </S.Value>
                            </S.Medium>

                            <S.Dimensions>
                                <S.Label>Dimensiones</S.Label>
                                <S.Value>{selectedArtwork.dimensions}</S.Value>
                            </S.Dimensions>

                            <S.CreditLine>
                                <S.Label>Ficha Técnica</S.Label>
                                <S.Value>{selectedArtwork.credit_line}</S.Value>
                            </S.CreditLine>
                        </S.ArtworkDetails>
                    </S.MetaContainer>
                </S.DetailsWrapper>
            </S.DetailsContainer>

            <ArtworkModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                artwork={selectedArtwork}
                imageUrl={imageUrl}
            />

            {selectedArtwork?.description && (
                <S.Description>
                    <S.DescriptionWrapper>
                        <S.DescriptionTitle>
                            La historia de la obra
                        </S.DescriptionTitle>

                        <S.DescriptionTextContainer
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                    selectedArtwork.description || "",
                                ),
                            }}
                        ></S.DescriptionTextContainer>
                    </S.DescriptionWrapper>
                </S.Description>
            )}
        </>
    );
};

export default Details;
