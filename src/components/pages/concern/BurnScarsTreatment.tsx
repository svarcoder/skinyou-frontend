import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const BurnScarsTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Burn Scars Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  The skin is an organ without any marks on birth. Imagine a
                  piece of silk and that is our skin.
                </p>

                <h5>BURNS CAN RESULT IN</h5>
                <p>
                  Keloid Scars – raised, red scars beyond the original margins
                  of the injury. Contractures – these scars affect the mobility
                  of the area affected. A contracture develops when the normally
                  stretchy skin tissues are replaced by non- stretchy fibre-like
                  tissue. This tissue makes it hard to stretch the area and
                  prevents normal movement.
                </p>

                <p>
                  Contractures mostly occur in the skin, the tissues underneath,
                  and the muscles, tendons, ligaments, and joint areas. They
                  affect range of motion and function in a certain body part.
                </p>

                <p>
                  Sunken in or Atrophic Scars – theses scars are formed
                  resulting in thinning of the skin and damage to the underlying
                  muscle and collagen fibres.
                </p>
                <h5>TREATMENT AT SKIN & YOU CLINIC FOR BURN SCAR</h5>
                <p>
                  Various creams and ointment can be given that help in
                  flattening or blending in of the scars.
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Steroid Injections- Steroid injections into a scar may help
                    flatten it. Injections may help to soften the appearance of
                    keloid or hypertrophic scars. RF PIXEL Laser resurfacing.
                    This procedure resurfaces the skin using different types of
                    lasers. The laser system inch by inch helps in skin
                    resurfacing with minimal or no downtime. It is especially
                    helpful for burn scars. It helps in improving the mobility
                    and decreasing the contractures. With its collagen formation
                    affect it helps to improve the texture and tone of the scar.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Filler Injections- These treatments can be used to raise
                    sunken scars to the level of surrounding skin. The effects
                    of these injections are only temporary, however, and the
                    procedures may need to be regularly repeated. But filler
                    injections can show a dramatic result.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    MCA Scar filling- is an advanced technique use to fill the
                    scar by a micro needling method.It helps in collagen
                    regeneration and lifts the scar.
                  </p>
                </p>

                <h5>WHY SKIN AND YOU CLINIC FOR SCAR TREATMENT?</h5>
                <p>
                  We at Skin & You Clinic specialise in burn scar treatments. We
                  have a systematic approach to scars and understand that scars
                  have a physical and emotional effect on the patients.
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

export default BurnScarsTreatment;
