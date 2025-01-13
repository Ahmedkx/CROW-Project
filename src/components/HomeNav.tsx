import Button from "./Button";

export default function HomeNav() {
    return (
        <nav className="grid md:grid-cols-3" dir="ltr">
            <div className="hidden sm:block"></div>
            <p className="text-center text-8xl logo">
                CR<span>O</span>W
            </p>
            <div className="flex items-center justify-center gap-12 md:mr-10 md:flex-row-reverse">
                <Button type="secondary" to="/contact-us">
                    تواصل معنا
                </Button>
                <Button type="primary" to="/">
                    اطلب خدمة
                </Button>
            </div>
        </nav>
    );
}
