import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Acne: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Acne</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Zap the zits with a good skin care regimen and early
                  intervention; prevent scarring and other acne damage through
                  our effective treatments.
                </p>

                <h5>ABOUT ACNE (PIMPLES/BREAKOUTS)</h5>
                <p>
                  Acne is a medical condition which is completely curable; the
                  condition needs to be addressed with medications both oral and
                  topical to prevent scarring. Its personal and social impact
                  also needs to be discussed with the patient .it is a chronic
                  disorder of the sebaceous (oil) glands leading to increased
                  (oil) production.
                </p>

                <h5>CAUSES</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Increased oil production by glands
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Increased bacterial load on skin
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Clogging of oil glands by dirt / pollution
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hereditary
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hormonal influence (increased male hormone levels)
                  </p>
                </p>

                <h5>COMMONLY FOUND IN</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Teenagers
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Some adults
                  </p>
                </p>

                <h5>OCCURRENCE</h5>
                <p>
                  Face, back and chest (all areas rich in oil glands) Acne
                  manifests in the form of lesions like –
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Blackheads and Whiteheads
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Small red raised lesions
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pus-filled lesions
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hard raised lesions
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Soft fluid filled lesions
                  </p>
                </p>

                <h5>DAMAGES CAUSED BY ACNE ARE</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pigmentation
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Affects psychologically or hampers the self esteem
                  </p>
                </p>

                <h5>TRIGGERS THAT WORSEN ACNE INCLUDE</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Oil based make-up
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    In girls, menstruation
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Squeezing or pricking of lesion
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hard scrubbing
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fatty or fried food
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hormonal pills in women
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stress (which results in hormonal changes and hence acne)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Protein supplements
                  </p>
                </p>

                <h5>TREATMENTS AT SKIN & YOU CLINIC FOR ACNE:</h5>
                <p>
                  Acne treatments work by reducing oil production, exfoliation
                  of dead skin, fighting bacterial infection and reducing the
                  inflammation or by doing all four.
                </p>

                <p>The treatment of acne starts with a skin care routine:</p>

                <p>
                  Cleansing – Using a good cleanser is the first step in the
                  treatment of acne.
                </p>

                <p>
                  A cleanser containing alpha-hydroxy acids or beta-hydroxy
                  acids helps remove the oil and dead skin cells from the
                  surface of the skin, preventing the physical blockage of pores
                  and thus acne. Benzoyl peroxide is a good product for reducing
                  active acne lesions and also has anti-inflammatory properties.
                </p>
                <p>
                  Topical Medications – Topical medications in the forms of
                  cream, gel, lotion, or solution are often prescribed to treat
                  acne. Some of them are –
                </p>

                <p>
                  Systemic medications to treat acne – Depending on the type of
                  acne various systemic drugs can be prescribed –
                </p>

                <h5>Antibiotics</h5>
                <p>
                  Systemic Retinoid like – Isotretinoin (Note – All the drugs
                  are to be taken only after the advice of a registered medical
                  practitioner)
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR ACNE TREATMENT?</h5>
                <p>
                  At Skin & You Clinic, individualised treatment plans are
                  formulated and combinations of treatments are carried out to
                  achieve desired results.
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

export default Acne;
