import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const VampireFaceLift: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Vampire Face Lift</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>USE YOUR OWN BLOOD TO LOOK BEAUTIFUL</h5>
                <h5>VAMPIRE FACELIFT</h5>
                <p>
                  The Vampire Facelift is a procedure to healthy, youthful, and
                  rejuvenated skin, but done quickly and without surgery. This
                  procedure is able to do this by using your own body’s healing
                  and regeneration properties. The Vampire Facelift is a clinic
                  procedure, and results can be experienced on the same day,
                  with continual benefit of skin rejuvenation lasting for
                  months—even over a year—after the procedure.
                </p>

                <h5>WHAT IS VAMPIRE FACELIFT?</h5>
                <p>
                  The Vampire Facelift is actually not a surgical facelift at
                  all, but rather a type of skin treatment using the body’s own
                  natural healing and growth factors that are derived from your
                  own blood (hence the name The Vampire Facelift ), combined
                  with a hyaluronic acid dermal filler. The procedure is a near
                  painless series of injections into strategic areas of the face
                  to reduce wrinkles, add youthful volume, and improve the
                  quality of your skin.
                </p>

                <h5>USES OF VAMPIRE FACELIFT</h5>
                <p>
                  The platelet solution is placed after a numbing cream has been
                  applied, resulting in a near painless application. Platelet
                  solution contains at least eight of the body’s own
                  concentrated growth factors to rejuvenate the face in several
                  ways.
                </p>
                <p>
                  Increases the blood flow to the skin, resulting in healthier
                  and flawless skin. Increases new cell formation for skin
                  renewal.
                </p>
                <p>
                  Causes production of new collagen, the major component of
                  facial skin that decreases in facial aging.Activates the stem
                  cells in the skin, resulting in the generation of new,
                  younger-skin. A quick procedure that keeps working for several
                  months
                </p>

                <h5>HOW DOES THE TREATMENT WORK?</h5>
                <p>
                  The Vampire Facelift procedure only takes about an hour to
                  complete, and that includes the: blood drawn, preparation of
                  the PRP, platelet-rich fibrin matrix, and The Vampire Facelift
                  treatment itself. Since skin renewal and rejuvenation is using
                  the body’s own active regeneration components, facial skin
                  renewal is continual for about 3 months after the procedure.
                  The overall effects of the Vampire Facelift can last for over
                  a year.
                </p>

                <h5>WHO CAN DO THE FACELIFT?</h5>
                <p>
                  The Vampire Facelift is for everyone. People with more
                  advanced signs of aging may benefit more by adding Botox
                  applications.
                </p>

                <p>
                  People with less visible signs of aging may benefit from using
                  less extensive non-surgical procedures like hyaluronic acid
                  fillers and platelet-rich plasma alone.
                </p>

                <h5>
                  AREAS TREATED BY THE VAMPIRE FACELIFT AT SKIN & YOU CLINIC
                </h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lines at corners of the mouth
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    “Bunny lines” or “bunny nose” — dynamic wrinkles on the nose
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Crow’s feet (lines in corners of the eyes)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Forehead wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Frown lines
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Smile lines
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Plumping of the cheek
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR VAMPIRE FACE LIFT?</h5>
                <p>
                  At Skin & You Clinic, we have done a number of procedures with
                  excellent results. The procedure is safe with minimal
                  downtime. We understand the anatomy of the face and know what
                  is needed to achieve a youthful face.
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

export default VampireFaceLift;
