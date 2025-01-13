import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { services } from "../data/servicesData";
import { NavLink } from "react-router";

export default function OurWork() {
    return (
        <>
            <Nav />
            <div className="container flex flex-wrap justify-center gap-5 mx-auto mt-20 md:flex-row md:gap-10">
                {services.map((service) => (
                    <NavLink key={service.id} to={`/our-work/${service.id}`}>
                        <Card
                            image={service.image}
                            heading={service.title}
                            body={service.description}
                            textStyle="text-center"
                        />
                    </NavLink>
                ))}
            </div>
            <Footer />
        </>
    );
}
