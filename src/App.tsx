import { Route, Routes } from "react-router";
import "./App.css";
import "@mantine/core/styles.css";
import Home from "./Pages/Home";
import OurWork from "./Pages/OurWork";
import OurPartners from "./Pages/OurPartners";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SendRequest from "./Pages/SendRequest";
import EventRequest from "./Pages/EventRequest";
import PhotographyRequest from "./Pages/PhotographyRequest";
import OurServices from "./Pages/OurServices";
import ServicePage from "./Pages/ServicePage";
import RequestSent from "./Pages/RequestSent";

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
