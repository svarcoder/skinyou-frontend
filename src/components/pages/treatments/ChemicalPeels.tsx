import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const ChemicalPeels: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Chemical Peels</h1>
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
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Chemical Peels
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Chemical Peels Tackle
                  </p>
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

                <h5>Different Types Of Peels</h5>
                <p>
                  After determining with the doctor the level of skin
                  improvement you desire, the type of peel will be decided. Some
                  of the types are Superficial Peels – These are light peels
                  that cause some redness and possible dryness for a few days.
                  Medium and Deep Peels – These can result in dryness, swelling,
                  peeling or sometimes scabbing.
                </p>
                <p>
                  Note – Moisturizers should be applied regularly for a few days
                  with strict sun protection/avoidance. At first the new skin
                  may look pinkish but within a week’s time, it will gradually
                  blend in. Following a chemical peel, your new skin will be
                  tighter, smoother and maybe even lighter than before it.
                </p>

                <h5>Advice For Chemical Peels</h5>
                <h5>Pre Treatment</h5>
                <p>
                  Stop all applications, 2 days before the treatment is to
                  start. Use sunscreen regularly before the start of the
                  treatment. If on any kind of medication, please share all
                  details with the doctor performing the procedure.
                </p>
                <h5>On the Day of Treatment</h5>
                <p>
                  Do not wear any make-up on the day of the treatment. A peel
                  procedure can sometimes have some very short-term
                  after-effects, so don’t be alarmed if you experience redness,
                  irritation, peeling and scabbing of skin for 1-2 days after
                  the treatment.
                </p>
                <h5>Post Treatment</h5>
                <p>
                  Avoid direct sun exposure after the treatment. Use sun screen
                  regularly, SPF 30+ or as advised. Avoid saunas, steam and
                  sunbathing for 7 days after the procedure. You can wash your
                  face 6-8 hours after the procedure, but we recommend using a
                  gentle face wash.
                </p>
                <p>
                  We recommend a gap of 3-4 weeks between peels. Post the
                  procedure, remember to use a moisturizer every 6 hours for at
                  least 3 days
                </p>

                <h5>Why Skin & You Clinic for Peels Procedure?</h5>
                <p>
                  We at Skin & You Clinic conduct all types of peel with lasting
                  results. All peels are done under complete medical guidance
                  with the latest peels used with good efficacy,safety and
                  tolerability profile.
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

export default ChemicalPeels;
