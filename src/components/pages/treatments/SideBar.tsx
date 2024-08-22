import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import BlogImg2 from "../../../assets/massage-1-390x344.jpg";
import BlogImg3 from "../../../assets/massage-3-390x344.jpg";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Recent Post
        </h4>
        <div className="d-flex rounded overflow-hidden mb-3">
          {/* <img
          className="img-fluid"
          src={BlogImg1}
          style={{ width: 100, height: 100, objectFit: "cover" }}
          alt="img"
        /> */}
          <Link
            to="/treatments/bridal-packages"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Bridal Package Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/gel-peels-chemical-peels-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Gel Peels / Chemical Peels Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/caci-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Caci Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/skin-polishing-microdermabrasion"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Skin Polishing (Microdermabrasion)
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/oxygen-facial-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Oxygen Facial Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/whitening-facial-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Whitening Facial Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/tightening-facial-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Tightening Facial Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/clean-up-facial-treatment-pore-cleansing"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Clean Up Treatment (Pore Cleansing)
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/oxygen-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Oxygen Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/hydration-facial-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Hydration Facial Treatment
          </Link>
        </div>

        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/glutathione-whitening-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Glutathione Whitening Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/cosmelan-depigmentation-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Cosmelan Depigmentation Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/low-level-light-laser-for-hair-loss"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Low Level Light Laser for Hair Loss
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/botox-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Botox Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/dermal-filler-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Dermal Filler Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/clear-lift-photo-facial"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Clear Lift Photo Facial
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/pore-tightening-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Pore Tighting Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/derma-roller-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Derma Roller Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/mesotheraphy-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Mesotheraphy Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Placenta Extract Treatment
          </Link>
        </div>

        {/* //jfjfjfjjfjf */}

        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Prp Vampire Facelift
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Liquid Facelift Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Stretch Marks Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Non Surgical Skin Tightening
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Hair Loss Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Semi Permanent Make Up
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Medical Tattooing
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Painless Laser Hair Removal
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Ndyag/ Hair Removal Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Accent Ultra Skin Body Contouring
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Accent Ultra RF Pixel
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            RF Growth Removal
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Harmony XL Birth Mark Removal
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Harmony XL Spider Vein Removal
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            PRP for Hair Loss Treatment
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Stem Cells for Hair Loss
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Painless Tattoo Removal
          </Link>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <Link
            to="/treatments/placenta-extract-treatment"
            className="h5 d-flex align-items-center px-3 mb-0"
          >
            Body Slimming Treatment
          </Link>
        </div>
      </div>

      {/* <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Tag Cloud
        </h4>
        <div className="d-flex flex-wrap m-n1">
          <a href="/" className="btn btn-primary m-1">
            Design
          </a>
          <a href="/" className="btn btn-primary m-1">
            Development
          </a>
          <a href="/" className="btn btn-primary m-1">
            Marketing
          </a>
          <a href="/" className="btn btn-primary m-1">
            SEO
          </a>
          <a href="/" className="btn btn-primary m-1">
            Writing
          </a>
          <a href="/" className="btn btn-primary m-1">
            Consulting
          </a>
          <a href="/" className="btn btn-primary m-1">
            Design
          </a>
          <a href="/" className="btn btn-primary m-1">
            Development
          </a>
          <a href="/" className="btn btn-primary m-1">
            Marketing
          </a>
          <a href="/" className="btn btn-primary m-1">
            SEO
          </a>
          <a href="/" className="btn btn-primary m-1">
            Writing
          </a>
          <a href="/" className="btn btn-primary m-1">
            Consulting
          </a>
        </div>
      </div>
      <div>
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Plain Text
        </h4>
        <div className="bg-light rounded text-center" style={{ padding: 30 }}>
          <p>
            Vero sea et accusam justo dolor accusam lorem consetetur, dolores
            sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor
            magna takimata, amet sit et diam dolor ipsum amet diam
          </p>
          <a href="/" className="btn btn-primary py-2 px-4">
            Read More
          </a>
        </div>
      </div> */}
    </>
  );
};

export default SideBar;
