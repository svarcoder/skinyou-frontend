import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LipEnhancementTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Lip Enhancement Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
       

              <h5>AESTHETICALLY PLEASING LIPS</h5> 
<p>Lips should fit your face appropriately – as a rule – for people with a smaller face, eyes, and nose, smaller lips may be appropriate. Over-enhancing lips in such a person could create a false or unnatural appearance.
As a general rule, the bottom lip should be larger than the top lip but this is not always the case in many people.
Aesthetics are really a personal preference. But our doctors can consult with you and understand your ideas on the same.</p>
<h5>TREATMENT AT SKIN & YOU CLINIC FOR LIP ENHANCEMENT</h5> 
<p>Dermal fillers can be injected into the lips and its surrounding areas to enhance its shape or size
Replacing volume loss of the lips can result in more youthful looking lips
Through most methods, a very natural-looking effect can be achieved
An aesthetic is injected to numb the lips prior to lip enhancement to ensure the patient’s comfort</p>
<h5>SIDE EFFECTS OF LIP ENHANCEMENT</h5> 
<p>After lip enhancement, the main side effect is swelling of the lips. This may persist from 3 to 14 days. Usually an injection in the lip body produces more swelling than the border. The type of dermal filler used also determines the extent of swelling.
At times, a bruise may also result from the injections.
Occasionally, lip enhancement may cause a viral infection to appear. If this occurs, you need to notify your doctor who will prescribe an anti-viral tablet.</p>
<h5> POST-CARE FOR LIP ENHANCEMENT</h5>
<p>The swelling that occurs immediately after can be reduced with ice packs.
A lip balm can be used to prevent dry lips, and no makeup is to be used for 12 hours.
Strenuous exercises and excessive UV exposure should be avoided for at least 48 hours post treatment.
If there are any lumps felt, you can massage them twice a day until they subside.
If these lumps persist, you can contact Skin & You Clinic at the earliest.</p>
<h5>WHY SKIN & YOU CLINIC FOR LIP ENHANCEMENT?</h5> 
<p>At Skin & You Clinic, Mumbai, our doctors have a large range of dermal fillers for you to choose from. All you need to do is make a phone call and visit us for a consultation. We will then gauge your goals and inform you of the desired outcome of the treatments suggested for you.</p>
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

export default LipEnhancementTreatment;
