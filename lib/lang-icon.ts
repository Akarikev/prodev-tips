import { BiLogoJava, BiLogoJavascript, BiLogoPython } from "react-icons/bi";
import { FaRust } from "react-icons/fa6";
import { DiRubyRough } from "react-icons/di";
import { IconType } from "react-icons";

export const changeLanguageIcon = (language: string): IconType | string => {
  if (language === "JavaScript") {
    return BiLogoJavascript;
  } else if (language === "Python") {
    return BiLogoPython;
  } else if (language === "Java") {
    return BiLogoJava;
  } else if (language === "Rust") {
    return FaRust;
  } else if (language === "C#") {
    return "C#"; // Consider creating an icon for C# if available
  } else if (language === "Ruby") {
    return DiRubyRough;
  } else {
    return language; // Consider returning a default icon or null
  }
};
