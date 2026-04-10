import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import ExhibitionsPage from "./pages/Exhibitions";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="artwork/:id" element={<Details />} />
                    <Route path="exhibitions/" element={<ExhibitionsPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
