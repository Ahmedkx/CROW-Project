import React from "react";

interface CardProps {
    image: string;
    heading: string;
    body: string;
}

const Card: React.FC<CardProps> = ({ image, heading, body }) => {
    return (
        <div className="m-auto">
            <figure className="w-80">
                <img src={image} alt="image" className="w-full" />
            </figure>
            <p className="text-xl text-primary">{heading}</p>
            <p className="text-sm w-80">{body}</p>
        </div>
    );
};

export default Card;
