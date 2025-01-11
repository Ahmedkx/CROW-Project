interface LogoTextProps {
    style?: string;
}

export default function LogoText({ style }: LogoTextProps) {
    return (
        <span
            className={`text-xs logo ${style}`}
            style={{ textShadow: "none" }}
        >
            CR<span className="text-secondary">O</span>W
        </span>
    );
}
