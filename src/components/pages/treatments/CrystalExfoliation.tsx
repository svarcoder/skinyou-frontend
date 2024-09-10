import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import SideBar from "./SideBar";

const CrystalExfoliation: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center">
            <h1>Crystal Exfoliation</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h3 className="mb-4">
                  Crystal Exfoliation: Revitalize Your Skin’s Surface
                </h3>

                <p>
                  Crystal Exfoliation at Skin & You Clinic is a time-tested
                  method of skin resurfacing that uses fine crystals to gently
                  exfoliate the skin, removing dead cells and revealing a fresh,
                  youthful complexion. This treatment is ideal for those looking
                  to address a variety of skin concerns, including fine lines,
                  dullness, and uneven skin texture.
                </p>

                <h5>How It Works:</h5>

                <p>
                  Crystal Exfoliation uses a stream of fine crystals to gently
                  abrade the skin’s surface, removing dead skin cells and
                  stimulating the production of new, healthy cells. This process
                  helps to improve skin texture, reduce the appearance of fine
                  lines, and even out skin tone.
                </p>

                <h5>Treatment Areas:</h5>

                <p>
                  Face: To improve texture, tone, and reduce the appearance of
                  fine lines and acne scars. Neck and Décolleté: To smooth and
                  firm the skin. Hands: To rejuvenate and even out skin tone.
                </p>
                <h5>The Procedure:</h5>

                <p>
                  The treatment involves passing a handheld device that emits
                  fine crystals over the skin, exfoliating the outer layer. The
                  procedure is painless and typically lasts 30 to 45 minutes.
                  There is no downtime, allowing you to quickly resume your
                  daily activities.
                </p>

                <h5>Results:</h5>

                <p>
                  You’ll notice an immediate improvement in skin texture and
                  radiance. The skin will appear smoother, more even, and more
                  youthful. For optimal results, a series of treatments is
                  recommended.
                </p>

                <h5>Possible Side Effects:</h5>

                <p>
                  Crystal Exfoliation is a gentle treatment with minimal side
                  effects. Some patients may experience slight redness or
                  sensitivity immediately after the procedure, but these effects
                  are temporary and typically resolve within a few hours.
                </p>

                <h5>Why Choose Skin & You Clinic for Crystal Exfoliation?</h5>

                <p>
                  At Skin & You Clinic, we combine advanced exfoliation
                  techniques with personalized care to deliver excellent
                  results. Our crystal exfoliation treatments are designed to
                  rejuvenate your skin safely and effectively, helping you
                  achieve a more radiant, youthful appearance.
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

export default CrystalExfoliation;
