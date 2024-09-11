import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AcneScars: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Acne Scars</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Even with the most careful and conscientious treatment, acne
                  scars may still occur.
                </p>

                <h5>CAUSES</h5>
                <p>
                  Severe nodular and cystic acne (For more information click on
                  Acne) as well as pricking of acne may result in acne scarring.
                </p>

                <p>
                  Each acne lesion has the natural ability to heal itself. Every
                  pimple results in loss or formation of tissues. The loss of
                  tissue results in milder scars, while formation of new,
                  thicker tissue can result in more severe scars.
                </p>

                <h5>TYPES OF ACNE SCARS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Ice-pick Scars: The skin appears to have been pierced by a
                    needle
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Rolling Scars: This type causes rolling or “wave-like”
                    undulations across otherwise normal-appearing skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Boxcar Scars: They are round or oval depressions wider than
                    ice-pick scars.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hypertrophic Scars (click to read more about hypertrophic
                    scars): They appear as firm, raised masses of tissue and are
                    usually larger than the original acne in size.
                  </p>
                </p>

                <h5>WHY SKIN AND YOU CLINIC FOR ACNE SCAR TREATMENT?</h5>
                <p>
                  We, at Skin & You Clinic, after assessing disease severity and
                  type of scarring, plan an individualised treatment to get the
                  acne controlled along with decreasing the scars so as to
                  achieve the best cosmetic result as possible.
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

export default AcneScars;
