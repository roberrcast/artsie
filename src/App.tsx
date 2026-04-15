import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import ExhibitionsPage from "./pages/Exhibitions";
import ExhibitionDetails from "./pages/ExhibitionDetails";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Artists from "./pages/Artists";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="artwork/:id" element={<Details />} />
                    <Route path="exhibitions/" element={<ExhibitionsPage />} />
                    <Route
                        path="exhibition/:id"
                        element={<ExhibitionDetails />}
                    />
                    <Route path="/artists/" element={<Artists />} />
                    {/* <Route path="/artist/:id" element={<ArtistDetails />} /> */}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
