import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import BlogImg2 from "../../../assets/massage-1-390x344.jpg";
import BlogImg3 from "../../../assets/massage-3-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const TighteningFacialTreatment: React.FC = () => {
  const services = [
    "Web Design",
    "Web Development",
    "SEO Optimization",
    "Keyword Research",
    "Email Marketing",
  ];

  return (
    <>
      <div className="section section-lg bg-primary">
        <div className="container container-top">
          <div className="text-center mt-4">
            <h1>Blog Post</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={BlogImg1}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">Tightening Facial Treatment</h3>

                <p>
                  This facial gives an instant face and neck lift. A new skin
                  tightening technology combined with a mix of a cell-renewing
                  serum and enzymes (depending on individual skin types), makes
                  this facial extremely effective in renewing the skin and
                  giving it a glow.
                </p>

                <h5>The Process</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Double cleansing are used to exfoliate and remove dull dead
                    skin, collagen-lifting serum smoothens and softens lines of
                    aging while an eye-contour gel plumps up fine lines around
                    the eyes.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Advanced line repairing serum can be used to further plump
                    up facial lines and wrinkles with a Vitamin C and seaweed
                    extract mask containing collagen.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The treatment is safe, non-invasive with no side effects and
                    no downtime or any redness or swelling.
                  </p>
                </p>

                <h5>The Results</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    The facial helps attain firmer and younger looking skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It smoothens lines and wrinkles.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It lightens dark circles and eliminates puffy eyes.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It helps enhance skin elasticity and reduce sagging.
                  </p>
                </p>

                <h5>Why skin & You Clinic for Tightening facial Treatment ?</h5>
                <p>
                  We at Skin & You Clinic use a combination of technology and
                  expertise to lift and tighten the skin. The procedure is
                  simple with no downtime and lasting result.{" "}
                </p>

                <div className="d-flex justify-content-between bg-light rounded p-4 mt-4 mb-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src={UserImg}
                      width={40}
                      height={40}
                      alt="img"
                    />
                    <span>John Doe</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="ms-3">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-primary me-1"
                      />
                      12345
                    </span>
                    <span className="ms-3">
                      <FontAwesomeIcon
                        icon={faComment}
                        className="text-primary me-1"
                      />
                      123
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="mb-5">
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
              3 Comments
            </h4>
            <div className="d-flex mb-4">
              <img
                src={UserImg}
                className="img-fluid rounded-circle"
                style={{ width: 45, height: 45 }}
              />
              <div className="ps-3">
                <h6>
                  <a href="/">John Doe</a>{" "}
                  <small>
                    <i>01 Jan 2045</i>
                  </small>
                </h6>
                <p>
                  Diam amet duo labore stet elitr invidunt ea clita ipsum
                  voluptua, tempor labore accusam ipsum et no at. Kasd diam
                  tempor rebum magna dolores sed eirmod
                </p>
                <button className="btn btn-sm btn-light">Reply</button>
              </div>
            </div>
            <div className="d-flex mb-4">
              <img
                src={UserImg}
                className="img-fluid rounded-circle"
                style={{ width: 45, height: 45 }}
              />
              <div className="ps-3">
                <h6>
                  <a href="/">John Doe</a>{" "}
                  <small>
                    <i>01 Jan 2045</i>
                  </small>
                </h6>
                <p>
                  Diam amet duo labore stet elitr invidunt ea clita ipsum
                  voluptua, tempor labore accusam ipsum et no at. Kasd diam
                  tempor rebum magna dolores sed eirmod
                </p>
                <button className="btn btn-sm btn-light">Reply</button>
              </div>
            </div>
            <div className="d-flex ms-5 mb-4">
              <img
                src={UserImg}
                className="img-fluid rounded-circle"
                style={{ width: 45, height: 45 }}
              />
              <div className="ps-3">
                <h6>
                  <a href="/">John Doe</a>{" "}
                  <small>
                    <i>01 Jan 2045</i>
                  </small>
                </h6>
                <p>
                  Diam amet duo labore stet elitr invidunt ea clita ipsum
                  voluptua, tempor labore accusam ipsum et no at. Kasd diam
                  tempor rebum magna dolores sed eirmod
                </p>
                <button className="btn btn-sm btn-light">Reply</button>
              </div>
            </div>
          </div> */}

              {/* <div className="bg-light rounded p-5">
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-white mb-4">
              Leave a comment
            </h4>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-white border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Website"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0"
                    rows={5}
                    placeholder="Comment"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Leave Your Comment
                  </button>
                </div>
              </div>
            </form>
          </div> */}
            </div>

            <div className="col-lg-3">
              <div className="mb-5">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Keyword"
                  />
                  <button className="btn btn-primary px-3">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
              {/* <div className="mb-5">
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
              Categories
            </h4>
            <div className="d-flex flex-column justify-content-start">
              {services.map((service, index) => (
                <a
                  key={index}
                  className="h5 bg-light rounded py-2 px-3 mb-2 d-flex align-items-center"
                  href="/"
                >
                  <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                  {service}
                </a>
              ))}
            </div>
          </div> */}
              <SideBar />
              {/* <div className="mb-5">
            <img src={BlogImg1} alt="img" className="img-fluid rounded" />
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TighteningFacialTreatment;
