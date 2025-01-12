// export default function NavLinks({ style = "text-5xl" }) {
//     return (
//         <div className={`links ${style}`} dir="rtl">
//             <ul className={`flex-wrap justify-around hidden gap-6 sm:flex `}>
//                 <li className="relative group text-primary">
//                     الرئيسيه
//                     <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
//                 </li>
//                 <li className="relative group">
//                     اعمالنا
//                     <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
//                 </li>
//                 <li className="relative group">
//                     شركاؤنا
//                     <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
//                 </li>
//                 <li className="relative group">
//                     خدماتنا
//                     <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
//                 </li>
//                 <li className="relative group">
//                     من نحن
//                     <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
//                 </li>
//             </ul>
//         </div>
//     );
// }

import { NavLink } from "react-router";

export default function NavLinks({ style = "text-5xl" }) {
    return (
        <div className={`links ${style}`} dir="rtl">
            <ul className={`flex-wrap justify-around hidden gap-6 sm:flex `}>
                <li className="relative group">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                        }
                    >
                        الرئيسيه
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <NavLink
                        to="/our-work"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
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
                            isActive ? "text-primary" : ""
                        }
                    >
                        شركاؤنا
                    </NavLink>
                    <span className="absolute right-0 w-0 h-1 transition-all duration-300 -bottom-2 bg-primary group-hover:w-full"></span>
                </li>
                <li className="relative group">
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? "text-primary" : ""
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
                            isActive ? "text-primary" : ""
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
