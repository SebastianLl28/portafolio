import Image from "next/image";
import AstroImage from "@/assets/astro-icon.webp";
import CssIcon from "@/assets/css-4.png";
import CypressIcon from "@/assets/cypress-icon.png";
import ReactIcon from "@/assets/react.png";
import TailwindcssIcon from "@/assets/tailwindcss-icon.png";
import JavascriptIcon from "@/assets/js.png";
import HtmlIcon from "@/assets/html.png";
import ReactQueryIcon from "@/assets/react-query.png";
import NodeIcon from "@/assets/nodejs.png";
import SassIcon from "@/assets/sass.png";

export default function Bg() {
  return (
    <ul className="inset-0 absolute -z-10 select-none min-w-[110rem] max-w-[110rem] mx-auto">
      <li className="animate-float absolute bottom-0 left-4 sm:-left-5 opacity-10">
        <Image src={ReactIcon} width={120} height={120} alt="react icon" />
      </li>
      <li className="animate-float absolute hidden sm:inline-block bottom-[30%] right-16 opacity-10">
        <Image src={AstroImage} width={70} height={100} alt="astro icon" />
      </li>
      <li className="animate-float absolute bottom-36 right-10 sm:right-[25%] opacity-10">
        <Image
          src={TailwindcssIcon}
          width={100}
          height={100}
          alt="tailwindcss icon"
        />
      </li>
      <li className="animate-float absolute hidden sm:inline-block top-36 right-16 opacity-10">
        <Image src={CypressIcon} width={100} height={100} alt="cypress icon" />
      </li>
      <li className="animate-float absolute hidden sm:inline-block top-[20%] left-[0] opacity-10">
        <Image src={CssIcon} width={80} height={100} alt="css icon" />
      </li>
      <li className="animate-float absolute bottom-[25%] sm:left-[30%] left-[28%] opacity-10">
        <Image
          src={JavascriptIcon}
          width={90}
          height={90}
          alt="javascript icon"
        />
      </li>
      <li className="animate-float absolute hidden 2xl:inline-block top-[50%] left-10 sm:left-[10%] opacity-10">
        <Image src={HtmlIcon} width={80} height={100} alt="html icon" />
      </li>
      <li className="animate-float absolute bottom-24 left-[15%] opacity-10">
        <Image
          src={ReactQueryIcon}
          width={100}
          height={100}
          alt="react query icon"
        />
      </li>
      <li className="animate-float absolute hidden sm:inline-block bottom-5 -right-5 sm:-right-5 opacity-10">
        <Image src={NodeIcon} width={100} height={100} alt="node icon" />
      </li>
      <li className="animate-float absolute hidden md:inline-block bottom-16 left-[45%] opacity-10">
        <Image src={SassIcon} width={100} height={100} alt="sass icon" />
      </li>
    </ul>
  );
}
