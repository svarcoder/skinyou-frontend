import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SensitiveSkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Sun & Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Sensitive skin can be dry, normal or oily and is characterized
                  by its delicate nature and thus called sensitive.
                </p>
                <p>
                  It frequently reacts adversely to environmental condition and
                  requires special treatment in order to remain in good
                  condition.
                </p>
                <p>
                  Sensitive skin is prone to pimples, redness, burns, itches,
                  stings, allergies and redness.
                </p>
                <p>
                  Sensitive skin reacts adversely to cosmetics containing
                  alcohol, synthetically manufactured oil, fragrant oil,
                  artificial colours. Sensitive skin benefits from gentle
                  skincare products and treatments.
                </p>

                <p>
                  Tip – Use mineral make up and sunscreen which is light and
                  non-comedogenic
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

export default SensitiveSkinCare;
