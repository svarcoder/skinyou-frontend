import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import SideBar from "./SideBar";

const NCTF: React.FC = () => {
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
                  NCTF (New Cellular Treatment Factor): Comprehensive Skin
                  Revitalization
                </h3>

                <p>
                  At Skin & You Clinic, we offer NCTF treatments to revitalize
                  and rejuvenate your skin at a cellular level. NCTF is an
                  anti-aging mesotherapy solution composed of hyaluronic acid
                  and a unique blend of 59 active ingredients, including
                  vitamins, amino acids, minerals, coenzymes, and antioxidants.
                  This powerful combination works to deeply hydrate, nourish,
                  and improve the overall quality of your skin, targeting issues
                  like fine lines, dullness, and loss of elasticity.
                </p>

                <h5>How It Works:</h5>

                <p>
                  NCTF is delivered into the skin through microinjections,
                  allowing the active ingredients to penetrate deeply and
                  stimulate the skin’s natural regeneration process. The
                  treatment boosts collagen and elastin production, enhances
                  hydration, and revitalizes your skin from within, leading to a
                  more youthful and radiant complexion.
                </p>

                <h5>Treatment Areas:</h5>

                <p>
                  Face: To improve texture, hydration, and elasticity. Neck and
                  Décolleté: To reduce fine lines and firm the skin. Hands: To
                  restore smoothness and suppleness.
                </p>

                <h5>The Procedure:</h5>

                <p>
                  Each session involves a series of microinjections across the
                  treatment area, targeting specific skin concerns. The
                  procedure typically lasts 30 to 60 minutes, with minimal
                  discomfort thanks to the use of fine needles. For optimal
                  results, a series of sessions is recommended, followed by
                  maintenance treatments
                </p>

                <h5>Results:</h5>

                <p>
                  Visible improvements in skin texture, hydration, and radiance
                  can be seen within a few weeks, with continued enhancement
                  over time. Skin will appear plumper, smoother, and more
                  youthful, with a reduction in fine lines and other signs of
                  aging.
                </p>

                <h5>Possible Side Effects:</h5>

                <p>
                  NCTF treatments are generally well-tolerated, with minimal
                  side effects. Some patients may experience slight redness,
                  swelling, or bruising at the injection sites, but these
                  effects are temporary and usually resolve within a few hours
                  to a few days.
                </p>

                <h5>Why Choose Skin & You Clinic for NCTF Treatments?</h5>

                <p>
                  At Skin & You Clinic, we combine the latest in aesthetic
                  medicine with personalized care to deliver outstanding
                  results. Our NCTF treatments are administered by experienced
                  professionals who are dedicated to helping you achieve and
                  maintain a youthful, radiant complexion.
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

export default NCTF;
