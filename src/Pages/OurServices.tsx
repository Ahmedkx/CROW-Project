import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { services } from "../data/servicesData";
import { NavLink } from "react-router";

export default function OurServices() {
    const getRoute = (id: string) => {
        if (id === "fashion") return "/photography-request";
        if (id === "coverage") return "/event-request";
        return "/send-request";
    };

    return (
        <>
            <Nav />
            <div className="container flex flex-wrap justify-center gap-5 mx-auto mt-20 md:flex-row md:gap-10">
                {services.map((service) => (
                    <NavLink key={service.id} to={getRoute(service.id)}>
                        <Card
                            image={service.image}
                            heading={service.title}
                            textStyle="text-center"
                        />
                    </NavLink>
                ))}
            </div>
            <Footer />
        </>
    );
}
