import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileHeader from "./components/ProfileHeader";
import Navbar from "./components/Navbar";

import Home from "./components/webpages/Home.tsx";
import Portfolio from "./components/webpages/Portfolio.tsx";
import TechBlog from "./components/webpages/TechBlog.tsx";
import Writings from "./components/webpages/Writings.tsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="web-page">
          <ProfileHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tech-blog" element={<TechBlog />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
