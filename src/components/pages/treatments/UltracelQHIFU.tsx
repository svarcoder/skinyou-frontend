import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const UltracelQHIFU: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Ultracel Q+ HIFU</h1>
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
                  Ultracel Q+ HIFU: High-Intensity Focused Ultrasound for Face
                  Lifting
                </h5>
                <h5>Description:</h5>
                <p>
                  Ultracel Q+ HIFU is a non-invasive facial lifting treatment
                  that uses high-intensity focused ultrasound to target deeper
                  layers of the skin, promoting lifting and tightening effects.
                </p>

                <h5>How It Works:</h5>
                <p>
                  The HIFU technology delivers focused ultrasound energy to the
                  skin’s deeper layers, stimulating collagen production and
                  tightening the skin. This results in a natural lifting effect
                  without the need for surgery.
                </p>

                <h5>Benefits:</h5>

                <p>
                  Non-Surgical Face Lifting: Lifts and tightens skin without
                  invasive procedures. Stimulates Collagen Production: Enhances
                  skin elasticity and firmness. Minimal Downtime: Most patients
                  resume normal activities immediately.
                </p>

                <h5>The Procedure:</h5>
                <p>
                  The treatment lasts approximately 60 minutes and involves the
                  application of ultrasound energy to targeted areas of the
                  face. There is minimal discomfort and no downtime.
                </p>

                <h5>Results:</h5>
                <p>
                  Visible lifting and tightening effects can be seen within a
                  few weeks, with continued improvement over several months.
                  Results can last up to a year or more with proper maintenance.
                </p>

                <h5>Why Choose Skin & You Clinic for Ultracel Q+ HIFU?</h5>
                <p>
                  At Skin & You Clinic, we use the latest HIFU technology and
                  techniques to provide effective non-surgical face lifting
                  solutions tailored to your individual needs.
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

export default UltracelQHIFU;
