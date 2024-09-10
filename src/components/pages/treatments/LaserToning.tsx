import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LaserToning: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Laser Toning</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>Laser Toning: Enhanced Skin Tone and Texture</h5>
                <h5>Description:</h5>
                <p>
                  Laser Toning is a non-invasive treatment designed to improve
                  skin tone and texture by using laser technology. This
                  procedure targets pigmentation issues, uneven skin tone, and
                  fine lines to achieve a more uniform and youthful appearance.
                </p>

                <h5>How It Works:</h5>
                <p>
                  The laser delivers targeted energy to the skin, promoting the
                  breakdown of pigmentation and stimulating collagen production.
                  This process helps to even out skin tone and reduce signs of
                  aging.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Even Skin Tone: Reduces pigmentation and discoloration.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Texture: Smoothens skin and reduces fine lines.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Non-Surgical: Minimal discomfort and downtime.
                  </p>
                </p>

                <h5>The Procedure: </h5>
                <p>
                  Sessions last about 30 minutes, with a series of treatments
                  typically recommended. Most patients experience mild warmth
                  and minimal downtime. Results: Improved skin tone and texture
                  become evident after a few sessions, with continued
                  enhancement over time.
                </p>

                <h5>Why Choose Skin & You Clinic for Laser Toning? </h5>
                <p>
                  Our clinic uses advanced Laser Toning technology to provide
                  effective skin treatments, helping you achieve a clearer, more
                  even complexion.
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

export default LaserToning;
