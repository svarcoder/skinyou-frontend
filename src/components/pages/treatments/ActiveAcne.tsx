import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const ActiveAcne: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Active Acne</h1>
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
                <h5>Active Acne Treatment: Comprehensive Care for Acne</h5>

                <h5>Description:</h5>

                <p>
                  Active Acne Treatment focuses on managing and reducing active
                  acne breakouts using advanced therapies. We target the causes
                  of acne and help achieve clearer, healthier skin.
                </p>

                <h5>How It Works:</h5>

                <p>
                  Treatments may include laser therapy, chemical peels, and
                  topical medications that address acne-causing bacteria, reduce
                  inflammation, and improve skin texture.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Reduces Breakouts: Targets and clears active acne lesions.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Skin Texture: Reduces acne scars and uneven
                    texture.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Customizable Treatments: Tailored to individual acne
                    concerns.
                  </p>
                </p>

                <h5>The Procedure:</h5>

                <p>
                  Sessions vary depending on the chosen treatment, typically
                  lasting 30-60 minutes. A series of treatments is usually
                  required for optimal results.
                </p>

                <h5>Results:</h5>

                <p>
                  Clearer skin and reduction in acne lesions are noticeable
                  after several sessions.
                </p>

                <h5>Why Choose Skin & You Clinic for Active Acne Treatment?</h5>

                <p>
                  We offer comprehensive active acne treatments with advanced
                  technology, providing effective solutions for clear and
                  healthy skin.
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

export default ActiveAcne;
