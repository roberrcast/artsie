import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistsWithWorks } from "../../store/artistsSlice";
import type { RootState, AppDispatch } from "../../store";
import { buildImageUrl } from "../../utils/imageUtils";
import DOMPurify from "dompurify";
import * as S from "./styles";
import banner from "../../assets/placeholder_banner.png";
import { ExternalLink } from "lucide-react";

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

    const heroBanner = banner;
    const heroImage =
        artistWorks.length > 0
            ? buildImageUrl(artistWorks[0].image_id)
            : heroBanner;

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
                                "No hay descripción disponible para este artista.",
                        ),
                    }}
                ></S.BioText>
            </S.BioSection>

            {/* Galería */}
            {artistWorks && artistWorks.length > 0 ? (
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
            ) : (
                <S.RestrictedSection>
                    <S.RestrictedWrapper>
                        <S.LockIcon>
                            <svg viewBox="0 -960 960 960" fill="currentColor">
                                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920t141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80zm296.5-223.5Q560-327 560-360t-23.5-56.5T480-440t-56.5 23.5T400-360t23.5 56.5T480-280t56.5-23.5M360-640h240v-80q0-50-35-85t-85-35-85 35-35 85z" />
                            </svg>{" "}
                        </S.LockIcon>

                        <S.RestrictedTitle>
                            No hay obras disponibles para este artista
                        </S.RestrictedTitle>

                        <S.RestrictedText>
                            Debido a las restricciones actuales en materia de
                            derechos de autor y a los acuerdos de licencia, en
                            estos momentos no hay disponibles reproducciones
                            digitales en alta resolución de las obras maestras
                            de {selectedArtist.title} en nuestra colección de
                            acceso libre.{" "}
                        </S.RestrictedText>

                        <S.ExternalLinkButton
                            href={`https://www.artic.edu/artists/${selectedArtist.id}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>visite el aic para más detalles</span>{" "}
                            <span>
                                <ExternalLink />
                            </span>
                        </S.ExternalLinkButton>
                    </S.RestrictedWrapper>
                </S.RestrictedSection>
            )}
        </S.MainContent>
    );
};

export default ArtistDetails;
