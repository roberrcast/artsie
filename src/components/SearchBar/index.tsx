import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { fetchSubmenuData } from "../../store/artworksSlice";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { genreData } from "../../pages/Genres/data";
import { buildImageUrl } from "../../utils/imageUtils";
import * as S from "./styles";

interface SearchBarProps {
    onClose: () => void;
}

const SUGGESTED_SEARCHES = [
    { label: "Textiles", query: "textile" },
    { label: "Grabados y Dibujos", query: "Prints and Drawings" },
    { label: "Artes de Asia", query: "Arts of Asia" },
    {
        label: "Pintura y Escultura Europea",
        query: "Painting and Sculpture of Europe",
    },
];

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
    const GLOBAL_LIMIT = 20;

    const [query, setQuery] = useState("");
    const [isClosing, setIsClosing] = useState(false);
    const navigate = useNavigate();

    const handleStartClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 400);
    };

    const curatedCollections = genreData.filter(
        (g) => g.id === "Impressionism" || g.id === "watercolor",
    );

    const dispatch = useDispatch<AppDispatch>();
    const { artists, styles, loading } = useSelector(
        (state: RootState) => state.artworks,
    );

    const handleSearchSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            handleStartClose();
        }
    };

    useEffect(() => {
        dispatch(fetchSubmenuData());
    }, [dispatch]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleStartClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const setBodyOverflow = (value: string) => {
        document.body.style.overflow = value;
    };

    useEffect(() => {
        setBodyOverflow("hidden");

        return () => {
            setBodyOverflow("unset");
        };
    }, []);

    return (
        <S.Overlay onClick={handleStartClose} $isClosing={isClosing}>
            <S.SearchContainer
                $isClosing={isClosing}
                onClick={(e) => e.stopPropagation()}
            >
                <S.SearchContainerWrapper>
                    <S.TitleButtonContainer>
                        <S.Title>the open gallery</S.Title>

                        <S.CloseButton onClick={handleStartClose}>
                            cerrar <S.CloseButtonIcon />
                        </S.CloseButton>
                    </S.TitleButtonContainer>
                </S.SearchContainerWrapper>

                <S.SearchWrapper>
                    <S.SearchSection onClick={(e) => e.stopPropagation()}>
                        <S.Form onSubmit={handleSearchSubmit} role="search">
                            <S.Input
                                type="search"
                                autoFocus
                                placeholder="Búsque artistas u obras de arte"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <S.SearchButton type="submit">
                                <S.StyledSearchButton />
                            </S.SearchButton>
                        </S.Form>

                        <S.Submenu>
                            <S.SubmenuContainer>
                                <S.SubmenuTitle>
                                    Búsquedas Sugeridas
                                </S.SubmenuTitle>
                                <S.SubmenuList>
                                    {SUGGESTED_SEARCHES.map((search) => (
                                        <li key={search.query}>
                                            <Link
                                                to={`/search?q=${encodeURIComponent(search.query)}`}
                                                onClick={handleStartClose}
                                            >
                                                {search.label}
                                            </Link>
                                        </li>
                                    ))}
                                </S.SubmenuList>
                            </S.SubmenuContainer>

                            <S.SubmenuContainer>
                                <S.SubmenuTitle>Artistas</S.SubmenuTitle>
                                <S.SubmenuList>
                                    {artists?.map((artist) => (
                                        <li key={artist.id}>
                                            <Link
                                                to={`/artist/${artist.id}`}
                                                onClick={onClose}
                                            >
                                                {artist.title}
                                            </Link>
                                        </li>
                                    ))}
                                </S.SubmenuList>
                            </S.SubmenuContainer>

                            <S.SubmenuCollection>
                                <S.SubmenuTitle>Colecciones</S.SubmenuTitle>
                                {curatedCollections.map((col) => (
                                    <S.CollectionItem
                                        key={col.id}
                                        onClick={() => {
                                            navigate(`/genres/${col.id}`);
                                            handleStartClose();
                                        }}
                                    >
                                        <S.CollectionImageWrapper>
                                            <img
                                                src={buildImageUrl(
                                                    col.altCoverId ||
                                                        col.coverId,
                                                )}
                                                alt={col.label}
                                            />
                                        </S.CollectionImageWrapper>

                                        <S.CollectionInfo>
                                            <S.CollectionTitle>
                                                {col.label}
                                            </S.CollectionTitle>

                                            <S.CollectionCount>
                                                {col.workCount || GLOBAL_LIMIT}{" "}
                                                Obras
                                            </S.CollectionCount>
                                        </S.CollectionInfo>
                                    </S.CollectionItem>
                                ))}
                            </S.SubmenuCollection>
                        </S.Submenu>
                    </S.SearchSection>
                </S.SearchWrapper>
            </S.SearchContainer>
        </S.Overlay>
    );
};

export default SearchBar;
