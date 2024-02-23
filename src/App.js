import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Overview from "./pages/Overview";
import Charts from "./pages/Charts";
import Techstack from "./pages/Techstack";
import Compare from "./pages/Compare";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="details" element={<Details />} />
          <Route path="overview" element={<Overview />} />
          <Route path="charts" element={<Charts />} />
          <Route path="techstack" element={<Techstack />} />
          <Route path="compare" element={<Compare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
