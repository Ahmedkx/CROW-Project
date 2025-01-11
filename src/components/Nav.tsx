import NavLinks from "./NavLinks";
import Button from "./Button";

export default function Nav() {
    return (
        <nav className="grid md:grid-cols-3" dir="ltr">
            <figure>
                <img src="../assets/logo.png" alt="logo" />
            </figure>
            {/* <p className="text-center text-8xl logo">
                CR<span>O</span>W
            </p> */}
            <NavLinks />
            <div className="flex items-center justify-center gap-12 md:mr-10 md:flex-row-reverse">
                <Button type="secondary">تواصل معنا</Button>
                <Button type="primary">اطلب خدمة</Button>
            </div>
        </nav>
    );
}
