import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import SideBar from "./SideBar";

const SilkPeelDermalInfusion: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Blog Post</h1>
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
                  Silk Peel Dermal Infusion: Exfoliate, Extract, and Infuse
                </h3>

                <p>
                  Silk Peel Dermal Infusion at Skin & You Clinic is an advanced,
                  non-invasive skin resurfacing treatment that exfoliates,
                  extracts impurities, and infuses your skin with nourishing
                  serums, all in one step. This treatment is designed to address
                  a variety of skin concerns, including dryness, dullness, acne,
                  and hyperpigmentation, leaving your skin smooth, radiant, and
                  refreshed.
                </p>

                <h5>How It Works:</h5>

                <p>
                  The Silk Peel Dermal Infusion device uses a diamond-tip
                  exfoliator to gently remove the outermost layer of dead skin
                  cells while simultaneously vacuuming away debris and infusing
                  the skin with customized serums. These serums are tailored to
                  your specific skin concerns, ensuring optimal results.
                </p>

                <h5>Treatment Areas:</h5>

                <p>
                  Face: To treat dry, dull, or acne-prone skin, and to address
                  hyperpigmentation. Neck and Décolleté: To improve skin texture
                  and tone. Hands: To smooth and rejuvenate the skin.
                </p>

                <h5>The Procedure:</h5>

                <p>
                  The treatment is painless and typically takes 30 to 60
                  minutes. The diamond-tip exfoliator is passed over the skin,
                  while the vacuum action removes impurities and infuses the
                  chosen serum. There is no downtime, so you can return to your
                  daily activities immediately.
                </p>

                <h5>Results:</h5>

                <p>
                  You’ll see an immediate improvement in skin texture, tone, and
                  radiance. The skin will appear smoother, more hydrated, and
                  more even. For best results, a series of treatments is
                  recommended.
                </p>

                <h5>Possible Side Effects:</h5>

                <p>
                  Silk Peel Dermal Infusion is a gentle treatment with minimal
                  side effects. Some patients may experience slight redness or
                  sensitivity immediately after the procedure, but these effects
                  are temporary and typically resolve within a few hours.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Silk Peel Dermal Infusion?
                </h5>

                <p>
                  At Skin & You Clinic, we offer Silk Peel Dermal Infusion as a
                  comprehensive solution for various skin concerns. Our
                  experienced professionals customize each treatment to address
                  your unique needs, ensuring that you leave with refreshed,
                  glowing skin.
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

export default SilkPeelDermalInfusion;
