import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const ChinJawLineSkinTighteningTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Chin / Jaw Line Skin Tightening Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
         
              <p>Slimming and shaping of the jaw line and chin non-surgically</p>

              <h5>CAUSE</h5> 
<p>Mostly an increase in the size of the masseter (chewing muscles) results in a widening of the jaw line and a square-like appearance of the face.

A square jaw is feature that may not be always be desired, especially in females.</p>

<h5>TREATMENT AT SKIN & YOU CLINIC FOR CHIN & JAW LINE</h5> 
<p>By injecting Botox injections into the main muscle that causes the bulk (the masseter muscle), the squareness of the jaw can be reduced significantly. The procedure has virtually no downtime and the results are visible in just 2-3 weeks.</p>

<p>The chin is an important feature of the lower third of the face. By enhancing the chin, the jaw line can be sharpened, the profile of the face balanced, and the apparent amount of excess skin and fat in the neck can look reduced Another option to slim the jaw line is by doing the RF skin tightening over parts of the lower face and jaw line. This is only suitable for those who have excess fat (and not muscle) in these areas.
</p>
<h5>WHY SKIN & YOU CLINIC FOR JAW LINE AND CHIN SHAPING?</h5> 
<p>Skin & You Clinic, Mumbai specializes in non-surgical replacement of facial volume with dermal fillers. Once you visit us for a consultation, we will be able to discuss your concerns and appropriately assess your need for facial volume on the chin and jaw line areas. We will also inform you on how Botox can be put in specific areas to help give you a chiselled jaw line and rejuvenated appearance.
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

export default ChinJawLineSkinTighteningTreatment;
