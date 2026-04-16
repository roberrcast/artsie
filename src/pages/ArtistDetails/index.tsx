import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistsWithWorks } from "../../store/artistsSlice";
import type { RootState, AppDispatch } from "../../store";
import { buildImageUrl } from "../../utils/imageUtils";
import DOMPurify from "dompurify";
import * as S from "./styles";

const ArtistDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { selectedArtist, artistWorks, loading } = useSelector(
        (state: RootState) => state.artists,
    );

    useEffect(() => {
        if (id) dispatch(fetchArtistsWithWorks(id));
    }, [id, dispatch]);

    if (loading) return <p>Explorando el archivo</p>;
    if (!selectedArtist) return null;

    const heroImage =
        artistWorks.length > 0 ? buildImageUrl(artistWorks[0].image_id) : "";

    return (
        <S.MainContent>
            <S.HeroSection $bgImage={heroImage}>
                <S.HeroContainer>
                    <S.ArtistTag>artista</S.ArtistTag>
                    <S.Name>{selectedArtist.title}</S.Name>

                    <S.Dates>
                        {selectedArtist.birth_date || "???"} —{" "}
                        {selectedArtist.death_date || "???"}
                    </S.Dates>
                </S.HeroContainer>
            </S.HeroSection>

            <S.BioSection>
                <S.BioTitleWrapper>
                    <S.BioTitle>Una Perspectiva Visionaria</S.BioTitle>

                    <S.TitleAccent></S.TitleAccent>
                </S.BioTitleWrapper>

                <S.BioText
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                            selectedArtist.description ||
                                "No hay descripción disponible",
                        ),
                    }}
                ></S.BioText>
            </S.BioSection>

            {/* Galería */}
            {artistWorks.length > 0 && (
                <S.GallerySection>
                    <S.GalleryHeader>
                        <div>
                            <S.SectionTitle>
                                Obras Maestras Seleccionadas
                            </S.SectionTitle>
                            <S.SectionSubtitle>
                                Un recorrido minucioso a través de cada obra,
                                trazo, matiz, luz, y sombra.
                            </S.SectionSubtitle>
                        </div>
                    </S.GalleryHeader>

                    <S.GalleryGrid>
                        {/* La tarjeta grande */}
                        {artistWorks[0] && (
                            <S.FeaturedCard
                                onClick={() =>
                                    navigate(`/artwork/${artistWorks[0].id}`)
                                }
                            >
                                <img
                                    src={buildImageUrl(artistWorks[0].image_id)}
                                    alt={artistWorks[0].title}
                                />

                                <S.CardOverlay>
                                    <S.WorkDate>
                                        {artistWorks[0].date_display}
                                    </S.WorkDate>

                                    <S.WorkTitle>
                                        {artistWorks[0].title}
                                    </S.WorkTitle>

                                    <S.FeaturedDescription
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                                artistWorks[0].description ||
                                                    "No hay descripción disponible.",
                                            ),
                                        }}
                                    ></S.FeaturedDescription>
                                </S.CardOverlay>
                            </S.FeaturedCard>
                        )}

                        {/* Las dos tarjetas más pequeñas */}
                        <S.SideStack>
                            {artistWorks.slice(1, 3).map((work) => (
                                <S.SmallCard
                                    key={work.id}
                                    onClick={() =>
                                        navigate(`/artwork/${work.id}`)
                                    }
                                >
                                    <img
                                        src={buildImageUrl(work.image_id)}
                                        alt={work.title}
                                    />

                                    <S.CardOverlay>
                                        <S.WorkDate>
                                            {work.date_display}
                                        </S.WorkDate>

                                        <S.WorkTitle>{work.title}</S.WorkTitle>
                                    </S.CardOverlay>
                                </S.SmallCard>
                            ))}
                        </S.SideStack>
                    </S.GalleryGrid>
                </S.GallerySection>
            )}
        </S.MainContent>
    );
};

export default ArtistDetails;
