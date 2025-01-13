import React from "react";

interface CardProps {
    image: string;
    heading: string;
    body?: string;
    imgStyle?: string;
    textStyle?: string;
}

const Card: React.FC<CardProps> = ({
    image,
    heading,
    body,
    imgStyle,
    textStyle,
}) => {
    return (
        <div className="m-auto transition-transform transform hover:-translate-y-2">
            <figure className="w-80">
                <img
                    src={image}
                    alt={heading}
                    className={`w-full rounded-[45px]`}
                />
            </figure>
            <p className={`text-xl text-primary ${textStyle}`}>{heading}</p>
            {body ? <p className="text-sm w-80">{body}</p> : null}
        </div>
    );
};

export default Card;
