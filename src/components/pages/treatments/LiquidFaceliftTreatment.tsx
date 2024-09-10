import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LiquidFaceliftTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Liquid Facelift Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>LIQUID FACE LIFT /COLLAGEN INJECTIONS</h5>
                <p>Turn the clock back with this revolutionary procedure</p>

                <h5>WHAT IS LIQUID FACE LIFT?</h5>
                <p>
                  You need to change the tired look on the face but you don’t
                  know how? You think a surgical face lift is the only option,
                  but you are wrong.
                </p>

                <p>
                  You do not like the fact that your cheeks look flat, you look
                  tired with crinkly skin and deep lines and wrinkles and deep
                  folds on the face, and especially the sagging face bothers
                  you. So what do we do?
                </p>

                <p>
                  Hyaluronic acid is natural sugar present in dermis, filling
                  the space between collagen and elastin fibres .its hydrophilic
                  property attracts water which contributes to hydration and
                  volumization of skin.
                </p>

                <p>
                  hyaluronic acid is commonly used to fill wrinkles in the face
                  and neck areas and also as a facelift treatment by using it
                  for hydration for full face .hyaluronic acid is a natural
                  substance which makes the skin more firm and elastic. hyaluron
                  has similar effects as collagen but the if we inject
                  hyaluronic acid it last longer.
                </p>

                <h5>HOW IS THE PROCEDURE PERFORMED?</h5>
                <p>
                  non invasive cosmetic procedure involving microinjections into
                  multiple areas of the skin of face as an effort to hydrate
                  ,plump skin treat wrinkles and rejuvenate facial skin and
                  slowing the process of aging.
                </p>

                <h5>
                  BENEFITS OF LIQUID FACELIFT PROCEDURE AT SKIN &YOU CLINIC The
                  treatment is safe, simple, reliablequick lunch time procedure.
                </h5>
                <p>
                  Results –Results last for 3 to 4 months depending upon area
                  treated. The filling process is safe, temporary with dramatic
                  results.
                </p>

                <p>
                  Liquid face lift is a simple procedure carefully designed to
                  put hyaluronic acid (a substance that exists naturally in
                  abundance in your skin) in an aesthetic manner in the lines
                  and folds of the skin.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR LIQUID FACE LIFT?</h5>
                <p>
                  We at Skin & You Clinic can perform the procedure for any area
                  of the face with natural aesthetic results.
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

export default LiquidFaceliftTreatment;
