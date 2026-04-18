import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworks } from "../../store/artworksSlice";
import { buildImageUrl } from "../../utils/imageUtils";
import type { RootState, AppDispatch } from "../../store";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import placeHolder from "../../assets/place_holder.png";

const ArtworksPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, currentPage, totalPages } = useSelector(
        (state: RootState) => state.artworks,
    );

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchArtworks(1));
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);

    if (!loading && items.length === 0) return <p>Curando la galería...</p>;

    if (!loading && items.length === 0) return <p>Curando la galería...</p>;

    const altImage = placeHolder;

    return (
        <S.PageContainer>
            <S.PageWrapper>
                <S.HeaderSection>
                    <S.Kicker>colección galería</S.Kicker>
                    <S.Title>Obras Maestras Atemporales</S.Title>
                    <S.Description>
                        Explora la intersección entre la tradición y la
                        vanguardia a través de los archivos digitales del
                        Instituto de Arte de Chicago.
                    </S.Description>
                </S.HeaderSection>

                <S.MasonryContainer>
                    {items.map((artwork) => (
                        <S.ArtCard
                            key={artwork.id}
                            onClick={() => navigate(`/artwork/${artwork.id}`)}
                        >
                            <S.ImageWrapper>
                                <img
                                    src={
                                        buildImageUrl(artwork.image_id) ||
                                        altImage
                                    }
                                    alt={artwork.title}
                                    loading="lazy"
                                />
                            </S.ImageWrapper>

                            <S.InfoCard>
                                <S.ArtTitle>{artwork.title}</S.ArtTitle>
                                <S.ArtArtist>
                                    {artwork.artist_display}
                                </S.ArtArtist>
                            </S.InfoCard>
                        </S.ArtCard>
                    ))}
                </S.MasonryContainer>

                <S.PaginationWrapper>
                    <S.PaginationButton
                        disabled={currentPage === 1}
                        onClick={() => dispatch(fetchArtworks(currentPage - 1))}
                    >
                        <ArrowLeft /> Previo
                    </S.PaginationButton>

                    <S.PageIndicator>
                        Página {currentPage} de {totalPages}
                    </S.PageIndicator>

                    <S.PaginationButton
                        $isNext={true}
                        disabled={currentPage === totalPages}
                        onClick={() => dispatch(fetchArtworks(currentPage + 1))}
                    >
                        Siguiente <ArrowRight />
                    </S.PaginationButton>
                </S.PaginationWrapper>
            </S.PageWrapper>
        </S.PageContainer>
    );
};

export default ArtworksPage;
