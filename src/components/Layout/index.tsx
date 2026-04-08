import React from "react";
import * as S from "./styles";
import Header from "../Header";
import Footer from "../Footer";
import Attribution from "../Attribution";
import SearchBar from "../SearchBar";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/index";
import { setSearchOpen } from "../../store/artworksSlice";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { isSearchOpen } = useSelector((state: RootState) => state.artworks);
    const dispatch = useDispatch();

    const handleCloseSearch = () => {
        dispatch(setSearchOpen(false));
    };
    return (
        <S.PageWrapper>
            <Header />
            {isSearchOpen && <SearchBar onClose={handleCloseSearch} />}
            <S.MainContent>{children}</S.MainContent>
            <Attribution />
            <Footer />
        </S.PageWrapper>
    );
};

export default Layout;
