import { Pagination, Table, Button, Container, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import supabase from "../../Supabase";
import { Session } from "@supabase/supabase-js";

export default function TableSort() {
    const [session, setSession] = useState<Session | null>(null);
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

    const [activePage, setPage] = useState(1);
    interface ServiceRequest {
        id: number;
        name: string;
        full_name: string;
        created_at: string;
        status: string;
    }

    const [elements, setElements] = useState<ServiceRequest[]>([]);

    async function getRequests() {
        const { data } = await supabase
            .from("service_requests")
            .select()
            .range(0, 1);

        setElements(data ?? []);
        console.log(data);
    }

    useEffect(() => {
        getRequests();
    }, []);

    const rows = elements.map((element) => (
        <Table.Tr key={element.id} ta={"center"}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.full_name}</Table.Td>
            <Table.Td>{element.created_at}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
            <Table.Td ta={"center"}>
                <Button>عرض</Button>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Container>
            <TextInput flex={1} mt={30} placeholder="ابحث عن طلب" />
            <Table
                striped
                highlightOnHover
                withTableBorder
                withColumnBorders
                mt={30}
            >
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th ta={"center"}>رقم الطلب</Table.Th>
                        <Table.Th ta={"center"}>اسم العميل</Table.Th>
                        <Table.Th ta={"center"}>تاريخ الطلب</Table.Th>
                        <Table.Th ta={"center"}>حالة الطلب</Table.Th>
                        <Table.Th ta={"center"}>تفاصيل</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            <Pagination
                total={5}
                m="auto"
                value={activePage}
                onChange={setPage}
                mx={"auto"}
                mt={20}
                w={"fit-content"}
            />
        </Container>
    );
}
