import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Palette, History, MapPin } from "lucide-react";
import * as S from "./styles";

const Footer: React.FC = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleFooterSearch = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery(""); // Limpiar le input después de buscar
        }
    };

    return (
        <S.Footer>
            <S.FooterWrapper>
                <S.TitleColumn>
                    <S.FooterTitle>
                        <Link to={"/"}>
                            <span lang="en">The Open Gallery</span>
                        </Link>
                    </S.FooterTitle>

                    <S.FooterDescription>
                        Cientos de años de creatividad humana al alcance de tu
                        mano. Una ventana digital a la amplia colección de arte
                        del Art Institute of Chicago.
                    </S.FooterDescription>
                </S.TitleColumn>

                <S.NavColumn>
                    <S.FooterKicker>Explora</S.FooterKicker>

                    <S.MobileNav>
                        <li>
                            <Link to={"/"}>Inicio</Link>
                        </li>
                    </S.MobileNav>

                    <S.NavList>
                        <li>
                            <Link
                                aria-label="Vaya a la sección de exhibiciones"
                                to={"/exhibitions/"}
                            >
                                Exhibiciones
                            </Link>
                        </li>
                        <li>
                            <Link
                                taria-label="Vaya a la sección de artistas"
                                to={"/artists/"}
                            >
                                Artistas
                            </Link>
                        </li>
                        <li>
                            <Link
                                aria-label="Vaya a la sección de la galería"
                                to={"/artworks/"}
                            >
                                Galería
                            </Link>
                        </li>
                        <li>
                            <Link
                                aria-label="Vaya a la sección de estilos"
                                to={"/genres/"}
                            >
                                Estilos
                            </Link>
                        </li>
                    </S.NavList>
                </S.NavColumn>

                <S.DevColumn>
                    <S.FooterKicker>Developer</S.FooterKicker>
                    <S.DevList>
                        <li>
                            <S.SocialLink
                                href="https://github.com/roberrcast"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Visite el perfil de GitHub del desarrollador"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                </svg>
                            </S.SocialLink>
                        </li>
                        <li>
                            <S.SocialLink
                                href="https://www.linkedin.com/in/roberto-rodriguez-frontend-engineer"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Visite el perfil de LinkedIn del desarrollador"
                            >
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M116.504 500.219V170.654H6.975v329.564zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047z" />
                                </svg>
                            </S.SocialLink>
                        </li>
                        <li>
                            <S.SocialLink
                                href="https://www.robrodriguez.dev"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Visite el sitio web personal del desarrollador"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2 11.4-1.564 1.251a.5.5 0 0 0-.041.744l1.239 1.239a2 2 0 0 1 .508.864l.175.613a1.8 1.8 0 0 0 1.017 1.163 8 8 0 0 0 2.533-1.835l-.234-1.877a2 2 0 0 0-1.09-1.54l-1.47-.736A1 1 0 0 0 14 13.4M12 4a7.99 7.99 0 0 0-6.335 3.114l-.165.221V9.02a3 3 0 0 0 1.945 2.809l.178.06 1.29.395c1.373.42 2.71-.697 2.577-2.096l-.019-.145-.175-1.049a1 1 0 0 1 .656-1.108l.108-.03.612-.14a2.667 2.667 0 0 0 1.989-3.263A8 8 0 0 0 12 4" />
                                </svg>
                            </S.SocialLink>
                        </li>
                    </S.DevList>
                </S.DevColumn>

                <S.SearchColumn>
                    <S.SearchCard>
                        <S.SearchSection>
                            <S.SearchLabel htmlFor="footer-search">
                                busca en el catálogo
                            </S.SearchLabel>

                            <S.SearchInputWrapper onSubmit={handleFooterSearch}>
                                <Search size={20} />

                                <S.SearchInput
                                    id="footer-search"
                                    type="search"
                                    placeholder="Explora los archivos del AIC, por artista, género, colecciones, etc."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </S.SearchInputWrapper>

                            <S.TagsContainer>
                                <S.Tag
                                    aria-label="Sugerencia de búsqueda: óleo sobre lienzo"
                                    onClick={() =>
                                        navigate("/search?q=Oil on Canvas")
                                    }
                                >
                                    <Palette />
                                    <span>Óleo Sobre Lienzo</span>
                                </S.Tag>

                                <S.Tag
                                    aria-label="Sugerencia de búsqueda: Siglo 18"
                                    onClick={() =>
                                        navigate("/search?q=18th Century")
                                    }
                                >
                                    <History />
                                    <span>Siglo 18</span>
                                </S.Tag>

                                <S.Tag
                                    aria-label="Sugerencia de búsqueda: París"
                                    onClick={() => navigate("/search?q=Paris")}
                                >
                                    <MapPin />
                                    <span>Paris, FR</span>
                                </S.Tag>
                            </S.TagsContainer>
                        </S.SearchSection>
                    </S.SearchCard>
                </S.SearchColumn>
            </S.FooterWrapper>

            <S.BottomBar>
                <S.BottomBarWrapper>
                    <p>
                        ©{new Date().getFullYear()} Art Institute of Chicago.
                        Todos los derechos reservados.
                    </p>
                    <p>
                        Desarrollado con{" "}
                        <span lang="en">
                            React, Redux Toolkit, y Styled Components
                        </span>
                    </p>
                </S.BottomBarWrapper>
            </S.BottomBar>
        </S.Footer>
    );
};

export default Footer;
