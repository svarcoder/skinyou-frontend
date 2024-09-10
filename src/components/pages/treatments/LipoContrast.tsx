import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LipoContrast: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Lipo Contrast (Lower Level Laser Light)</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>
                  Lipo Contrast (Lower Level Laser Light): Targeted Fat Loss and
                  Inch Reduction
                </h5>
                <h5>Description:</h5>
                <p>
                  Lipo Contrast uses lower-level laser light technology to
                  target and reduce localized fat deposits, promoting inch loss
                  and body contouring without invasive surgery. This
                  non-invasive treatment is designed to help you achieve a
                  slimmer and more toned appearance.
                </p>

                <h5>How It Works:</h5>
                <p>
                  The lower-level laser light penetrates the skin to target fat
                  cells, causing them to release their stored fatty acids. These
                  fatty acids are then naturally metabolized by the body. This
                  process helps reduce fat in specific areas and improves body
                  contours.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Localized Fat Reduction: Targets stubborn fat deposits for
                    inch loss.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Non-Invasive: No need for surgery or downtime.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Quick and Convenient: Treatment sessions are relatively
                    short and require minimal recovery.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Each session lasts around 30-45 minutes and involves the
                  application of laser pads to targeted areas. You can resume
                  normal activities immediately, with visible results typically
                  appearing after a series of treatments.
                </p>

                <h5>Results:</h5>
                <p>
                  Inch loss and body contouring effects are usually noticeable
                  after several sessions, with optimal results achieved with
                  consistent treatments.
                </p>

                <h5>Why Choose Skin & You Clinic for Lipo Contrast?</h5>
                <p>
                  Our clinic uses advanced Lipo Contrast technology to offer
                  effective fat reduction treatments tailored to your specific
                  needs, helping you achieve your body contouring goals.
                </p>
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

export default LipoContrast;
