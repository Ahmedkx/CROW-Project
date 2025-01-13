import { Route, Routes } from "react-router";
import "./App.css";
import "@mantine/core/styles.css";
import Home from "./components/Pages/Home";
import OurWork from "./components/Pages/OurWork";
import OurPartners from "./components/Pages/OurPartners";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";
import SendRequest from "./components/Pages/SendRequest";
import EventRequest from "./components/Pages/EventRequest";
import PhotographyRequest from "./components/Pages/PhotographyRequest";
import OurServices from "./components/Pages/OurServices";
import ServicePage from "./components/Pages/ServicePage";
import RequestSent from "./components/Pages/RequestSent";

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
                    <Route path="our-services" element={<OurServices />} />
                    <Route path="our-work/:id" element={<ServicePage />} />
                    <Route path="send-request" element={<SendRequest />} />
                    <Route path="event-request" element={<EventRequest />} />
                    <Route path="request-sent" element={<RequestSent />} />
                    <Route
                        path="photography-request"
                        element={<PhotographyRequest />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
