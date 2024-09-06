import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DermalFillers: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Dermal Fillers</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={BlogImg1}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h5>DERMAL FILLER TREATMENT</h5>
                <p>
                  Go gorgeous and still go easy on your pockets. Here’s an easy
                  way to get a dazzling look.
                </p>
                <h5>Why Skin Ages</h5>
                <p>
                  With increasing age, the hyaluronic acid (HA) content in the
                  skin decreases, reducing its capacity to stay moist and
                  supple. In addition to this, oil producing glands become less
                  active, making the skin dry. Overtime, skin also loses fat and
                  as a result, its youthful glow and smoothness get diminished.
                </p>
                <h5>How Skin Looks As You Get Older</h5>
                <p>
                  At 25 – Visible skin aging begins; old cells in the skin get
                  replaced more slowly.
                </p>
                <p>
                  At 30 – More fine lines develop due to a breakdown in collagen
                  and elastin; delicate skin under the eyes begins to thin.
                </p>
                <p>
                  At 40 – Deeper lines begin to etch around the mouth and eyes;
                  furrows appear on the forehead, and circles under the eyes may
                  grow into pouches. Skin becomes noticeably drier.
                </p>
                <p>
                  At 45+ – The skin becomes thinner, partly because of hormonal
                  changes; it loses much of its strength and elasticity.
                </p>
                <p>At 50+ – Age starts to show on your face.</p>
                <h5>About Dermal Fillers</h5>
                <p>
                  Fillers contain HA which is a form of natural sugar that our
                  body produces routinely. HA fillers are the most preferred
                  form of dermal fillers due to their efficacy and safety
                  quotient.
                </p>
                <h5>Benefits of Dermal Fillers</h5>
                Dermal fillers essentially enhance the facial beauty of a
                person. They are used for Smoothening nasolabial (smile lines)
                folds for a youthful look. Shaping lips to make them look more
                luscious and beautiful. Shaping cheeks by making the cheekbones
                look higher and more chiseled, thus knocking off years from the
                face. Shaping the nose to make it look more aligned with the
                rest of your features. Shaping the jaw line for enhanced beauty.
                Smoothening the skin under the eyes to reduce signs of aging.and
                reduce dark circles.
                <h5>How It Works</h5>
                <p>
                  When injected into the skin layers, it fills up the space and
                  does away with the imperfections of the skin, caused due to
                  aging.
                </p>
                <p>Length of procedure – It takes about 15-30 minutes.</p>
                <p>
                  Effectiveness for at least a year – There are different
                  fillers available in the market which will give effects of
                  varying duration, but the minimum duration for its
                  effectiveness is between 10 and 12 months.
                </p>
                <p>
                  Possible side effects – The reactions are generally
                  injection-related
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Bruising that lasts for a week or so, but can be covered
                    with make-up application
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Some redness
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    little pain which is minimized by a local anesthetic cream.
                    New fillers contain a local anesthetic in them
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Bumpiness and lumpiness
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Swelling for 2-3 days post-treatment; this often subsides
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin & You Clinic Treats The Following Problem Areas
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Upper Face – Fine lines and wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Mid-Face – Tear trough/Nose shaping/Cheek shaping.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lower Face – Nasolabial folds/ lip volumizing and
                    reshaping/chin reshaping/mental crease/jawline shaping.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Scars on Face
                  </p>
                </p>
                <h5>Do’s and Dont’s</h5>
                <p>
                  Avoid Aspirin, Ibuprofen and Vitamin E for 3 days before and
                  after the treatment. Take Arnica before and after the
                  procedure. Avoid steam, sauna, heat and any facial treatments
                  for 3 days after the procedure. Call the doctor immediately in
                  case of any discomfort. Bruising and hematoma may occur after
                  the treatment, so do not schedule any social engagement
                  immediately after treatment. Do a follow-up session after 6-8
                  months.
                </p>
                <h5>Why Skin & You Clinic for Dermal filler Injections?</h5>
                <p>
                  We at Skin & You Clinic are trained and we understand the
                  importance of facial aesthetics, the need to balance the face
                  proportions and just put the minimum amount of filler needed
                  to enhance your facial features. The procedure is safe, simple
                  and effective.
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

export default DermalFillers;
