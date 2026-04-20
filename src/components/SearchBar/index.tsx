import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { fetchSubmenuData } from "../../store/artworksSlice";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface SearchBarProps {
    onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
    const [query, setQuery] = useState("");
    const [isClosing, setIsClosing] = useState(false);

    const handleStartClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 400);
    };

    const dispatch = useDispatch<AppDispatch>();
    const { artists, styles, loading } = useSelector(
        (state: RootState) => state.artworks,
    );

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
                        <S.Form action="/search" role="search">
                            <S.Input
                                type="search"
                                autoFocus
                                placeholder="Búsque artistas, obras de arte o género"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <S.SearchButton type="submit">
                                <S.StyledSearchButton />
                            </S.SearchButton>
                        </S.Form>

                        <S.Submenu>
                            <S.SubmenuContainer>
                                <S.SubmenuTitle>Géneros</S.SubmenuTitle>
                                <S.SubmenuList>
                                    {styles?.map((style) => (
                                        <li key={style.id}>
                                            <Link
                                                to={`/search?style=${style.id}`}
                                                onClick={onClose}
                                            >
                                                {style.title}
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
                            </S.SubmenuCollection>
                        </S.Submenu>
                    </S.SearchSection>
                </S.SearchWrapper>
            </S.SearchContainer>
        </S.Overlay>
    );
};

export default SearchBar;
