import NavLinks from "./NavLinks";
import Button from "./Button";
import logo from "../assets/logo.png";
import SideBarIcon from "./SideBarIcon";
import { NavLink } from "react-router";

export default function Nav() {
    return (
        <nav
            className="container flex items-center justify-center w-full gap-5 mx-auto mt-4 "
            dir="ltr"
        >
            <NavLink to="/">
                <figure className="w-20 h-20 ml-5 lg:ml-0">
                    <img
                        src={logo}
                        alt="Crow logo"
                        className="w-full min-w-full"
                    />
                </figure>
            </NavLink>
            <div className="grow">
                <NavLinks style="hidden lg:block text-xl" />
            </div>
            <div className="items-center hidden gap-4 md:flex">
                <Button type="secondary" to="/contact-us">
                    تواصل معنا
                </Button>
                <Button type="primary" to="/send-request">
                    اطلب خدمة
                </Button>
            </div>
            <SideBarIcon />
        </nav>
    );
}
