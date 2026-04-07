import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <S.Header>
            <S.HeaderContainer>
                <S.Title>
                    <Link to={"/"}>The Open Gallery</Link>
                </S.Title>

                <S.Nav>
                    <S.List>
                        <li>Exhibiciones</li>
                        <li>Artistas</li>
                        <li>Géneros</li>
                        <li>Colecciones</li>
                    </S.List>
                </S.Nav>

                <S.ButtonWrapper>
                    <S.SearchButton
                        aria-label="Open search"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <S.SearchButtonIcon />
                    </S.SearchButton>
                </S.ButtonWrapper>
            </S.HeaderContainer>

            {isSearchOpen && (
                <SearchBar onClose={() => setIsSearchOpen(false)} />
            )}
        </S.Header>
    );
};

export default Header;
