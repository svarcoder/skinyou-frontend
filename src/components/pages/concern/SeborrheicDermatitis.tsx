import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SeborrheicDermatitis: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Seborrheic Dermatitis</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>ABOUT SEBORRHEIC DERMATITIS</h5>
                <p>
                  Seborrheic dermatitis is a common skin disorder characterized
                  by itchy, red skin covered with white or yellow greasy scales.
                </p>

                <h5>OCCURANCE</h5>
                <p>
                  The areas rich in sebaceous glands are more commonly affected
                  by this condition like the scalp, along the hairline, behind
                  the ears, in the ear canal, on the eyebrows, around the nose,
                  and/or on the chest.
                </p>
                <p>
                  In infants, the condition is also called ""cradle cap,""
                  because of its characteristic scaly appearance on the scalp.
                  However, it can also occur in the diaper area. Seborrheic
                  dermatitis in this age group usually clears up on its own
                  within the first year.
                </p>
                <p>
                  In adults, Seborrheic dermatitis is often referred to as
                  dandruff. The condition is often intermittent
                </p>
                <h5>SYMPTOMS</h5>
                <p>In adults and adolescents, the signs and symptoms include</p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Itchy scalp
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dry or greasy scales on the scalp
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    yellow or red scaly rash along the hairline, behind the
                    ears, in the ear canal, on the eyebrows, around the nose,
                    and/or on the chest.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Red, greasy skin covered with flaky white or yellow scales
                    on other areas of your body, including your chest, armpits,
                    and the area where your thigh meets the groin or the male
                    scrotum.
                  </p>
                </p>

                <h5>CAUSES</h5>
                <p>
                  The exact cause of Seborrheic dermatitis is not known.
                  Multiple factors can contribute to this condition
                </p>
                <p>
                  {" "}
                  A fungus called 'Malasezzia' – It is a said to play an
                  important role in causing this condition. The response to
                  topical antifungals is indicative of its causative nature.
                  Neurological diseases – Seborrheic dermatitis may occur in
                  patients with Parkinson's Disease and facial paralysis.
                  Certain neuroleptic drugs can also cause it. Stress and
                  fatigue – Stressful situations may help trigger an episode or
                  make it worse through mechanisms that aren't yet understood.
                </p>

                <h5>DIAGNOSIS</h5>
                <p>
                  A complete medical history and physical examination helps in
                  the diagnosis of Seborrheic dermatitis.
                </p>

                <h5>TREATMENT</h5>
                <p>
                  Specific treatment for Seborrheic dermatitis will be
                  determined by your physician. But though the condition
                  responds to treatment, it may recur.
                </p>

                <p>
                  Anti-fungal topical medications – These agents seem to work by
                  reducing numbers of Malasezzia yeast in affected areas of the
                  body. Some of these agents are ketoconazole, selenium
                  sulphide, zinc pyrithone, ciclopirox and can be found in
                  shampoos, creams or lotions.
                </p>
                <p>
                  Oral anti-fungals – These may be indicated in a severe and
                  widespread condition.
                </p>
                <p>
                  Corticosteroid cream or lotion – Low potency to mid-potency
                  topical steroids can be used to control the initial acute
                  episodes. These agents help symptoms by reducing inflammation,
                  itching and discomfort. But they should always be used under
                  the strict guidance of a dermatologist due to the associated
                  adverse effect.
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

export default SeborrheicDermatitis;
