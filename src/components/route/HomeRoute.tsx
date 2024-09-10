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
import AcneScars from "../pages/treatments/AcneScars";
import ActiveAcne from "../pages/treatments/ActiveAcne";
import GelPeelsTreatment from "../pages/treatments/GelPeelsTreatment";
import ChemicalPeels from "../pages/treatments/ChemicalPeels";
import DeepPeel from "../pages/treatments/DeepPeel";
import BodySlimmingTreatment from "../pages/treatments/BodySlimmingTreatment";
import LipoContrast from "../pages/treatments/LipoContrast";
import FatLossInchLoss from "../pages/treatments/FatLossInchLoss";
import LowLevelLightLaserHairLoss from "../pages/treatments/LowLevelLightLaserHairLoss";
import PRPHairLossTreatment from "../pages/treatments/PRPHairLossTreatment";
import StemCellsHairLoss from "../pages/treatments/StemCellsHairLoss";
import QR678 from "../pages/treatments/QR678";
import HairLossTreatment from "../pages/treatments/HairLossTreatment";
import PainlessLaserHairRemoval from "../pages/treatments/PainlessLaserHairRemoval";
import NDYAGHairRemovalTreatment from "../pages/treatments/NDYAGHairRemovalTreatment";
import SopranoIce from "../pages/treatments/SopranoIce";
import Botox from "../pages/treatments/Botox";
import DermalFillers from "../pages/treatments/DermalFillers";
import HydrationFiller from "../pages/treatments/HydrationFiller";
import PRPVampireFacelift from "../pages/treatments/PRPVampireFacelift";
import PRP from "../pages/treatments/PRP";
import DermaRollerTreatment from "../pages/treatments/DermaRollerTreatment";
import DermapenHairFace from "../pages/treatments/DermapenHairFace";
import DermapenExosomePolynucleotide from "../pages/treatments/DermapenExosomePolynucleotide";
import PainlessTattooRemoval from "../pages/treatments/PainlessTattooRemoval";
import TattooRemoval from "../pages/treatments/TattooRemoval";
import TribeamTattoo from "../pages/treatments/TribeamTattoo";
import HarmonyXLBirthMarkRemoval from "../pages/treatments/HarmonyXLBirthMarkRemoval";
import HarmonyXLSpiderVeinRemoval from "../pages/treatments/HarmonyXLSpiderVeinRemoval";
import AlmaHarmonyXL from "../pages/treatments/AlmaHarmonyXL";
import SemiPermanentMakeup from "../pages/treatments/SemiPermanentMakeup";
import MedicalTattooing from "../pages/treatments/MedicalTattooing";
import WartRemoval from "../pages/treatments/WartRemoval";
import NailInfection from "../pages/treatments/NailInfection";
import TribeamCarbonTreatment from "../pages/treatments/TribeamCarbonTreatment";
import LaserToning from "../pages/treatments/LaserToning";

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
        <Route path="/treatments/acne-scars" element={<AcneScars />} />
        <Route path="/treatments/active-acne" element={<ActiveAcne />} />
        <Route
          path="/treatments/gel-peels-treatment"
          element={<GelPeelsTreatment />}
        />
        <Route path="/treatments/chemical-peels" element={<ChemicalPeels />} />
        <Route path="/treatments/deep-peel" element={<DeepPeel />} />
        <Route
          path="/treatments/body-slimming-treatment"
          element={<BodySlimmingTreatment />}
        />
        <Route path="/treatments/lipo-contrast" element={<LipoContrast />} />
        <Route
          path="/treatments/fat-loss-inch-loss"
          element={<FatLossInchLoss />}
        />
        <Route
          path="/treatments/lowlevel-light-laser-hair-loss"
          element={<LowLevelLightLaserHairLoss />}
        />
        <Route
          path="/treatments/PRP-hair-loss-treatment"
          element={<PRPHairLossTreatment />}
        />
        <Route
          path="/treatments/stem-sells-hair-loss"
          element={<StemCellsHairLoss />}
        />
        <Route path="/treatments/QR678" element={<QR678 />} />
        <Route
          path="/treatments/hair-loss-treatment"
          element={<HairLossTreatment />}
        />
        <Route
          path="/treatments/painless-laser-hair-removal"
          element={<PainlessLaserHairRemoval />}
        />
        <Route
          path="/treatments/NDYAG-hair-removal-treatment"
          element={<NDYAGHairRemovalTreatment />}
        />
        <Route path="/treatments/soprano-ice" element={<SopranoIce />} />
        <Route path="/treatments/botox" element={<Botox />} />
        <Route path="/treatments/dermal-fillers" element={<DermalFillers />} />
        <Route
          path="/treatments/hydration-filler"
          element={<HydrationFiller />}
        />
        <Route
          path="/treatments/PRP-vampire-facelift"
          element={<PRPVampireFacelift />}
        />
        <Route path="/treatments/PRP" element={<PRP />} />
        <Route
          path="/treatments/derma-roller-treatment"
          element={<DermaRollerTreatment />}
        />
        <Route
          path="/treatments/dermapen-hair-face"
          element={<DermapenHairFace />}
        />
        <Route
          path="/treatments/dermapen-exosome-polynucleotide"
          element={<DermapenExosomePolynucleotide />}
        />
        <Route
          path="/treatments/painless-tattoo-removal"
          element={<PainlessTattooRemoval />}
        />
        <Route path="/treatments/tattoo-removal" element={<TattooRemoval />} />
        <Route path="/treatments/tribeam-tattoo" element={<TribeamTattoo />} />
        <Route
          path="/treatments/harmony-XL-birth-mark-removal"
          element={<HarmonyXLBirthMarkRemoval />}
        />
        <Route
          path="/treatments/harmony-XL-spider-vein-removal"
          element={<HarmonyXLSpiderVeinRemoval />}
        />
        <Route path="/treatments/alma-harmony-XL" element={<AlmaHarmonyXL />} />
        <Route
          path="/treatments/semi-permanent-makeup"
          element={<SemiPermanentMakeup />}
        />
        <Route
          path="/treatments/medical-tattooing"
          element={<MedicalTattooing />}
        />
        <Route path="/treatments/wart-removal" element={<WartRemoval />} />
        <Route path="/treatments/nail-in-fection" element={<NailInfection />} />
        <Route
          path="/treatments/tribeam-carbon-treatment"
          element={<TribeamCarbonTreatment />}
        />
        <Route path="/treatments/laser-toning" element={<LaserToning />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default HomeRoute;
