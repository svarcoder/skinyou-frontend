import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/PRP.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PRP: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>PRP</h1>
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
                <h5>
                  PRP (Platelet-Rich Plasma) Therapy: Natural Hair and Skin
                  Rejuvenation
                </h5>
                <h5>Description:</h5>
                <p>
                  PRP therapy leverages your body’s own platelets to rejuvenate
                  and regenerate hair and skin. This natural treatment uses
                  concentrated plasma from your blood to promote healing and
                  enhance cellular growth.
                </p>

                <h5>How It Works:</h5>
                <p>
                  A small sample of your blood is drawn and processed to
                  concentrate the platelets. The resulting PRP is then injected
                  into the scalp or skin to stimulate collagen production and
                  hair follicle activity.
                </p>

                <h5>Benefits:</h5>

                <p>
                  Promotes Natural Healing: Utilizes your body’s own healing
                  properties. Reduces Hair Loss: Stimulates new hair growth and
                  strengthens existing hair. Improves Skin Texture: Enhances
                  skin tone and reduces fine lines.
                </p>

                <h5>The Procedure:</h5>
                <p>
                  PRP therapy takes about 60 minutes, including blood draw and
                  injection. Local anesthesia is used to minimize discomfort.
                  Results can be seen within a few weeks, with optimal effects
                  visible after several months.
                </p>

                <h5>Results:</h5>
                <p>
                  Hair density and skin texture improve over a series of
                  sessions. Maintenance treatments may be needed for sustained
                  results.
                </p>

                <h5>Why Choose Skin & You Clinic for PRP Therapy?</h5>
                <p>
                  Our clinic offers personalized PRP treatments using advanced
                  techniques to ensure effective results and optimal patient
                  care.
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

export default PRP;
