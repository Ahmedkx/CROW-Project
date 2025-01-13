import { useParams } from "react-router";
import { services } from "../../data/servicesData"; // Import the data object
import Nav from "../Nav";
import Footer from "../Footer";

export default function ServicePage() {
    const { id } = useParams(); // Get the dynamic parameter from the URL
    const service = services.find((service) => service.id === id); // Find the service by ID

    if (!service) {
        return <div>الخدمة المطلوبة غير موجودة</div>; // Handle invalid service IDs
    }

    return (
        <>
            <Nav />
            <div className="container p-4 mx-auto mt-10">
                <h1 className="mb-6 text-3xl font-bold text-center">
                    {service.title}
                </h1>
                <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full mb-6 rounded-lg h-60"
                />
                <p className="text-lg text-gray-700">{service.description}</p>
            </div>
            <Footer />
        </>
    );
}
