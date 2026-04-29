import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtworks } from "../../store/artworksSlice";
import type { RootState, AppDispatch } from "../../store";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import MasonryGrid from "../../components/MasonryGrid";
import LoadingSpinner from "../../components/LoadingSpinner";

const ArtworksPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, currentPage, totalPages } = useSelector(
        (state: RootState) => state.artworks,
    );

    const navigate = useNavigate();

    // -- useEffect para la paginación --
    useEffect(() => {
        dispatch(fetchArtworks(1));
    }, [dispatch]);

    // -- useEffect para el scroll --
    /* setTimeout para Firefox (no funcionaba correctamente
     * después de pasar 75% de la pantalla) */
    useEffect(() => {
        const scrollTimeout = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }, 0);

        return () => clearTimeout(scrollTimeout);
    }, [currentPage]);

    // -- loading screen --
    if (loading)
        return <LoadingSpinner fullScreen message="Curando la galería..." />;

    return (
        <S.PageContainer>
            <S.PageWrapper>
                <S.HeaderSection>
                    <S.Kicker>colección galería</S.Kicker>
                    <S.Title>Obras Maestras Atemporales</S.Title>
                    <S.Description>
                        Explora la intersección entre la tradición y la
                        vanguardia a través de los archivos digitales del Art
                        Institute of Chicago.
                    </S.Description>
                </S.HeaderSection>

                <MasonryGrid
                    items={items}
                    loading={loading}
                    onCardClick={(id) => navigate(`/artwork/${id}`)}
                />

                <S.PaginationWrapper>
                    <S.PaginationButton
                        disabled={currentPage === 1}
                        onClick={() => dispatch(fetchArtworks(currentPage - 1))}
                    >
                        <ArrowLeft /> Anterior
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
