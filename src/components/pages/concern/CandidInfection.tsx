import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const CandidInfection: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Candid Infection</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Candida yeast is part of the human body’s normal oral,skin and
                  intestinal flora, ; however, their growth is normally limited
                  by the human immune system.
                </p>

                <p>
                  Factors such as decreased immunity (AIDS, chemotherapy),
                  underlying other disease (mouth ulcers), on steroid therapy,
                  diabetes, stress can lead to this resident flora to multiply
                  and increase in number leading to conditions such as
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Oral thrush in oral cavity
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    vaginal candid infection (candidialvulvovaginitis)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    penile candid infection (candidialbalanitis)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    candidial nail fold and nail infection (candidial
                    paronychia, onychomycosis)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    candidialintertrigo (body fold candidial infection)
                  </p>
                </p>

                <p>
                  These skin and mucosal infection can sometimes travel through
                  blood stream or extend internally leading to organ or systemic
                  involvement also such as, pharyngeal candidiasis, Esophageal
                  candidiasis, disseminated candidiasis.
                </p>

                <h5>SYMPTOMS & SIGNS</h5>
                <p>
                  Oral thrush: difficulty in eating, burning sensation, with
                  whitish curdish coating over ulcer or oral mucosa lining.
                </p>

                <p>
                  Vulvovaginal candidiasis/ candidialbalanitis: burning
                  sensation, itching, redness, soreness, irritation, whitish
                  curdy slough or discharge, difficulty in passing urine,
                  discomfort on sexual intercourse, with or without foul smell.
                </p>

                <p>Esophageal candidiasis: difficulty in swallowing</p>

                <p>
                  Diagnosis:On the basis on clinical signs and symptoms,
                  diagnosis can be confirmed with microscopic examination or
                  culture.
                </p>

                <h5>Treatment:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Oral antifungal include fluconazole, itraconazole.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Topical antifungal drugs include topical clotrimazole,
                    topical nystatin, fluconazole, and topical ketoconazole.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Local treatment may include vaginal suppositories or
                    medicated douches.
                  </p>
                </p>

                <h5>Prevention:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Control of diabetes
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improve hygiene
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid intercourse in case of active infection, or barrier
                    contraceptive to be used compulsory
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Keeping the affected area dry, especially in cases of candid
                    infection of nails and body fold.
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR CANDID INFECTION?</h5>
                <p>
                  We, at Skin & You Clinic, assess, examine and treat all
                  dermatological conditions with atmost care and with latest
                  treatment options available.
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

export default CandidInfection;
