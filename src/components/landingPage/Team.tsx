import React from "react";
import Slider from "react-slick";
import TeamImg1 from "../../assets/team-1.jpg";
import TeamImg2 from "../../assets/team-2.jpg";
import TeamImg3 from "../../assets/team-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Team: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Our Doctors
          </h5>
          <h1 className="display-4">Qualified Healthcare Professionals</h1>
        </div>
        <div className="team-carousel position-relative">
          <Slider {...settings}>
            <div className="team-item">
              <div className="row g-0 bg-light rounded overflow-hidden">
                <div className="col-12 col-sm-5 h-100">
                  <img
                    className="img-fluid h-100"
                    src={TeamImg1}
                    style={{ objectFit: "cover" }}
                    alt="Img"
                  />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Doctor Name</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">
                      Cardiology Specialist
                    </h6>
                    <p className="m-0">
                      Dolor lorem eos dolor duo eirmod sea. Dolor sit magna
                      rebum clita rebum dolor
                    </p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="row g-0 bg-light rounded overflow-hidden">
                <div className="col-12 col-sm-5 h-100">
                  <img
                    className="img-fluid h-100"
                    src={TeamImg2}
                    style={{ objectFit: "cover" }}
                    alt="Img"
                  />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Doctor Name</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">
                      Cardiology Specialist
                    </h6>
                    <p className="m-0">
                      Dolor lorem eos dolor duo eirmod sea. Dolor sit magna
                      rebum clita rebum dolor
                    </p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-item">
              <div className="row g-0 bg-light rounded overflow-hidden">
                <div className="col-12 col-sm-5 h-100">
                  <img
                    className="img-fluid h-100"
                    src={TeamImg3}
                    style={{ objectFit: "cover" }}
                    alt="Img"
                  />
                </div>
                <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Doctor Name</h3>
                    <h6 className="fw-normal fst-italic text-primary mb-4">
                      Cardiology Specialist
                    </h6>
                    <p className="m-0">
                      Dolor lorem eos dolor duo eirmod sea. Dolor sit magna
                      rebum clita rebum dolor
                    </p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                      className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                      href="/"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
