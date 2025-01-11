import NavLinks from "./NavLinks";
import Button from "./Button";
import logo from "../assets/logo.png";

export default function Nav() {
    return (
        <nav className="flex items-center justify-center w-screen " dir="ltr">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <div className="grow">
                <NavLinks />
            </div>
            <div className="flex items-center justify-center gap-12 ">
                {/* <div className="flex items-center justify-center gap-12 md:mr-10 md:flex-row-reverse"> */}
                <Button type="secondary">تواصل معنا</Button>
                <Button type="primary">اطلب خدمة</Button>
            </div>
        </nav>
    );
}
