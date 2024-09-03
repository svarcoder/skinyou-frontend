import React from "react";
import BlogImg5 from "../../assets/blog/festive-season-offer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SingleBlog5: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary">
        <div className="container container-top">
          <div className="text-center mt-4">
            <h1>Blog Post</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={BlogImg5}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">This Festive Season</h3>
                <h5 className="mb-4">
                  Get Rejuvenated Look, Push Off Years from your Face and Look
                  Glamorous…
                </h5>

                <h5>Skin & You Clinic offers you a package including:</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Whitening Facial
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Underarm Painless Laser Hair Reduction (1 Session )
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Botox For Frown Lines
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lower Face Tightening (1 Session)
                  </p>
                </p>

                <h5>At Absolutely Unbelievable Price*…</h5>
              </div>
            </div>

            <div className="col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog5;
