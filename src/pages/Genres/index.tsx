import React from "react";
import { genreData } from "./data";
import { buildImageUrl } from "../../utils/imageUtils";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Genres: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.PageContainer>
            <S.PageWrapper>
                {/* Sección del encabezado */}
                <S.HeaderSection>
                    <S.Title>Explora Estilos</S.Title>

                    <S.Subtitle>
                        Viaja a través de las épocas de la expresión creativa,
                        desde la maestría de la antigüedad hasta la subversión
                        moderna.
                    </S.Subtitle>
                </S.HeaderSection>

                {/* Sección del grid */}
                <S.GenreGrid>
                    {genreData.map((genre) => (
                        <S.GenreCard
                            key={genre.id}
                            onClick={() => navigate(`/genres/${genre.id}`)}
                        >
                            <img
                                src={buildImageUrl(genre.coverId)}
                                alt={genre.label}
                            />
                            <S.Overlay />

                            <S.CardContent>
                                <S.GenreLabel>{genre.label}</S.GenreLabel>
                                <S.GenreDescription>
                                    {genre.description}
                                </S.GenreDescription>
                            </S.CardContent>
                        </S.GenreCard>
                    ))}
                </S.GenreGrid>
            </S.PageWrapper>
        </S.PageContainer>
    );
};

export default Genres;
