import React from "react";
import BlogImg1 from "../../assets/massage-1-390x344.jpg";
import BlogImg2 from "../../assets/massage-2-390x344.jpg";
import BlogImg3 from "../../assets/massage-3-390x344.jpg";
import UserImg from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";

const Blog: React.FC = () => {
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
        <div className="section section section-xl">
          <div className="container wide">
            <div className="row row-md-80 row-sm-50">
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg1} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Swedish Relaxation</a>
                  </div>
                  <div className="box-info-modern-text small">
                    One of the primary goals of the Swedish massage technique is
                    to relax the entire body
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg2} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Remedial Deep Tissue</a>
                  </div>
                  <div className="box-info-modern-text small">
                    This will include an assessment of the muscles, ligaments,
                    tendons and posture
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg3} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Group Bookings</a>
                  </div>
                  <div className="box-info-modern-text small">
                    Treat yourself and your friend with the best massage
                    experience
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg2} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Pregnancy Massage</a>
                  </div>
                  <div className="box-info-modern-text small">
                    Tranquil relaxation and reduce stress, Relief from cramps,
                    spasms, pain, etc.
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg3} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Face Massage</a>
                  </div>
                  <div className="box-info-modern-text small">
                    Facial massages increase circulation to your facial tissue,
                    resulting in youthful-looking skin
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg1} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Massotherapy</a>
                  </div>
                  <div className="box-info-modern-text small">
                    A collection of bodywork modalities designed to improve
                    health
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg2} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Massotherapy</a>
                  </div>
                  <div className="box-info-modern-text small">
                    A collection of bodywork modalities designed to improve
                    health
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg3} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Massotherapy</a>
                  </div>
                  <div className="box-info-modern-text small">
                    A collection of bodywork modalities designed to improve
                    health
                  </div>
                </div>
              </div>
              <div className="col-xs-10 col-md-6 col-lg-4">
                <div className="box-info-modern box-md">
                  <div className="box-info-modern-figure">
                    <img src={BlogImg1} alt="Img" width={390} height={344} />
                  </div>
                  <div className="box-info-modern-title">
                    <a href="single-massage.html">Massotherapy</a>
                  </div>
                  <div className="box-info-modern-text small">
                    A collection of bodywork modalities designed to improve
                    health
                  </div>
                </div>
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-primary py-3 px-5">Load More</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mt-4">
        <div className="row g-5 ">
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg1} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/article/1">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg2} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg3} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg2} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg3} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg1} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg3} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg1} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
              <img className="img-fluid w-100" src={BlogImg2} alt="img" />
              <div className="p-4">
                <a className="h3 d-block mb-3" href="/">
                  Dolor clita vero elitr sea stet dolor justo diam
                </a>
                <p className="m-0">
                  Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum
                  clita rebum dolor stet amet justo
                </p>
              </div>
              <div className="d-flex justify-content-between border-top p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={UserImg}
                    width={25}
                    height={25}
                    alt="img"
                  />
                  <small>John Doe</small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-primary me-1"
                    />
                    12345
                  </small>
                  <small className="ms-3">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary me-1"
                    />
                    123
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <button className="btn btn-primary py-3 px-5">Load More</button>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Blog;
