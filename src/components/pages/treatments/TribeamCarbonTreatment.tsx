import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Tribeam Carbon Treatment.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const TribeamCarbonTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Tribeam Carbon Treatment</h1>
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
                  Tribeam Carbon Treatment: Deep Cleansing and Skin Rejuvenation
                </h5>
                <h5>Description:</h5>
                <p>
                  Tribeam Carbon Treatment is a non-invasive facial procedure
                  that combines laser technology with a carbon lotion to deeply
                  cleanse and rejuvenate the skin. This treatment is designed to
                  improve skin texture, tone, and clarity.
                </p>

                <h5>How It Works:</h5>
                <p>
                  A carbon lotion is applied to the skin, which absorbs into the
                  pores. The Tribeam laser then targets the carbon particles,
                  exfoliating the skin and removing impurities. This process
                  also stimulates collagen production and enhances overall skin
                  appearance.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Deep Cleansing: Removes dirt, oil, and dead skin cells.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Skin Texture: Smoothens and refines skin surface.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Rejuvenates Skin: Stimulates collagen production for a
                    youthful glow.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  The treatment takes about 30-45 minutes. After applying the
                  carbon lotion, the laser is used to target the skin. There is
                  minimal discomfort and downtime, with visible improvements
                  after a few sessions.
                </p>

                <h5>Results:</h5>
                <p>
                  Skin texture and clarity improve significantly, with a radiant
                  and smooth complexion visible after several treatments.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Tribeam Carbon Treatment?
                </h5>
                <p>
                  We offer advanced Tribeam Carbon Treatments to cleanse,
                  rejuvenate, and enhance your skin, ensuring effective results
                  and a glowing complexion.
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

export default TribeamCarbonTreatment;
