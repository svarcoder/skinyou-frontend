import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Botox.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Botox: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Botox</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <video
                  src={ArticleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="img-fluid w-100 rounded mb-5"
                  style={{ height: "600px" }}
                />

                <h5>Anti-Wrinkle Injections & What You Need To Know</h5>
                <p>
                  Young at heart but all wrinkled up? Maybe it’s time for you to
                  look at cosmetic rejuvenation techniques that can truly
                  reflect the young spirit that you are.
                </p>

                <h5>About Wrinkles Formation</h5>
                <p>
                  Many facial wrinkles form when we use our muscles to make
                  facial expressions. These expressions are referred to as
                  ‘dynamic’ wrinkles. Over time these expressions form ‘static
                  lines’ on our face which means they are wrinkles that are
                  present even with no muscle movement. For example – We
                  sometimes see people with a permanent frown on their forehead,
                  they are actually not frowning but the muscles have got
                  accustomed to the wrong expression. This together with
                  environmental factors, like exposure to sunlight, smoking and
                  stress, all contribute to the creation of wrinkles and folds.
                </p>

                <h5>About Anti-Wrinkle Injections</h5>
                <p>
                  These injections contain a natural, purified protein that
                  relaxes dynamic wrinkle-causing muscles, creating a
                  rejuvenated appearance.
                </p>

                <h5>How It Works</h5>
                <p>
                  Anti-wrinkle injections can be used to relax specific facial
                  muscles that cause dynamic wrinkles. Thus the lines gradually
                  smoothen and new lines are prevented from forming.
                </p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Areas On The Face That Can Be Treated
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Upper Face – Worry lines/ Frown lines/ Eyebrow shaping
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Mid-Face – Wrinkles on smiling (crow’s feet)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lower Face – Jawline shaping/ sad angle of the mouth/ chin
                    shaping/ neck / decollate
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Excessive Sweating – Underarms/ Palms
                  </p>
                </p>

                <p>
                  No change in Facial Expressions – The injections do not change
                  facial expressions; they give a relaxed, rejuvenated and
                  refreshed look
                </p>

                <p>
                  The Procedure – The treatment is a non-surgical procedure
                  whereby a small amount of protein is administered by
                  injections with a fine needle into selected facial muscles by
                  a trained doctor. Normal activities can be resumed soon after.
                </p>

                <p>
                  See Quick Results – Within 3 days you may notice a softening
                  in the appearance of your frown lines between your brows and
                  it takes up to 7 days to see the full results. The area will
                  continue to improve for up to a month.
                </p>

                <p>
                  Possible Side-Effects – In the amounts used for treatment of
                  facial lines, the side effects are usually temporary and
                  localized. Some of them are Headache, burning or stinging at
                  the time of injecting. Possible bruising or swelling at the
                  injection site. Very rarely, eyebrow drooping or eyelid
                  drooping is seen, but this is short term. An Old and Tested
                  Treatment – treatment has a proven 20 years safety record and
                  has been effectively used in millions of patients worldwide.
                </p>

                <h5>Treatment Protocol</h5>
                <h5>Pre-treatment</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Before and after the procedure avoid or discontinue the
                    following medications – Ibuprofen/Aspirin, Ecosprin, and
                    Vitamin E.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Take Arnica tablets, for two days before and after the
                    treatment.
                  </p>
                </p>

                <h5>Post-treatment</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Do not exercise or swim on the day of your treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Do not massage or manipulate the injected area for 48 hours
                    after the treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Do not sleep, lift or bend for 4 hours after the treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Do not take steam or saunas or any facial treatment for at
                    least 2 days after the treatment.
                  </p>
                </p>

                <h5>Follow-up sessions</h5>
                <p>
                  You will need a follow-up session after 7 days, to assess the
                  results. A touch-up session can be done on the same day. You
                  will need a follow-up session after 4-8 months, please
                  schedule a consultation before the treatment is required.
                </p>

                <h5>Why Skin & You Clinic for Injections?</h5>
                <p>
                  It is a purified protein in minute injections it helps to
                  smoothen fine lines and wrinkles and give you a flawless
                  complexion. Unlike myths is a safe, painless lunch time
                  procedure the results are visible within 3-5 days of the
                  injections. It is not a permanent solution as touch up is
                  required every 3-5 months.
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

export default Botox;
