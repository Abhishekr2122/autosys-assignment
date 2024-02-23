import "../app.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export default function Layout() {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
    </div>
  );
}
