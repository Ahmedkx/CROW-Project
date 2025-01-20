import { Container, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import Nav from "../components/Nav";
import { useRef } from "react";

export default function Home() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const images = [
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png",
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
    ];

    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Nav />
            <div className="flex flex-col gap-24">
                <div>
                    <h1 className="mt-12 text-3xl leading-relaxed text-center">
                        <Container mb={30} size={"xl"}>
                            <Carousel
                                dir="ltr"
                                withIndicators
                                controlSize={40}
                                loop
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                {slides}
                            </Carousel>
                        </Container>
                        <p>
                            نجمع بين{" "}
                            <span className="text-primary">الإبداع</span>{" "}
                            الابتكار
                        </p>
                        والالتزام لضمان تحقيق أفضل النتائج لعملائنا. كشركة تسويق
                        رقمي متخصصة، نرسم ملامح نجاحك بخطط مدروسة واستراتيجيات
                        رقمية متطورة تحقق تأثيرًا مستدامًا وتضع علامتك التجارية
                        في مقدمة المنافسة رؤيتنا تبدأ بشغفنا وتنتهي بتحقيق
                        طموحاتك.
                    </h1>
                </div>
            </div>
        </>
    );
}
