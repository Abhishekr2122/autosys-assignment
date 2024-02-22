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
      <h1>TechDen</h1>
      <div>
        <div>
          <RxDashboard />
          <span>Dashboard</span>
        </div>
        <div>
          <CgDetailsMore />
          <span>Details</span>
        </div>
        <div>
          <MdOutlineSummarize />
          <span>Overview</span>
        </div>
        <div>
          <HiOutlineChartSquareBar />
          <span>Charts</span>
        </div>
        <div>
          <GoStack />
          <span>Techstack</span>
        </div>
        <div>
          <IoIosGitCompare />
          <span>Compare</span>
        </div>
      </div>
    </div>
  );
}
