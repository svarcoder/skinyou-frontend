import React from "react";
import AboutMeImg from "../../assets/woman-spa-mask-half-face-beauty-concept-healthy-po-XSNKXZR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faProcedures,
  faMicroscope,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary">
        <div className="container container-top">
          <div className="text-center mt-4">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container mt-4">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={AboutMeImg}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7 mt-4 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary about">About Us</h5>
                <h1 className="display-4">DR. GEETA MEHRA FAZALBHOY</h1>
              </div>
              <p>
                Managing Director & Founder Member of Skin & You Clinic &
                CapitalG Healthcare Multiventures Private Limited, Nariman
                Point, Mumbai. A leading South Mumbai Skin Lasers & Aesthetic
                treatment clinic. Dr. Geeta Mehra Fazalbhoy was 1st to introduce
                Micro Current Non Invasive Technology and Worlds leading RF Skin
              </p>
              <div className="col-4 mt-4">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
