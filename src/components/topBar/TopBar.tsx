import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const TopBar: React.FC = () => {
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <Link
                className="text-decoration-none text-body pe-3"
                to="tel:+912222843000"
              >
                <i className="bi bi-telephone me-2" />
                +91 22 22843000/22825555
              </Link>
              <span className="text-body">|</span>
              <Link
                className="text-decoration-none text-body px-3"
                to="mailto:helpdesk@skinandyou.in"
              >
                <i className="bi bi-envelope me-2" />
                helpdesk@skinandyou.in
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <Link
                className="text-body px-2"
                to="https://www.facebook.com/SkinandYouClinic"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link
                className="text-body px-2"
                to="https://x.com/SkinandYou"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              {/* <a className="text-body px-2" href="/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a> */}
              <Link
                className="text-body px-2"
                to="https://www.youtube.com/skinandyou"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                className="text-body ps-2"
                to="https://www.instagram.com/skinandyou.clinic/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
