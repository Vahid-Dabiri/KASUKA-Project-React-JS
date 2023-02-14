import "./App.css";
import HeaderSection from "./components/Global/Header/Header-section";
import FooterSection from "./components/Global/Footer/Footer-section";
import GoUpBtn from "./components/Global/Go-up-page";
import HomeContent from "./components/Home/Content/Content";
import PortfolioContent from "./components/Portfolio-page/Portfolio-content";
import { Route, Routes } from "react-router-dom";


function App() {
    return (
        <>
            <div className="page-content">
                <div className="header">
                    <HeaderSection />
                </div>
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomeContent />} />
                        <Route path="/Portfolio-page" element={<PortfolioContent />} />
                    </Routes>
                </div>
                <div id="footer">
                    <FooterSection />
                </div>
                <GoUpBtn />
            </div>
        </>
    )
}

export default App