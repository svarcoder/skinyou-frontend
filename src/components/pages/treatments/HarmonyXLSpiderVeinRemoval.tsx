import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const HarmonyXLSpiderVeinRemoval: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Harmony XL Spider Vein Removal</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>
                  These are also called spider veins they are small dilated
                  blood vessels near the surface of the skin or mucous membrane
                  which can be 0.5 to 1mm in diameter
                </h5>

                <h5>AREAS</h5>
                <p>
                  Commonly seen on face ,around the nose,cheeks,chin,legs
                  upperthigh,below the knee joint,around the ankles They blanch
                  with pressure commonly seen in children,it can persist for
                  years
                </p>

                <h5>CAUSES</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Pregnancy
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Prolonged Standing
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Commonly seen in people with rosacea
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Steroid Overuse
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Oestrogen Therapy
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Trauma
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Radiotherapy for Cancer, Patients on Chemotherapy
                  </p>
                </p>

                <h5>TREATMENT AT SKIN & YOU CLINIC FOR SPIDER VEIN REMOVAL</h5>
                <p>
                  The treatment of facial telangiactasis and erythema is one of
                  the most frequent indication for cutaneous laser therapy KTP,
                  Double q switched ND Yag work well on spider veins.
                </p>

                <p>
                  One treatment is usually sufficient although multiple
                  treatments may be required
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR TELANGECTASIA?</h5>
                <p>
                  Our team of qualified doctors and with the best laser
                  technology available we can deliver results with no downime or
                  side effects.
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

export default HarmonyXLSpiderVeinRemoval;
