import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import SideBar from "./SideBar";

const DiamondTip: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Diamond Tip</h1>
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
                <h3 className="mb-4">
                  Diamond Tip Exfoliation: Precision Skin Resurfacing
                </h3>

                <p>
                  Diamond Tip Exfoliation at Skin & You Clinic is a
                  precision-based skin resurfacing treatment that gently
                  exfoliates the skin, removing dead cells and revealing a
                  brighter, more youthful complexion. This treatment is ideal
                  for those looking to improve skin texture, reduce the
                  appearance of fine lines, and achieve a smoother, more even
                  skin tone.
                </p>

                <h5>How It Works:</h5>

                <p>
                  Using a handheld device equipped with a diamond-encrusted tip,
                  this treatment gently abrades the skin’s surface, removing the
                  outer layer of dead skin cells. The process stimulates the
                  production of new skin cells and collagen, leading to improved
                  skin texture and elasticity.
                </p>

                <h5>Treatment Areas:</h5>

                <p>
                  Face: To improve texture, tone, and reduce the appearance of
                  fine lines and acne scars. Neck and Décolleté: To smooth and
                  firm the skin. Hands: To rejuvenate and even out skin tone.
                  The Procedure:
                </p>

                <p>
                  The treatment involves passing the diamond tip device over the
                  skin in a controlled manner, exfoliating the outer layer. The
                  procedure is painless and typically lasts 30 to 45 minutes.
                  There is no downtime, so you can resume your normal activities
                  right after the treatment.
                </p>

                <h5>Results:</h5>

                <p>
                  You’ll notice an immediate improvement in skin smoothness and
                  radiance. With regular treatments, you can achieve a
                  significant reduction in fine lines, acne scars, and uneven
                  skin tone, resulting in a more youthful appearance.
                </p>

                <h5>Possible Side Effects:</h5>

                <p>
                  Diamond Tip Exfoliation is a safe and gentle treatment with
                  minimal side effects. Some patients may experience slight
                  redness or sensitivity immediately after the procedure, but
                  these effects are temporary and usually resolve within a few
                  hours.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Diamond Tip Exfoliation?
                </h5>

                <p>
                  At Skin & You Clinic, we use the latest in diamond tip
                  technology to provide effective, safe exfoliation treatments.
                  Our team is dedicated to helping you achieve smoother, more
                  radiant skin with personalized care and attention to detail.
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

export default DiamondTip;
