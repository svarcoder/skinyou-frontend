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

const BridalPackage: React.FC = () => {
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
                <h3 className="mb-4">Bridal Packages</h3>

                <h5>
                  Wedding Mantras – For Flawless Skin & Super Confidence On Your
                  Big Day!
                </h5>

                <p>
                  It’s that once-in-a-lifetime moment when you have to look your
                  radiant and most gorgeous best. And no bride wants to take
                  chances with that. And since weddings mean several days of
                  heavy make-up, non-stop food, alcohol and late nights, it’s
                  best to start a skin regimen as soon as possible.
                </p>

                <p>
                  Walking into skin clinics much before the D-day can help give
                  you near perfect results.
                </p>

                <p>
                  Skin treatments for brides and their families should be
                  planned at least 6 months before the wedding. One can choose
                  between 6, 4 or 2 months package based on their skin concerns,
                  time schedule and expectations.
                </p>

                <h5>Benefits</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Whitening Treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Glow Facials
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dark Circle Reduction
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin Tightening
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Inch Loss/ Slimming
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Body Whitening
                  </p>
                </p>

                <h5>Here’s A Guide On How To Prepare For The Big Day</h5>

                <p>
                  Note – Our signature facials can be done at anytime to get the
                  perfect glow.
                </p>

                <h5>4 – 6 months ahead</h5>

                <p>
                  Make a list of all your skin problems and expectations before
                  you visit us. Remember skin treatments are a collaborative
                  process between skin & you and you. Prescribed appointments
                  must be kept for desired results.
                </p>

                <p>
                  At Skin & You Clinic, Mumbai, we start with a personalized
                  consult and a Skin Analysis. A home care plan is discussed and
                  formulated and appointments are scheduled every 4–6 weeks to
                  monitor results. Consultations include acne, dermatitis,
                  pigmentation, dark circles, tanned skin and any other medical
                  skin conditions. The following are the problems that can be
                  tackled with different treatments.
                </p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Body and facial hair –
                    <Link to="/medical-clinic/laser-treatment/painless-laser-hair-removal">
                      PainlessLaser Hair Removal
                    </Link>
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne scar, rejuvenation, age spots/sun spots –{" "}
                    <Link to="/treatments/derma-roller-treatment">
                      Derma roller, Mesotherapy
                    </Link>
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Removal of any skin growth from the body –{" "}
                    <Link to="/treatments/rf-growth-removal-cautery">
                      RF Growth Removal
                    </Link>
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Inch loss and body shaping –{" "}
                    <Link to="/treatments/body-slimming-treatment">
                      Body Slimming Treatment,
                    </Link>
                    <Link to="/treatments/accent-ultra-skin-body-contouring">
                      Accent Ultra Body Contouring
                    </Link>
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Check for internal nutritious deficiencies and formulate a
                    diet plan
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dandruff, dry lusterless hair and hair fall –{" "}
                    <Link to="/treatments/hair-loss-treatment">
                      Hair Loss treatment
                    </Link>
                  </p>
                </p>

                <h5> 1 to 2 Months before the wedding </h5>
                <p>
                  {" "}
                  There is still time at this point to take care of the finer
                  aspects.
                </p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Permanent hair removal is possible with 2-3 sittings and can
                    be continued after the wedding
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hand treatments to wear the perfect ring
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Treatment for cracked heels and feet
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Open pores can be treated by a pore cleansing facial
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Booking a make-up artist and make-up advice
                  </p>
                </p>

                <h5>2 to 4 weeks ahead </h5>
                <p>
                  Radiance treatments can start and the following skin issues
                  can be tackled
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin tightening, lines and wrinkles –{" "}
                    <Link to="/treatments/caci-treatment">
                      Caci Treatment{" "}
                    </Link>{" "}
                    or{" "}
                    <Link to="/treatments/non-surgicalskin-tightening">
                      Non Surgical Skin Tightening
                    </Link>
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin rejuvenation, fine lines, opulence –
                    <Link to="/treatments/oxygen-facial-treatment">
                      OxygenFacial
                    </Link>{" "}
                    – a pure oxygen infusion into the skin with serums
                    containing vitamins
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fine lines, wrinkles, face contouring –
                    <Link to="/treatments/botox-treatment">Botox</Link> for a
                    youthful look
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Ideal smile and luscious lips –{" "}
                    <Link to="/treatments/dermal-filler-treatment">
                      Dermal Fillers{" "}
                    </Link>{" "}
                    –Juvederm XC , Restylane
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Uneven Tone & Texture –{" "}
                    <Link to="/treatments/skin-polishing-microdermabrasion">
                      Skin Polishing
                    </Link>
                    ,
                    <Link to="/treatments/mesotheraphy-treatment">
                      Mesotherapy
                    </Link>{" "}
                    ,
                    <Link to="/treatments/gel-peels-chemical-peels-treatment">
                      Gel peels
                    </Link>
                  </p>
                </p>

                <h5> 2-3 days before the Big Day</h5>
                <p>
                  This is the time when cocktails and parties begin and quick
                  fixes save the day.{" "}
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Late night party fix OxygenFacial, Non Surgical Skin
                    Tightening
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For a glow or dry skin – Caci Treatment, Skin polishing.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Addressing active lesions with spot treatments – Spot peels
                    /cortisone injection
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    What to carry on your honey moon – A customized honeymoon
                    product kit to continue the flawless look
                  </p>
                </p>

                <h5>Why Skin & You Clinic for Bridal Services ? </h5>
                <p>
                  A customised plan is made as each bride is different and each
                  has different concerns. Skin & You Clinic is the one stop
                  destination for all bridal skin and slimming. We understand
                  the need to look good on the wedding day. We have treated
                  countless brides and they have looked there best on the most
                  important day of there life.{" "}
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

export default BridalPackage;
