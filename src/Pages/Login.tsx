import {
    Container,
    Title,
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import supabase from "../Supabase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Session } from "@supabase/supabase-js";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false);

    const form = useForm({
        initialValues: {
            email: "test@mail.com",
            password: "test",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "يجب ادخال بريد الكترونى صالح",
            password: (value) =>
                value.length >= 4
                    ? null
                    : "Password must be at least 6 characters",
        },
    });

    const [session, setSession] = useState<Session | null>(null);

    const handleSubmit = async (values: typeof form.values) => {
        setAlert(false);
        setLoading(true);
        const { email, password } = values;
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Error signing in:", error.message);
            setAlert(true);
            setLoading(false);
        } else {
            console.log("Signed in successfully");
            navigate("/dashboard");
            setLoading(false);
        }
    };

    if (session) {
        navigate("/dashboard");
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <Container size={420} my={40}>
            <Title ta="center">تسجيل الدخول</Title>
            {alert && (
                <Alert
                    color="red"
                    variant="filled"
                    title="خطأ فى البريد الاكترونى او كلمة السر"
                    mt={30}
                ></Alert>
            )}
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form
                    onSubmit={form.onSubmit((values) => handleSubmit(values))}
                >
                    <TextInput
                        label="البريد الاكترونى"
                        placeholder="mail@example.com"
                        required
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        label="كلمة المرور"
                        placeholder="ادخل كلمة السر"
                        required
                        mt="md"
                        {...form.getInputProps("password")}
                    />

                    <Button type="submit" fullWidth mt="xl" loading={loading}>
                        تسجيل الدخول
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}
