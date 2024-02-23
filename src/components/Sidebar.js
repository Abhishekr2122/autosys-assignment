import { RxDashboard } from "react-icons/rx";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineSummarize } from "react-icons/md";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GoStack } from "react-icons/go";
import { IoIosGitCompare } from "react-icons/io";

import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="header">WebtechDen</h1>
      <div className="mainContainer">
        <div className="subContainer">
          <RxDashboard className="icons" />
          <span className="spanItem">Dashboard</span>
        </div>
        <div className="subContainer">
          <CgDetailsMore className="icons" />
          <span className="spanItem">Details</span>
        </div>
        <div className="subContainer">
          <MdOutlineSummarize className="icons" />
          <span className="spanItem">Overview</span>
        </div>
        <div className="subContainer">
          <HiOutlineChartSquareBar className="icons" />
          <span className="spanItem">Charts</span>
        </div>
        <div className="subContainer">
          <GoStack className="icons" />
          <span className="spanItem">Techstack</span>
        </div>
        <div className="subContainer">
          <IoIosGitCompare className="icons" />
          <span className="spanItem">Compare</span>
        </div>
      </div>
    </div>
  );
}
