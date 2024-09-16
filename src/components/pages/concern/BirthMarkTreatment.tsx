import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const BirthMarkTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Birth Mark Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
          
              <p>Birthmarks are benign pigmentary lesions usually present at (neither)**birth nor appearing soon after birth. They can be present anywhere over the body.</p>

              <p>They can be broadly classified as pigmented birthmarks including café au lait macule, beckers naevus, naevus of OTA/ITO and vascular birthmark i.e. increased blood supply which includes salmon patches, haemangiomas, port wine stains</p>

              <h5> NAEVUS OF OTA</h5>
<p>It is due to entrapment of melanocytes (pigmented cells) in upper third of dermis of skin. It usually is unilateral and appears near the eye and adjacent facial area, i.e. in the division of first two branches of trigeminal nerve. It appears as blue/grey to slate-brown flat or slightly raised patches of hyperpigmentation. It can be present from birth or appear around puberty. It is more common in females. There can be ocular involvement also.</p>

<h5>NAEVUS OF ITO</h5> 
<p>It is similar to naevus of ota except the distribution is at the shoulder girdle area. It can present with naevus of ota and sometimes sensory changes are present at the site.</p>

<h5> BECKERS NAEVUS</h5>
<p>The beckers naevus is usually seen around puberty or at birth. It generally appears as an asymptomatic irregular tan-brownish pigmentation on the torso or upper arm (though other areas of the body can be affected), and gradually enlarges irregularly, becoming thickened and often hairy (hypertrichosis).</p>

<p>It remains same throughout life with little or no alteration in color.</p>

<p>All the above mentioned conditions are majority cosmetic concerns, which can be managed via temporary cosmetic camouflaging or by undergoing medical treatments.</p>

<h5>TREATMENTS AVAILABLE ARE</h5> 
<p>Nd:Yag Q switched laser treatment- It targets the pigmented cells (melanocytes) leading to its breakdown and lightening of the lesions. It is a painless procedure and has to be taken in multiple sessions.</p>

<h5> WHY SKIN AND YOU CLINIC FOR BIRTHMARK MARK REMOVAL ?</h5>
<p>We at skin and you specialise in birth mark removal treatments. We have a systematic approach to treat birthmarks and the laser at our clinic is the best suited for birthmarks .</p>
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

export default BirthMarkTreatment;
