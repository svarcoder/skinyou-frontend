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
import PeelsTreatment from "../pages/treatments/PeelsTreatment";
import CaciTreatment from "../pages/treatments/CaciTreatment";
import SkinPolishing from "../pages/treatments/SkinPolishing";
import OxygenFacialTreatment from "../pages/treatments/OxygenFacialTreatment";
import WhiteningFacialTreatment from "../pages/treatments/WhiteningFacialTreatment";
import TighteningFacialTreatment from "../pages/treatments/TighteningFacialTreatment";
import CleanUpTreatment from "../pages/treatments/CleanUpTreatment";
import OxygenTreatment from "../pages/treatments/OxygenTreatment";
import HydrationFacialTreatment from "../pages/treatments/HydrationFacialTreatment";
import InstantTalkButton from "../apointmentButton/InstantTalkButton";
import BackToTopButton from "../BackToTopButton.tsx/BackToTopButton";
import InstaGramPost from "../Instagram/InstaMain";

const HomeRoute: React.FC = () => {
  return (
    <Router>
      {/* <TopBar /> */}
      <InstantTalkButton />
      <BackToTopButton />
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article" element={<Blog />} />
        <Route path="/article/:id" element={<SingleBlog />} />
        <Route path="/instapost" element={<InstaGramPost />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/treatments/bridal-packages" element={<BridalPackage />} />
        <Route
          path="/treatments/gel-peels-chemical-peels-treatment"
          element={<PeelsTreatment />}
        />
        <Route path="/treatments/caci-treatment" element={<CaciTreatment />} />
        <Route
          path="/treatments/skin-polishing-microdermabrasion"
          element={<SkinPolishing />}
        />
        <Route
          path="/treatments/oxygen-facial-treatment"
          element={<OxygenFacialTreatment />}
        />
        <Route
          path="/treatments/whitening-facial-treatment"
          element={<WhiteningFacialTreatment />}
        />
        <Route
          path="/treatments/tightening-facial-treatment"
          element={<TighteningFacialTreatment />}
        />
        <Route
          path="/treatments/clean-up-facial-treatment-pore-cleansing"
          element={<CleanUpTreatment />}
        />
        <Route
          path="/treatments/oxygen-treatment"
          element={<OxygenTreatment />}
        />
        <Route
          path="/treatments/hydration-facial-treatment"
          element={<HydrationFacialTreatment />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default HomeRoute;
