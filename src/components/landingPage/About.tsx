import React from "react";
import AboutMeImg from "../../assets/Dr geeta Transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faProcedures,
  faMicroscope,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import useWindowWidth from "../../hook/useWindowWidth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div className="container-fluid py-5" ref={ref}>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
            <div className="position-relative h-100">
              {inView && (
                <img
                  className="position-absolute w-100 h-100 rounded animate__animated animate__bounceInLeft animate__slow"
                  src={AboutMeImg}
                  style={{ objectFit: "contain" }}
                  alt="Img"
                />
              )}
            </div>
          </div>
          {inView && (
            <div className="col-lg-7 mt-4">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary about animate__animated animate__bounceInRight animate__slow">
                  About Us
                </h5>
                <h1 className="display-4 animate__animated animate__bounceInRight animate__slow">
                  DR. GEETA MEHRA FAZALBHOY
                </h1>
              </div>
              <p className="animate__animated animate__bounceInLeft animate__slow">
                Dr. Geeta Mehra Fazalbhoy, MD & Founder of Skin & You Clinic,
                Mumbai, is a globally recognized expert in dermatology and
                aesthetic medicine. With advanced international training and
                certifications, she specializes in cutting-edge, pain-free
                treatments for skin tightening, pigmentation, and body
                contouring. Her clinic is ranked among the top in India,
                attracting patients worldwide.
              </p>
              <div
                className={`d-flex justify-content-center align-items-center ${
                  windowWidth >= 991 ? "col-6" : "col-6"
                } mt-4`}
                style={{ gap: "10px" }}
              >
                <button
                  className="btn btn-primary w-100 py-3 animate__animated animate__bounceInUp animate__slow"
                  type="submit"
                  onClick={() => navigate("/about-us/dr-geeta-mehra-fazalbhoy")}
                >
                  Know More
                </button>
                <Link
                  className="btn btn-primary w-100 py-3 animate__animated animate__bounceInUp animate__slow"
                  to="https://www.instagram.com/drgeetafazalbhoy"
                  target="_blank"
                >
                  Instagram
                </Link>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
