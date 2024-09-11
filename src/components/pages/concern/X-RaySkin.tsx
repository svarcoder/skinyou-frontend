import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const XRaySkin: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>X-Ray of Skin (Skin Analysis)</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  At Skin & You Clinic, Mumbai, we believe that each individual
                  has a distinct skin type and needs. The skin analysis system
                  use by us assists in the consultation and helps us formulate a
                  plan just for you. Based on its assessment, skincare regimes
                  and treatment schedules can be decided upon. It also helps us
                  recommend products that suit your skin type.
                </p>

                <h5>SOME FACTS ON SKIN ANALYSIS SYSTEM</h5>
                <p>It is perfectly SAFE.</p>
                <p>
                  There is NO discomfort with having a computer-aided skin
                  analysis.
                </p>
                <p>
                  It generally takes just a few minutes to complete the
                  procedure.
                </p>
                <p>
                  It is helpful to all age groups – teenagers, young adults and
                  older people.
                </p>
                <p>
                  It analyzes the skin's tolerance to different therapies like
                  laser, microdermabrasion, gel peels, injectables etc.
                </p>
                <p>
                  It can also access sun damage, bacterial load, texture,
                  surface spots, red areas, wrinkles, pores, brown spots.
                </p>
                <p>
                  It is not diagnostic or a determinant for treatments but helps
                  in providing an extensive analysis of the patient's complexion
                  and finer variations in the skin condition. This aids the
                  doctor in conducting an enhanced treatment-oriented
                  consultation.
                </p>
                <h5>
                  IDENTIFYING VARIOUS SKIN FEATURES WITH SKIN ANALYSIS SYSTEM
                </h5>
                <p>
                  Surface Spots – These spots are typically brown or red skin
                  lesions, including freckles, acne scars and hyper
                  pigmentation. They are distinguishable by their distinct
                  colour and contrast from the background skin tone; they vary
                  in size and shape.
                </p>
                <p>
                  UV Spots – Occurs when melanin (pigment that gives skin its
                  colour) is accumulated just below the skin surface as a result
                  of sun damage.
                </p>
                <p>
                  BrownSpots – These are lesions on and within the deeper layers
                  of the skin such as hyper pigmentation, freckles, Lentigines
                  and Melasma. They may occur from excessive melanin production
                  (pigment that gives the skin color). Brown spots produce an
                  uneven appearance of the skin which gets detected by the
                  computer-aided skin analysis system.
                </p>
                <p>
                  Red Areas – These can represent a variety of conditions such
                  as acne, inflammation, Rosacea or spider veins (broken blood
                  vessels).
                </p>
                <p>
                  {" "}
                  Wrinkles – These are folds or creases in the skin that may
                  increase as a result of sun exposure and are associated with
                  reduced skin elasticity (click on facial wrinkles).
                </p>
                <p>
                  Texture – This is primarily an analysis of the skin smoothness
                  and skin colour by identifying the gradation in colour from
                  the surrounding skin tone.
                </p>
                <p>
                  Pores – Open Pores on analysis of them helps determine the
                  skin type and thus formulate an ideal skin routine.
                </p>
                <p>
                  Bacterial Load – This is the evidence of bacterial load on the
                  skin.
                </p>
                <p>
                  At Skin & You Clinic, Mumbai, we believe that skin matters.
                  Thus the skin analysis system shows us the areas of future
                  concern and guides us in the formulation of a personalised
                  skincare regime just for you.
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

export default XRaySkin;
