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
            navigate(`/search/?q=${encodeURIComponent(query)}`);
            setQuery(""); // Limpiar le input después de buscar
        }
    };

    return (
        <S.Footer>
            <S.FooterWrapper>
                <S.TitleColumn>
                    <S.FooterTitle>
                        <Link to={"/"}>The Open Gallery</Link>
                    </S.FooterTitle>

                    <S.FooterDescription>
                        Cientos de años de creatividad humana al alcance de tu
                        mano. Una ventana digital a la amplia colección de arte
                        del Art Institute of Chicago.
                    </S.FooterDescription>
                </S.TitleColumn>

                <S.NavColumn>
                    <S.FooterKicker>Explora</S.FooterKicker>

                    <S.NavList>
                        <li>
                            <Link to={"/exhibitions/"}>Exhibiciones</Link>
                        </li>
                        <li>
                            <Link to={"/artists/"}>Artistas</Link>
                        </li>
                        <li>
                            <Link to={"/artworks/"}>Colección</Link>
                        </li>
                        <li>
                            <Link to={"/genres/"}>Estilos</Link>
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
                            >
                                <svg viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M116.504 500.219V170.654H6.975v329.564zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047z" />
                                </svg>
                            </S.SocialLink>
                        </li>
                    </S.DevList>
                </S.DevColumn>

                <S.SearchColumn>
                    <S.SearchCard>
                        <S.SearchSection>
                            <S.SearchLabel>busca en el catálogo</S.SearchLabel>

                            <S.SearchInputWrapper onSubmit={handleFooterSearch}>
                                <Search size={20} />

                                <S.SearchInput
                                    type="search"
                                    placeholder="Explora los archivos del AIC, por artista, género, colecciones, etc."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </S.SearchInputWrapper>

                            <S.TagsContainer>
                                <S.Tag
                                    onClick={() =>
                                        navigate("/search?q=Oil on Canvas")
                                    }
                                >
                                    <Palette />
                                    <span>Óleo Sobre Lienzo</span>
                                </S.Tag>

                                <S.Tag
                                    onClick={() =>
                                        navigate("/search?q=18th Century")
                                    }
                                >
                                    <History />
                                    <span>Siglo 18</span>
                                </S.Tag>

                                <S.Tag
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
                        Built with React, Redux Toolkit, and Styled Components
                    </p>
                </S.BottomBarWrapper>
            </S.BottomBar>
        </S.Footer>
    );
};

export default Footer;
