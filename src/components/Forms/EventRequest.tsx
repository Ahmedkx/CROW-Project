import { TextInput, Group, NumberInput, Button } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { useState } from "react";
import supabase from "../../Supabase";
import { DateInput } from "@mantine/dates";

interface EventRequestProps {
    serviceType: string;
}

export default function EventRequest({ serviceType }: EventRequestProps) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            date: "",
            location: "",
            guestCount: "",
        },

        validate: {
            fullName: isNotEmpty("يجب إدخال الاسم كامل"),
            phoneNumber: isNotEmpty("يجب إدخال رقم الهاتف"),
            date: isNotEmpty("يجب إدخال تاريخ الحدث"),
            location: isNotEmpty("يجب إدخال موقع الحدث"),
            guestCount: isNotEmpty("يجب إدخال عدد الضيوف المتوقع"),
        },
    });

    interface FormValues {
        fullName: string;
        email: string;
        phoneNumber: string;
        date: string;
        location: string;
        guestCount: string;
    }

    const handleSubmit = async (values: FormValues) => {
        setLoading(true);

        const { error } = await supabase.from("service_requests").insert([
            {
                full_name: values.fullName,
                email: values.email,
                client_phone_number: values.phoneNumber,
                service_name: serviceType,
                request_data: {
                    date: values.date,
                    location: values.location,
                    guestCount: values.guestCount,
                },
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
            <DateInput
                withAsterisk
                radius="xl"
                size="md"
                label="تاريخ الحدث"
                placeholder="تاريخ الحدث"
                key={form.key("date")}
                {...form.getInputProps("date")}
                className="w-full"
            />

            <TextInput
                withAsterisk
                radius="xl"
                size="md"
                label="موقع الحدث"
                placeholder="موقع الحدث"
                key={form.key("location")}
                {...form.getInputProps("location")}
                className="w-full"
            />
            <NumberInput
                hideControls
                allowDecimal={false}
                withAsterisk
                radius="xl"
                size="md"
                label="عدد الضيوف المتوقع"
                placeholder="عدد الضيوف المتوقع"
                key={form.key("guestCount")}
                {...form.getInputProps("guestCount")}
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
    );
}
