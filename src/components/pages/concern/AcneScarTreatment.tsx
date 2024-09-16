import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AcneScarTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Acne Scar Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
         
              <p>Even with the most careful and conscientious treatment, acne scars may still occur.</p>

              <h5> DIFFERENT TYPES OF ACNE SCARS</h5>
<p>Puckered Scars: The skin appears to have been pierced by a needle.

Rolling Scars: This type causes rolling or “wave-like” undulations across otherwise normal-appearing skin.

Boxcar scars: They are round or oval depressions wider than ice-pick scars. They develop as a result of tissue loss from a severe breakout. They give the skin a pitted appearance.

Hypertrophic scars (click to read more about hypertrophic scars): They appear as firm, raised scars and are usually larger than the original acne in size.</p>

<h5> TREATMENTS AT SKIN & YOU CLINIC FOR ACNE SCARS</h5>
<p>Alma Photo Facial: is a breakthrough painless technology that stimulates collagen and decreases unwanted pigmentation thus working on acne scars and red and brown marks left by acne. The post acne pigmentation is cleared and the scars appear smooth and resurfaced.RF pixel (Laser Resurfacing): Laser resurfacing with a pixel is a method of treating acne scarring. The laser causes controlled injury to the skin. During the procedure, just a small portion of the tissue is resurfaced at a time. The remaining tissue supplies the healing that leads to the elimination of irregular superficial pigmentation, filling of the scar and the smoothing of the skin .This is achieved as the laser helps in collagen regeneration and ultimately causes scar filling. (Click RF pixel for more information)</p>



<h5>OTHER TREATMENTS BESIDES LASER FOR ACNE SCARS</h5> 
<p>Chemical Peels: They are also effective in treating acne scars. They result in a smooth, even surface along with improving the texture of the skin. Read more

Skin polishing (Microdermabrasion): It is a procedure that removes the superficial layer of skin helping in resurfacing of the scars, but only for superficial ones. It uses a gentle vacuum along with crystals and gently abrades the top layer of dead skin. This also stimulates collagen production and helps heal the scars. As the skin heals from the procedure, the surface appears smoother and fresher. Read more

Mesotherapy: It is a non-surgical, relatively painless procedure wherein multiple microinjections deliver vitamins, amino acids, hyaluronic acid, etc into the skin stimulating collagen production and help in scar resurfacing. Significant improvement in the scar surface has been noticed with this procedure. Read more

Derma Roller: A medical micro-needling procedure that releases new collagen and elastin in the scar tissue. Thus effective in scar filling as well as rejuvenation. Mostly useful in indented or rolling scars. Read more

Filler Injections: A cross-linked hyaluronic acid is injected beneath the skin to replace the body’s natural collagen that has been lost. It is mostly useful for depressed scars like boxcars or rolling scars. Procedure can last for up to 8 – 12 months. When done in combination with other treatments, the results can be good. Read more</p>

<h5>WHY SKIN AND YOU CLINIC FOR ACNE SCAR TREATMENT?</h5> 
<p>We at skin and you specialise in acne scar treatments. We have a systematic approach to scars and understand that scars have a physical and emotional effect on the patients.</p>
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

export default AcneScarTreatment;
