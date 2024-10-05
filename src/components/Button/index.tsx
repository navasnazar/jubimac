import React, { ReactNode } from "react";

type ButtonProps = {
  icon?: ReactNode;
  label?: string;
  type: "primary" | "secondary";
  textSize?:string
};

const Button = ({ icon, label, type,textSize }: ButtonProps) => {
  return (
    <button
      className={`button-wrapper text-[${textSize}] ${
        
        type === "primary"
          ? icon
            ? "primary-with-icon"
            : "primary"
          : "secondary"
      } ${textSize}`}
    >
      {label}
      <span className="icon">{icon}</span>
    </button>
  );
};

export default Button;


