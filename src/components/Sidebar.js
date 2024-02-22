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
      <h1 className="header">TechDen</h1>
      <div className="mainContainer">
        <div className="subContainer">
          <RxDashboard />
          <span className="spanItem">Dashboard</span>
        </div>
        <div className="subContainer">
          <CgDetailsMore />
          <span className="spanItem">Details</span>
        </div>
        <div className="subContainer">
          <MdOutlineSummarize />
          <span className="spanItem">Overview</span>
        </div>
        <div className="subContainer">
          <HiOutlineChartSquareBar />
          <span className="spanItem">Charts</span>
        </div>
        <div className="subContainer">
          <GoStack />
          <span className="spanItem">Techstack</span>
        </div>
        <div className="subContainer">
          <IoIosGitCompare />
          <span className="spanItem">Compare</span>
        </div>
      </div>
    </div>
  );
}
