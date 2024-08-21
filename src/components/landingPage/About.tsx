import React from "react";
import AboutMeImg from "../../assets/woman-spa-mask-half-face-beauty-concept-healthy-po-XSNKXZR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faProcedures,
  faMicroscope,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
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
          <div className="col-lg-7 mt-4">
            <div className="mb-4">
              <h5 className="d-inline-block text-primary about">About Us</h5>
              <h1 className="display-4">DR. GEETA MEHRA FAZALBHOY</h1>
            </div>
            <p>
              Managing Director & Founder Member of Skin & You Clinic & CapitalG
              Healthcare Multiventures Private Limited, Nariman Point, Mumbai. A
              leading South Mumbai Skin Lasers & Aesthetic treatment clinic. Dr.
              Geeta Mehra Fazalbhoy was 1st to introduce Micro Current Non
              Invasive Technology and Worlds leading RF Skin
            </p>
            <div className="col-4 mt-4">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Know More
              </button>
            </div>
            {/* <div className="row g-3 pt-3">
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FontAwesomeIcon
                    icon={faUserMd}
                    size="3x"
                    className="text-primary mb-3"
                  />
                  <h6 className="mb-0">
                    Qualified
                    <small className="d-block text-primary">Doctors</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FontAwesomeIcon
                    icon={faProcedures}
                    size="3x"
                    className="text-primary mb-3"
                  />
                  <h6 className="mb-0">
                    Emergency
                    <small className="d-block text-primary">Services</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FontAwesomeIcon
                    icon={faMicroscope}
                    size="3x"
                    className="text-primary mb-3"
                  />
                  <h6 className="mb-0">
                    Accurate
                    <small className="d-block text-primary">Testing</small>
                  </h6>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="bg-light text-center rounded-circle py-4">
                  <FontAwesomeIcon
                    icon={faAmbulance}
                    size="3x"
                    className="text-primary mb-3"
                  />
                  <h6 className="mb-0">
                    Free
                    <small className="d-block text-primary">Ambulance</small>
                  </h6>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
