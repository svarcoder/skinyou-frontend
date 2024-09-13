import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const NailInfections: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Nail Infections</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>Also called as onychomycosis (OM) / tinea unguium</p>

                <h5>CAUSES</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fungal nail infections are most often seen in adults.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Often follow fungal infection of the feet.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    More often in toenails than in fingernails.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    You are at higher risk of getting a fungal nail infection if
                    you
                  </p>
                </p>

                <p>
                  Get manicures or pedicures with tools that have been used on
                  other people
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Have minor skin or nail injuries
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Have deformed nail or nail disease
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Have moist skin for a long time
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Have immune system problems
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Wear closed footwear
                  </p>
                </p>

                <h5>SYMPTOMS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Discolouration of the nail changes to white or green, distal
                    onycholysis (separation of the nail plate from nail fold)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Damage to nail plate leading to white, crumbly nail surface.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Complete nail damage.
                  </p>
                </p>

                <h5>DIAGNOSIS</h5>
                <p>
                  Depending on duration, various causes, symptoms, appearance,
                  any co-existing medical illness or skin disease, medications
                  history, occupational details, diagnosis is made and if any
                  underlying condition is present it is addressed immediately.
                </p>

                <h5>TREATMENT AT SKIN & YOU CLINIC</h5>
                <p>
                  Based on causative factors it can be combination of oral and
                  topical treatment – such as topical and oral antifungals,
                  topical and oral antibiotic.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR NAILS INFECTIONS?</h5>
                <p>
                  We, at Skin & You Clinic, assess, examine and treat all
                  dermatological conditions with utmost care.
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

export default NailInfections;
