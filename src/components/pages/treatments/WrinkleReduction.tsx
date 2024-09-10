import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const WrinkleReduction: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Wrinkle Reduction</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h3 className="mb-4">
                  Wrinkle Reduction: Smooth and Youthful Skin
                </h3>

                <p>Description:</p>
                <p>
                  Wrinkle Reduction treatments target and minimize the
                  appearance of fine lines and wrinkles, helping you achieve
                  smoother, more youthful skin. We use advanced technologies to
                  rejuvenate and restore skin elasticity.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Treatment options include laser therapy, radiofrequency, and
                  dermal fillers that stimulate collagen production and enhance
                  skin firmness. These methods effectively reduce wrinkles and
                  improve overall skin texture.
                </p>

                <h5>Benefits:</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Reduces Wrinkles: Smoothens fine lines and creases.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Enhances Skin Elasticity: Improves skin firmness and
                    texture.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Non-Surgical: Minimal discomfort and downtime.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Sessions last about 30-60 minutes, depending on the treatment.
                  Results become visible after several sessions, with continued
                  improvement over time.
                </p>

                <h5>Results:</h5>
                <p>
                  Smoother skin and reduced wrinkles are noticeable after a
                  series of treatments, with long-lasting effects.
                </p>

                <h5>Why Choose Skin & You Clinic for Wrinkle Reduction?</h5>
                <p>
                  Our clinic offers advanced wrinkle reduction treatments with
                  proven technology, helping you achieve a youthful and
                  rejuvenated appearance.
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

export default WrinkleReduction;
