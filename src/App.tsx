import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import ExhibitionsPage from "./pages/Exhibitions";
import ExhibitionDetails from "./pages/ExhibitionDetails";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Artists from "./pages/Artists";
import ArtistDetails from "./pages/ArtistDetails";
import ArtworksPage from "./pages/Artworks";
import Genres from "./pages/Genres";
import GenreDetails from "./pages/GenresDetails";

function App() {
    const [isLoading, setIsLoading] = useState(() => {
        return !sessionStorage.getItem("hasSeenLoader");
    });

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem("hasSeenLoader", "true");
            }, 3500);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    // if (isLoading) {
    //     return <LoadingScreen />;
    // }

    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search/" element={<Search />} />
                    <Route path="artwork/:id" element={<Details />} />
                    <Route path="exhibitions/" element={<ExhibitionsPage />} />
                    <Route
                        path="exhibition/:id"
                        element={<ExhibitionDetails />}
                    />
                    <Route path="/artists/" element={<Artists />} />
                    <Route path="/artist/:id" element={<ArtistDetails />} />
                    <Route path="/artworks/" element={<ArtworksPage />} />
                    <Route path="/genres" element={<Genres />} />
                    <Route path="/genres/:id" element={<GenreDetails />} />
                    <Route path="/dev-loading" element={<LoadingScreen />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
