import React, { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import * as S from "./styles";

interface ArtworkModalProps {
    isOpen: boolean;
    onClose: () => void;
    artwork: any;
    imageUrl: string;
}

const ArtworkModal: React.FC<ArtworkModalProps> = ({
    isOpen,
    onClose,
    artwork,
    imageUrl,
}) => {
    // Estado del zoom
    const [isZoomed, setIsZoomed] = useState(false);

    // Prevenir el scroll cuando se abra el modal
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setIsZoomed(false);
            setOrigin({ x: 50, y: 50 });
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

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

    const [origin, setOrigin] = useState({ x: 50, y: 50 });

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
        <S.ModalOverlay $isOpen={isOpen} onClick={onClose}>
            <S.ModalHeader onClick={(e) => e.stopPropagation()}>
                <S.ModalLogo>The Open Gallery</S.ModalLogo>

                <S.ModalActions>
                    <S.CloseButton onClick={onClose}>
                        cerrar <X size={18} />
                    </S.CloseButton>
                </S.ModalActions>
            </S.ModalHeader>

            <S.MainDisplaySection
                $isOpen={isOpen}
                onClick={(e) => e.stopPropagation()}
            >
                <S.ImageButtonContainer>
                    <S.ImageFrame
                        $isZoomed={isZoomed}
                        $isOpen={isOpen}
                        onMouseMove={handleMouseMove}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsZoomed(!isZoomed);
                        }}
                    >
                        <img
                            src={imageUrl}
                            alt={artwork.title}
                            style={{
                                transformOrigin: `${origin.x}% ${origin.y}%`,
                            }}
                        />
                    </S.ImageFrame>

                    <S.ZoomButton>
                        <button
                            type="button"
                            arial-label="Aumentar Zoom"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsZoomed(!isZoomed);
                            }}
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
                    {artwork.short_description ||
                        "Información detallada no disponible."}
                </S.ContextText>

                <S.DecorativeLine />
            </S.ContextPanel>

            {/* Bottom bar*/}
            <S.ModalFooter
                $isZoomed={isZoomed}
                onClick={(e) => e.stopPropagation()}
            >
                <S.FooterInfoLeft>
                    <S.ModalTitle>{artwork.title}</S.ModalTitle>

                    <S.ModalSubMeta>
                        <span>{artwork.artist_display}</span>
                        <S.Separator />
                        <S.StyleTag>
                            {artwork.style_title || "Estilo no clasificado"}
                        </S.StyleTag>
                    </S.ModalSubMeta>
                </S.FooterInfoLeft>

                <S.FooterInfoRight>
                    <S.ContextLabel>lugar de origen</S.ContextLabel>
                    <span>{artwork.place_of_origin}</span>
                </S.FooterInfoRight>
                <S.FooterGradient />
            </S.ModalFooter>
        </S.ModalOverlay>
    );
};

export default ArtworkModal;
