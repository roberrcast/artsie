import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/searchSlice";
import type { RootState, AppDispatch } from "../../store";
import MasonryGrid from "../../components/MasonryGrid";
import { Search as SearchIcon } from "lucide-react";
import * as S from "./styles";
import LoadingSpinner from "../../components/LoadingSpinner";

const SearchPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [localQuery, setLocalQuery] = useState(query);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { results, loading } = useSelector(
        (state: RootState) => state.search,
    );

    // Hacer fetch cada que cambie el query en el URL
    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults(query));
            setLocalQuery(query); // Sincronizar el input local con el URL
        }
    }, [query, dispatch]);

    // Manejo del submit en el search bar
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (localQuery.trim()) {
            setSearchParams({ q: localQuery }); // Actualiza la URL lo que inicializa el useEffect
        }
    };

    if (loading)
        return <LoadingSpinner fullScreen message="Cargando resultados..." />;

    return (
        <S.PageContainer>
            <S.PageWrapper>
                <S.HeaderSection>
                    <S.Kicker>resultados de búsqueda</S.Kicker>

                    <S.Title>
                        Mostrando resultados para <span>"{query}"</span>
                    </S.Title>
                </S.HeaderSection>

                <S.SearchBarSection>
                    <S.Form onSubmit={handleSubmit}>
                        <S.Input
                            placeholder="Buscar en la colección"
                            value={localQuery}
                            onChange={(e) => setLocalQuery(e.target.value)}
                        />

                        <S.SearchIconWrapper type="submit">
                            <SearchIcon />
                        </S.SearchIconWrapper>
                    </S.Form>
                </S.SearchBarSection>

                <MasonryGrid
                    items={results}
                    loading={loading}
                    onCardClick={(id) => navigate(`/artwork/${id}`)}
                />

                {!loading && results.length === 0 && (
                    <p>
                        No se encontraron resultados. Intenta con otros términos
                        en inglés.
                    </p>
                )}
            </S.PageWrapper>
        </S.PageContainer>
    );
};

export default SearchPage;
