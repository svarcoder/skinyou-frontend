import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PigmentedLesion: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Pigmented Lesion</h1>
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
                  src={BlogImg1}
                  alt="img"
                  style={{ height: "600px" }}
                />

                <p>
                  Achieve a flawless, even complexion with our Pigmented Lesion
                  Removal treatment, designed to effectively reduce the
                  appearance of dark spots, sun damage, and other pigmentation
                  issues. Using advanced laser technology, this treatment
                  targets excess melanin in the skin, breaking down pigmentation
                  and promoting a clearer, more even skin tone. Whether you’re
                  dealing with age spots, sun spots, or post-inflammatory
                  hyperpigmentation, our Pigmented Lesion Removal treatment
                  offers a non-invasive solution to restore your skin’s natural
                  radiance.
                </p>

                <h5>How It Works:</h5>
                <p>
                  The laser emits light energy that is absorbed by the pigmented
                  areas of the skin. This energy breaks down the excess melanin,
                  which is then naturally eliminated by the body over time. The
                  laser targets only the pigmented areas, leaving the
                  surrounding skin unaffected.
                </p>

                <h5>What It Treats:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Age spots
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sun spots
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Freckles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Melasma
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Post-inflammatory hyperpigmentation
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Each session typically lasts about 20-30 minutes, depending on
                  the size and number of pigmented lesions being treated. The
                  laser device is passed over the affected areas, and patients
                  may experience a slight tingling sensation during the
                  procedure.
                </p>

                <h5>Results:</h5>
                <p>
                  You’ll begin to notice a reduction in pigmentation within a
                  few weeks of treatment. Multiple sessions may be required to
                  achieve optimal results, depending on the severity of the
                  pigmentation.
                </p>

                <h5>Possible Side Effects:</h5>
                <p>
                  Temporary redness, swelling, or darkening of the treated areas
                  may occur, but these side effects usually subside within a few
                  days. It’s important to protect the treated area from sun
                  exposure to prevent further pigmentation.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Pigmented Lesion Removal?
                </h5>
                <p>
                  At Skin & You Clinic, we use the latest laser technology to
                  safely and effectively treat pigmentation issues. Our
                  experienced team will customize your treatment plan to address
                  your specific skin concerns, helping you achieve a clearer,
                  more even skin tone.
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

export default PigmentedLesion;
