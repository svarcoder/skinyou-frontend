import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AccentUltraSkinBodyContouring: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Accent Ultra Skin Body Contouring</h1>
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

                <h5>
                  An alternative to Liposuction and other invasive surgeries
                </h5>

                <p>
                  Skin tightening,inch loss and lifting of body require
                  appropriate products, equipment and technical expertise. For
                  its success, the V shape radiofrequency skin tightening is a
                  solution.
                </p>

                <h5>ACCENT ULTRA CLINICAL BENEFITS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Tightens and lifts skin, reduces inches
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pain-free
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    No downtime following treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Year-round procedure
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Suitable for use on all body parts
                  </p>
                </p>

                <h5>ACCENT ULTRA CAN BE USED FOR</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Body Contouring
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin Tightening – on body
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Body Sculpting – arms abdomen thighs
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Cellulite treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Inch loss
                  </p>
                </p>

                <h5>ACCENT ULTRA BODY CONTOURING</h5>
                <p>
                  Accent ultra body contouring is a non-invasive treatment
                  combining two technologies – ultrasound and radiofrequency.
                  Ultrasound (or shear wave technology) acts on fat cells while
                  radiofrequency helps in removal of the fat and tightening the
                  skin.
                </p>

                <p>
                  Safe and painless, V Shape is an alternative treatment to
                  surgical procedures for skin tightening and body contouring.
                </p>

                <h5>QUICK FACTS ON ACCENT ULTRA BODY CONTOURING</h5>
                <p>
                  Safe & effective – it is not only the safest, but also the
                  most effective non-invasive option for body contouring. It has
                  been performed in 80 Countries and successfully treated
                  thousands of patients.
                </p>

                <p>
                  Quick visible results – You may see results immediately after
                  the first treatment, though most improvement will be noticed
                  in the days and weeks following each treatment session.
                </p>

                <p>
                  Number of treatment sessions – Generally 4-6 treatment
                  sessions are recommended.
                </p>

                <p>
                  No side effects – it is safe and effective with no side
                  effects or downtime.
                </p>

                <p>
                  Duration of each treatment session – A typical session lasts
                  20-30 minutes. As the procedure is pain-free, you won’t need
                  to spend any time preparing or recovering from the treatment.
                </p>

                <p>
                  Most body parts can be treated – the treatment can be
                  performed on almost any body part including abdomen, thighs
                  and buttocks,arms love handles
                </p>

                <p>
                  Note – Ask your practitioner if other areas of your body are
                  suitable for treatment.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR ACCENT ULTRA BODY CONTOURING?</h5>
                <p>
                  Skin & You Clinic, Mumbai, specialises in the area of
                  non-surgical tightening of skin and body. Our doctors first
                  understand your concerns and then determine treatments that
                  suit you best, by considering factors like your desired goal,
                  required downtime for recovery and tolerance to the treatment.
                  We also state realistic and achievable outcomes of the
                  treatment.
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

export default AccentUltraSkinBodyContouring;
