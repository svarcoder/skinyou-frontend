import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Dermapen Exosome Polynucleotide.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DermapenExosomePolynucleotide: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Dermapen Exosome Polynucleotide</h1>
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
                  Dermapen Exosome Polydeoxyribonucleotide (PDRN): Innovative
                  Skin Rejuvenation
                </h5>
                <h5>Description:</h5>
                <p>
                  Dermapen Exosome PDRN is an advanced skin treatment combining
                  microneedling with exosome and polydeoxyribonucleotide
                  technologies to enhance skin repair and regeneration.
                </p>

                <h5>How It Works:</h5>
                <p>
                  The Dermapen device creates micro-injuries in the skin, which
                  are then treated with a serum containing exosomes and PDRN.
                  These components accelerate cell regeneration and collagen
                  production.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Enhances Skin Repair: Promotes cellular repair and collagen
                    synthesis.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Texture: Smoothens fine lines and improves skin
                    texture.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Boosts Hydration: Increases skin hydration and elasticity.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  The treatment lasts around 45 minutes and involves
                  microneedling followed by the application of the specialized
                  serum. Minimal downtime is required, with most patients
                  resuming normal activities quickly.
                </p>

                <h5>Results:</h5>
                <p>
                  Improvement in skin texture and firmness is noticeable within
                  a few weeks. Optimal results appear after a series of
                  treatments.
                </p>

                <h5>Why Choose Skin & You Clinic for Dermapen Exosome PDRN?</h5>
                <p>
                  Our clinic combines advanced technology and expert care to
                  deliver effective skin rejuvenation treatments tailored to
                  your needs.
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

export default DermapenExosomePolynucleotide;
