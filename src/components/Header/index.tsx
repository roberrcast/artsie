import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setSearchOpen } from "../../store/artworksSlice";
import { Menu } from "lucide-react";
import DrawerMenu from "./DrawerMenu";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const { isSearchOpen } = useSelector((state: RootState) => state.artworks);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Calcular cuanto de la página se ha bajado
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            setIsHidden(scrollPercent > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleOpenSearch = () => {
        dispatch(setSearchOpen(true));
    };

    // Estado para controlar el drawer menu que aparece a los < 700px
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <S.Header isHidden={isHidden}>
                <S.HeaderContainer>
                    <S.HomeContainer>
                        <Link to={"/"}>
                            <S.HomeIcon />
                        </Link>
                    </S.HomeContainer>

                    <S.HamburgerButton
                        aria-label="Abrir Menu"
                        onClick={() => setIsMenuOpen(true)}
                        aria-controls="mobile-menu"
                    >
                        <Menu size={24} />
                    </S.HamburgerButton>

                    <S.Title>
                        <Link to={"/"}>
                            <span lang="en">The Open Gallery</span>
                        </Link>
                    </S.Title>

                    <S.Nav>
                        <S.List>
                            <li>
                                <NavLink to={"/exhibitions/"}>
                                    Exhibiciones
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/artists/"}>Artistas</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/artworks/"}>Galería</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={"/genres/"}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    Estilos
                                </NavLink>
                            </li>
                        </S.List>
                    </S.Nav>

                    <S.ButtonWrapper>
                        <S.SearchButton
                            aria-label="Abrir búsqueda"
                            aria-controls="search-overlay"
                            aria-expanded={isSearchOpen}
                            onClick={handleOpenSearch}
                        >
                            <S.SearchButtonIcon />
                        </S.SearchButton>
                    </S.ButtonWrapper>
                </S.HeaderContainer>
            </S.Header>

            {/* Menu desplegable que aparece después de los 1024px */}
            <DrawerMenu
                aria-label="Abrir Menu"
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
};

export default Header;
