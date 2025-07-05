import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollLibrary from "./pages/ScrollLibrary";
import NextArkYouth from "./pages/NextArkYouth";
import Agents from "./pages/Agents";
import AffiliateTools from "./pages/AffiliateTools";
import SignalScroll from "./pages/SignalScroll";
import "./App.css";

function App() {
  return (
    <div className="dao-app">
      <Sidebar />
      <main className="scroll-main">
        <div className="cyber-grid"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scroll-library" element={<ScrollLibrary />} />
          <Route path="/nextark-youth" element={<NextArkYouth />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
