import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="h-px bg-primary"></div>
            <p className="mt-5 text-center">
                "
                <span className="text-xs logo" style={{ textShadow: "none" }}>
                    CR<span className="text-secondary">O</span>W
                </span>
                " هو مشروع تسويق رقمي مبتكر يهدف إلى تقديم حلول تسويقية متكاملة
                تلبي احتياجات الشركات بمختلف أحجامها. نسعى في "
                <span className="text-xs logo" style={{ textShadow: "none" }}>
                    CR<span className="text-secondary">O</span>W
                </span>
                " إلى الجمع بين الإبداع والتكنولوجيا لتحقيق نتائج مميزة
                لعملائنا.
            </p>
            <p className="text-center">
                رؤية المشروع:
                <p>
                    تتمثل رؤيتنا في أن نصبح الشركة الرائدة في مجال التسويق
                    الرقمي في المنطقة، من خلال تقديم استراتيجيات مبتكرة وبناء
                    علاقات قوية مع عملائنا
                </p>
            </p>
        </footer>
    );
}
