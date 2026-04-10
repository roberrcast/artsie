import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import { fetchExhibitionsWithImages } from "../../store/exhibitionsSlice";
import type { RootState, AppDispatch } from "../../store";
import { stripHtml } from "../../utils/textUtils";
import * as S from "./styles";

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
                <p>Cargando Exhibiciones...</p>
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

                    <S.Explore onClick={() => navigate("/exhibitions")}>
                        explorar todo
                    </S.Explore>
                </S.TitleNavContainer>

                <S.Grid>
                    {featuredExhibitions.map((exh) => (
                        <S.Card key={exh.id}>
                            <S.ImageContainer>
                                {exh.image_url ? (
                                    <img src={exh.image_url} alt={exh.title} />
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
                                <S.Type>{`${exh.gallery_title || exh.api_model}`}</S.Type>

                                <S.ExhibitionTitle>
                                    {exh.title}
                                </S.ExhibitionTitle>

                                <S.Description>
                                    {exh.short_description
                                        ? stripHtml(exh.short_description)
                                        : "Explora esta exhibición."}
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
