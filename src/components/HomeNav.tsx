import Button from "./Button";
import SideBarIcon from "./SideBarIcon";

export default function HomeNav() {
    return (
        <nav className="grid lg:grid-cols-3" dir="ltr">
            <div className="hidden sm:block"></div>
            <div className="flex items-center justify-around mb-5">
                <p className="text-center text-8xl logo">
                    CR<span>O</span>W
                </p>
                <SideBarIcon />
            </div>
            <div className="flex flex-row-reverse items-center justify-center gap-3 md:gap-12 md:mr-10">
                <Button type="secondary" to="/contact-us">
                    تواصل معنا
                </Button>
                <Button type="primary" to="/our-services">
                    اطلب خدمة
                </Button>
            </div>
        </nav>
    );
}
