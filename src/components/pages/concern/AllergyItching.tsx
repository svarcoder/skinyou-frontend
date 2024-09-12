import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AllergyItching: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Allergy / Itching</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Itching is defined as the cutaneous sensation that elicits the
                  desire to scratch. Itching may be localised, generalised or
                  unremitting.it may be caused by a primary skin disorder, but
                  in 10-50% patients, it may signal an underlying systemic
                  disease.
                </p>

                <h5>VARIOUS SYSTEMIC CAUSES ARE:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hyper/hypothyroidism, diabetes mellitus, gout
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hepatitis C infection
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Iron deficiency
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pregnancy
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Renal failure/ uraemia
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Malignancy
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Psychoneurosis- anorexia nervosa, parasitophobia
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Misc- AIDS, SLE
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Allergy- Parasitic/ worm infestation, food items
                  </p>
                </p>

                <h5>VARIOUS SKIN CAUSES ARE:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lichen planus
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Psoriasis
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lice and ticks
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Eczemas-atopic dermatitis, irritant/allergic contact
                    dermatitis
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Generalised dryness
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Insect bites
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Drug reactions
                  </p>
                </p>

                <h5>WHY SKIN AND YOU CLINIC FOR A CASE OF ITCHING:</h5>
                <p>
                  At Skin and You clinic,we take a Detailed history to rule out
                  predisposing factors, with clinical examination for presence
                  of skin disorder. If needed blood investigation can be done or
                  if required skin biopsy can be undertaken.
                </p>

                <h5>TREATMENT AT SKIN AND YOU CLINIC FOR ITCHING:</h5>
                <p>
                  If a diagnosable and removable systemic or cutaneous cause is
                  present- treatment is fairly simple.
                </p>

                <p>
                  If the cause of the itching cannot be eliminated, symptomatic
                  treatment is required.
                </p>

                <p>
                  Treatment is based on elimination of all the offending causes,
                  along with topical and oral therapy:
                </p>

                <p>
                  Topical preparations: specific treatment for skin disease such
                  as scabies, psoriasis and eczemas are prescribed when
                  indicated. Bland emollients- containing menthol, camphor,
                  calamine lotion are suitable. Topical steroids to control any
                  acute eczema/ redness and oozing.
                </p>
                <p>
                  Systemic therapy: mainly anti histaminic are mainstay in oral
                  treatment. These include Cetirizine, levo cetirizine,
                  Chlorpheniramine, Desloratidine, etc. it should be taken as
                  prescribed by the practitioner.
                </p>
                <h5>WHY SKIN & YOU CLINIC FOR ITCHING TREATMENT:</h5>
                <p>
                  We, at Skin & You Clinic, assess, examine and treat all
                  dermatological conditions with utmost care and with latest
                  interventions available.
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

export default AllergyItching;
