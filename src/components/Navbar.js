import "./navbar.css";

import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNuxtdotjs } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import { FaSass } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <button className="navItems">
          <AiOutlineHtml5 className="html" />

          <span>Html</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <TbBrandCss3 className="css" />
          <span>Css</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <TbBrandJavascript className="javascript" />
          <span>Javascript</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <TbBrandTypescript className="typescript" />
          <span>Typescript</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <FaReact className="react" />
          <span>Reactjs</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <RiAngularjsLine className="angular" />
          <span>Angular</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <FaVuejs className="vue" />
          <span>Vuejs</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <TbBrandNextjs className="nextjs" />
          <span>Nextjs</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <SiNuxtdotjs className="nuxt" />
          <span>Nuxtjs</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <RiBootstrapLine className="bootstrap" />
          <span>Bootstrap</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <FaSass className="sass" />
          <span>sass</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <TbBrandTailwind className="tailwind" />
          <span>Tailwindcss</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <TbBrandNodejs className="nodejs" />
          <span>Nodejs</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <SiExpress className="expressjs" />
          <span>Expressjs</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <BiLogoMongodb className="mongodb" />
          <span>Mongodb</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <FaPhp className="php" />
          <span>php</span>
        </button>
      </div>
      <div>
        <button className="navItems">
          <BiLogoGoLang className="golang" />
          <span>GO</span>
        </button>
      </div>
    </div>
  );
}
