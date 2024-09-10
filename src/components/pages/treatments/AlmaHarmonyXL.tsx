import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AlmaHarmonyXL: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Alma Harmony XL</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Rediscover youthful, radiant skin with Alma Harmony XL, an
                  all-in-one laser treatment designed to address multiple skin
                  concerns. Whether you’re dealing with pigmentation issues, sun
                  damage, or signs of aging like fine lines and wrinkles, this
                  advanced laser technology offers a comprehensive solution.
                  Alma Harmony XL uses targeted laser wavelengths to treat
                  various skin imperfections, promoting natural healing and
                  collagen production. The result? A smoother, clearer, and more
                  youthful complexion.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Alma Harmony XL works by delivering precise laser energy to
                  the deeper layers of the skin, stimulating the body’s natural
                  healing processes. This promotes the breakdown of damaged skin
                  cells and encourages the production of new, healthy cells.
                  Over time, this process helps to even out skin tone, reduce
                  pigmentation, and smooth out fine lines.
                </p>

                <h5>What It Treats:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pigmentation issues like age spots and sun damage
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fine lines and wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Uneven skin tone
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Redness and vascular lesions,tattoo removal.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  The treatment is non-invasive and generally well-tolerated. A
                  handheld device delivers the laser energy to the targeted
                  areas, and most sessions take less than an hour. Depending on
                  your skin’s needs, multiple sessions may be recommended for
                  optimal results.
                </p>

                <h5>Results:</h5>
                <p>
                  You can expect to see an improvement in your skin’s texture
                  and tone within a few weeks of treatment, with continued
                  improvement over time as your skin heals and regenerates.
                </p>

                <h5>Possible Side Effects:</h5>
                <p>
                  Side effects are generally mild and temporary, including
                  redness, swelling, or a slight tingling sensation immediately
                  after the treatment. These typically subside within a few
                  hours.
                </p>

                <h5>Why Choose Alma Harmony XL at Skin & You Clinic?</h5>
                <p>
                  At Skin & You Clinic, our skilled professionals use the latest
                  Alma Harmony XL technology to deliver customized treatments
                  that target your unique skin concerns. Experience a
                  significant transformation with minimal downtime, leaving you
                  with a complexion that truly glows.
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

export default AlmaHarmonyXL;
