import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PigmentationRemovalTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Pigmentation Removal Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
           
              <h5>Don’t we all desire a flawless skin with even tone texture no marks or pigmentation.
              </h5> 
              <h5>CONDITIONS THAT CAUSE INCREASED PIGMENTATION OF THE SKIN</h5> 
<p>Melasma
Freckles
Post injury hyperpigmentation
Post acne scars red and brown marks
Pigment demarcation lines</p>
<h5>THERE ARE VARIOUS CAUSES OF HYPERPIGMENTATION, INCLUDING</h5> 
<p>Overexposure to the sun
Heredity
Picking at the skin
Hormonal changes
Certain medications such as antibiotics, hormone treatments, and anti-seizure drugs
Inflammation and skin injuries such as acne vulgaris</p>

<h5> WHY SKIN AND YOU CLINIC FOR PIGMENTATION REMOVAL TREATMENT?</h5>
<p>We at skin and you specialise in pigmentation removal treatments. We have a systematic approach to treat pigmentation and understand that pigmentation can have a physical and emotional effect on the patients.</p>
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

export default PigmentationRemovalTreatment;