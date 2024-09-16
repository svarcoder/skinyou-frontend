import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const FrownLineWorryLineTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Frown Line / Worry Line Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
          
              <p>Too much emotion, too many lines – Our face muscles especially the forehead and eyes reflect our emotional state through expressions. Wrinkles are an unavoidable part of life; as our skin loses its elasticity, lines caused by facial expressions bounce back into place and stay etched in your skin.</p>

              <h5> TREATMENT AT SKIN & YOU CLINIC FOR FROWN LINE/ WORRY LINE</h5>
<p>At Skin & You Clinic, Mumbai, we aim to correct this by relaxing the depressor muscles around the eyes so that the elevators can work unopposed and give a fresh, relaxed and rejuvenated look. This will help in decreasing forehead lines.

Secondly, by using dermal fillers, we can smoothen both forehead and Frown lines. These fillers are hydrating in nature and help in the treatment of deeper lines that remain even after injecting Botox. A combination of deeper chemical peels with minimal downtime together with Botox gives a good result. Other treatments that help in improvement of the lines include
</p>

<h5>WHY SKIN & YOU CLINIC FOR FOREHEAD LINES TREATMENT?</h5> 


<p></p>At Skin & You Clinic, Mumbai, our doctors specialize in the treatment of frown and worry lines. We listen to your concerns and help you decide what treatment works best for you keeping in mind your goals and the amount of downtime or recovery needed. We provide you with a realistic and achievable outcome of the treatment.
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

export default FrownLineWorryLineTreatment;
