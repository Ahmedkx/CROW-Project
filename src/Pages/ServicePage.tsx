import { useParams } from "react-router";
import { services } from "../data/servicesData";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ServicePage() {
    const { id } = useParams();
    const service = services.find((service) => service.id === id);

    if (!service) {
        return <div>الخدمة المطلوبة غير موجودة</div>;
    }

    return (
        <>
            <Nav />
            <div className="container p-4 mx-auto mt-10">
                <div className="flex flex-col md:flex-row-reverse">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full mb-6 rounded-lg h-60"
                    />
                    <div>
                        <h1 className="mb-6 text-3xl font-bold text-center text-primary">
                            {service.title}
                        </h1>
                        <p className="text-lg text-gray-700">
                            {service.description}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
