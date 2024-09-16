import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const CheekEnhancementTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Cheek Enhancement Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
      
              <h5>WHY CHEEK ENHANCEMENT?</h5> 
<p>Cheeks are an important feature of the mid-face and tend to droop and flatten with age. This leads to the formation of jowls (the sag around the chin area), and nasolabial lines/folds (the lines from the corners of the nose to the corners of the mouth). Decreased cheek volume can make the face appear flattened and lack the natural youthful curves provided by fuller cheeks. Thus replacing volume with dermal fillers in an important area like the cheeks, results in making the skin look rejuvenated and younger. High cheeks are a sign of youthfulness and give the face a fresh look.</p>

<h5></h5> TREATMENT AT SKIN & YOU CLINIC FOR CHEEK ENHANCEMENT
<p></p>For those who do not want a permanent change and the option of adjustability, there are inject-able/non-surgical options. Just by erasing wrinkles and fine lines; there may not be as much change to the youthfulness of the face as adding volume. For this purpose, various dermal fillers can be injected into the cheeks.

<h5>OTHER TREATMENTS AT SKIN & YOU CLINIC</h5> 
<p>Dermal Fillers…(Read More)
Vampire Facelift…(Read More)</p>
<h5> WHY SKIN & YOU CLINIC FOR CHEEKS ENHANCEMENT?</h5>
<p>Skin & You Clinic, Mumbai, specializes in non-surgical replacement of facial volume with dermal fillers.

We will be able to discuss your concerns with you and make an appropriate assessment as to how adding facial volume may help you achieve a younger and natural appearance.
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

export default CheekEnhancementTreatment;
