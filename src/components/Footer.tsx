import LogoText from "./LogoText";

export default function Footer() {
    return (
        <footer>
            <div className="h-px my-10 bg-primary"></div>
            <div className="container mx-auto">
                <p className="mt-5 text-center">
                    "
                    <LogoText style="text-xs"/>
                    " هو مشروع تسويق رقمي مبتكر يهدف إلى تقديم حلول تسويقية
                    متكاملة تلبي احتياجات الشركات بمختلف أحجامها. نسعى في "
                    <LogoText style="text-xs"/>" إلى الجمع بين الإبداع والتكنولوجيا لتحقيق
                    نتائج مميزة لعملائنا.
                </p>
                <div className="text-center">
                    رؤية المشروع:
                    <p>
                        تتمثل رؤيتنا في أن نصبح الشركة الرائدة في مجال التسويق
                        الرقمي في المنطقة، من خلال تقديم استراتيجيات مبتكرة
                        وبناء علاقات قوية مع عملائنا
                    </p>
                </div>
            </div>
        </footer>
    );
}
