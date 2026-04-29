import React from "react";
import * as S from "./styles";

interface LoadingSpinnerProps {
    fullScreen?: boolean;
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    fullScreen,
    message = "Curando su experiencia...",
}) => {
    return (
        <S.SpinnerContainer
            style={
                fullScreen
                    ? { position: "fixed", inset: 0, height: "100vh" }
                    : {}
            }
        >
            <S.BackgroundAura />

            <S.SpinnerCircle />

            <S.MessageWrapper>
                <S.Message>{message}</S.Message>
                <S.DecorativeLine />
            </S.MessageWrapper>
        </S.SpinnerContainer>
    );
};

export default LoadingSpinner;
