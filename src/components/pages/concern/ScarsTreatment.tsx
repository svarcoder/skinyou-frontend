import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const ScarsTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Scars Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Scars are a natural part of the body’s healing process. Scars
                  are the normal body response to injury. Most wounds, except
                  for very minor ones, result in some degree of scarring.
                </p>

                <h5>SCARS CAN RESULT FROM</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Burns
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Injury – Physical, chemical, heat injury
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Trauma
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Post Acne
                  </p>
                </p>

                <h5>VARIOUS TYPES OF SCARS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Keloid Scars: These scars are the result of an aggressive
                    healing process. They extend beyond the original injury.
                    Over time, a keloid scar may hamper movement. Keloid scars
                    are common among people with dark skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Contracture Scars: If your skin has been burned, you may
                    have a contracture scar. These scars tighten skin, which can
                    impair your ability to move. Contracture scars may also go
                    deeper, affecting muscles and nerves.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hypertrophic Scars: These are raised, red scars that are
                    similar to keloids but do not go beyond the boundary of the
                    injury.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne Scars: If you’ve had severe acne, you probably have the
                    scars on the face. This can result in psychological and
                    emotional scarring too.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sunken in Scars: This kind of scarring occurs when
                    underlying structures supporting the skin (for example, fat
                    or muscle) are lost. Some surgical scars or acne scars have
                    this appearance.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stretch marks: stretch marks are formed in normal skin due
                    to overstretching or tension in the skin.
                  </p>
                </p>

                <h5>SCARS CAN FORM</h5>
                <p>
                  Scars form when the deep, thick layer of skin is damaged. The
                  body forms new collagen (a naturally occurring protein in the
                  body) to heal thearea, resulting in a scar. The new scar
                  tissue will have a different texture and quality than the
                  surrounding tissue. Scars form after a wound is completely
                  healed.
                </p>

                <h5>TREATMENT AT SKIN AND YOU CLINIC FOR SCAR</h5>
                <p>
                  Various creams and Ointment can be given that help in
                  flattening or blending in of the scars.
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Steroid Injections: Steroid injections into a scar may help
                    flatten it. Injections may help to soften the appearance of
                    keloid or hypertrophic scars.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    RF PIXEL Laser resurfacing: This procedure resurfaces the
                    skin using different types of lasers. The laser system inch
                    by inch helps in skin resurfacing with minimal or no
                    downtime.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Filler Injections: These treatments can be used to raise
                    sunken scars to the level of surrounding skin. The effects
                    of these injections are only temporary, however, and the
                    procedures may need to be regularly repeated. But filler
                    injections can show a dramatic result.
                  </p>
                </p>

                <p>
                  MCA Scar Filling Is an advanced technique use to fill the scar
                  by a micro needling method.
                </p>
                <p>It helps in collagen regeneration and lifts the scar.</p>

                <h5>WHY SKIN AND YOU FOR SCARS?</h5>
                <p>
                  We at skin and you specialise in scar treatments. We have a
                  systematic approach to scars and understand that scars have a
                  physical and emotional effect on the patients.
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

export default ScarsTreatment;
