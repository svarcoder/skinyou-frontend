import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const WhiteningFacialTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Whitening Facial</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  This is perfect for lightening the skin before a special
                  occasion. The extract used for this facial has a regenerating
                  effect that improves skin texture, firmness and tone or any
                  other sun damage.
                </p>

                <h5>The Process</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The whitening cream and masks with licorice, Vitamin A and
                    C, seaweed extract naturally lighten and brighten the skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    gentle but thorough exfoliation with vitamin-rich
                    exfoliators accelerates the cells’ growth and helps in
                    restoring the skin’s lost radiance and brightness, often due
                    to pollution, stress, late nights, smoking or alcohol use.
                  </p>
                </p>

                <h5>The Results</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The facial rejuvenates deeper layers of the skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It lightens freckles, pigmentation, dark spots and reduces
                    melanin (skin pigment) production.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It brightens skin tone, reduces dullness and other damage
                    due to the sun, and promotes an even-toned complexion.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It makes your skin feel softer, more supple and
                    well-hydrated.
                  </p>
                </p>

                <h5>Why Skin & You Clinic for Whitening Treatment?</h5>
                <p>
                  The whitening procedure performed at the clinic is a simple,
                  effective, safe treatment. It is a combination of different
                  procedures performed at a time to give an everlasting result.
                  All treatments are conducted under strict medical guidance.{" "}
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

export default WhiteningFacialTreatment;
