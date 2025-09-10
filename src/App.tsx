import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import TravauxPublics from "./pages/TravauxPublics";
import Desamiantage from "./pages/Desamiantage";
import Demolition from "./pages/Demolition";
import Contact from "./pages/Contact";
import Header from "./common/components/header/Header";
import Footer from "./common/components/footer/Footer";
import "./global.css";

import "@fontsource/inter/200.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

export default function App() {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/travaux-publics" element={<TravauxPublics />} />
                <Route path="/desamiantage" element={<Desamiantage />} />
                <Route path="/demolition" element={<Demolition />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}
