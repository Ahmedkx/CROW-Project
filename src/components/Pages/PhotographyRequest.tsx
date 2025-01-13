import { TextInput, Group, Textarea, Button } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import Footer from "../Footer";
import Nav from "../Nav";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function PhotographyRequest() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            photographyRequestFullName: "",
            photographyRequestPhoneNumber: "",
            photographyRequestEmail: "",
            photographyRequestDate: "",
            photographyRequestTime: "",
            photographyRequestDuration: "",
            photographyRequestNotes: "",
        },

        validate: {
            photographyRequestFullName: isNotEmpty("يجب إدخال الاسم"),
            photographyRequestPhoneNumber: isNotEmpty("يجب إدخال رقم الهاتف"),
            photographyRequestEmail: (value) =>
                /^\S+@\S+$/.test(value) ? null : "يجب إدخال بريد إلكتروني صالح",
            photographyRequestDate: isNotEmpty("يجب إدخال تاريخ التصوير"),
            photographyRequestTime: isNotEmpty("يجب إدخال وقت التصوير"),
            photographyRequestDuration: isNotEmpty("يجب إدخال مدة التصوير"),
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
                ارسال طلب تصوير ازياء
            </h1>
            <div className="flex justify-center">
                <form
                    onSubmit={form.onSubmit(handleSubmit)}
                    className="inline-flex flex-col items-center w-full max-w-md gap-6"
                >
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="الاسم"
                        placeholder="الاسم"
                        key={form.key("photographyRequestFullName")}
                        {...form.getInputProps("photographyRequestFullName")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="الهاتف"
                        placeholder="الهاتف"
                        key={form.key("photographyRequestPhoneNumber")}
                        {...form.getInputProps("photographyRequestPhoneNumber")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="البريد الإلكتروني"
                        placeholder="البريد الإلكتروني"
                        key={form.key("photographyRequestEmail")}
                        {...form.getInputProps("photographyRequestEmail")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="تاريخ التصوير"
                        placeholder="تاريخ التصوير"
                        key={form.key("photographyRequestDate")}
                        {...form.getInputProps("photographyRequestDate")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="وقت التصوير"
                        placeholder="وقت التصوير"
                        key={form.key("photographyRequestTime")}
                        {...form.getInputProps("photographyRequestTime")}
                        className="w-full"
                    />
                    <TextInput
                        withAsterisk
                        radius="xl"
                        size="md"
                        label="مدة التصوير"
                        placeholder="مدة التصوير"
                        key={form.key("photographyRequestDuration")}
                        {...form.getInputProps("photographyRequestDuration")}
                        className="w-full"
                    />
                    <Textarea
                        radius="md  "
                        size="md"
                        label="ملاحظات"
                        placeholder="ملاحظات"
                        key={form.key("photographyRequestNotes")}
                        {...form.getInputProps("photographyRequestNotes")}
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
