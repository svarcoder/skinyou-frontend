import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const OxygenFacialTreatment: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center">
            <h1>Oxygen Facial Treatment</h1>
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

                <p>
                  It acts as a healing tool to improve the appearance and
                  texture of the skin. Using the latest technology, it combines
                  pure oxygen with nourishing serum to penetrate deep layers of
                  the skin.
                </p>

                <h5>The Process</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    cocktail infusion of vitamins, aloevera, hyaluronic acid and
                    green tea extracts delivered into the skin with pure
                    hyperbaric oxygen, thus helping fight free radical damage
                    that causes fine lines and wrinkles.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The treatment lasts for around 45 minutes, is soothing and
                    calming and has neither side effects nor downtime.
                  </p>
                </p>

                <h5>The Results</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It makes your skin look younger, fresher and brighter.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It plumps up fine lines and lips, and rehydrates the skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It takes care of sun damage and brings back a youthful glow
                    to the face.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It is particularly effective for tired skin that is stressed
                    by city life.
                  </p>
                </p>

                <h5>Why Skin & You Clinic for oxygen facial Treatment?</h5>
                <p>
                  We at Skin & You Clinic use the intraceuticals system from new
                  zeland Australia, the serums and solutions used are well
                  researched and products suited according to skin type are
                  used. The procedure is simple effective with lasting results
                  and no downtime. A quick lunch time procedure.{" "}
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

export default OxygenFacialTreatment;
