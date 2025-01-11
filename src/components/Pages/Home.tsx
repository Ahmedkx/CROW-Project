import HomeNav from "../HomeNav";
import NavLinks from "../NavLinks";

export default function Home() {
    return (
        <>
            <HomeNav />
            <div className="flex flex-col gap-24">
                <div>
                    <h1 className="mt-12 text-5xl leading-relaxed text-center">
                        <p>
                            نجمع بين{" "}
                            <span className="text-primary">الإبداع</span>{" "}
                            الابتكار
                        </p>
                        والالتزام لضمان تحقيق أفضل النتائج لعملائنا. كشركة تسويق
                        رقمي متخصصة، نرسم ملامح نجاحك بخطط مدروسة واستراتيجيات
                        رقمية متطورة تحقق تأثيرًا مستدامًا وتضع علامتك التجارية
                        في مقدمة المنافسة رؤيتنا تبدأ بشغفنا وتنتهي بتحقيق
                        <span>.</span>طموحاتك
                    </h1>
                </div>
                <NavLinks />
            </div>
        </>
    );
}
