import React from "react";
import { MENU_ICONS } from "../../../constants/icons";

interface IconProps {
    name: keyof typeof MENU_ICONS;
    active?: boolean;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, active, size = 24 }) => {
    const path = active ? MENU_ICONS[name].filled : MENU_ICONS[name].outline;
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 -960 960 960"
            fill="currentColor"
        >
            <path d={path} />
        </svg>
    );
};
