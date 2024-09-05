import React from "react";
import BlogImg7 from "../../assets/blog/skin-care.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SingleBlog7: React.FC = () => {
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
                  src={BlogImg7}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">SKIN CARE DURING MONSOON</h3>

                <h5>
                  After bearing that extreme heat of sun in summer days monsoon
                  comes as sing of relief , little changes in the way you take
                  care of your skin could have positive effects during monsoons.
                </h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Keep skin moist by using soap free cleansers.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sunscreen lotion must be used even if sun is not visible.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Waterproof light make up will be a better choice.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Nails should be kept clean by regular manicure, pedicures.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Use luke warm water instead of cold water.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fungal infections are more common so avoid keeping skin wet
                    for long use antifungal soaps, powders.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Keep skin well hydrated by using good moisturiser depending
                    upon individual skin type.
                  </p>
                </p>

                <h5>
                  Oxygen facial done at the clinic or gel peels done are good to
                  be done during monsoons to keep skin glowing.
                </h5>
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

export default SingleBlog7;
