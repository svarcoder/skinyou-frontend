import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const VitiligoWhitePatches: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Vitiligo / White Patches</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>VITILIGO</h5>
                <p>
                  This is a skin disorder where one sees a complete pigment loss
                  in the affected areas. This occurs due to the damage of the
                  pigment producing cells (melanocyte). Vitiligo is clinically
                  identified by the development of chalky white macular (flat)
                  patches, which when viewed microscopically are completely
                  devoid of melanocyte.
                </p>

                <p>
                  Vitiligo starts as small white patches, first affecting an
                  area with pigment loss, and then spreading with time.
                </p>
                <p>
                  The goal of treatment is to stop or slow down the progression
                  of pigment loss.
                </p>
                <h5>SIGNS AND SYMPTOMS:</h5>
                <p>
                  Pigment loss produces milky white patches on conducting a
                  Wood’s light examination. Flat areas of normal-feeling skin
                  without any pigment appear suddenly or gradually. These areas
                  have a darker border. The edges are well-defined but
                  irregular.
                </p>
                <p>
                  Vitiligo most often affects the face, elbows, knees, hands,
                  feet and genitals. But can affect any part of the body.
                </p>
                <p>
                  Vitiligo is more noticeable in darker-skinned people because
                  of the contrast of white patches against dark skin.
                </p>
                <p>
                  No other skin changes occur.Your doctor may also perform blood
                  tests to check the levels of Thyroid or other hormones, and
                  Vitamin B12.
                </p>

                <h5>CAUSES:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Immune system disorder
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hereditary
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sunburn or emotional stress
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Unknown in certain cases
                  </p>
                </p>

                <h5>MANAGEMENT AT SKIN & YOU CLINIC:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Topical Corticosteroids: Corticosteroid creams or ointments
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Immunomodulators: Immunosuppressant creams or ointments,
                    such as Pimecrolimus and Tacrolimus can be used.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Phototherapy: Phototherapy is a medical procedure in which
                    your skin is carefully exposed to ultraviolet light. This
                    therapy can be done by itself or after taking a drug that
                    sensitizes your skin to light.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Autologous Skin Graft: Skin may be moved (grafted) from
                    normally pigmented areas and placed onto areas where there
                    is pigment loss.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Cover-Up Make-Up: Several cover-up make-up or skin dyes can
                    mask vitiligo.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Using Sunscreen: It is important to remember that skin
                    without pigment is at greater risk for sun damage. Be sure
                    to apply a broad-spectrum (UVA and UVB), high SPF sunscreen
                    or sun block and use appropriate safeguards against sun
                    exposure
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Medical Tattooing: by using medical gradient dyes are used
                    for semi-permanent / permanentCosmetic Tattooing over
                    stable, small patches of vitiligo. It has given excellent
                    results for isolated lip vitiligo cases.
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR VITILIGO (WHITE PATCH)?</h5>
                <p>
                  We, at Skin & You Clinic, assess, examine and treat all
                  dermatological conditions with utmost care. For vitiligo
                  cases, combined approach is generally taken to achieve arrest
                  of disease and maximum possible outcome with Medical Tattooing
                  being routinely done in selected cases at our centre with good
                  results.
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

export default VitiligoWhitePatches;
