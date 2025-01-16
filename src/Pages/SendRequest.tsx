import { Select } from "@mantine/core";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import SendRequestForm from "../components/Forms/SendRequestForm";
import EventRequest from "../components/Forms/EventRequest";
import PhotographyRequest from "../components/Forms/PhotographyRequest";
import { services } from "../data/servicesData";

export default function SendRequest() {
    const [serviceType, setServiceType] = useState("");

    console.log(serviceType);

    const serviceOptions = services.map((service) => ({
        value: service.id,
        label: service.title,
    }));

    return (
        <div>
            <Nav />
            <div className="container flex flex-col items-center mx-auto">
                <h1 className="my-10 text-2xl font-bold text-center">
                    ارسال طلب
                </h1>
                <Select
                    withAsterisk
                    radius="xl"
                    size="md"
                    label="نوع الخدمة"
                    placeholder="اختر نوع الخدمة"
                    value={serviceType}
                    onChange={(value) => setServiceType(value || "")}
                    data={serviceOptions}
                    className="w-[250px] mb-5"
                />
                {serviceType === "" ? (
                    <p>الرجاء اختيار نوع الخدمة لتقديم طلب .</p>
                ) : (
                    <>
                        {serviceType === "coverage" && (
                            <EventRequest serviceType={serviceType} />
                        )}
                        {serviceType === "fashion" && (
                            <PhotographyRequest serviceType={serviceType} />
                        )}
                        {serviceType !== "coverage" &&
                            serviceType !== "fashion" && (
                                <SendRequestForm serviceType={serviceType} />
                            )}
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}
