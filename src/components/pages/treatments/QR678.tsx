import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const QR678: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>QR678</h1>
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

                <h5>QR678: Advanced Hair Restoration</h5>
                <h5>Description:</h5>
                <p>
                  QR678 is an innovative hair restoration treatment that uses a
                  combination of growth factors and regenerative molecules to
                  stimulate hair growth and improve hair density. This
                  cutting-edge therapy is designed to address hair thinning and
                  hair loss with minimal downtime.
                </p>

                <h5>How It Works:</h5>
                <p>
                  QR678 involves the injection of a specialized solution
                  containing growth factors and biomolecules directly into the
                  scalp. These components promote hair follicle activation and
                  regeneration, leading to improved hair growth and density.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stimulates Hair Growth: Activates dormant hair follicles.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Hair Density: Enhances the thickness of existing
                    hair.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Non-Surgical: Minimally invasive with minimal recovery time.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  The treatment typically takes 30-45 minutes and involves a
                  series of small injections into the scalp. A local anesthetic
                  is applied to ensure comfort. Results begin to appear in a few
                  months, with continued improvement over time.
                </p>

                <h5>Results:</h5>
                <p>
                  Patients can expect to see noticeable hair growth and
                  increased density within 3-6 months. Maintenance sessions may
                  be required to sustain results.
                </p>

                <h5>Why Choose Skin & You Clinic for QR678?</h5>
                <p>
                  At Skin & You Clinic, we utilize the latest technologies and
                  techniques to offer effective QR678 treatments tailored to
                  your specific hair restoration needs.
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

export default QR678;
