import React from "react";
import * as S from "./styles";
import Header from "../Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <S.PageWrapper>
            <Header />
            <S.MainContent>{children}</S.MainContent>
        </S.PageWrapper>
    );
};

export default Layout;
