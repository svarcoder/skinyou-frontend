import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import SideBar from "./SideBar";

const CrystalSkinPolishing: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Crystal Skin Polishing</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Professional peeling is an important precondition for
                  effective skin rejuvenation. Gentle abrasion of the dead skin
                  cells creates the ideal condition for effective nutrition to
                  the deeper skin layers.{" "}
                </p>
                <p>
                  Microdermabrasion at Skin & You Clinic, Mumbai, offers the
                  ultimate peeling solution – it is controlled and gentle, yet
                  highly effective and suitable for every skin type. Immediately
                  after a treatment, the skin looks fresh and rosy and the
                  results improve with every treatment.
                </p>

                <h5>About Microdermabrasion</h5>
                <p>
                  It is a process that exfoliates, polishes, and increases the
                  lymphatic drainage of skin. It uses a gentle vacuum to bring
                  your skin in contact with crystals that gently remove the top
                  layer of dead skin. It can be used to help treat various skin
                  conditions such as acne, Comedones (blackheads), and dull or
                  rough skin. It is most commonly used on the face, but can be
                  also used on the neck, back, and hands.
                </p>

                <h5>Quick Facts</h5>
                <p>
                  Microdermabrasion is a process that exfoliates the skin using
                  a gentle vacuum that brings skin into contact with the
                  crystals. It can be used for various skin conditions like acne
                  scars or to simply improve dull or rough skin.
                </p>
                <p>
                  Microdermabrasion takes around 30-45 minutes and usually a few
                  sessions are required for optimal results. Temporary redness
                  may occur after microdermabrasion. Microdermabrasion is a safe
                  and effective procedure
                </p>

                <p>
                  Microdermabrasion can be used for – Skin rejuvenation,
                  Hyperkeratosis, Sun light and age damaged skin, pigmentation
                  disorders, uneven skin, Stretch Marks and scars.
                </p>

                <p>
                  The Procedure – Generally, a session of microdermabrasion of
                  the face takes approximately 30-45 minutes. It is not painful
                  and it may feel like you are having a facial.
                </p>

                <p>
                  Prior to microdermabrasion, your face is thoroughly cleansed.
                  The microdermabrasion head is then systematically passed over
                  the face multiple times. Particular creams or serums are put
                  on your face after the procedure has been completed. After
                  microdermabrasion, your skin may appear red and this usually
                  persists for a short time and you will notice that your skin
                  feels soft and smooth afterwards.
                </p>

                <h5>ADVICE FOR MICRODERMABRASION</h5>
                <h5>Pre Treatment</h5>
                <p>
                  Please stop all applications 2 days before the day of
                  treatment. Use sunscreen regularly before the start of the
                  treatment. If you are on any kind of medication, share all
                  details with the doctor performing the procedure.
                </p>
                <h5>On the day of Treatment</h5>
                <p>
                  Please do not wear any make-up on the day of treatment. A peel
                  procedure can sometimes have some very short-term
                  after-effects, so don’t be alarmed if you experience redness
                  or irritation of skin for 1-2 days after the treatment.
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
                  We recommend a gap of 3-4 weeks between the microdermabrasion.
                  Avoid any applications for 3 days after the treatment.
                </p>

                <h5>Why Skin & You Clinic for skin polishing procedure?</h5>
                <p>
                  We at Skin & You Clinic use the safest and sterilized
                  crystals; the procedure is done under complete medical
                  guidance. Skin polishing procedure can be combined with all
                  treatments possible such as Peels, Alma Photofacial, and
                  Fillers to give a Cumulative result.
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

export default CrystalSkinPolishing;
