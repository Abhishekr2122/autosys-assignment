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

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navItems">
        <button>
          <AiOutlineHtml5 />
          <span>html</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <TbBrandCss3 />
          <span>CSs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <TbBrandJavascript />
          <span>Javascript</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <TbBrandTypescript />
          <span>Typescript</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <FaReact />
          <span>Reactjs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <RiAngularjsLine />
          <span>Angular</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <FaVuejs />
          <span>Vuejs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <TbBrandNextjs />
          <span>Nextjs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <SiNuxtdotjs />
          <span>Nuxtjs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <RiBootstrapLine />
          <span>Bootstrap</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <TbBrandTailwind />
          <span>Tailwindcss</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <TbBrandNodejs />
          <span>Nodejs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <SiExpress />
          <span>Expressjs</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <BiLogoMongodb />
          <span>Mongodb</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <FaPhp />
          <span>php</span>
        </button>
      </div>
      <div className="navItems">
        <button>
          <BiLogoGoLang />
          <span>GO</span>
        </button>
      </div>
    </div>
  );
}
