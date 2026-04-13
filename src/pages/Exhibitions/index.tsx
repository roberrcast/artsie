import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExhibitionsWithImages } from "../../store/exhibitionsSlice";
import type { RootState, AppDispatch } from "../../store";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/dateUtils";

const ExhibitionsPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading } = useSelector(
        (state: RootState) => state.exhibitions,
    );

    useEffect(() => {
        dispatch(fetchExhibitionsWithImages());
    }, [dispatch]);

    return (
        <S.PageContainer>
            <S.PageWrapper>
                <S.Header>
                    <S.Title>Exhibiciones Actuales & Permanentes</S.Title>

                    <S.Subtitle>
                        Descubre un recorrido selecto a través del tiempo y la
                        técnica. Estas exposiciones temporales celebran la
                        convergencia entre la maestría histórica y la visión
                        contemporánea, acercando las obras de arte más
                        importantes del mundo a nuestra comunidad local.
                    </S.Subtitle>
                </S.Header>

                {loading ? (
                    <p>Cargando Exhibiciones...</p>
                ) : (
                    <S.ExhibitionsGrid>
                        {items.map((exh) => (
                            <S.ExhibitionCard
                                key={exh.id}
                                onClick={() =>
                                    navigate(`/exhibition/${exh.id}`)
                                }
                            >
                                <S.ImageContainer>
                                    <img src={exh.image_url} alt={exh.title} />
                                </S.ImageContainer>

                                <S.Content>
                                    <S.Type>
                                        {exh.gallery_title || exh.api_model}
                                    </S.Type>

                                    <S.CardTitle>{exh.title}</S.CardTitle>

                                    <S.Date>
                                        {formatDate(exh.aic_start_at)} —{" "}
                                        {formatDate(exh.aic_end_at)}
                                    </S.Date>
                                </S.Content>
                            </S.ExhibitionCard>
                        ))}
                    </S.ExhibitionsGrid>
                )}
            </S.PageWrapper>
        </S.PageContainer>
    );
};

export default ExhibitionsPage;
