import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
import OurWork from "./components/Pages/OurWork";
import OurPartners from "./components/Pages/OurPartners";

function App() {
    return (
        <>
            <div className="background-image fixed-bg"></div>
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="our-work" element={<OurWork />} />
                    <Route path="our-partners" element={<OurPartners />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
