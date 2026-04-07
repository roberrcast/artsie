import React from "react";
import * as S from "./styles";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <S.PageWrapper>
            <Header />
            <S.MainContent>{children}</S.MainContent>
            <Footer />
        </S.PageWrapper>
    );
};

export default Layout;
