import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import Home from "./Pages/Home";
import OurWork from "./Pages/OurWork";
import OurPartners from "./Pages/OurPartners";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SendRequest from "./Pages/SendRequest";
import EventRequest from "./components/Forms/EventRequest";
import PhotographyRequest from "./components/Forms/PhotographyRequest";
import OurServices from "./Pages/OurServices";
import ServicePage from "./Pages/ServicePage";
import RequestSent from "./Pages/RequestSent";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <>
            <main>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="our-work" element={<OurWork />} />
                        <Route path="our-partners" element={<OurPartners />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="contact-us" element={<ContactUs />} />
                        <Route path="our-services" element={<OurServices />} />
                        <Route path="our-work/:id" element={<ServicePage />} />
                        <Route path="send-request" element={<SendRequest />} />
                        <Route
                            path="event-request"
                            element={<EventRequest serviceType={""} />}
                        />
                        <Route path="request-sent" element={<RequestSent />} />
                        <Route
                            path="photography-request"
                            element={<PhotographyRequest serviceType={""} />}
                        />
                    </Route>

                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
