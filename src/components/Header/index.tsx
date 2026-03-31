import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <S.Header>
            <S.HeaderContainer>
                <S.Title>The Open Gallery</S.Title>

                <S.Nav>
                    <S.List>
                        <li>Exhibitions</li>
                        <li>Artists</li>
                        <li>Genres</li>
                        <li>Collection</li>
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
