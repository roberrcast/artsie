import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";
import { useDispatch } from "react-redux";
import { setSearchOpen } from "../../store/artworksSlice";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calcular cuanto de la página se ha bajado
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setIsHidden(scrollPercent > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleOpenSearch = () => {
        dispatch(setSearchOpen(true));
    };

    return (
        <S.Header isHidden={isHidden}>
            <S.HeaderContainer>
                <S.Title>
                    <Link to={"/"}>The Open Gallery</Link>
                </S.Title>

                <S.Nav>
                    <S.List>
                        <li>
                            <NavLink to={"/exhibitions/"}>Exhibiciones</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/artists/"}>Artistas</NavLink>
                        </li>
                        <li>Colección</li>
                        <li>Géneros</li>
                    </S.List>
                </S.Nav>

                <S.ButtonWrapper>
                    <S.SearchButton
                        aria-label="Open search"
                        onClick={handleOpenSearch}
                    >
                        <S.SearchButtonIcon />
                    </S.SearchButton>
                </S.ButtonWrapper>
            </S.HeaderContainer>
        </S.Header>
    );
};

export default Header;
