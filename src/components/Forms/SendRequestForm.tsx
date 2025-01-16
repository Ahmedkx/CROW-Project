import { TextInput, Group, Button, NumberInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { useState } from "react";
import supabase from "../../Supabase";

export default function SendRequestForm({
    serviceType,
}: {
    serviceType: string;
}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
        },

        validate: {
            fullName: isNotEmpty("يجب ادخال الاسم"),
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "يجب ادخال بريد الكترونى صالح",
            phoneNumber: isNotEmpty("يجب ادخال رقم الهاتف"),
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        setLoading(true);

        const { error } = await supabase.from("service_requests").insert([
            {
                full_name: values.fullName,
                email: values.email,
                client_phone_number: values.phoneNumber,
                service_name: serviceType,
            },
        ]);

        if (error) {
            setLoading(false);
        } else {
            setLoading(false);
            navigate("/request-sent");
        }
    };

    return (
        <form
            onSubmit={form.onSubmit(handleSubmit)}
            className="flex flex-col gap-5 w-[250px]"
        >
            <TextInput
                withAsterisk
                radius="xl"
                size="md"
                label="الاسم كامل"
                placeholder="الاسم كامل"
                key={form.key("fullName")}
                {...form.getInputProps("fullName")}
                className="w-full"
            />
            <TextInput
                withAsterisk
                radius="xl"
                size="md"
                label="البريد الاكترونى"
                placeholder="البريد الاكترونى"
                key={form.key("email")}
                {...form.getInputProps("email")}
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
                key={form.key("phoneNumber")}
                {...form.getInputProps("phoneNumber")}
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
    );
}
