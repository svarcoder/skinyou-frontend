import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const XanthelasmaPalpebrarum: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Xanthelasma Palpebrarum</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>WHAT IS XANTHELASMA PALPEBRARUM?</h5>
                <p>
                  Xanthelasma is a sharply demarcated yellowish deposit of fat
                  underneath the skin, usually on or around the eyelids. While
                  they are neither harmful nor painful, these minor growths may
                  be cosmetically unacceptable and can be removed.
                </p>

                <h5>QUICK FACTS:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Frequently, they are symmetrical; often, 4 lids are
                    involved. Xanthelasma have a tendency to increase slowly,
                    and become permanent.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Around half of the cases are linked with higher than average
                    cholesterol levels.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    study of almost 13,000 people found with the patches,
                    concluded that these people were more likely have a heart
                    attack or heart disease.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Increased lipid levels are present in 50% patients with
                    Xanthelasma.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Family history of high lipid levels, Xanthelasma and
                    diabetes is to be enquired.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Increased lipid levels can also be an association, usually
                    caused by underlying uncontrolled diabetes.
                  </p>
                </p>

                <p>
                  Some patients exhibiting Xanthelasma have normal lipid levels
                  but this is less common in younger patients. Although these
                  patients are not at increased risk of heart disease, they are
                  more commonly found to have other risk factors for
                  cardiovascular disease eg a higher BMI, waist circumference
                  and deranged lipid levels.
                </p>
                <h5>DO I NEED TO BIOPSY THE AREA TO CONFIRM?</h5>
                <p>
                  On examination we can make a diagnosis of Xanthelasma but to
                  document and confirm diagnosis some doctors would prefer to
                  take a biopsy.
                </p>

                <h5>DOES XANTHELASMA INCREASE WITH TIME?</h5>
                <p>
                  They are generally permanent with tendency to increase in
                  number and coalesce with time.
                </p>

                <h5>WHAT ARE THE DIFFERENT TREATMENTS AVAILABLE?</h5>
                <p>
                  Patients should have their fasting lipid levels checked and
                  those with increased lipid levels should have a cardiac risk
                  assessment done. If required medical intervention would
                  include starting the individual on lipid lowering drugs with
                  aspirin.
                </p>
                <p>
                  The lesions can be left alone unless the patient wishes them
                  removed for cosmetic reasons. The condition is itself
                  harmless..Lesions can recur in patients after treatment.
                  Various options are available including surgical excision,
                  chemical treatment with trichloroacetic acid, laser treatment.
                </p>
                <p>Laser treatment for Xanthelasma</p>
                <h5>WHY SKIN & YOU FOR XANTHELASMA TREATMENT?</h5>
                <p>
                  We at Skin & You Clinic use the novel minimally ablative RF
                  laser device, just as a damaged painting is delicately
                  restored one area at a time, or a photographic image is
                  altered, pixel by pixel, the RF Pixel improves your appearance
                  by affecting only a fraction of your skin at a time with
                  thousands of microscopic RF Pixel spots. We have used the
                  treatment successfully in Xanthelasma cases with good
                  response.
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

export default XanthelasmaPalpebrarum;
