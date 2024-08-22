import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const footerItems = [
  { path: "/", label: "Acne" },
  { path: "/", label: "Acne Scars" },
  { path: "/", label: "Rosacea / Pink Face" },
  { path: "/", label: "Eczema" },
  { path: "/", label: "Allergy / Itching" },
  { path: "/", label: "Warts / Corns" },
  { path: "/", label: "Candid Infection" },
  { path: "/", label: "Pigmentation (Melasma / Freckles)" },
  { path: "/", label: "Nail Infections" },
  { path: "/", label: "Nail Changes" },
  { path: "/", label: "Patchy Hair Loss / Alopecia Areata" },
  { path: "/", label: "Hair Loss" },
];

const Footer: React.FC = () => {
  return (
    <>
      <div>
        <div
          className="container-fluid text-light py-5"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-uppercase  mb-4 ">
                  Get In Touch
                </h4>
                <p className="mb-4 text-dark">
                  Let's Connect and Make Your Vision a Reality. Reach Out Today!
                </p>
                <p className="mb-2">
                  <Link
                    className="text-dark pe-3"
                    to="https://maps.app.goo.gl/GvQUuDyFdPguhykk6"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-primary me-3"
                    />
                    {`115 B, Mittal Court, Nariman Point, Mumbai, Maharashtra 400021`}
                  </Link>
                </p>
                <p className="mb-2">
                  <Link
                    className="text-dark pe-3"
                    to="mailto:helpdesk@skinandyou.in"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-primary me-3"
                    />
                    helpdesk@skinandyou.in
                  </Link>
                </p>
                <p className="mb-0">
                  <Link
                    className="text-dark pe-3"
                    to="tel:+919920033331"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faPhoneAlt}
                      className="text-primary me-3"
                    />
                    +91 99200 33331
                  </Link>
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block  text-uppercase mb-4">
                  Quick Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  {footerItems &&
                    footerItems.slice(0, 6).map((item, i) => (
                      <Link to={item?.path} key={i} className="text-dark mb-2">
                        <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                        {item?.label}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block  text-uppercase  mb-4">
                  Popular Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  {footerItems &&
                    footerItems.slice(6, 12).map((item, i) => (
                      <Link to={item?.path} key={i} className="text-dark mb-2">
                        <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                        {item?.label}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block  text-uppercase  mb-4">
                  Newsletter
                </h4>
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control p-3 border-0"
                      placeholder="Your Email Address"
                    />
                    <button className="btn btn-primary">Sign Up</button>
                  </div>
                </form>
                <h6 className=" text-uppercase mt-4 mb-3">Follow Us</h6>
                <div className="d-flex">
                  <Link
                    className="footer-icon btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    to="https://www.facebook.com/SkinandYouClinic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    className="footer-icon btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    to="https://x.com/SkinandYou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link
                    className="footer-icon btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                    to="https://www.youtube.com/skinandyou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>
                  <Link
                    className="footer-icon btn btn-lg btn-primary btn-lg-square rounded-circle"
                    to="https://www.instagram.com/skinandyou.clinic/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid py-4"
          style={{ backgroundColor: "#FFF6F7" }}
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  © 2024{" "}
                  <Link className="text-dark" to="/">
                    {" "}
                    Skin & You
                  </Link>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0">
                  Designed by{" "}
                  <Link
                    className="text-dark"
                    to="https://Wizarding.com"
                    target="_blank"
                  >
                    Wizarding
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
