import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Cellulite: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Cellulite</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
       
              <p>Cellulite can be as fat deposited in pockets just below the surface of the skin, giving it a dimpled appearance. Its appearance is often described as an ‘orange peel,’ ‘mattress,’ or ‘dimpling’.</p>

              <h5></h5> OCCURRENCE
<p></p>On the Thighs, Buttocks and sometimes lower Abdomen of otherwise healthy women. Although some men may get it, 90-98% of cellulite cases occur in women.

<h5>RISK FACTORS FOR CELLULITE</h5> 
<p>Lack of exercise
Female gender
Overweight/obesity
Elderly people
Poor lymphatic drainage
Excess hormones</p>
<h5>SOME CELLULITE FACTS</h5> 
<p>Sometimes even thin people have cellulite, because everyone has layers of fat below the skin surface.
Collagen fibers that connect fat to the skin may stretch, breakdown or pull tight, allowing fat cells to bulge out. This creates the rippled look of cellulite.
Genes play a part in whether or not you have cellulite.
A poor diet, “fad” dieting, a slow metabolism, hormone changes, and even dehydration may play a role.
Liposuction for instance, is not recommended as it may make it look worse.
Although many dermatologists and cosmetic surgeons recognize cellulite as a legitimate problem that patients want “cured,” most of the medical community doesn’t view cellulite as a disorder. Instead, it is considered a normal condition of many women and some men.</p>
<h5>TIPS FOR AVOIDING CELLULITE</h5> 
<p>Eating a healthy diet rich in fruits, vegetables, and fibres
Staying hydrated with plenty of fluids
Exercising regularly to keep muscles toned and bones strong
Maintaining a healthy weight (no yo-yo dieting)
Not smoking</p>


<h5>WHY SKIN & YOU CLINIC FOR CELLULITE TREATMENT</h5> 
<p>Skin & You Clinic, Mumbai, specializes in cellulite treatments. We understand the inadequacy of superficial creams while tackling the problem and thus address the problem with treatments. Results are visible after a set of 4-6 treatments.</p>
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

export default Cellulite;
