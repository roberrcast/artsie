import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchArtists, fetchArtistSearch } from "../../store/artistsSlice";
import type { RootState, AppDispatch } from "../../store";
import { ArrowRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import * as S from "./styles";
import LoadingSpinner from "../../components/LoadingSpinner";

const Artists: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [lastSearched, setLastSearched] = useState("");

    const { items, searchResults, loading, currentPage, totalPages } =
        useSelector((state: RootState) => state.artists);

    const handleSearch = () => {
        const trimmed = query.trim();

        if (trimmed.length === 0) {
            setLastSearched("");
            return;
        }

        if (trimmed.length > 2) {
            dispatch(fetchArtistSearch(trimmed));
            setLastSearched(trimmed);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [currentPage]);

    // Decidir qué lista mostrar en la búsqueda
    const isSearching = lastSearched.length > 0;
    const artistsToShow = isSearching ? searchResults : items;

    useEffect(() => {
        dispatch(fetchArtists(1));
    }, [dispatch]);

    if (loading && items.length === 0 && query.length === 0) {
        return (
            <LoadingSpinner fullScreen message="Invocando a los maestros..." />
        );
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
                        <S.SearchButton
                            type="button"
                            onClick={handleSearch}
                            aria-label="Ejecutar búsqueda"
                        >
                            <Search />
                        </S.SearchButton>
                        <input
                            type="text"
                            placeholder="Buscar por nombre, movimiento o época..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
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
