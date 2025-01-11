import NavLinks from "./NavLinks";
import Button from "./Button";
import logo from "../assets/logo.png";

export default function Nav() {
    return (
        <div className="container">
            <nav className="flex items-center justify-center" dir="ltr">
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <div className="grow">
                    <NavLinks />
                </div>
                <div className="flex items-center justify-center gap-12 md:mr-10 md:flex-row-reverse">
                    {/* <div className="flex items-center justify-center gap-12 md:mr-10 md:flex-row-reverse"> */}
                    <Button type="secondary">تواصل معنا</Button>
                    <Button type="primary">اطلب خدمة</Button>
                </div>
            </nav>
        </div>
    );
}
