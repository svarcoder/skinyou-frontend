import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import NavBar from "../header/NavBar";
import TopBar from "../topBar/TopBar";
import Footer from "../footer/Footer";
import Blog from "../blog/Blog";
import AboutMe from "../about/AboutMe";
import SingleBlog from "../blog/SingleBlog";
import BridalPackage from "../pages/treatments/BridalPackage";

const HomeRoute: React.FC = () => {
  return (
    <Router>
      {/* <TopBar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article" element={<Blog />} />
        <Route path="/article/:id" element={<SingleBlog />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/treatments/bridal-packages" element={<BridalPackage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default HomeRoute;
