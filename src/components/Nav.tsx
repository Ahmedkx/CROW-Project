import NavLinks from "./NavLinks";
import Button from "./Button";
import logo from "../assets/logo.png";

export default function Nav() {
    return (
        <nav
            className="container flex items-center justify-center w-screen gap-5 mx-auto mt-4 "
            dir="ltr"
        >
            <figure className="w-20 h-20 ml-5 lg:ml-0">
                <img src={logo} alt="logo" className="w-full min-w-full" />
            </figure>
            <div className="grow">
                <NavLinks style="hidden lg:block text-xl" />
            </div>
            <div className="items-center hidden gap-4 md:flex">
                <Button type="secondary">تواصل معنا</Button>
                <Button type="primary">اطلب خدمة</Button>
            </div>
            <div className="mr-5 lg:mr-0 lg:hidden">
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
        </nav>
    );
}
