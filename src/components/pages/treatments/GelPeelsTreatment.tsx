import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const GelPeelsTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Gel Peels</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>Some Skin Facts</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It is largest organ in the body.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Made up of millions of cells that protect us from external
                    environmental factors.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Everyday thousands of cells die flake off and are replaced
                    by new cells from beneath the skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    As we age, this process begins to slow down and the skin
                    begins to look dull, dark and blotchy. Fine lines and other
                    signs of sun damage also start appearing.
                  </p>
                </p>

                <h5>Chemical Peels Tackle</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fine lines and Wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Uneven pigmentation
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Shallow acne scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sun damaged scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Age spots
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Freckling
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dull, tired and neglected skin
                  </p>
                </p>

                <h5>About Chemical Peeling/Skin Rejuvenation</h5>

                <p>
                  This simple technique involves a solution applied to the skin
                  to remove dead skin cells and stimulate the production of new
                  skin cells. It tightens the skin, reduces wrinkling and
                  restores a more youthful appearance.
                </p>
                <h5>Different Types Of Peels </h5>
                <p>
                  After determining with the doctor the level of skin
                  improvement you desire, the type of peel will be decided. Some
                  of the types are
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Superficial Peels – These are light peels that cause some
                    redness and possible dryness for a few days.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Medium and Deep Peels – These can result in dryness,
                    swelling, peeling or sometimes scabbing.
                  </p>
                </p>

                <p>
                  Note – Moisturisers should to be applied regularly for a few
                  days with strict sun protection/avoidance. At first the new
                  skin, may look pinkish but within a week’s time, it will
                  gradually blend in. Following a chemical peel, your new skin
                  will be tighter, smoother and maybe even lighter than before
                  it.
                </p>

                <h5>Advice For Chemical Peels</h5>

                <h5>Pre Treatment</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stop all applications, 2 days before the treatment is to
                    start.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Use sunscreen regularly before the start of the treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    If on any kind of medication, please share all details with
                    the doctor performing the procedure.
                  </p>
                </p>

                <h5>On the Day of Treatment</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Do not wear any make-up on the day of the treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    peel procedure can sometimes have some very short-term
                    after-effects, so don’t be alarmed if you experience
                    redness, irritation, peeling and scabbing of skin for 1-2
                    days after the treatment.
                  </p>
                </p>

                <h5>Post Treatment</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid direct sun exposure after the treatment. Use sun
                    screen regularly, SPF 30+ or as advised.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid saunas, steam and sunbathing for 7 days after the
                    procedure.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    You can wash your face 6-8 hours after the procedure, but we
                    recommend using a gentle face wash.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    We recommend a gap of 3-4 weeks between peels.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Post the procedure, remember to use a moisturizer every 6
                    hours for at least 3 days
                  </p>
                </p>

                <h5>Why Skin & You Clinic for Peels Procedure? </h5>
                <p>
                  We at Skin & You Clinic conduct all type of peel with lasting
                  results. All peels are done under complete medical guidance
                  with the latest peels used with good efficacy,safety and
                  toleribility profile.{" "}
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

export default GelPeelsTreatment;
