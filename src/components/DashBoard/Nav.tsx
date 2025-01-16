import {
    Avatar,
    Burger,
    Container,
    Group,
    Menu,
    Text,
    UnstyledButton,
    Divider,
    Flex,
    Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/logo.png";

// const user = {
//     name: "Jane Spoonfighter",
//     email: "janspoon@fighter.dev",
//     image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
// };

export function Nav() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <>
            <Container size="md">
                <Flex justify="space-between" direction="row-reverse">
                    <Image radius="md" src={logo} sizes="" />

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="xs"
                        size="sm"
                    />

                    <Menu
                        width={260}
                        offset={-7}
                        position="bottom-end"
                        withinPortal
                    >
                        <Menu.Target>
                            <UnstyledButton>
                                <Group>
                                    <Avatar
                                        name="احمد محمد"
                                        radius="xl"
                                        size={30}
                                    />
                                    <Text size="sm" mr={3}>
                                        اسم الموظف
                                    </Text>
                                </Group>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown dir="ltr">
                            <Menu.Item color="datkgray">
                                ادارة الموظفين
                            </Menu.Item>
                            <Menu.Item color="red">تسجيل الخروج</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </Container>
            <Divider my="md" />
        </>
    );
}
