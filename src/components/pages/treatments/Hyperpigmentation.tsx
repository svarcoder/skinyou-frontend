import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Hyperpigmentation: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Blog Post</h1>
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
                <h3 className="mb-4">CACI TREATMENT</h3>

                <h5>
                  {" "}
                  Hyperpigmentation Treatment: Effective Solutions for Uneven
                  Skin Tone
                </h5>
                <h5>Description:</h5>
                <p>
                  Hyperpigmentation Treatment addresses areas of excessive
                  pigmentation, such as age spots and sun damage, to achieve a
                  more even and radiant complexion. We use various advanced
                  techniques to reduce and manage hyperpigmentation.
                </p>

                <h5>How It Works:</h5>
                <p>
                  Treatment options include laser therapy, chemical peels, and
                  topical treatments that target and reduce excess melanin
                  production in the skin.
                </p>

                <h5>Benefits:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Reduces Dark Spots: Lightens areas of excess pigmentation.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Improves Skin Tone: Enhances overall skin clarity and
                    evenness.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Customizable Treatments: Tailored to individual skin needs.
                  </p>
                </p>

                <h5>The Procedure:</h5>
                <p>
                  Treatment sessions last about 30-45 minutes. A series of
                  sessions is usually recommended, with minimal discomfort and
                  downtime.
                </p>

                <h5>Results:</h5>
                <p>
                  Improvement in skin tone and reduction in dark spots are
                  visible after several sessions, with optimal results achieved
                  over time.
                </p>

                <h5>
                  Why Choose Skin & You Clinic for Hyperpigmentation Treatment?
                </h5>
                <p>
                  Our clinic offers effective hyperpigmentation treatments with
                  advanced technology, providing personalized solutions for a
                  more even and radiant complexion.
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

export default Hyperpigmentation;
