export default function NavLinks() {
    return (
        <div className="links" dir="rtl">
            <ul className="flex-wrap justify-around hidden gap-6 text-5xl sm:flex ">
                <li className="relative group text-primary">
                    الرئيسيه
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    اعمالنا
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    شركاؤنا
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    خدماتنا
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    من نحن
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
            </ul>
        </div>
    );
}
