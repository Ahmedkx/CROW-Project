import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
import OurWork from "./components/Pages/OurWork";
import OurPartners from "./components/Pages/OurPartners";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";

function App() {
    return (
        <>
            <div className="background-image fixed-bg"></div>
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="our-work" element={<OurWork />} />
                    <Route path="our-partners" element={<OurPartners />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="contact-us" element={<ContactUs />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
