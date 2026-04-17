import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchArtists, fetchArtistSearch } from "../../store/artistsSlice";
import type { RootState, AppDispatch } from "../../store";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import * as S from "./styles";

const Artists: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    const { items, searchResults, loading, currentPage, totalPages } =
        useSelector((state: RootState) => state.artists);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.length > 2) {
                dispatch(fetchArtistSearch(query));
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [query, dispatch]);

    // Decidir qué lista mostrar en la búsqueda
    const isSearching = query.length > 2;
    const artistsToShow = isSearching ? searchResults : items;

    useEffect(() => {
        dispatch(fetchArtists(1));
    }, [dispatch]);

    if (loading && items.length === 0 && query.length === 0) {
        return <p>Invocando a los maestros...</p>;
    }

    return (
        <S.PageContainer>
            <S.PageWrapper>
                <S.HeaderSection>
                    <S.Title>Artistas</S.Title>

                    <S.Subtitle>
                        Descubre a los visionarios que han forjado la historia
                        del arte. Explora el índice curado de maestros y
                        talentos contemporáneos cortesía del AIC.
                    </S.Subtitle>
                </S.HeaderSection>

                <S.SearchSection>
                    <S.SearchBarWrapper>
                        <span>
                            <Search />
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar por nombre, movimiento o época..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        {loading && <S.LoadingIndicator />}
                    </S.SearchBarWrapper>
                </S.SearchSection>

                <S.ArtistGrid $isLoading={loading && query.length > 0}>
                    {artistsToShow.length > 0 ? (
                        artistsToShow.map((artist) => (
                            <S.ArtistEntry
                                key={artist.id}
                                onClick={() => navigate(`/artist/${artist.id}`)}
                            >
                                <S.EntryHeader>
                                    <S.ArtistName>{artist.title}</S.ArtistName>

                                    <S.AgentTag>Artista</S.AgentTag>
                                </S.EntryHeader>

                                <S.ArtistDates>
                                    {artist.birth_date || "???"} —{" "}
                                    {artist.death_date || "???"}
                                </S.ArtistDates>

                                <S.ViewDetails>
                                    Ver Detalles{" "}
                                    <span>
                                        <ArrowRight />
                                    </span>
                                </S.ViewDetails>
                            </S.ArtistEntry>
                        ))
                    ) : (
                        <S.NoResults>
                            <p>
                                No se encontraron artistas que coincidan con "
                                {query}"
                            </p>
                        </S.NoResults>
                    )}
                </S.ArtistGrid>

                {!isSearching && (
                    <S.PaginationWrapper>
                        <button
                            disabled={currentPage === 1}
                            onClick={() =>
                                dispatch(fetchArtists(currentPage - 1))
                            }
                        >
                            <span>
                                <ChevronLeft />
                            </span>
                        </button>

                        <p>
                            Página {currentPage} de {totalPages}
                        </p>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() =>
                                dispatch(fetchArtists(currentPage + 1))
                            }
                        >
                            <span>
                                <ChevronRight />
                            </span>
                        </button>
                    </S.PaginationWrapper>
                )}
            </S.PageWrapper>
        </S.PageContainer>
    );
};

export default Artists;
