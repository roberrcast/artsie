import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import { fetchExhibitionsWithImages } from "../../store/exhibitionsSlice";
import type { RootState, AppDispatch } from "../../store";
import { stripHtml } from "../../utils/textUtils";
import * as S from "./styles";
import LoadingSpinner from "../LoadingSpinner";
import { optimizeExhibitionImage } from "../../utils/imageUtils";

const ExhibitionsSection: React.FC = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    // fetch de las exhibiciones del store
    const { items, loading, error } = useSelector(
        (state: RootState) => state.exhibitions,
    );

    useEffect(() => {
        dispatch(fetchExhibitionsWithImages());
    }, [dispatch]);

    const featuredExhibitions = items.slice(0, 3);

    if (loading && items.length === 0)
        return (
            <S.SectionContainer>
                <LoadingSpinner message="Cargando exhibiciones..." />
            </S.SectionContainer>
        );

    if (error)
        return (
            <S.SectionContainer>
                <p>Error: {error}</p>
            </S.SectionContainer>
        );

    return (
        <S.SectionContainer>
            <S.SectionWrapper>
                <S.Kicker>exhibiciones</S.Kicker>

                <S.TitleNavContainer>
                    <S.Title>Exhibiciones Actuales</S.Title>

                    <S.Explore
                        aria-label="Explora todas la exhibiciones disponibles en este sitio"
                        onClick={() => navigate("/exhibitions/")}
                    >
                        explorar todo
                    </S.Explore>
                </S.TitleNavContainer>

                <S.Grid>
                    {featuredExhibitions.map((exh) => (
                        <S.Card
                            key={exh.id}
                            role="link"
                            tabIndex={0}
                            aria-labelledby={`prefix-${exh.id} title-${exh.title}`}
                            aria-label={`Vaya a los detalles de ${exh.title}`}
                            onClick={() => navigate(`/exhibition/${exh.id}`)}
                        >
                            <S.AriaSpan id={`prefix-${exh.id}`} lang="es" />

                            <S.ImageContainer>
                                {exh.image_url ? (
                                    <img
                                        src={optimizeExhibitionImage(
                                            exh.image_url,
                                        )}
                                        alt={exh.title}
                                        lang="en"
                                        decoding="async"
                                        loading="lazy"
                                        onLoad={(e) =>
                                            (e.currentTarget.style.opacity =
                                                "1")
                                        }
                                    />
                                ) : (
                                    <div
                                        style={{
                                            padding: "2rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        No hay imagen disponible
                                    </div>
                                )}
                            </S.ImageContainer>

                            <S.Content>
                                <S.Type lang="en">{`${exh.gallery_title || exh.api_model}`}</S.Type>

                                <S.ExhibitionTitle>
                                    <span lang="en" id={`title-${exh.id}`}>
                                        {exh.title}
                                    </span>
                                </S.ExhibitionTitle>

                                <S.Description>
                                    {exh.short_description ? (
                                        <span lang="en">
                                            {stripHtml(exh.short_description)}
                                        </span>
                                    ) : (
                                        "Explora esta exhibición."
                                    )}
                                </S.Description>

                                <S.DetailsLink>
                                    Detalles
                                    <span>
                                        <ArrowRight size={20} />
                                    </span>
                                </S.DetailsLink>
                            </S.Content>
                        </S.Card>
                    ))}
                </S.Grid>
            </S.SectionWrapper>
        </S.SectionContainer>
    );
};

export default ExhibitionsSection;
