import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const HydrationFiller: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Hydration Filler</h1>
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
                  Hydration Filler: Deep Moisture for Plump, Youthful Skin
                </h5>
                <p>
                  Hydration fillers at Skin & You Clinic are designed to restore
                  and maintain optimal skin hydration, giving you plump, smooth,
                  and radiant skin. These fillers are made from hyaluronic acid,
                  a naturally occurring substance in the skin that attracts and
                  holds moisture, making it a key component in maintaining skin
                  health and elasticity.
                </p>

                <h5>How It Works:</h5>

                <p>
                  Hydration fillers are injected into the skin to replenish lost
                  moisture, enhance skin volume, and smooth out fine lines and
                  wrinkles. By binding water molecules to the skin, these
                  fillers provide deep hydration, improve skin texture, and
                  restore a youthful glow.
                </p>

                <h5>Treatment Areas:</h5>

                <p>
                  Face: To plump and smooth out fine lines, particularly around
                  the eyes, cheeks, and lips. Neck and Décolleté: To hydrate and
                  firm the skin, reducing the appearance of wrinkles. Hands: To
                  restore volume and smoothness.
                </p>

                <h5>The Procedure:</h5>

                <p>
                  The treatment involves injecting the hydration filler into the
                  targeted areas using fine needles. The procedure typically
                  takes 30 to 45 minutes, with minimal discomfort. Results are
                  immediate, and there is no downtime, allowing you to resume
                  normal activities right after the treatment.
                </p>

                <h5>Results:</h5>

                <p>
                  You’ll notice an immediate improvement in skin hydration,
                  volume, and smoothness. Fine lines and wrinkles are visibly
                  reduced, and the skin appears more youthful and radiant.
                  Results can last for several months, with maintenance sessions
                  recommended to prolong the effects.
                </p>

                <h5>Possible Side Effects:</h5>

                <p>
                  Hydration fillers are generally safe, with minimal side
                  effects. Some patients may experience temporary redness,
                  swelling, or bruising at the injection sites, but these
                  effects usually subside within a few hours to a few days.
                </p>
                <h5>
                  Why Choose Skin & You Clinic for Hydration Filler Treatments?
                </h5>

                <p>
                  At Skin & You Clinic, we use the highest quality hyaluronic
                  acid fillers to ensure safe, effective results. Our
                  experienced team is dedicated to helping you achieve and
                  maintain hydrated, youthful skin with treatments tailored to
                  your unique needs.
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

export default HydrationFiller;
