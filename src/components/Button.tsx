import React from "react";
import { NavLink } from "react-router";

interface ButtonProps {
    children: React.ReactNode;
    type: "primary" | "secondary";
    to: string;
}

export default function Button({ type, children, to }: ButtonProps) {
    return (
        <NavLink to={to}>
            <button
                className={`${
                    type === "primary"
                        ? "bg-primary text-black"
                        : "bg-secondary text-white"
                } button`}
            >
                {children}
            </button>
        </NavLink>
    );
}
