import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DermaRollerTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Derma Roller Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>HOW IT WORKS</h5>
                <p>
                  Derma rollers are used for a treatment process called
                  micro-needling or skin needling. It is a form of collagen
                  induction therapy. The actual derma roller is made up of a
                  small, solid wheel attached to a little stick that propels it
                  backwards and forwards across your face in small sections. The
                  roller is covered with hundreds of minuscule ‘micro-medical’
                  needles that penetrate the skin, creating lots of tiny micro
                  injuries. Your skin responds by producing extra collagen to
                  ‘heal’ the punctures, and that’s what plumps up the skin again
                  and enhances the natural blood supply – so you get a natural
                  ‘glow’. Depressed acne scars, wrinkles, skin texture and
                  tightness are all improved as a result.
                </p>

                <h5>DERMA ROLLER TREATS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fine Lines and Wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Anti – Ageing / Skin Tightening
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne Scars/ Pitted Scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Open Pores / Skin Texture improvement
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stretch Marks
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hair Loss
                  </p>
                </p>

                <h5>THE PROCEDURE</h5>
                <p>
                  A local anaesthetic is applied on the skin to make the
                  treatment comfortable. The skin roller is then passed over the
                  treatment area multiple times. Skin needling can be used to
                  improve the above skin conditions with less risk of skin
                  pigment changes, especially with olive/darker skin types that
                  commonly occur with laser treatment.
                </p>
                <p>
                  Usually 2-5 sessions are required for the optimal result.
                  Areas that can be treated are – The face, hands, neck, back
                  and chest can be treated with skin needling; but most
                  commonly, only the face is treated.
                </p>

                <p>
                  Suitable candidates for skin needling – Are those with acne
                  scarring, fine lines and those looking to improve skin texture
                  and tightness. It can be used on all skin types and from light
                  to dark skins. As opposed to laser treatments, there is less
                  chance of pigmentation problems after the treatment. It is not
                  suitable for people who have open cuts, wounds or sun-burnt
                  skin.
                </p>
                <p>
                  How the treatment feels – Most patients describe derma roller
                  as ‘uncomfortable’ but not painful. To make the treatment
                  comfortable a topical local anaesthetic can be used.
                </p>

                <p>
                  Most non-surgical treatments work on the principle of
                  superficially damaging or causing minor trauma to the skin and
                  forcing the body to heal itself by stimulating the body’s
                  natural collagen reproduction. As we know, collagen, God’s
                  gift to good skin, gets reduced and destroyed by age and the
                  sun. Derma roller also tightens the skin and reduces
                  pigmentation and improves sun damaged skin.
                </p>

                <p>
                  Possible side-effects – Generally, you will experience some
                  redness of the skin for a few hours after the procedure.
                </p>

                <h5>ADVICE FOR DERMAROLLER PROCEDURE</h5>
                <h5>Pre Treatment</h5>

                <p>
                  Stop all applications 2 days prior to the treatment day. Use
                  sunscreen regularly before the start of the treatment. If you
                  are on any kind of medication, share all details with the
                  doctor performing the procedure.
                </p>
                <h5>On the day of Treatment</h5>

                <p>
                  Do not wear any make-up on the day of treatment. A dermaroller
                  procedure can sometimes have some very short-term
                  after-effects, so don’t be alarmed if you experience redness
                  or irritation of skin for 1-2 days after treatment.
                </p>
                <h5>Post Treatment</h5>

                <p>
                  Avoid direct sun exposure after the treatment. Use sun screen
                  regularly, SPF 30+ or as advised. Avoid saunas, steam and
                  sunbathing for 7 days after the procedure. You can wash your
                  face 6-8 hours after the procedure, but we recommend using a
                  gentle face wash.
                </p>
                <p>
                  We recommend a gap of 3-4 weeks between the sessions. Post the
                  procedure, remember to use a moisturizer every 6 hrs, for a
                  period of at least 3 days.
                </p>
                <p>
                  Avoid applying any applications for 3 days after the
                  treatment.
                </p>
                <h5>WHY SKIN & YOU CLINIC FOR SKIN NEEDLING(DERMAROLLER)?</h5>
                <p>
                  The doctors at Skin & You Clinic, Mumbai, carefully assess the
                  condition of your skin and its suitability for the procedure.
                  We take ample time to prepare your skin for the procedure so
                  as to make it comfortable. We only use the highest quality
                  skin rollers to ensure best results. The first step is to
                  simply contact us for a consultation, wherein we will discuss
                  a realistic and achievable outcome from your treatment.
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

export default DermaRollerTreatment;
