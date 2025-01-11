import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Pages/Home";
import OurWork from "./components/Pages/OurWork";

function App() {
    return (
        <>
            <div className="background-image fixed-bg"></div>
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="our-work" element={<OurWork />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
