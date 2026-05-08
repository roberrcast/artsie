import React from "react";
import * as S from "./styles";
import { MENU_ICONS } from "../../constants/icons";
import { useDispatch } from "react-redux";
import { setSearchOpen } from "../../store/artworksSlice";

const BottomNavBar: React.FC = () => {
    const dispatch = useDispatch();

    const navItems = [
        {
            path: "/exhibitions/",
            label: "Exhibiciones",
            icon: MENU_ICONS.museum,
        },
        { path: "/artists/", label: "Artistas", icon: MENU_ICONS.artists },
        { path: "/artworks/", label: "Galería", icon: MENU_ICONS.gallery },
        { path: "/genres/", label: "Estilos", icon: MENU_ICONS.styles },
    ];

    const handleClick = () => {
        dispatch(setSearchOpen(false));
    };

    return (
        <S.Nav>
            {navItems.map((item) => (
                <S.StyledNavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleClick}
                >
                    {({ isActive }) => (
                        <>
                            <S.IconContainer
                                viewBox="0 -960 960 960"
                                fill="currentColor"
                            >
                                <path
                                    d={
                                        isActive
                                            ? item.icon.filled
                                            : item.icon.outline
                                    }
                                />
                            </S.IconContainer>
                            <span>{item.label}</span>
                        </>
                    )}
                </S.StyledNavLink>
            ))}
        </S.Nav>
    );
};

export default BottomNavBar;
