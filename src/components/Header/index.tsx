import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";

function Header() {
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
                    <S.SearchButton>
                        <S.SearchButtonIcon />
                    </S.SearchButton>
                </S.ButtonWrapper>
            </S.HeaderContainer>
        </S.Header>
    );
}

export default Header;
