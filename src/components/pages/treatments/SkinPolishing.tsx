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

const SkinPolishing: React.FC = () => {
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
                <h3 className="mb-4">SKIN POLISHING (MICRODERMABRASION)</h3>
                <p>
                  Professional peeling is an important precondition for
                  effective skin rejuvenation. Gentle abrasion of the dead skin
                  cells creates the ideal condition for effective nutrition to
                  the deeper skin layers. Microdermabrasion at Skin & You
                  Clinic, Mumbai, offers the ultimate peeling solution – it is
                  controlled and gentle, yet highly effective and suitable for
                  every skin type. Immediately after a treatment, the skin looks
                  fresh and rosy and the results improve with every treatment.
                </p>

                <h5>About Microdermabrasion</h5>
                <p>
                  It is a process that exfoliates, polishes, and increases the
                  lymphatic drainage of skin. It uses a gentle vacuum to bring
                  your skin in contact with crystals that gently remove the top
                  layer of dead skin. It can be used to help treat various skin
                  conditions such as acne, Comedones (blackheads), and dull or
                  rough skin. It is most commonly used on the face, but can be
                  also used on the neck, back, and hands.
                </p>
                <h5>Quick Facts</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Microdermabrasion is a process that exfoliates the skin
                    using a gentle vacuum that brings skin into contact with the
                    crystals.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It can be used for various skin conditions like acne scars
                    or to simply improve dull or rough skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Microdermabrasion takes around 30-45 minutes and usually a
                    few sessions are required for optimal results.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Temporary redness may occur after microdermabrasion.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Microdermabrasion is a safe and effective procedure
                  </p>
                </p>

                <p>
                  Microdermabrasion can be used for – Skin rejuvenation,
                  Hyperkeratosis, Sun light and age damaged skin, pigmentation
                  disorders, uneven skin, Stretch Marks and scars.
                </p>
                <p>
                  The Procedure – Generally, a session of microdermabrasion of
                  the face takes approximately 30-45 minutes. It is not painful
                  and it may feel like you are having a facial.
                </p>
                <p>
                  Prior to microdermabrasion, your face is thoroughly cleansed.
                  The microdermabrasion head is then systematically passed over
                  the face multiple times. Particular creams or serums are put
                  on your face after the procedure has been completed. After
                  microdermabrasion, your skin may appear red and this usually
                  persists for a short time and you will notice that your skin
                  feels soft and smooth afterwards.
                </p>

                <h5>Advice For Microdermabrasion</h5>
                <h5>Pre Treatment</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Please stop all applications 2 days before the day of
                    treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Use sunscreen regularly before the start of the treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    If you are on any kind of medication, share all details with
                    the doctor performing the procedure.
                  </p>
                </p>

                <h5>On the day of Treatment</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Please do not wear any make-up on the day of treatment.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    peel procedure can sometimes have some very short-term
                    after-effects, so don’t be alarmed if you experience redness
                    or irritation of skin for 1-2 days after the treatment.
                  </p>
                </p>

                <h5>Post Treatment</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid direct sun exposure after the treatment. Use sun
                    screen regularly, SPF 30+ or as advised.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid saunas, steam and sunbathing for 7 days after the
                    procedure.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    You can wash your face 6-8 hours after the procedure, but we
                    recommend using a gentle face wash.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    We recommend a gap of 3-4 weeks between the
                    microdermabrasion.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid any applications for 3 days after the treatment.
                  </p>
                </p>

                <h5>Why Skin & You Clinic for skin polishing procedure? </h5>
                <p>
                  We at Skin & You Clinic use the safest and sterilised
                  crystals; the procedure is done under complete medical
                  guidance. Skin polishing procedure can be combined with all
                  tretments possible such as Peels, Alma Photofacial, Botox and
                  Fillers to give a Cumulative result.{" "}
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

export default SkinPolishing;
