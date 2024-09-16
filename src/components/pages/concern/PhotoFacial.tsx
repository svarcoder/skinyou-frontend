import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PhotoFacial: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Photo Facial</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">

              <h5> BENEFITS FOR SKIN</h5>
<p>Pigmentation – works to lighten and whiten the skin.
Reduce the Fine lines and wrinkles
Resurface Scars and stretch marks
Skin remodelling – increase the collagen and plump the skin
Skin Tightening of area around the eyes
Tighten open pores on the face
Painless Laser Facelift For: A Fabulous treatment to help rejuvenate the face, neck and décolletage. There is no pain or downtime and can be done on any skin type.</p>

<p>A painless Laser light is used that treats fine lines and wrinkles while also shrinking the appearance of pores, diminishing acne scarring and improving small veins, vessels and redness brought on by Red vessels. The Beauty of this treatment is that it allows microscopic beams to penetrate deeply to stimulate the production of collagen, decrease the pigmentation. The procedure is pain free and without downtime. The laser light is gentle enough to treat areas previously considered too sensitive for such laser treatments such as the skin around the eyes to help the appearance of dark circles and to tighten the eye region skin.</p>

<h5> TO NAME A FEW</h5>
<p>A super-fast treatment: It can take anywhere from 30 minutes for the full face to 1 hour for the face, neck and chest.
A virtually painless procedure: most people feel absolutely nothing
A procedure with no punctured skin
A procedure with minimal redness: and if there is any erythema, it usually disappears within an hour
A procedure with no downtime: you can continue all normal activities
An unmatched improvement in appearance of wrinkles and skin laxity</p>
<h5>WHY SKIN & YOU CLINIC FOR PHOTO FACIAL?</h5> 
<p>The technology we use works to lift and tighten skin, reduce damage from acne scars, and improve the tone of the neck bands while also providing preventive care for fine lines and wrinkles leaving you with a refreshed youthful glow in only a few simple treatment sessions. We generally recommend 5 treatment 2-3 weeks apart; results can be seen as early as 1-2 weeks and peaks at 3 months. This treatment is suitable for all ages and skin types and can be done in combination with other treatments.</p>
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

export default PhotoFacial;
