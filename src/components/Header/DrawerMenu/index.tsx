import React, { useEffect } from "react";
import * as S from "./styles";
import { X as CloseIcon } from "lucide-react";
import { MENU_ICONS } from "../../../constants/icons";

const NAV_ITEMS = [
    { path: "/exhibitions/", label: "exhibiciones", icon: "museum" },
    { path: "/artists/", label: "artistas", icon: "artists" },
    { path: "/artworks/", label: "galería", icon: "gallery" },
    { path: "/genres/", label: "estilos", icon: "styles" },
] as const;

interface DrawerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
    const renderIcon = (name: keyof typeof MENU_ICONS, isActive: boolean) => (
        <S.StyledIcon viewBox="0 -960 960 960" fill="currentColor">
            <path
                d={
                    isActive
                        ? MENU_ICONS[name].filled
                        : MENU_ICONS[name].outline
                }
            />
        </S.StyledIcon>
    );

    const setBodyOverflow = (value: string) => {
        document.body.style.overflow = value;
    };

    useEffect(() => {
        if (isOpen) {
            setBodyOverflow("hidden");
        } else {
            setBodyOverflow("unset");
        }

        return () => {
            setBodyOverflow("unset");
        };
    }, [isOpen]);

    return (
        <>
            <S.Backdrop $isOpen={isOpen} onClick={onClose}>
                <S.CloseButton $isOpen={isOpen} onClick={onClose}>
                    <CloseIcon size={24} />
                </S.CloseButton>

                <S.Drawer $isOpen={isOpen}>
                    <S.DrawerHeader>
                        <h2>The Open Gallery</h2>
                    </S.DrawerHeader>

                    <S.NavMenu>
                        {NAV_ITEMS.map((item) => (
                            <S.StyledNavLink
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                            >
                                {({ isActive }) => (
                                    <>
                                        {renderIcon(item.icon, isActive)}
                                        <span>{item.label}</span>
                                    </>
                                )}
                            </S.StyledNavLink>
                        ))}
                    </S.NavMenu>
                </S.Drawer>
            </S.Backdrop>
        </>
    );
};

export default DrawerMenu;
