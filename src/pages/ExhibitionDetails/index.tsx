import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchExhibitionDetails } from "../../store/exhibitionsSlice";
import type { RootState, AppDispatch } from "../../store";
import { buildImageUrl } from "../../utils/imageUtils";
import { Compass, ExternalLink } from "lucide-react";
import DOMPurify from "dompurify";
import * as S from "./styles";
import { formatDate } from "../../utils/dateUtils";

const ExhibitionDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate();

    const { selectedExhibition, relatedArtworks, loading } = useSelector(
        (state: RootState) => state.exhibitions,
    );

    useEffect(() => {
        if (id) dispatch(fetchExhibitionDetails(id));
    }, [id, dispatch]);

    const displayableArtworks =
        relatedArtworks?.filter((art) => art.image_id) || [];

    if (loading) return <p>Abriendo las puertas de la galería</p>;
    if (!selectedExhibition) return null;

    return (
        <S.MainContent>
            <S.HeroSection $bgImage={selectedExhibition.image_url}>
                <S.HeroContainer>
                    <S.HeroContent>
                        <S.Kicker>exhibición actual</S.Kicker>

                        <S.Title>{selectedExhibition.title}</S.Title>

                        <S.DataBadge>
                            <p>
                                {formatDate(selectedExhibition.aic_start_at)} —{" "}
                                {formatDate(selectedExhibition.aic_end_at)}
                            </p>
                        </S.DataBadge>
                    </S.HeroContent>
                </S.HeroContainer>
            </S.HeroSection>

            <S.DescriptionSection>
                <S.DescriptionWrapper>
                    <S.IconWrapper>
                        <svg viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 32.5-156t88-127T330-848.5 488-880q80 0 151 27.5t124.5 76 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80M303-457q17-17 17-43t-17-43-43-17-43 17-17 43 17 43 43 17 43-17m120-160q17-17 17-43t-17-43-43-17-43 17-17 43 17 43 43 17 43-17m200 0q17-17 17-43t-17-43-43-17-43 17-17 43 17 43 43 17 43-17m120 160q17-17 17-43t-17-43-43-17-43 17-17 43 17 43 43 17 43-17" />
                        </svg>
                    </S.IconWrapper>

                    <S.DescriptionTitle>
                        Acerca de la Exhibición
                    </S.DescriptionTitle>

                    <S.DescriptionText
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                                selectedExhibition.short_description ||
                                    selectedExhibition.description ||
                                    "",
                            ),
                        }}
                    ></S.DescriptionText>
                </S.DescriptionWrapper>
            </S.DescriptionSection>

            {displayableArtworks.length > 0 ? (
                <S.CollectionSection>
                    <S.CollectionWrapper>
                        <S.CollectionHeader>
                            <div>
                                <S.CollectionTitle>
                                    Colección Destacada
                                </S.CollectionTitle>
                                <S.CollectionSubtitle>
                                    Obras seleccionadas de esta exhibición
                                </S.CollectionSubtitle>
                            </div>
                        </S.CollectionHeader>

                        <S.BentoGrid>
                            {displayableArtworks.map((artwork) => {
                                if (!artwork.image_id) return null;

                                return (
                                    <S.ArtCard
                                        key={artwork.id}
                                        onClick={() =>
                                            navigate(`/artwork/${artwork.id}`)
                                        }
                                    >
                                        <img
                                            src={buildImageUrl(
                                                artwork.image_id,
                                            )}
                                            alt={artwork.title}
                                        />

                                        <S.ArtInfoOverlay>
                                            <S.OverlayTitle>
                                                {artwork.title}
                                            </S.OverlayTitle>

                                            <S.OverlayDisplay>
                                                {artwork.artist_display}
                                            </S.OverlayDisplay>
                                        </S.ArtInfoOverlay>
                                    </S.ArtCard>
                                );
                            })}
                        </S.BentoGrid>
                    </S.CollectionWrapper>
                </S.CollectionSection>
            ) : (
                <S.EmptyState>
                    <S.EmptyWrapper>
                        <S.IconWrapper $size="30px">
                            <Compass />
                        </S.IconWrapper>

                        <S.EmptyTitle>Profundiza tu experiencia</S.EmptyTitle>

                        <S.EmptyText>
                            Esta exhibición cuenta con contenido dinámico
                            actualizado diariamente en el sitio oficial del Art
                            Institute of Chicago, incluyendo planos interactivos
                            y guías de audio detalladas.
                        </S.EmptyText>

                        <S.EmptyButton
                            href={selectedExhibition.web_url}
                            target="_blank"
                        >
                            <span>ver exhibición en el aic</span>{" "}
                            <span>
                                <ExternalLink />
                            </span>
                        </S.EmptyButton>
                    </S.EmptyWrapper>
                </S.EmptyState>
            )}
        </S.MainContent>
    );
};

export default ExhibitionDetails;
