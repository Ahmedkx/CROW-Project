import { TextInput, Group, NumberInput, Button } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function EventRequest() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            eventRequestFullName: "",
            eventRequestPhoneNumber: "",
            eventRequestDate: "",
            eventRequestLocation: "",
            eventRequestGuestCount: "",
        },

        validate: {
            eventRequestFullName: isNotEmpty("يجب إدخال الاسم كامل"),
            eventRequestPhoneNumber: isNotEmpty("يجب إدخال رقم الهاتف"),
            eventRequestDate: isNotEmpty("يجب إدخال تاريخ الحدث"),
            eventRequestLocation: isNotEmpty("يجب إدخال موقع الحدث"),
            eventRequestGuestCount: isNotEmpty("يجب إدخال عدد الضيوف المتوقع"),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        setLoading(true);

        emailjs
            .send(
                "service_v8a1k3g",
                "template_xrru74a",
                values,
                "Uun73nDWVIB1-cipQ"
            )
            .then(() => navigate("/request-sent"))
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <Nav />
            <h1 className="my-10 text-2xl font-bold text-center">
                ارسال طلب تغطيات
            </h1>
            <div className="container flex justify-center">
                <form
                    onSubmit={form.onSubmit(handleSubmit)}
                    className="inline-flex flex-col items-center gap-8"
                >
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="الاسم كامل"
                        placeholder="الاسم كامل"
                        key={form.key("eventRequestFullName")}
                        {...form.getInputProps("eventRequestFullName")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="رقم الهاتف"
                        placeholder="رقم الهاتف"
                        key={form.key("eventRequestPhoneNumber")}
                        {...form.getInputProps("eventRequestPhoneNumber")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="تاريخ الحدث"
                        placeholder="تاريخ الحدث"
                        key={form.key("eventRequestDate")}
                        {...form.getInputProps("eventRequestDate")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="موقع الحدث"
                        placeholder="موقع الحدث"
                        key={form.key("eventRequestLocation")}
                        {...form.getInputProps("eventRequestLocation")}
                        className="w-full"
                    />
                    <NumberInput
                        hideControls
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="عدد الضيوف المتوقع"
                        placeholder="عدد الضيوف المتوقع"
                        key={form.key("eventRequestGuestCount")}
                        {...form.getInputProps("eventRequestGuestCount")}
                        className="w-full"
                    />

                    <Group justify="center" mt="md">
                        <Button
                            type="submit"
                            loading={loading}
                            styles={(theme) => ({
                                root: {
                                    backgroundColor: theme.colors.orange[5],
                                    color: theme.white,
                                    padding: "0.5rem 1.5rem",
                                    borderRadius: "9999px",
                                    "&:hover": {
                                        backgroundColor: theme.colors.orange[6],
                                    },
                                },
                            })}
                        >
                            أرسل طلب
                        </Button>
                    </Group>
                </form>
            </div>
            <Footer />
        </div>
    );
}
