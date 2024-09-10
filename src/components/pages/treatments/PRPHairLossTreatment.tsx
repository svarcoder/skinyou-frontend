import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PRPHairLossTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>PRP for Hair Loss Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Most adult’s loose about 75 to 100 hair from their scalp
                  everyday where some hairs are in the falling phase (telogen),
                  and some in the growth phase (anagen).
                </p>

                <p>
                  As long as the process remains balanced the number of hair on
                  the scalp remains constant. Any disturbance in this process
                  results in hair loss.
                </p>

                <p>
                  Other factors for hair loss can be metabolic imbalances,
                  illness, stress, nutritional deficiency, pollution and
                  genetics.
                </p>

                <h5>WHAT IS THIS METHOD OF HAIR REGROWTH?</h5>
                <p>
                  It is called platelet rich plasma therapy procedure (PRP).
                </p>

                <p>
                  PRP is a new form of regenerative medicine wherein the
                  patients own blood is utilized and the concentrate helps in
                  hair regrowth.
                </p>

                <h5>HOW DOES PRP WORK?</h5>
                <p>
                  The concentrated platelets in PRP contain tremendous amount of
                  bioactive proteins, which include growth factors. These growth
                  factors initiate tissue repair and have shown to have a
                  positive effect on hair loss.
                </p>

                <h5>IS PRP NEW?</h5>
                <p>
                  The technology has been used for years in surgical application
                  and wound repair. The use for skin and hair has been widely
                  researched and the procedure has very good results.
                </p>

                <h5>WHAT ARE THE CONDITIONS FOR WHICH PRP CAN BE USED?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Frontal hair thinning.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Androgenetic Alopecia
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Alopecia Areata
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hair loss
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Common baldness
                  </p>
                </p>

                <h5>WHAT ARE THE SIDE EFFECTS OF PRP?</h5>
                <p>
                  PRP is relatively painless and could have minor side effects
                  like redness, swelling and possible bruising. These minor side
                  effects resolve quickly. The treatment has no risk of allergy
                  or side effects, as your own blood and blood products are
                  used.
                </p>

                <h5>WHEN CAN I START EXPECTING RESULTS?</h5>
                <p>
                  Optimum results require approximately 3 sessions performed 2
                  to 4 weeks apart.
                </p>

                <p>
                  Combining platelet rich plasma therapy with natural hair
                  regrowth program will optimize your hair rejuvenation results.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR PRP FOR HAIR LOSS?</h5>
                <p>
                  We at Skin & You Clinic have been well trained on performing
                  the treatment. The procedure is safe ,effective with no
                  downtime and visible results.
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

export default PRPHairLossTreatment;
