import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const BodyFaceTightening: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Body & Face Tightening</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h3 className="mb-4">Face tightening</h3>

                <p>
                  This facial gives an instant face and neck lift. A new skin
                  tightening technology combined with a mix of a cell-renewing
                  serum and enzymes (depending on individual skin types), makes
                  this facial extremely effective in renewing the skin and
                  giving it a glow.
                </p>

                <h5>The Process</h5>
                <p>
                  Double cleansing is used to exfoliate and remove dull dead
                  skin, collagen-lifting serum smoothes and softens lines of
                  aging while an eye-contour gel plumps up fine lines around the
                  eyes.
                </p>

                <p>
                  Advanced line repairing serum can be used to further plump up
                  facial lines and wrinkles with a Vitamin C and seaweed extract
                  mask containing collagen. The treatment is safe, non-invasive
                  with no side effects and no downtime or any redness or
                  swelling.
                </p>

                <h5>The Results</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The facial helps attain firmer and younger looking skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It smoothes lines and wrinkles.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It lightens dark circles and eliminates puffy eyes.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It helps enhance skin elasticity and reduce sagging.
                  </p>
                </p>

                <h5>Why Skin & You Clinic for Tightening Facial Treatment ?</h5>
                <p>
                  We at Skin & You Clinic use a combination of technology and
                  expertise to lift and tighten the skin. The procedure is
                  simple with no downtime and lasting result.
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

export default BodyFaceTightening;
