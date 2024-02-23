import "../app.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
}
