import { NavLink } from "react-router";

export default function NavLinks({ style = "text-5xl" }) {
    return (
        <div className={`links ${style}`} dir="rtl">
            <ul className={`flex-wrap justify-around hidden gap-6 sm:flex `}>
                <li className="relative group">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary text-shadow"
                                : "text-black text-shadow"
                        }
                    >
                        الرئيسية
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <NavLink
                        to="/our-work"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary text-shadow"
                                : "text-black text-shadow"
                        }
                    >
                        اعمالنا
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <NavLink
                        to="/our-partners"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary text-shadow"
                                : "text-black text-shadow"
                        }
                    >
                        شركاؤنا
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <NavLink
                        to="/our-services"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary text-shadow"
                                : "text-black text-shadow"
                        }
                    >
                        خدماتنا
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary text-shadow"
                                : "text-black text-shadow"
                        }
                    >
                        من نحن
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
            </ul>
        </div>
    );
}
