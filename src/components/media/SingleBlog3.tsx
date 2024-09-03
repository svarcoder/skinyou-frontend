import React from "react";
import BlogImg3 from "../../assets/blog/lipocontrast-blog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SingleBlog3: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary">
        <div className="container container-top">
          <div className="text-center mt-4">
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
                  src={BlogImg3}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">
                  Now “LIPOCONTRAST” at skin & you clinic
                </h3>

                <h5>
                  {" "}
                  LipoContrast is a new technology that results in localized fat
                  reduction within a Selective and non-invasive procedure:
                  thermal contrast lipolysis.
                </h5>

                <h5>
                  Lipocontrast is the non-invasive technique for local fat
                  reduction is on the move.
                </h5>

                <h5>
                  DURATION OF THE TREATMENT Single session will last about 60
                  minutes.
                </h5>

                <h5>EFFECTS</h5>
                <h5>
                  Fat cells elimination The elimination process of exposed
                  adipocytes to LipoContrast action is Carried out on two
                  different ways:
                </h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Part of the cells are disabled directly during the session
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Other part will suffer cell destruction and will be
                    gradually eliminated within a few weeks. Some fat cells are
                    disabled during the session while others will be eliminated
                    within 2 or 3 weeks
                  </p>
                </p>

                <h5>
                  After the procedure After being subjected to this triphasic
                  thermal shock:
                </h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Some fat cells are immediately impaired and will be
                    eliminated within a Few days
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Others fat cells enter in cell destruction phase and will be
                    progressively eliminated within a few weeks.
                  </p>
                </p>

                <h5>ADVANTAGES</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The new LipoContrast procedure
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    faster and better fat tissue reduction compared with normal
                    cryolysis procedure
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Increased effectiveness on fibrous fat
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoids traumatic experience of invasive methods such as
                    liposuction
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Prevent contiguous tissue damage that can occur with other
                    technologies as radiofrequency, ultrasounds or lasers
                  </p>
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

export default SingleBlog3;
