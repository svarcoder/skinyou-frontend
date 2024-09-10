import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const NailInfection: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Nail Infection</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>
                  Nail Infection Treatment: Effective Solutions for Nail
                  Infections
                </h5>
                <h5>Description:</h5>
                <p>
                  Nail Infection Treatment addresses various fungal and
                  bacterial infections affecting the nails. Using advanced
                  therapies, we target and eliminate infections to restore
                  healthy nail growth.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Treatment options include antifungal medications, laser
                  therapy, and topical treatments that target and eradicate
                  infection-causing pathogens.
                </p>

                <h5>Benefits:</h5>

                <p>
                  Effective Infection Control: Targets and eliminates fungal and
                  bacterial infections. Restores Nail Health: Promotes healthy
                  nail growth. Non-Invasive Options: Minimizes discomfort and
                  downtime.
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Treatment duration and frequency vary based on the infection’s
                  severity. Sessions typically last around 30 minutes, with
                  ongoing care required for optimal results.
                </p>

                <h5>Results:</h5>
                <p>
                  Improvement in nail health and infection clearance are visible
                  after several treatments.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Nail Infection Treatment?
                </h5>
                <p>
                  Our clinic provides effective solutions for nail infections
                  with advanced technology and personalized care, ensuring
                  healthy and clear nails.
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

export default NailInfection;
