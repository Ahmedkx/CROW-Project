import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import LogoText from "../LogoText";

export default function AboutUs() {
    return (
        <>
            <Nav />
            <div className="container grid gap-10 mx-auto mt-12 text-center md:grid-rows-2 md:grid-cols-1">
                <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
                    <p className="mb-3 text-2xl">
                        شركة <LogoText style="text-2xl" /> للتسويق
                    </p>
                    <p className="text-sm">
                        في <LogoText style="text-sm" /> نؤمن بأن النجاح يبدأ من
                        استراتيجية تسويقية مدروسة. نحن فريق من المحترفين
                        المتحمسين، نعمل بجد لتقديم حلول تسويقية مبتكرة تلبي
                        احتياجات عملائنا. من خلال دمج الإبداع مع التحليل الدقيق،
                        نساعدك على الوصول إلى جمهورك المستهدف وتحقيق أهدافك
                        التجارية بكفاءة.
                    </p>
                </div>
                <div className="grid gap-10 mx-auto md:grid-cols-2 md:w-3/4 lg:w-1/2">
                    <div>
                        <p className="mb-3 text-2xl">
                            اهدافنا في <LogoText style="text-2xl" /> للتسويق
                        </p>
                        <p className="text-sm">
                            <LogoText style="text-sm" /> للتسويق تهدف إلى تعزيز
                            العلامات التجارية وزيادة الوعي بها من خلال
                            استراتيجيات تسويقية مبتكرة وفعالة. نسعى لبناء علاقات
                            قوية مع العملاء وتقديم محتوى جذاب يلبي احتياجاتهم،
                            مما يساهم في تحقيق أهدافهم التجارية وزيادة عوائدهم.
                            نركز على استخدام التحليلات والبيانات لفهم السوق بشكل
                            أفضل وتكييف استراتيجياتنا لتحقيق نتائج مثمرة.
                        </p>
                    </div>
                    <div>
                        <p className="mb-3 text-2xl">
                            مهمتنا في <LogoText style="text-2xl" /> للتسويق
                        </p>
                        <p className="text-sm">
                            في شركة خبراء التسويق ، نحمل مهمة وهي التزامنا
                            بتقديم أفضل الخدمات والحلول في مجال خدمات التسويق
                            الإلكتروني وتجسد رغبتنا في تحقيق النجاح والتميز
                            لعملائنا وشركائنا، في تقديم حلول تسويقية مبتكرة
                            وفعّالة تلبي تحديات عملائنا وتساهم في نمو أعمالهم
                            وتحسن من تواجدهم الرقمي.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
