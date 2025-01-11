import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    type: "primary" | "secondary";
}

export default function Button({ type, children }: ButtonProps) {
    return (
        <button
            className={`${
                type === "primary"
                    ? "bg-primary text-black"
                    : "bg-secondary text-white"
            } button`}
        >
            <a>{children}</a>
        </button>
    );
}
