export default function NavLinks({ style = "text-5xl" }) {
    return (
        <div className={`links ${style}`} dir="rtl">
            <ul className={`flex-wrap justify-around hidden gap-6 sm:flex `}>
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
