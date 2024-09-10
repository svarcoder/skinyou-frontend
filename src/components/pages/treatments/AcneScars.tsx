import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AcneScars: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Acne Scars</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5> Acne Scar Reduction: Regain Smooth and Clear Skin</h5>

                <h5>
                  Acne scars can be a lasting reminder of past breakouts,
                  affecting your confidence and appearance. At Skin & You
                  Clinic, we offer effective acne scar reduction treatments to
                  help smooth out your skin and restore its natural texture.
                </h5>

                <h5>How It Works:</h5>

                <p>
                  Acne scar reduction treatments may include laser therapy,
                  microneedling, or chemical peels. These methods work by
                  stimulating the skin’s natural healing processes, promoting
                  collagen production, and resurfacing the skin to reduce the
                  appearance of scars
                </p>

                <h5>Benefits:</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Smooths out uneven skin texture caused by acne scars.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Reduces the visibility of pitted or depressed scars.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves overall skin tone and clarity.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Minimally invasive with little to no downtime.
                  </p>
                </p>

                <h5>The Procedure:</h5>

                <p>
                  The procedure varies based on the chosen treatment. Laser
                  therapy and microneedling involve the use of specialized
                  devices to target the scarred areas, while chemical peels use
                  a solution to exfoliate the top layer of skin. Each session
                  typically lasts 30-60 minutes, and a series of treatments may
                  be required for optimal results.The procedure are combined
                  with growth factor injections and Exosomes or polynucleotides.
                </p>

                <h5>Results:</h5>

                <p>
                  You will begin to see improvements in skin texture and scar
                  visibility within a few weeks, with continued enhancement as
                  the skin heals and regenerates. The results are long-lasting,
                  with many patients experiencing significant improvement in the
                  appearance of their acne scars.
                </p>

                <h5>Why Choose Skin & You Clinic for Acne Scar Reduction?</h5>

                <p>
                  At Skin & You Clinic, we offer personalized acne scar
                  reduction treatments using the latest technologies and
                  techniques. Our experienced team will work with you to develop
                  a treatment plan that addresses your specific skin concerns,
                  helping you achieve smoother, clearer skin.
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

export default AcneScars;
