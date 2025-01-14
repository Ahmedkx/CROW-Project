import React from "react";
import { NavLink } from "react-router";

interface ButtonProps {
    children: React.ReactNode;
    type: "primary" | "secondary";
    to: string;
    style?: string;
}

export default function Button({ type, children, to, style }: ButtonProps) {
    return (
        <NavLink to={to}>
            <button
                className={`
                    ${
                        type === "primary"
                            ? "bg-primary text-black hover:shadow-[0_0_20px_var(--main-color)] active:bg-[#e18e00] hover:scale-105"
                            : "bg-secondary text-white hover:shadow-[0_0_20px_var(--secondary-color)] active:bg-[#575757] hover:scale-105"
                    }
                    button px-4 py-2 rounded transition-all duration-300 ${style}`}
            >
                {children}
            </button>
        </NavLink>
    );
}
