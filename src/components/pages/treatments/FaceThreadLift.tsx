import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Face Thread Lift.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const FaceThreadLift: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Face Thread Lift</h1>
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
                  Face Thread Lift: Non-Surgical Skin Lifting and Tightening
                </h5>
                <p>
                  The Face Thread Lift at Skin & You Clinic is a non-surgical
                  procedure designed to lift and tighten sagging skin, giving
                  you a more youthful, rejuvenated appearance without the need
                  for invasive surgery. This treatment is ideal for those
                  seeking a subtle, natural-looking lift with minimal downtime.
                </p>

                <h5>How It Works:</h5>

                <p>
                  The Face Thread Lift uses dissolvable threads made from
                  biocompatible materials that are inserted under the skin using
                  fine needles. These threads are strategically placed to lift
                  and support the skin, creating an immediate lifting effect.
                  Over time, the threads stimulate collagen production,
                  enhancing the skin’s firmness and elasticity.
                </p>

                <h5>Treatment Areas:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Face: To lift and contour sagging cheeks, jawline, and
                    eyebrows.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Neck: To reduce sagging and improve skin tightness.
                  </p>
                </p>

                <h5>The Procedure:</h5>

                <p>
                  The Face Thread Lift procedure involves the insertion of
                  threads beneath the skin through small entry points. The
                  threads are then gently pulled to lift the skin, and any
                  excess thread is trimmed away. The procedure typically takes
                  45 to 90 minutes, depending on the number of threads used and
                  the treatment area. Local anesthesia is applied to minimize
                  discomfort during the procedure.
                </p>

                <h5>Results:</h5>

                <p>
                  You will notice an immediate lifting effect, with further
                  improvements in skin firmness and texture developing over the
                  following weeks as collagen production increases. The results
                  can last from 12 to 18 months, depending on individual factors
                  and the type of threads used.
                </p>

                <h5>Possible Side Effects:</h5>

                <p>
                  Side effects are generally mild and may include temporary
                  swelling, bruising, or slight discomfort at the insertion
                  sites. These typically resolve within a few days. In rare
                  cases, patients may experience minor asymmetry or thread
                  migration, which can be corrected by your practitioner.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Face Thread Lift Treatments?
                </h5>

                <p>
                  At Skin & You Clinic, we specialize in delivering
                  natural-looking results with the Face Thread Lift. Our skilled
                  professionals are trained in the latest thread lifting
                  techniques, ensuring precise placement and optimal outcomes.
                  We take the time to understand your aesthetic goals, providing
                  personalized treatments that enhance your natural beauty while
                  maintaining a youthful, lifted appearance.
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

export default FaceThreadLift;
