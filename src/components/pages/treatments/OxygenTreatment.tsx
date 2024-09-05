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

const OxygenTreatment: React.FC = () => {
  const services = [
    "Web Design",
    "Web Development",
    "SEO Optimization",
    "Keyword Research",
    "Email Marketing",
  ];

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
                <h3 className="mb-4">OXYGEN TREATMENT</h3>

                <h5>A Party Fix Treatment</h5>

                <p>
                  The Oxyrevive treatment is soothing relaxing and suitable for
                  all skin types. In just one treatment your skin will look and
                  feel markedly younger. The face will be smooth and clarified,
                  nourished and hydrated, radiant and rejuvenated.
                </p>
                <p>
                  The largest organ in the body, the skin protects us from
                  external irritants like sun, pollution, weather changes,
                  bacteria and fungi to name a few. But in the process it gets
                  damaged. Moreover, internal changes of ageing, and lifestyle
                  habits of smoking and alcohol add to the damage.
                </p>
                <p>
                  Women of all age groups require the right kind of hydration
                  and nourishment for their skin to make it look fresher and
                  rejuvenated. Young skin renews itself in as little as 28 days
                  but as we age it could take as long as 60-70 days for a new
                  cell cycle. This results in changes in the thickness of skin
                  and loss of collagen resulting in loss of skin elasticity,
                  sagging skin, and loss of the youthful glow.
                </p>
                <p>
                  Here enters the need for pure oxygen as it helps remove
                  dullness of the face, brings back a glow and reduces
                  pigmentation and dark circles.
                </p>

                <h5>How It Works</h5>
                <p>
                  The oxygen treatment infuses pure oxygen in the skin with a
                  variety of serums. The infusion delivery system maximizes
                  tissue saturation which helps moisturize the skin giving it a
                  fresher younger looking outer layer. The serum contain
                  hyaluronic acid, Vitamin C, E and A to mention a few
                  ingredients. These vitamins are essential for healthy skin
                  growth, stimulate collagen, improve the barrier function of
                  the skin and act as antioxidants. The anti-aging serum helps
                  smooth lines and wrinkles without pain and is an alternate to
                  anti-wrinkle injections.
                </p>

                <h5>Indications Of The Treatment</h5>
                <p>
                  Within a few weeks, you will see a visible improvement in dark
                  circles, puffiness and lines around the delicate eye area,
                  even skin tone and smoothening of the lines and wrinkles. You
                  will also see the glow you always wanted!
                </p>
                <p>
                  It has no side effects and can be done on sensitive skin,
                  Rosacea, acne prone and eczema prone skin with good results.
                  The treatment can be combined with other procedures and works
                  well for all skin types and skin colors. It can be done pre
                  wedding or just for a red carpet event. It is a perfect party
                  fix.
                </p>
                <p>
                  Remember Ladies, Skin Matters, so let’s start working on it
                  from Today!
                </p>

                <h5>Why Skin & You Clinic for oxygen treatment?</h5>
                <p>
                  We at Skin & You Clinic use a combination of vitamin c,
                  placentalextracts and stem cells in combination with the pure
                  high intensity oxygen infusion. The system works for all skin
                  types with effective results with no downtime or pain.{" "}
                </p>
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

export default OxygenTreatment;
