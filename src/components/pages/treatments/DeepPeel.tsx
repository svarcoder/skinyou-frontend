import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import SideBar from "./SideBar";

const DeepPeel: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Deep Peel</h1>
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
                <h5>
                  Deep Peel: Intensive Skin Resurfacing for Dramatic Results
                </h5>
                <p>
                  At Skin & You Clinic, our Deep Peel treatment offers powerful
                  skin resurfacing designed to address more severe skin
                  imperfections, including deep wrinkles, scars, and
                  pigmentation issues. This advanced treatment penetrates deeper
                  layers of the skin, providing significant rejuvenation and a
                  more youthful appearance.
                </p>
                <h5>How It Works:</h5>
                <p>
                  Deep Peels use a stronger concentration of chemical exfoliants
                  to remove the outer layers of the skin, revealing fresh, new
                  skin underneath. This process stimulates collagen production,
                  which helps to firm the skin and improve its overall texture
                  and tone.
                </p>
                <h5>Treatment Areas:</h5>
                Face: To reduce the appearance of deep wrinkles, scars, and
                hyperpigmentation. Neck: To improve skin firmness and reduce
                signs of aging. Hands: To treat age spots and improve skin
                texture.
                <h5>The Procedure:</h5>
                <p>
                  The Deep Peel treatment involves the application of a potent
                  chemical solution to the skin, which is left on for a specific
                  period to achieve the desired level of exfoliation. The
                  procedure can take up to 60 minutes, depending on the
                  treatment area. Due to the intensity of this peel, a recovery
                  period is required, during which the skin will peel and
                  regenerate.
                </p>
                <h5>Results:</h5>
                <p>
                  Following the peeling process, you will see a significant
                  improvement in the skin’s texture, tone, and overall
                  appearance. Deep wrinkles, scars, and pigmentation will be
                  visibly reduced, and your skin will appear more youthful and
                  revitalized. Full results are typically seen after several
                  weeks, once the skin has fully healed.
                </p>
                <h5>Possible Side Effects:</h5>
                <p>
                  Due to its intensity, the Deep Peel may cause temporary
                  redness, swelling, and peeling, which can last several days to
                  weeks, depending on the individual. It is important to follow
                  post-treatment care instructions carefully to ensure proper
                  healing and to avoid complications such as infection or
                  scarring.
                </p>
                <h5>Why Choose Skin & You Clinic for Deep Peel Treatments?</h5>
                <p>
                  At Skin & You Clinic, our Deep Peel treatments are performed
                  by experienced professionals who tailor the procedure to your
                  specific skin concerns and goals. We prioritize your safety
                  and comfort, ensuring that you receive the best possible care
                  and achieve dramatic, long-lasting results.
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

export default DeepPeel;
