import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SopranoIce: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Soprano Ice</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Experience smooth, hair-free skin with Soprano ICE, the most
                  advanced and effective laser hair removal technology available
                  today. Renowned for its virtually painless process, Soprano
                  ICE combines cutting-edge technology with comfort, making it
                  the preferred choice for permanent hair reduction. Whether
                  you’re targeting small areas like the upper lip or larger
                  areas like the legs or back, Soprano ICE offers a safe, fast,
                  and effective solution for all skin types and tones.
                </p>
                <p>
                  How It Works:Soprano ICE uses a unique, gradual heating method
                  that safely and effectively damages hair follicles while
                  preventing injury to the surrounding skin. The laser emits
                  gentle pulses of energy that heat the hair follicles,
                  gradually destroying them and preventing future hair growth.
                  The In-Motion™ technology, combined with a cooling system,
                  ensures that the skin remains cool and comfortable throughout
                  the treatment, reducing the risk of burns and making the
                  procedure virtually pain-free.
                </p>

                <h5>Treatment Areas:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Face (upper lip, chin, cheeks)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Underarms
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Legs
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Bikini area
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Back and chest
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Each session with Soprano ICE typically lasts 15-60 minutes,
                  depending on the size of the area being treated. The procedure
                  involves moving the laser handpiece in a sweeping motion over
                  the treatment area, ensuring full coverage. Thanks to the
                  cooling system and the In-Motion™ technology, the treatment is
                  comfortable and quick, with no downtime required.
                </p>

                <h5>Results:</h5>
                <p>
                  You will begin to notice a reduction in hair growth after just
                  a few sessions, with optimal results achieved after a full
                  course of treatments (usually 6-8 sessions). Over time,
                  treated areas will be smooth and hair-free, with minimal need
                  for further maintenance.
                </p>

                <h5>Possible Side Effects:</h5>
                <p>
                  Mild redness or slight swelling may occur in the treated
                  areas, but these side effects typically resolve within a few
                  hours. Soprano ICE is known for its safety and minimal
                  discomfort, making it suitable for even sensitive skin types.
                </p>

                <h5>Why Choose Soprano ICE at Skin & You Clinic?</h5>
                <p>
                  At Skin & You Clinic, we pride ourselves on offering the most
                  advanced and effective treatments for our clients. Soprano ICE
                  stands out as the gold standard in laser hair removal,
                  providing long-lasting results with minimal discomfort. Our
                  experienced professionals ensure that each session is tailored
                  to your unique needs, delivering smooth, hair-free skin with
                  the highest level of care and expertise.
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

export default SopranoIce;
