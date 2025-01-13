import { TextInput, Group, Select, Button, NumberInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function SendRequest() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            sendRequestServiceName: "",
            sendRequestFullName: "",
            sendRequestEmail: "",
            sendRequestPhoneNumber: "",
        },

        validate: {
            sendRequestServiceName: isNotEmpty("يجب اختيار اسم الخدمة"),
            sendRequestFullName: isNotEmpty("يجب ادخال الاسم"),
            sendRequestEmail: (value) =>
                /^\S+@\S+$/.test(value) ? null : "يجب ادخال بريد الكترونى صالح",
            sendRequestPhoneNumber: isNotEmpty("يجب ادخال رقم الهاتف"),
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
            <h1 className="my-10 text-2xl font-bold text-center">ارسال طلب</h1>
            <div className="container flex justify-center">
                <form
                    onSubmit={form.onSubmit(handleSubmit)}
                    className="inline-flex flex-col items-center gap-8 "
                >
                    <Select
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="نوع الخدمة"
                        placeholder="اختر نوع الخدمة"
                        key={form.key("sendRequestServiceName")}
                        {...form.getInputProps("sendRequestServiceName")}
                        data={[
                            "التغطيات",
                            "تصوير المرئي",
                            "التسوق الرقمي",
                            "تصوير فوتوغرافي",
                            "تصوير الأزياء",
                        ]}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="الاسم كامل"
                        placeholder="الاسم كامل"
                        key={form.key("sendRequestFullName")}
                        {...form.getInputProps("sendRequestFullName")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="البريد الاكترونى"
                        placeholder="البريد الاكترونى"
                        key={form.key("sendRequestEmail")}
                        {...form.getInputProps("sendRequestEmail")}
                        className="w-full"
                    />
                    <NumberInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="رقم الهاتف"
                        placeholder="رقم الهاتف"
                        allowDecimal={false}
                        hideControls
                        key={form.key("sendRequestPhoneNumber")}
                        {...form.getInputProps("sendRequestPhoneNumber")}
                        className="w-full"
                    />

                    <Group justify="center" mt="md" className="w-full">
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
