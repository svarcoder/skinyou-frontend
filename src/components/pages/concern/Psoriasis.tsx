import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Psoriasis: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Psoriasis</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>ABOUT PSORIASIS</h5>
                <p>
                  Psoriasis is a skin condition characterized by inflamed, red,
                  raised areas that often develop on skin with silvery scales.
                  Psoriasis is a persistent, long-lasting or chronic disease
                  with periods of improvement and exacerbation.
                </p>

                <h5>OCCURRENCE</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Generally seen between 20 to 50 years of age.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Often associated with a positive family history of
                    Psoriasis.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It can affect any area of the body, the most common being,
                    the scalp, elbows, knees, back, nails, palms and soles.
                  </p>
                </p>

                <h5>CAUSES</h5>
                <p>
                  The exact cause of psoriasis is still unknown. It affects the
                  life cycle of skin cells. Psoriasis causes cells to build up
                  rapidly on the surface of the skin resulting in abnormal
                  fast-growing and shedding of skin cells. Psoriasis is not
                  contagious. Thus you cannot get psoriasis by swimming in the
                  same pool or by eating from the same plate.
                </p>

                <h5>COMMON TRIGGERS</h5>
                <p>
                  Psoriasis typically starts or worsens because of a trigger
                  that you may be able to identify and avoid. Some of them
                  include
                </p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Infections, such as sore throat infection
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Injury to the skin, such as a cut or scrape, bug bite, along
                    the line of scratching or rubbing
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stress
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Cold weather
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Smoking
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Heavy alcohol consumption
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Certain medications – including lithium, which is prescribed
                    for bipolar disorder; high blood pressure medications such
                    as beta blockers; anti-malarial drugs and iodides.
                  </p>
                </p>

                <h5>SYMPTOMS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    itching is a reasonably common symptom especially in scalp
                    and anogenital area.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    symptoms of psoriasis. However, these could vary depending
                    on the form and severity of the disease.
                  </p>
                </p>

                <p>
                  Shedding of scales, bony joint pains and swelling if
                  associated with psoriatic arthritis, nail
                  changes-discoloration, loss of nail plate, sudden exacerbation
                  of lesions involving whole body (condition known as
                  erythroderma)
                </p>
                <p>
                  Psoriasis can be seen anywhere over body, more commonly over
                  elbows, knees, trunk, arms, legs and scalp.
                </p>

                <p>
                  Sometimes, it can be seen along various body folds, such as
                  below breats, armpits, groin and around genitals
                </p>

                <p>
                  Psoriasis can affect fingernails and toenails in 25% of cases-
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pitting of nail plate and abnormal nail growth.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Discolouration and yellow-brown spots under the nail plate.
                  </p>
                </p>

                <h5>DIAGNOSIS</h5>
                <p>
                  With the development of silvery shiny scales, the physician
                  can usually diagnose psoriasis with a medical examination of
                  the nails and skin. A skin biopsy also helps in the
                  confirmation of the diagnosis.
                </p>

                <h5>TREATMENT AT SKIN AND YOU CLINIC FOR PSORIASIS ?</h5>
                <p>
                  Specific treatment for psoriasis will be determined by your
                  physician based on Your age, overall health and medical
                  history and Severity of the condition At the present time,
                  there is no cure for psoriasis. Thus, the goal of treatment is
                  to reduce inflammation and slow down the rapid growth and
                  shedding of skin cells.
                </p>

                <h5>OINTMENTS AND CREAMS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Moisturisers reduce itching and scaling and can help combat
                    the dryness.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Vitamin D cream slows down the growth of skin cells.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Creams containing salicylic acid or coal tar promote
                    sloughing of dead skin cells and reduce scaling, itching and
                    inflammation
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Topical retinoids, like acitretin, normalize DNA activity in
                    the skin cells and decrease inflammation
                  </p>
                </p>

                <p>
                  Cortisone (Steroid containing) creams slow skin cell turnover,
                  reduce inflammation and relieve associated itching. They
                  should strictly be used under the advice of a dermatologist as
                  they have associate adverse effects.
                </p>
                <p>
                  Light therapy (Phototherapy) – This involves exposing your
                  skin to controlled amounts of the artificial UV-A or UV-B
                  light. It slows skin cell turnover and reduces scaling and
                  inflammation.
                </p>

                <p>
                  Oral medications – In case of severe psoriasis or the
                  resistant types, the dermatologist may prescribe oral or
                  injectable drugs, such as methotrexate, cyclosporine,
                  oralretinoid, etc.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR PSORIASIS?</h5>
                <p>
                  We, at Skin and You Clinic, aim at controlling your disease
                  progression and to make you aware of all the factors in your
                  routine life which could predispose for recurrences. Through
                  proper counselling we suggest individualised dietary and
                  lifestyle changes so it is easier to incorporate in your daily
                  life and have a long term control of your condition.
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

export default Psoriasis;
