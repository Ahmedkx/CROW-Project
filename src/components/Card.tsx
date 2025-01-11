// filepath: src/Card.tsx
import React from "react";

interface CardProps {
    image: string;
    heading: string;
    body: string;
}

const Card: React.FC<CardProps> = ({ image, heading, body }) => {
    return (
        <div>
            <figure className="w-80 h-80">
                <img src={image} alt="image" className="w-full" />
            </figure>
            <p className="text-primary">{heading}</p>
            <p className="w-80">{body}</p>
        </div>
    );
};

export default Card;
