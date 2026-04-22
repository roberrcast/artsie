import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreArtworks } from "../../store/genresSlice";
import { genreData } from "../Genres/data";
import type { RootState, AppDispatch } from "../../store";
import * as S from "./styles";
import { ArrowLeft } from "lucide-react";
import MasonryGrid from "../../components/MasonryGrid";

const GenreDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Tomar 'Surrealism' del URL
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    // Encontrar los metadatos de algún estilo en específico
    const genreInfo = genreData.find((g) => g.id === id);

    const { items, loading, error } = useSelector(
        (state: RootState) => state.genres,
    );

    // Hacer fetch del estilo/género basándonos en el query en term
    useEffect(() => {
        if (genreInfo) {
            dispatch(fetchGenreArtworks({ genre: genreInfo.query }));
        }
    }, [genreInfo, dispatch]);

    if (!genreInfo) return <p>No se encontraron estilos</p>;
    if (loading) return <p>Abriendo el archivo de {genreInfo.label}</p>;
    if (error) return <p>Hubo un error al cargar los estilos</p>;

    return (
        <S.PageContainer>
            <S.PageWrapper>
                {/* Header Section*/}
                <S.HeaderSection>
                    <S.BackButton onClick={() => navigate("/genres/")}>
                        <span>
                            <ArrowLeft />
                        </span>{" "}
                        Volver a Estilos
                    </S.BackButton>

                    <S.Title>{genreInfo.label}</S.Title>
                    <S.Description>
                        {genreInfo.extended_description}
                    </S.Description>
                </S.HeaderSection>

                <MasonryGrid
                    items={items}
                    loading={loading}
                    onCardClick={(id) => navigate(`/artwork/${id}`)}
                />
            </S.PageWrapper>
        </S.PageContainer>
    );
};

export default GenreDetails;
