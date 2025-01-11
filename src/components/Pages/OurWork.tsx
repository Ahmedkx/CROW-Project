import Footer from "../Footer";
import Nav from "../Nav";
import Card from "../Card";
import partner1 from "../../assets/partner-1.png";
import partner2 from "../../assets/partner-2.png";

export default function OurWork() {
    return (
        <>
            <Nav />
            <div className="container flex flex-col justify-center mx-auto mt-20 md:flex-row md:gap-52">
                <Card
                    image={partner1}
                    heading={"شركة تملك العمران"}
                    body={
                        "تأسست شركة تملك العمران السعودية للقروض العقارية عام 1979، وهي الآن واحدة من أكبر الشركات المتخصصة في تمويل العقارات في المملكة العربية السعودية. وتعمل الشركة على توفير حلول تمويلية شاملة للعملاء من خلال مجموعة واسعة من المنتجات والخدمات."
                    }
                />
                <Card
                    image={partner2}
                    heading={"شركه مربع العقارية"}
                    body={
                        "تقدم لك شركة مربع العقارية خدمة تصميم داخلي متكاملة حيث نساعدك في تحويل مساحتك إلى فضاء يعكس ذوقك و شخصيتك فريقنا من المصممين المحترفين يمتلك الخبرة و المعرفة اللازمتين لإبتكار تصاميم ..."
                    }
                />
            </div>
            <Footer />
        </>
    );
}
