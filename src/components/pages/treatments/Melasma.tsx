import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Melasma: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Melasma</h1>
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

                <h5>Melasma Treatment: Targeted Solutions for Melasma</h5>
                <h5>Description:</h5>
                <p>
                  Melasma Treatment focuses on reducing the appearance of
                  melasma, a common skin condition characterized by dark patches
                  and discoloration. This treatment uses advanced technologies
                  to target and lighten melasma patches.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Treatment options for melasma include laser therapy, topical
                  creams, and chemical peels. These methods work to break down
                  melanin pigments and even out skin tone.
                </p>

                <h5>Benefits:</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lightens Pigmentation: Reduces dark patches and uneven skin
                    tone.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Skin Clarity: Enhances overall skin appearance.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Non-Invasive Options: Minimal discomfort and downtime.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Depending on the treatment method, sessions may last from 30
                  to 60 minutes. A series of treatments is usually required for
                  optimal results.
                </p>

                <h5>Results:</h5>
                <p>
                  Significant lightening of melasma patches and improved skin
                  tone are typically visible after several sessions.
                </p>

                <h5>Why Choose Skin & You Clinic for Melasma Treatment?</h5>
                <p>
                  We provide personalized melasma treatments using advanced
                  technologies to effectively target and lighten pigmentation,
                  improving your skin’s appearance.
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

export default Melasma;
