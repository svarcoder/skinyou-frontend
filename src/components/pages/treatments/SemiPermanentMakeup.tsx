import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SemiPermanentMakeup: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Semi-Permanent Makeup</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Semi permanent make up will enhance your natural beauty and
                  give your features shape and definition without ever having to
                  visit your make up bag.
                </p>

                <p>
                  Also known as micro pigmentation, it is the term used for
                  applying coloured pigments into the dermal layer of the skin.
                </p>

                <p>
                  The procedure is completely safe and effective and is used for
                  a variety of semi permanent cosmetic enhancements such as
                  eyebrows, eyeliner and lips.
                </p>

                <p>
                  Woman of all ages are experiencing the difference semi
                  permanent make up can bring. After just one procedure you can
                  have stunning smudge free make up that will last for several
                  years.
                </p>

                <h5>Put clinic pics</h5>

                <h5>EYEBROWS</h5>
                <p>
                  Anyone who requires emphasis of the brows will love this
                  procedure and the time saved never having to pencil again.
                </p>

                <p>
                  One the procedure is complete you can swim, play sports or lie
                  in the sun without the worry of ever losing your brows.
                </p>

                <p>
                  Choose between a soft textures look or hair simulation. If you
                  have no brow hair or sparse brows due to over-plucking , then
                  the difference balanced brows can make is amazing.
                </p>

                <h5>Pics</h5>

                <h5>EYELINER AND EYELASH ENHANCEMENT</h5>
                <p>Make the most of your eyes with semi permanent make up.</p>

                <p>
                  From subtle to dramatic, eyelash enhancement or eyeliner can
                  dramatically define eyes, creating great looks that are long
                  lasting and always perfect.
                </p>

                <h5>LIP LINER AND FULL COLOUR</h5>
                <p>
                  For a truly subtle and beautiful cosmetic effect, semi
                  permanent make up is an excellent way of enhancing the shape
                  and colour of your lips.
                </p>

                <p>
                  Your lips will look fuller and more shapely. This fabulous
                  procedure can help reduce lipstick bleed, ensuring that you
                  have perfect lips at all times. Full lip colour is also
                  available in a subtle shade to crisp, correct or redefine
                  lips. For a more striking effect, stronger colour can be
                  applied.
                </p>

                <h5>HOW LONG WILL THE MAKE UP LAST ?</h5>
                <p>
                  Although pigment molecules stay in the skin indefinitely, the
                  colour remains visible 1-2 years. This varies depending on
                  your age, skin type, colour choice and lifestyle. As with
                  traditional tattooing, you are choosing to make a commitment
                  to a semi permanent make up procedure. For optimum results you
                  should expect to attend a colour boost session every 18
                  months.
                </p>

                <h5>IS THE PROCEDURE PAINFUL?</h5>
                <p>
                  Everyone is difference but with advanced new equipment and
                  techniques, discomfort is minimal.
                </p>

                <h5>DO I HAVE A CHOICE ON PLACEMENT AND COLOUR?</h5>
                <p>
                  Definitely! You are in control every step of the way from
                  desired shape to colour selection.
                </p>

                <h5>HOW LONG IT WILL TAKE?</h5>
                <p>
                  You should allow a minimum of 1 ½ hours for a new procedure.
                </p>

                <h5>WHAT HAPPENS AFTER THE PROCEDURE?</h5>
                <p>
                  Immediately post procedure the area treated may appear swollen
                  and the colour will appear darker and more intense. This will
                  last for several days. Complete healing can take up to six
                  weeks for the pigment to mature in the skin and the true
                  colour to emerge.
                </p>

                <h5>WHAT OTHER PROCEDURES ARE AVAILABLE?</h5>
                <p>
                  Micropigmentation is used extensively in the medical industry
                  for areola pigmentation, scar camouflage, scar and burns
                  relaxation, and hair simulation tattooing , surgical scars
                  such as face lift or arm/thigh lift scars, breast
                  uplift/reconstruction scars, cleft lip.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR SEMI-PERMANENT MAKE UP?</h5>
                <p>
                  We at Skin & You Clinic use the most advanced tatoo machine ,
                  we have extnsive training in the procedure and have conducted
                  many procedures with good results.{" "}
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

export default SemiPermanentMakeup;
