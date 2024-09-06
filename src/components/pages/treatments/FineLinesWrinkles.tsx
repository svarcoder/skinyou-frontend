import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const FineLinesWrinkles: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Fine Lines & Wrinkles</h1>
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
                  Age gracefully with our Fine Lines & Wrinkles treatment,
                  designed to smooth out the signs of aging and restore a
                  youthful glow to your skin. This comprehensive treatment
                  combines advanced laser technology with skin-resurfacing
                  techniques to reduce the appearance of wrinkles and promote
                  collagen production. Whether you’re dealing with crow’s feet,
                  forehead lines, or other age-related skin concerns, this
                  treatment offers a non-invasive solution to help you look as
                  young as you feel.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Our Fine Lines & Wrinkles treatment uses a combination of
                  laser therapy and skin resurfacing to target the underlying
                  causes of aging skin. The laser stimulates collagen
                  production, which helps to plump up the skin and reduce the
                  depth of wrinkles. At the same time, skin resurfacing removes
                  dead skin cells and promotes the growth of new, healthy skin.
                </p>

                <h5>What It Treats:</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Crow’s feet around the eyes
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Forehead lines
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Frown lines between the eyebrows
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Smile lines around the mouth
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sagging skin
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Depending on your skin’s needs, the treatment may involve a
                  series of laser sessions combined with skin resurfacing. Each
                  session lasts between 30 minutes to an hour, and there’s
                  minimal downtime, so you can quickly return to your daily
                  routine.
                </p>

                <h5>Results:</h5>
                <p>
                  You’ll start to see improvements in the texture and tone of
                  your skin within a few weeks of treatment, with continued
                  enhancement as your skin produces more collagen. Over time,
                  your fine lines will diminish, leaving you with a smoother,
                  more youthful appearance.
                </p>

                <h5>Possible Side Effects:</h5>
                <p>
                  Mild redness or swelling may occur immediately after
                  treatment, but these side effects usually resolve within a few
                  hours to a couple of days.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Fine Lines & Wrinkles
                  Treatment?
                </h5>
                <p>
                  At Skin & You Clinic, we tailor our Fine Lines & Wrinkles
                  treatment to your specific skin type and aging concerns. Our
                  expert team uses the latest technology to deliver safe and
                  effective results, helping you turn back the clock on aging.
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

export default FineLinesWrinkles;
