import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";
import AboutMe from "../about/AboutMe";
import CaciTreatment from "../pages/treatments/CaciTreatment";
import SkinPolishing from "../pages/treatments/SkinPolishing";
import OxygenFacialTreatment from "../pages/treatments/OxygenFacialTreatment";
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
import SilkPeelDermalInfusion from "../pages/treatments/SilkPeelDermalInfusion";
import CrystalExfoliation from "../pages/treatments/CrystalExfoliation";
import NCTF from "../pages/treatments/NCTF";
import Viscoderm from "../pages/treatments/Viscoderm";
import DiamondTip from "../pages/treatments/DiamondTip";
import GlutathioneWhiteningTreatment from "../pages/treatments/GlutathioneWhiteningTreatment";
import BodyFaceTightening from "../pages/treatments/BodyFaceTightening";
import NonSurgicalSkinTightening from "../pages/treatments/NonSurgicalSkinTightening";
import FineLinesWrinkles from "../pages/treatments/FineLinesWrinkles";
import WrinkleReduction from "../pages/treatments/WrinkleReduction";
import CleanUp from "../pages/treatments/CleanUp";
import ClearLiftPhotoFacial from "../pages/treatments/ClearLiftPhotoFacial";
import RadiofrequencyGrowthRemoval from "../pages/treatments/RadiofrequencyGrowthRemoval";
import AccentUltraRFPixel from "../pages/treatments/AccentUltraRFPixel";
import AccentUltraSkinBodyContouring from "../pages/treatments/AccentUltraSkinBodyContouring";
import UltracelQHIFU from "../pages/treatments/UltracelQHIFU";
import FaceThreadLift from "../pages/treatments/FaceThreadLift";
import BodyThreadLift from "../pages/treatments/BodyThreadLift";
import LiquidFaceliftTreatment from "../pages/treatments/LiquidFaceliftTreatment";
import MesotherapyTreatment from "../pages/treatments/MesotherapyTreatment";
import WhiteningFacialTreatment from "../pages/treatments/WhiteningFacialTreatment";
import CosmelanDepigmentationTreatment from "../pages/treatments/CosmelanDepigmentationTreatment";
import Melasma from "../pages/treatments/Melasma";
import Hyperpigmentation from "../pages/treatments/Hyperpigmentation";
import PigmentedLesion from "../pages/treatments/PigmentedLesion";
import CrystalSkinPolishing from "../pages/treatments/CrystalSkinPolishing";

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
        <Route
          path="/treatments/oxygen-facial-treatment"
          element={<OxygenFacialTreatment />}
        />
        <Route
          path="/treatments/hydration-facial-treatment"
          element={<HydrationFacialTreatment />}
        />
        <Route
          path="/treatments/silk-peel-dermalInfusion"
          element={<SilkPeelDermalInfusion />}
        />
        <Route
          path="/treatments/crystal-exfoliation"
          element={<CrystalExfoliation />}
        />
        <Route path="/treatments/nctf" element={<NCTF />} />
        <Route path="/treatments/viscoderm" element={<Viscoderm />} />
        <Route path="/treatments/diamond-tip" element={<DiamondTip />} />
        <Route
          path="/treatments/glutathione-whitening-treatment"
          element={<GlutathioneWhiteningTreatment />}
        />
        <Route path="/treatments/clean-up" element={<CleanUp />} />
        <Route path="/treatments/caci-treatment" element={<CaciTreatment />} />
        <Route path="/treatments/skin-polishing" element={<SkinPolishing />} />
        <Route
          path="/treatments/body-face-tightening"
          element={<BodyFaceTightening />}
        />
        <Route
          path="/treatments/non-surgical-skin-tightening"
          element={<NonSurgicalSkinTightening />}
        />
        <Route
          path="/treatments/fine-lines-wrinkles"
          element={<FineLinesWrinkles />}
        />
        <Route
          path="/treatments/wrinkle-reduction"
          element={<WrinkleReduction />}
        />

        <Route
          path="/treatments/clear-lift-photo-facial"
          element={<ClearLiftPhotoFacial />}
        />
        <Route
          path="/treatments/radiofrequency-growth-removal"
          element={<RadiofrequencyGrowthRemoval />}
        />
        <Route
          path="/treatments/accent-ultra-rf-pixel"
          element={<AccentUltraRFPixel />}
        />
        <Route
          path="/treatments/accent-ultra-skin-body-contouring"
          element={<AccentUltraSkinBodyContouring />}
        />
        <Route path="/treatments/ultracel-q-hifu" element={<UltracelQHIFU />} />
        <Route
          path="/treatments/face-thread-lift"
          element={<FaceThreadLift />}
        />
        <Route
          path="/treatments/body-thread-lift"
          element={<BodyThreadLift />}
        />
        <Route
          path="/treatments/liquid-facelift-treatment"
          element={<LiquidFaceliftTreatment />}
        />
        <Route
          path="/treatments/mesotherapy-treatment"
          element={<MesotherapyTreatment />}
        />
        <Route
          path="/treatments/whitening-facial-treatment"
          element={<WhiteningFacialTreatment />}
        />
        <Route
          path="/treatments/cosmelan-depigmentation-treatment"
          element={<CosmelanDepigmentationTreatment />}
        />
        <Route path="/treatments/melasma" element={<Melasma />} />
        <Route
          path="/treatments/hyperpigmentation"
          element={<Hyperpigmentation />}
        />
        <Route
          path="/treatments/pigmented-lesion"
          element={<PigmentedLesion />}
        />
        <Route
          path="/treatments/crystal-skin-polishing"
          element={<CrystalSkinPolishing />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default HomeRoute;
