import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const EyebrowShapingLiftingTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Eyebrow Shaping / Lifting Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
        
              <h5> NON-SURGICAL EYEBROW SHAPING/LIFTING</h5>
<p>Traditionally, surgery was the only way to lift eyebrows. Today, it can be done effectively through non-surgical methods as well.

The ideal female brow is arched with or without a lateral flare. A male eyebrow is less arched and is lower set than females.</p>

<h5> STEP 1</h5>
<p>Botox injections can help relax all the depressor muscles around the eyes and create an overall lift in the eyebrows</p>

<h5>STEP 2</h5> 
<p>Dermal fillers are put underneath the eyebrow, giving it support and thus lifting the eyebrow upward..
</p>
<h5> STEP 3</h5>
<p>Dermal fillers can then be used in the middle half of the upper lid/brow to reduce the apparent sag in the eyelids.</p>

<p>OTHER TREATMENTS AT SKIN & YOU CLINIC
Accent Ultra Radio Frequency RF…(Read More)
CACI Treatment…(Read More)
Botox Treatment…(Read More)</p>
<h5>WHY SKIN & YOU CLINIC FOR EYEBROW SHAPING AND LIFTING?</h5> 
<p>At Skin & You Clinic, Mumbai, we specialize in non-surgical facial shaping and contouring. We listen attentively to your concerns and help you decide the best treatments for you depending on your goals and the amount of downtime or recovery required. Just make an appointment with us and we will tell you our assessment and a probable plan of action.</p>
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

export default EyebrowShapingLiftingTreatment;
