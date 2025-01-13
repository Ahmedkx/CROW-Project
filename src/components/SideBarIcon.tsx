import { Drawer } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router";

export default function SideBarIcon() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="mr-5 lg:mr-0 lg:hidden" onClick={toggleSidebar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
            </div>
            <Drawer
                opened={isOpen}
                onClose={toggleSidebar}
                position="left"
                padding="md"
                size="md"
            >
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link
                                to="/"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                الرئيسيه
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/our-work"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                اعمالنا
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/our-partners"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                شركاؤنا
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/our-services"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                خدماتنا
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about-us"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                من نحن
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact-us"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                تواصل معنا
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/our-services"
                                onClick={toggleSidebar}
                                className="text-lg font-medium text-gray-700 hover:text-primary"
                            >
                                اطلب خدمة
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Drawer>
        </>
    );
}
