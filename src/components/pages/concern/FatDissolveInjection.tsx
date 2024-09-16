import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const FatDissolveInjection: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Fat dissolve Injection</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
       
              <p>Fat dissolving injections are an exciting treatment specifically designed to reduce the size of localised fat deposits on the body.

It is ideal to treat the fat deposits that will not disappear despite maintaining a proper diet and exercise regime such as “love handles”.
</p>
<h5>WHAT DO THE INJECTIONS CONTAIN?</h5> 
<p>The injections contain naturally occurring substance, phospha-tadiylcholine (PPC), which is found naturally in every cell of the body. PPC has been shown to break down fat and destroy the fat cells. The broken-down fat is then metabolised by the body, turned into energy, is used by the muscles or is excreted from liver and kidneys as waste product.

PPC is a wonderful alternative to costly and invasive surgical techniques such as liposuction, and the results can be impressive. The treatment is assisted with other skin tightening treatments at the centre.
</p>
<h5>HOW MANY TREATMENTS ARE NEEDED AT SKIN & YOU CLINIC?</h5> 
<p>A set of 4 to 6 treatments are advised for fat dissolving process to complete. More treatments can be done if required for more reduction or to target larger volumes. It is a low cost, effective, and walk-in-walk-out technique. It is a great alternative to liposuction for small areas.
</p>
<h5>WHEN WILL I SEE THE RESULTS?</h5> 
<p>Initial results usually become apparent after completion of the second treatment. It takes 2 weeks to start seeing result. The results accumulate over time with each additional treatment.
</p>
<h5> IS IT PAINFUL?</h5>
<p>A very thin needle is used to inject the medicated solution into the treated area. The sensation is like a pinch with a burning sensation.
</p>
<h5>IS IT PERMANENT?</h5> 
<p>The destroyed fat cells in each area don’t regenerate. However, due to ageing, lack of exercise and poor diet, people may want further treatment over the years. Lipo-dissolve shouldn’t be used as an alternative to a proper weight management program.
</p>
<h5> WHO CAN GET TREATED?</h5>
<p>Lipo-dissolve is not recommended for minors, pregnant or lactating women, and diabetics, persons suffering an auto-immune disease, severe liver disease, anyone with severe obesity or anyone with acute or chronic infection.
</p>
<h5>ARE THERE ANY SIDE-EFFECTS?</h5> 
<p>Lipo-dissolve treatments are extremely safe. There have been reports of minor bruising or soreness after the treatment.
</p>
<h5>WILL IT GET RID OF CELLULITE?</h5> 
<p>Yes it works very well on cellulite.</p>

<h5>WHY SKIN & YOU CLINIC FOR LIPO DISSOLVE INJECTION?</h5> 
<p> at Skin & You Clinic, use the safest formula which is internationally approved, safe and effective. We have done the treatment successfully for a number of patients with no downtime or side effects.
</p>
              </div>
            </div>

            <div className="col-lg-3">
              <SideBar />
            </div>
          </div>
        We</div>
      </div>
    </>
  );
};

export default FatDissolveInjection;
