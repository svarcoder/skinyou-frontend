import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LichenPlanus: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Lichen Planus</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  It is a very common skin disorder, commonly affection young
                  adults.
                </p>

                <p>
                  Both the sexes are equally affected.It can involve skin or
                  mucous membrane or both.
                </p>

                <h5>WHAT CAUSES IT?</h5>
                <p>
                  It is autoimmune in origin, but many other triggering agents
                  have been identified. Some of these are:
                </p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hepatitis C, hepatitis B
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Graft versus host disease.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Drugs such as anti malarials, beta blockers, metformin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dental metal amalgams.
                  </p>
                </p>

                <p>
                  Although the term used in cases of any triggering factor being
                  present, is lichenoid reaction.
                </p>

                <p>lichen-planus-2</p>

                <h5>WHAT ARE THE SYMPTOMS?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Itching- most common complaint could vary in intensity.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sudden eruption of lesions
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pigmentation/ discolouration over oral cavity
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Burning sensation or ulcer in mouth.
                  </p>
                </p>

                <h5>WHICH ARE THE SITES AFFECTED MOST?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin: flexor aspect of wrists, forearm, shins, ankle, dorsa
                    of feet, anterior thighs and flanks.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Mucous membrame: buccal mucosa, lips, and genitalia
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Nails changes can occour.
                  </p>
                </p>

                <h5>HOW DO THEY LOOK LIKE?</h5>
                <p>
                  Over skin: They appear as flat toped, polygonal, reddish or
                  violet like, flat shiny raised slightly scaly lesions.
                  Sometimes, they appear in line along the scratch or trauma
                  lines.
                </p>

                <p>
                  Over mucosa of mouth : it can present as the net-like or
                  spider web-like appearance of lacy white lines (reticular
                  pattern), or as oral ulcers presenting with persistent,
                  irregular areas of redness, ulcerations and erosions covered
                  with a yellow slough(ulcerative type), or as a white patch
                  which may resemble leukoplakia (plaque type), or sometimes
                  fluid filled tiny lesions can be seen (bullous variant).
                </p>

                <h5>HOW IS THE CONDITION DIAGNOSED?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lichen planus has a typical appearance which helps in its
                    diagnosis.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Also, if an oil- drop is placed on lesion; criss-cross white
                    lines are seen.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Diagnosis can be confirmed by taking a skin biopsy.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Most of the treatment is directed towards the symptomatic
                    relief or due to cosmetic concern.
                  </p>
                </p>

                <h5>HOW CAN IT BE TREATED?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    First line of treatment is corticosteroids- topical and oral
                    preparation.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Apart from it other options include- retinoid, vitamin D3
                    analogues.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Systemic – Dapsone, hydroxychloroquine, cyclosporine can be
                    used.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Topical–Pimecrolimus, Tacrolimus can be used .
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Other modalities can be combined such as phototherapy,
                    cryotherapy.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Symptomatic treatment includes anti-itching medications,
                    moisturizing agent.
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR LICHEN PLANUS?</h5>
                <p>
                  At Skin & You Clinic, we have treated a number of cases with
                  excellent results. Our team of doctors are well versed in
                  treating the condition with utmost care andunder medical
                  guidance.
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

export default LichenPlanus;
