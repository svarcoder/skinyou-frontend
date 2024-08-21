import React from "react";
import Img1 from "../../assets/botox.jpg";
import Img2 from "../../assets/laser-hair-reduction.jpg";
import Img3 from "../../assets/lipocontrast.jpg";
import Slider from "react-slick";
import Img from "../../assets/slide-01.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="section section-main-bunner context-dark" id="home">
      <div
        className="main-bunner-img bg-overlay-1"
        style={{
          backgroundImage: `url(${Img})`,
          backgroundSize: "cover",
        }}
      />
      <div className="main-bunner-inner">
        <div className="container wide">
          <div className="row justify-content-left">
            <div className="col-lg-5">
              <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                Instant <br className="br-none" /> Solution
              </h1>
              <p
                className="lead text-custom-blue"
                data-caption-animate="fadeInUp"
                data-caption-delay={250}
              >
                Are you tired and exhausted? Do you need to relax and tidy up
                your body and health? Try our massage today!
              </p>
              <div className="btn-wrap">
                <div className="group-xxl group-middle">
                  {/* <a
                    className="button button-primary button-md button-round-2"
                    href="#"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={450}
                  >
                    {" "}
                    Book Now
                  </a> */}
                  <Link
                    className="button button-white button-md button-round-2"
                    to="/"
                    data-caption-animate="fadeInUp"
                    data-caption-delay={450}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
              {/* <div className="phone-wrap phone-wrap-2">
                <div className="phone-link-title">P:</div>
                <a className="phone-link" href="tel:#">
                  {" "}
                  1 000 234 7890
                </a>
              </div> */}
              {/* <p className="text-custom-blue">
                178 West 27th Street, Suite 527, New York NY 10012, United
                States
              </p> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Book Appointment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Query"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0"
                      placeholder="Your Phone"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0"
                      rows={5}
                      placeholder="Your Message"
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Make An Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container-fluid py-5 mb-5 hero-header d-flex align-items-center">
    //   <div className="container py-5 d-flex align-items-center">
    //     {/* <Slider {...settings}> */}
    //     <div className="row justify-content-start hero-text">
    //       <div className="col-lg-8 text-center text-lg-start">
    //         {/* <h5
    //           className="d-inline-block text-primary text-uppercase border-bottom border-5"
    //           style={{ borderColor: "rgba(256, 256, 256, 0.3) !important" }}
    //         >
    //           Welcome To Medinova
    //         </h5> */}
    //         {/* <img src={Img1} alt="img1" /> */}
    //         <h1 className="display-1 custom-text mb-md-4">
    //           Best Healthcare Solution In Your City
    //         </h1>
    //         <div className="pt-2">
    //           {/* <a
    //             href="/"
    //             className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
    //           >
    //             Find Doctor
    //           </a> */}
    //           <a
    //             href="/"
    //             className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
    //             data-bs-toggle="modal"
    //             data-bs-target="#exampleModal"
    //           >
    //             Book Appointment
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="row justify-content-start">
    //         <div className="col-lg-8 text-center text-lg-start">
    //         <img src={Img2} alt="img2" />
    //           <h1 className="display-1 text-white mb-md-4">
    //             Best Healthcare Solution In Your City
    //           </h1>
    //           <div className="pt-2">
    //             <a
    //               href="/"
    //               className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
    //               data-bs-toggle="modal"
    //               data-bs-target="#exampleModal"
    //             >
    //               Book Appointment
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row justify-content-start">
    //         <div className="col-lg-8 text-center text-lg-start">
    //         <img src={Img3} alt="img2" />
    //           <h1 className="display-1 text-white mb-md-4">
    //             Best Healthcare Solution In Your City
    //           </h1>
    //           <div className="pt-2">
    //             <a
    //               href="/"
    //               className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"
    //               data-bs-toggle="modal"
    //               data-bs-target="#exampleModal"
    //             >
    //               Book Appointment
    //             </a>
    //           </div>
    //         </div>
    //       </div> */}
    //     {/* </Slider> */}
    //   </div>

    // </div>
  );
};

export default Hero;
