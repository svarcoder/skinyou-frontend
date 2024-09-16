import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const KeloidTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Keloid Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
 
    

    <h5>ABOUT A SCAR</h5> 
    <p>The word scar originates from the Greek word ‘eskhara’, which means scab. A scar is the body’s natural way of healing and replacing damaged skin.</p>

    <h5>OCCURRENCE</h5> 
<p>Scars may be formed for many different reasons, like infections, surgery, injuries or inflammation of tissue like after acne.
Scars may appear anywhere on the body and the composition of a scar may vary, appearing flat, lumpy or sunken. They may be lightly or darkly pigmented than the surrounding normal skin.</p>
<h5>TYPES</h5> 
  <p>R  aised scars- Hypertrophic scars, Keloids. Hypertrophic Scars and Keloids</p>

<p>Following a skin injury sometimes the wound heals with production of excess repair tissue i.e. collagen, which then gets deposited in these scars resulting in either a hypertrophic or a keloid scar.
Hypertrophic scars – In hypertrophic scars the excess collagen is deposited within the borders of the original injury. They may be painful and itchy and can occur in any area of the body.
Keloids – They tend to extend in a claw-like fashion beyond the border of the original injury, becoming more itchy over time. They occur more often in darker-skinned people. Common sites are chest, earlobes, shoulders, upper back.
Hypertrophic scars tend to regress in time becoming flatter and smoother however keloids may continue to expand in size for decades.</p>
<h5>TREATMENTS AT SKIN AND YOU CLINIC FOR KELOID</h5>
<p>Treatments for keloids and hypertrophic scars vary. There is no one simple cure a customised treatment plan is essential. Treatment may include the following</p>

<p>Creams and Lotions – Topical creams or gels containing steroid or silicon can be used that help flatten keloids and hypertrophic scars. But they will not completely disappear. Therefore, they are used in combination treatment with various other treatments.
Steroid Injections – Steroids are injected directly into the scar tissue to help decrease the itching, redness, and burning sensations and also decrease the size of the scar. A series of injections is usually required to gain the maximal effect – generally given at 2-3 week intervals. They should be given by trained practitioners only.
Laser treatment – Lasers such as RF pixel available at skin and you clinic works to flatten the scar and blend it into the skin.</p>
Pressure therapy – Pressure therapy involves a type of pressure bandage worn over the area of the scar. These may be worn day and night for 4-6 months.
<h5>WHY SKIN AND YOU CLINIC FOR KELOIDS AND HYPERTROPHIC SCARS?</h5> 
<p>We, at Skin and You Clinic, assess & examine and plan an individualized treatment protocol combining the above mentioned procedures to achieve the best result with each session.
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

export default KeloidTreatment;
