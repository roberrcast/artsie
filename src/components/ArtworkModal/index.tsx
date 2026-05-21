import React, { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import * as S from "./styles";
import type { Artwork } from "../../types";
import placeHolderImg from "../../assets/place_holder.png";

interface ArtworkModalProps {
    isOpen: boolean;
    onClose: () => void;
    artwork: Artwork;
    imageUrl: string;
    placeHolder?: string;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({
    isOpen,
    onClose,
    artwork,
    imageUrl,
}) => {
    const [origin, setOrigin] = useState({ x: 50, y: 50 });

    // Estado del zoom
    const [isZoomed, setIsZoomed] = useState(false);

    // Prevenir el scroll cuando se abra el modal
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";

            if (isZoomed) setIsZoomed(false);
            setOrigin({ x: 50, y: 50 });
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, isZoomed]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    /* --- Scroll con touch --- */
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isZoomed) return;

        const touch = e.touches[0];

        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();

        const x = 100 - ((touch.clientX - left) / width) * 100;
        const y = 100 - ((touch.clientY - top) / height) * 100;

        setOrigin({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y)),
        });
    };

    /*  --- Scroll con el mouse --- */
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;

        // Obtener dimensiones del objeto
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();

        // Calcular el porcentaje del  mouse
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setOrigin({ x, y });
    };

    if (!artwork) return null;

    return (
        <S.ModalOverlay id="artwork-modal" $isOpen={isOpen} onClick={onClose}>
            {/* --- Encabezado --- */}
            <S.ModalHeader onClick={(e) => e.stopPropagation()}>
                <S.ModalLogo lang="en">The Open Gallery</S.ModalLogo>

                <S.ModalActions>
                    <S.CloseButton
                        onClick={onClose}
                        aria-label="Cerrar Pantalla Completa"
                    >
                        cerrar <X size={18} />
                    </S.CloseButton>
                </S.ModalActions>
            </S.ModalHeader>

            {/* --- Imagen y botón --- */}
            <S.MainDisplaySection
                $isOpen={isOpen}
                onClick={(e) => e.stopPropagation()}
            >
                <S.ImageButtonContainer>
                    <S.ImageFrame
                        $isZoomed={isZoomed}
                        $isOpen={isOpen}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(!isZoomed);
                        }}
                    >
                        <img
                            src={imageUrl || placeHolderImg}
                            alt={artwork.title}
                            style={{
                                transformOrigin: `${origin.x}% ${origin.y}%`,
                            }}
                            lang="en"
                        />
                    </S.ImageFrame>

                    <S.ZoomButton>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(!isZoomed);
                            }}
                            aria-label="Botón de Zoom"
                        >
                            {isZoomed ? (
                                <ZoomOut size={24} />
                            ) : (
                                <ZoomIn size={24} />
                            )}
                        </button>
                    </S.ZoomButton>
                </S.ImageButtonContainer>
            </S.MainDisplaySection>

            {/* Side bar */}
            <S.ContextPanel onClick={(e) => e.stopPropagation()}>
                <S.ContextLabel>en detalle</S.ContextLabel>

                <S.ContextText>
                    {artwork.short_description ? (
                        <span lang="en">{artwork.short_description}</span>
                    ) : (
                        "Información detallada no disponible."
                    )}
                </S.ContextText>

                <S.DecorativeLine />
            </S.ContextPanel>

            {/* Bottom bar*/}
            <S.ModalFooter
                $isZoomed={isZoomed}
                onClick={(e) => e.stopPropagation()}
            >
                <S.FooterInfoLeft>
                    <S.ModalTitle lang="en">{artwork.title}</S.ModalTitle>

                    <S.ModalSubMeta>
                        <span lang="en">{artwork.artist_display}</span>
                        <S.Separator />
                        <S.StyleTag>
                            {artwork.style_title ? (
                                <span lang="en">{artwork.style_title}</span>
                            ) : (
                                "Estilo no clasificado"
                            )}
                        </S.StyleTag>
                    </S.ModalSubMeta>
                </S.FooterInfoLeft>

                <S.FooterInfoRight>
                    <S.ContextLabel>lugar de origen</S.ContextLabel>
                    <span lang="en">{artwork.place_of_origin}</span>
                </S.FooterInfoRight>
                <S.FooterGradient />
            </S.ModalFooter>
        </S.ModalOverlay>
    );
};

export default ArtworkModal;
