import {
    TextInput,
    Group,
    Textarea,
    Button,
    NumberInput,
    ActionIcon,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../../Supabase";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconArrowLeft } from "@tabler/icons-react";
// import { IconClock } from "@tabler/icons-react";

export default function PhotographyRequest({
    serviceType,
}: {
    serviceType: string;
}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const pickerControl = (
        <ActionIcon
            variant="subtle"
            color="gray"
            onClick={() => ref.current?.showPicker()}
        >
            {/* <IconClock size={16} stroke={1.5} />
             */}
            <div>Clock</div>
            <IconArrowLeft />
        </ActionIcon>
    );

    const form = useForm({
        initialValues: {
            fullName: "",
            phoneNumber: "",
            email: "",
            date: "",
            time: "",
            duration: "",
            notes: "",
        },

        validate: {
            fullName: isNotEmpty("يجب إدخال الاسم"),
            phoneNumber: isNotEmpty("يجب إدخال رقم الهاتف"),
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "يجب إدخال بريد إلكتروني صالح",
            date: isNotEmpty("يجب إدخال تاريخ التصوير"),
            time: isNotEmpty("يجب إدخال وقت التصوير"),
            duration: isNotEmpty("يجب إدخال مدة التصوير"),
        },
    });

    const handleSubmit = async (values: typeof form.values) => {
        setLoading(true);
        console.log(values);

        const { error } = await supabase.from("service_requests").insert([
            {
                full_name: values.fullName,
                email: values.email,
                client_phone_number: values.phoneNumber,
                service_name: serviceType,
                request_data: {
                    date: values.date,
                    time: values.time,
                    duration: values.duration,
                    notes: values.notes,
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
                label="الاسم"
                placeholder="الاسم"
                key={form.key("fullName")}
                {...form.getInputProps("fullName")}
                className="w-full"
            />
            <NumberInput
                withAsterisk
                radius="xl"
                size="md"
                label="الهاتف"
                placeholder="الهاتف"
                allowDecimal={false}
                hideControls
                key={form.key("phoneNumber")}
                {...form.getInputProps("phoneNumber")}
                className="w-full"
            />
            <TextInput
                withAsterisk
                radius="xl"
                size="md"
                label="البريد الإلكتروني"
                placeholder="البريد الإلكتروني"
                key={form.key("email")}
                {...form.getInputProps("email")}
                className="w-full"
            />
            <DateInput
                withAsterisk
                radius="xl"
                size="md"
                label="تاريخ التصوير"
                placeholder="تاريخ التصوير"
                key={form.key("date")}
                {...form.getInputProps("date")}
                className="w-full"
            />
            {/* <TextInput
                withAsterisk
                radius="xl"
                size="md"
                label="وقت التصوير"
                placeholder="وقت التصوير"
                key={form.key("time")}
                {...form.getInputProps("time")}
                className="w-full"
            /> */}
            <TimeInput
                withAsterisk
                radius="xl"
                size="md"
                label="وقت التصوير"
                placeholder="وقت التصوير"
                key={form.key("time")}
                {...form.getInputProps("time")}
                className="w-full"
                ref={ref}
                rightSection={pickerControl}
            />

            <TextInput
                withAsterisk
                radius="xl"
                size="md"
                label="مدة التصوير"
                placeholder="مدة التصوير"
                key={form.key("duration")}
                {...form.getInputProps("duration")}
                className="w-full"
            />
            <Textarea
                radius="md"
                size="md"
                label="ملاحظات"
                placeholder="ملاحظات"
                key={form.key("notes")}
                {...form.getInputProps("notes")}
                className="w-full"
                autosize
                minRows={3}
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
