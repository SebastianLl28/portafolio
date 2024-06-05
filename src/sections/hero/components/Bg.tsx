import Image from "next/image";
import AstroImage from "@/assets/astro-icon.webp";
import CssIcon from "@/assets/css-4.png";
import CypressIcon from "@/assets/cypress-icon.png";
import ReactIcon from "@/assets/react.png";
import TailwindcssIcon from "@/assets/tailwindcss-icon.png";
import JavascriptIcon from "@/assets/js.png";

export default function Bg() {
  return (
    <ul className="inset-0 absolute -z-10 select-none max-w-[110rem] mx-auto">
      <li className="animate-float absolute -bottom-5 sm:-bottom-10 left-4 sm:left-16 opacity-10">
        <Image src={ReactIcon} width={120} height={120} alt="react icon" />
      </li>
      <li className="animate-float absolute hidden sm:inline-block bottom-[30%] right-16 opacity-10">
        <Image src={AstroImage} width={70} height={100} alt="astro icon" />
      </li>
      <li className="animate-float absolute bottom-24 right-10 sm:right-[25%] opacity-10">
        <Image
          src={TailwindcssIcon}
          width={100}
          height={100}
          alt="tailwindcss icon"
        />
      </li>
      <li className="animate-float absolute hidden sm:inline-block top-16 right-16 opacity-10">
        <Image src={CypressIcon} width={100} height={100} alt="cypress icon" />
      </li>
      <li className="animate-float absolute hidden sm:inline-block top-[20%] left-[10%] opacity-10">
        <Image src={CssIcon} width={80} height={100} alt="css icon" />
      </li>
      <li className="animate-float absolute hidden sm:inline-block  bottom-[25%] left-10 sm:left-[30%] opacity-10">
        <Image
          src={JavascriptIcon}
          width={90}
          height={90}
          alt="javascript icon"
        />
      </li>
    </ul>
  );
}
