import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const ClearLiftPhotoFacial: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Clear Lift Photo Facial</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  {" "}
                  Rejuvenate your skin without the need for invasive surgery
                  with Clearlift, a revolutionary laser treatment often dubbed
                  the 'lunchtime facelift.' Clearlift works beneath the surface
                  of your skin, stimulating collagen production and reducing the
                  appearance of fine lines and wrinkles. This quick, virtually
                  painless procedure offers visible results without downtime,
                  making it perfect for those with busy lifestyles.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Clearlift uses fractional laser technology to deliver precise
                  energy beneath the skin’s surface. This energy stimulates the
                  production of collagen and elastin, essential proteins that
                  keep your skin firm and youthful. By working below the
                  surface, Clearlift helps to reduce fine lines, wrinkles, and
                  other signs of aging while leaving the outer layer of skin
                  intact.
                </p>

                <h5>What It Treats:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fine lines and wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sagging skin
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Uneven skin tone and texture
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dark circles under the eyes
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sun-damaged skin
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  A handheld laser device is gently passed over the skin,
                  targeting specific areas of concern. Each session typically
                  lasts 20-30 minutes, and the procedure is so gentle that it
                  can be done during your lunch break. There is no need for
                  numbing cream, and you can return to your daily activities
                  immediately after treatment.
                </p>

                <h5>Results:</h5>
                <p>
                  Results are often noticeable within a few weeks, as your skin
                  begins to produce more collagen and elastin. Over time, you’ll
                  see a reduction in fine lines, a smoother texture, and an
                  overall more youthful appearance.
                </p>

                <h5>Possible Side Effects:</h5>
                <p>
                  Clearlift is known for its minimal side effects, which may
                  include slight redness or a mild tingling sensation
                  immediately after treatment. These effects typically subside
                  within a few hours.
                </p>

                <h5>Why Choose Clearlift at Skin & You Clinic?</h5>
                <p>
                  At Skin & You Clinic, we offer Clearlift as a non-invasive
                  alternative to traditional facelifts, providing our patients
                  with a safe and effective way to rejuvenate their skin. Our
                  experienced team will customize your treatment plan to meet
                  your unique needs, helping you achieve a naturally youthful
                  appearance.
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

export default ClearLiftPhotoFacial;
