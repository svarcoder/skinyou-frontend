import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";
import AboutMe from "../about/AboutMe";
import SingleBlog from "../media/SingleBlog1";
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
import Contact from "../contact/Contact";
import WhyUs from "../about/WhyUs";
import PrepareApointment from "../about/PrepareApointment";
import WhatsNew from "../media/WhatsNew";
import Article from "../media/Article";
import PhotoGallery from "../media/PhotoGallery";
import Blog from "../media/Blog";
import SingleBlog1 from "../media/SingleBlog1";
import SingleBlog2 from "../media/SingleBlog2";
import SingleBlog3 from "../media/SingleBlog3";
import SingleBlog4 from "../media/SingleBlog4";
import SingleBlog5 from "../media/SingleBlog5";
import SingleBlog6 from "../media/SingleBlog6";
import SingleBlog7 from "../media/SingleBlog7";
import SingleBlog8 from "../media/SingleBlog8";
import SingleBlog9 from "../media/SingleBlog9";
import SingleBlog10 from "../media/SingleBlog10";
import SingleBlog11 from "../media/SingleBlog11";

const HomeRoute: React.FC = () => {
  return (
    <Router>
      <InstantTalkButton />
      <BackToTopButton />
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instapost" element={<InstaGramPost />} />
        <Route path="/about-us/why-us" element={<WhyUs />} />
        <Route path="/media/whats-new" element={<WhatsNew />} />
        <Route path="/media/articles" element={<Article />} />
        <Route path="/media/blog" element={<Blog />} />
        <Route path="/media/blog-details/1" element={<SingleBlog1 />} />
        <Route path="/media/blog-details/2" element={<SingleBlog2 />} />
        <Route path="/media/blog-details/3" element={<SingleBlog3 />} />
        <Route path="/media/blog-details/4" element={<SingleBlog4 />} />
        <Route path="/media/blog-details/5" element={<SingleBlog5 />} />
        <Route path="/media/blog-details/6" element={<SingleBlog6 />} />
        <Route path="/media/blog-details/7" element={<SingleBlog7 />} />
        <Route path="/media/blog-details/8" element={<SingleBlog8 />} />
        <Route path="/media/blog-details/9" element={<SingleBlog9 />} />
        <Route path="/media/blog-details/10" element={<SingleBlog10 />} />
        <Route path="/media/blog-details/11" element={<SingleBlog11 />} />
        <Route path="/media/photogallery" element={<PhotoGallery />} />
        <Route
          path="/about-us/how-to-prepare-for-an-appointment"
          element={<PrepareApointment />}
        />
        <Route
          path="/about-us/dr-geeta-mehra-fazalbhoy"
          element={<AboutMe />}
        />
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
