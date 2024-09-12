import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const BacterialInfection: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Bacterial Infection</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>
                  {" "}
                  BACTERIAL INFECTIONS OF THE SKIN CAN BE CATEGORIZED AS PRIMARY
                  OR SECONDARY:
                </h5>
                <p>
                  Primary bacterial infection arises over normal looking skin.
                </p>
                <p>
                  While, secondary bacterial infections arise over underlying
                  skin disorder such over eczemas, burns etc.
                </p>
                <h5>
                  SOME OF THE MOST COMMON ENCOUNTERED BACTERIAL SKIN INFECTIONS
                  ARE:
                </h5>
                <h5>IMPETIGO:</h5>
                <p>
                  Superficial bacterial infection caused by certain bacteria’s.
                </p>

                <p>
                  Young children and infants are commonly affected. They appear
                  as pus filled lesion which burst open leading to yellow-brown
                  crust with “stuck-on” appearance.
                </p>

                <h5>Sites</h5>

                <p>
                  Face (around nose and mouth most common), around the anus,
                  trunk, scalp, extremities.
                </p>

                <h5>COMMON BOIL:</h5>
                <p>Commonest bacterial skin infection</p>
                <p>
                  Predisposing factors could be – poor hygiene, occlusive
                  clothing, excessive sweating, and diabetes mellitus.
                </p>
                <p>
                  They appear as tender firm reddish swelling with / without
                  central point through which hair emerges. It is from central
                  part pus is discharged later on, healing with scarring.
                </p>

                <p>Sites: buttocks, axillae, thighs, face more commonly.</p>

                <h5>TREATMENT AT SKIN AND YOU CLINIC:</h5>
                <h5>FIRST STEP IS REMOVAL OF CRUSTS:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For thin crusts, gentle washing by Luke warm water and soap
                    can be taken.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For thick crusts medicated compresses can be done for few
                    minutes daily till it comes off.
                  </p>
                </p>

                <h5>SECOND STEP IS ELIMINATING PREDISPOSING FACTORS:</h5>
                <p>
                  Poor hygiene, malnutrition, uncontrolled diabetes, tendency to
                  sit excessively, tight clothing, obesity has to be corrected.
                </p>

                <p>
                  Underlying skin condition has to be addressed simultaneously
                  or subsequently.
                </p>

                <h5>TOPICAL ANTIBIOTIC APPLICATION:</h5>
                <p>Medications commonly prescribedare</p>

                <p>
                  Topical Antibiotics– and are available as cream, ointment and
                  lotion, dusting powder formulations. It has to be applied over
                  the lesion, around the lesion and continued for few days.
                </p>

                <p>
                  Some practitioners also advise to apply these antibiotics over
                  point of entry of bacteria in the body at nose, around mouth,
                  perianal, fingertips, etc. so as to decrease the bacterial
                  load over body.
                </p>

                <p>
                  SystemicAntibiotics: indications for oral drugs are extensive
                  infection, recurrent infection, associated fever, poor
                  compliance for topical therapy. Commonly prescribed
                  antibiotics are oral penicillin, erythromycin, cephalexin,
                  amoxicillin with clavulanic acid, etc.
                </p>

                <p>
                  It is advisable to get antibiotic sensitivity tests done in
                  cases of recurrent infection.
                </p>

                <h5>
                  WHY SKIN & YOU CLINIC FOR BACTERIAL INFECTION TREATMENT?
                </h5>
                <p>
                  We at Skin & You Clinic take utmost care with sensitivity and
                  testing done to rule out bacterial sensitivity, so that cure
                  is achievable as early as possible.
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

export default BacterialInfection;
