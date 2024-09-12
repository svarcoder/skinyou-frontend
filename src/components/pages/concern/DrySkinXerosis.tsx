import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DrySkinXerosis: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Dry Skin / Xerosis</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Dry skin or dehydration of superficial layer of skin &is
                  caused by inactive oil glands that don’t produce enough sebum
                  for lubrication.It is a very common condition and is
                  especially prevalent among elderly and in arid climates. It
                  more commonly affects lower legs but may affect any area of
                  body. If severe enough it can lead to irritation and itching
                  leading to Eczema.
                </p>

                <p>
                  Ichthyosis vulgaris is genetically inherent disorder affecting
                  the skin cell formation and turn-over. Skin changes usually
                  appear by 5 yrs.’ of age, and include dry skin with white to
                  brown scales.
                </p>

                <h5>VARIOUS OTHER CAUSES OF DRY SKIN/ XEROSIS:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Elderly
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hereditary
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hypothyroidism, hyperparathyroidism
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lipid lowering medications
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Drugs- cimetidine, hydrochlorothiazide
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Malignancy – Hodgkin’s lymphoma
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    HIV infection
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Autoimmune disorder
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Chronic renal; failure
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Eating disorder and malnutrition
                  </p>
                </p>

                <p>
                  Tip – Use Luke warm water and not hot water for cleansing. Use
                  mild non soapy cleansers or creamy face wash as they preserve
                  natural oils in the skin. Use cleansers containing glycerine.
                  Rich hydrating moisturizers are required for dry skin. These
                  will increase the skin’s water content, improve its smoothness
                  and decrease symptoms of itching, stinging and burning.
                </p>
                <h5>TREATMENTS</h5>
                <p>
                  Topical preparations: containing humectants that hold water on
                  skin, such as lactic acid, urea based creams,hyaluronic acid,
                  allantoin containing creams, lotions are preferred.
                </p>

                <p>
                  Systemic treatment:retinoid can be given in cases of
                  ichthyosis, and should be taken as prescribed by physician.
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Oxygen treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    CACI treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Gel Peels
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Derma roller
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR DRY SKIN?</h5>
                <p>
                  We at Skin & You Clinic, have some customised procedures
                  depending on the extent of dryness of skin in the individual
                  which can be done in combination with the prescribed topical
                  preparation to have a better and long lasting improvement.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR XEROSIS?</h5>
                <p>
                  We, at Skin & You Clinic, assess, examine and treat all
                  dermatological conditions with utmost care. Use of the ideal
                  moisturiser is essential for dry skin conditions. We advise
                  from a range of products to help you with your condition.
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

export default DrySkinXerosis;
