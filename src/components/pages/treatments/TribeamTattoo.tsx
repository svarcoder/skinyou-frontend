import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Tribeam Tattoo.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const TribeamTattoo: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Tribeam Tattoo</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <video
                  src={ArticleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="img-fluid w-100 rounded mb-5"
                  style={{ height: "600px" }}
                />
                <h5>
                  Tribeam Tattoo Removal: Effective Tattoo Removal with
                  Precision
                </h5>
                <h5>Description:</h5>
                <p>
                  Tribeam Tattoo Removal utilizes advanced laser technology to
                  safely and effectively remove unwanted tattoos. This treatment
                  breaks down tattoo pigments, allowing them to be naturally
                  expelled by the body.
                </p>

                <h5>How It Works:</h5>
                <p>
                  The Tribeam laser emits high-energy pulses that target and
                  fragment tattoo ink particles. These smaller particles are
                  then gradually eliminated by the body’s lymphatic system.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Effective Ink Breakdown: Targets and removes various tattoo
                    colors.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Precision Treatment: Minimizes damage to surrounding skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Minimal Downtime: Quick recovery with gradual results.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Each session lasts about 30 minutes, depending on the size and
                  complexity of the tattoo. Multiple sessions are usually
                  required for complete removal, with minimal discomfort and
                  downtime.
                </p>

                <h5>Results:</h5>
                <p>
                  Tattoo fading and removal occur over several sessions, with
                  the final outcome depending on the tattoo’s size and color.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Tribeam Tattoo Removal?
                </h5>
                <p>
                  Our clinic offers specialized Tribeam Tattoo Removal
                  treatments with advanced technology, ensuring effective and
                  safe removal of unwanted tattoos.
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

export default TribeamTattoo;
