import React from "react";
import { changeLanguageIcon } from "@/lib/lang-icon";

type LanguageIconProps = {
  language: string;
};

const LanguageIcon = ({ language }: LanguageIconProps) => {
  const icon = changeLanguageIcon(language);
  if (typeof icon === "string") {
    return <span>{icon}</span>; // Render the string icon as text
  }
  return React.createElement(icon, { className: "text-blue-500 h-6 w-6" });
};

export default LanguageIcon;
