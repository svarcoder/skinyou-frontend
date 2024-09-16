import React from "react";
import Img1 from "../../assets/elements-70-plastic-surgery-elements-5MGUA28_Breast_augmentation.png";
import Img2 from "../../assets/elements-70-plastic-surgery-elements-5MGUA28_Buttock_augmentation.png";
import Img3 from "../../assets/elements-70-plastic-surgery-elements-5MGUA28_Firming.png";
import Img4 from "../../assets/elements-70-plastic-surgery-elements-5MGUA28_Nose_surgery.png";
import Img5 from "../../assets/elements-70-plastic-surgery-elements-5MGUA28_Surgery_point.png";
import useWindowWidth from "../../hook/useWindowWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: Img1,
    title: "Body & face laser hair removal",
    description:
      "Experience smooth, hair-free skin with our advanced, pain-free laser technology.",
    link: "/treatments/painless-laser-hair-removal",
  },
  {
    id: 2,
    icon: Img2,
    title: "Tattoo removal",
    description:
      "Safely erase unwanted tattoos with precision laser treatments, leaving your skin clear.",
    link: "/treatments/tattoo-removal",
  },
  {
    id: 3,
    icon: Img3,
    title: "Fat Loss & Inch loss",
    description:
      "Achieve your body goals with non-invasive, targeted fat reduction and contouring.",
    link: "/treatments/fat-loss-inch-loss",
  },
  {
    id: 4,
    icon: Img4,
    title: "Botox",
    description:
      "Effortlessly smooth wrinkles and rejuvenate your skin with our expert Botox treatment.",
    link: "/treatments/botox",
  },
  {
    id: 5,
    icon: Img5,
    title: "Body and Face Tightening",
    description:
      "Lift and tighten sagging skin with our cutting-edge, non-surgical radiofrequency treatments.",
    link: "/treatments/body-face-tightening",
  },
];

const Services2: React.FC = () => {
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          bottom: "-25px",
          zIndex: "99999999",
        }} // Position down
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCircleArrowRight} />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          bottom: "-25px",
          zIndex: "99999999",
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} style={{ fontSize: "1px" }} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container-fluid" ref={ref}>
      {windowWidth <= 991
        ? inView && (
            <div className="row g-0 ">
              <Slider {...settings}>
                {services.map((service, i) => (
                  <div
                    className={`col mb-4 animate__animated  animate__slow ${
                      i % 2 === 0
                        ? "animate__bounceInDown"
                        : "animate__bounceInUp"
                    }`}
                    key={service?.id}
                  >
                    <div
                      className="service-item rounded d-flex flex-column align-items-center justify-content-around g-5 text-center services-wrap"
                      style={{
                        backgroundColor:
                          i === 0
                            ? "#f6fbef"
                            : i === 2
                            ? "#fcf8ec"
                            : i === 4
                            ? "#F2FCFC"
                            : "white",
                      }}
                    >
                      <div
                        className="service-icon mb-4"
                        style={{
                          backgroundColor:
                            i === 1 ? "#FFF9FD" : i === 3 ? "#FFF7F7" : "",
                        }}
                      >
                        <img src={service?.icon} alt="Icon" />
                      </div>
                      <div>
                        <h4 className="mb-3">{service.title}</h4>
                        <p className="m-0 description">{service.description}</p>

                        <button
                          className="btn rounded-pill py-3 px-5 mt-4"
                          type="submit"
                          style={{
                            backgroundColor:
                              i === 0
                                ? "#BCD69B"
                                : i === 1
                                ? "#E4AED1"
                                : i === 2
                                ? "#EFDBA2"
                                : i === 3
                                ? "#F7B1B0"
                                : i === 4
                                ? "#A8D9D8"
                                : "white",
                          }}
                          onClick={()=> navigate(`${service.link}`)}
                        >
                          Know More
                        </button>
                      </div>

                      {/* <a
                 className="btn btn-lg btn-primary rounded-pill"
                 href={service.link}
               >
                 <i className="bi bi-arrow-right" />
               </a> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )
        : inView && (
            <div className="row g-0">
              {services.map((service, i) => (
                <div
                  className={`col animate__animated  animate__slow ${
                    i % 2 === 0
                      ? "animate__bounceInDown"
                      : "animate__bounceInUp"
                  }`}
                  key={service?.id}
                >
                  <div
                    className="service-item rounded d-flex flex-column align-items-center justify-content-around g-5 text-center services-wrap"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "#f6fbef"
                          : i === 2
                          ? "#fcf8ec"
                          : i === 4
                          ? "#F2FCFC"
                          : "white",
                    }}
                  >
                    <div
                      className="service-icon mb-4"
                      style={{
                        backgroundColor:
                          i === 1 ? "#FFF9FD" : i === 3 ? "#FFF7F7" : "",
                      }}
                    >
                      <img src={service?.icon} alt="Icon" />
                    </div>
                    <div>
                      <h4 className="mb-3">{service.title}</h4>
                      <p className="m-0 description">{service.description}</p>

                      <button
                        className="btn rounded-pill py-3 px-5 mt-4"
                        type="submit"
                        style={{
                          backgroundColor:
                            i === 0
                              ? "#BCD69B"
                              : i === 1
                              ? "#E4AED1"
                              : i === 2
                              ? "#EFDBA2"
                              : i === 3
                              ? "#F7B1B0"
                              : i === 4
                              ? "#A8D9D8"
                              : "white",
                        }}
                        onClick={()=> navigate(`${service.link}`)}
                      >
                        Know More
                      </button>
                    </div>

                    {/* <a
                 className="btn btn-lg btn-primary rounded-pill"
                 href={service.link}
               >
                 <i className="bi bi-arrow-right" />
               </a> */}
                  </div>
                </div>
              ))}
            </div>
          )}
    </div>
  );
};

export default Services2;
