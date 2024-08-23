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

const services = [
  {
    id: 1,
    icon: Img1,
    title: "ACNE / ACNE SCAR REDUCTION",
    description:
      "Zap the zits with a good skin care regimen and early intervention; prevent scarring and other acne damage through our effective treatments.",
    link: "/",
  },
  {
    id: 2,
    icon: Img2,
    title: "LASER HAIR REMOVAL TREATMENT",
    description:
      "An alternative to threading, waxing, bleaching & electrolysis.",
    link: "/",
  },
  {
    id: 3,
    icon: Img3,
    title: "BODY SLIMMING TREATMENT",
    description:
      "A comfortable, relaxing treatment with a typical sensation of warmth.",
    link: "/",
  },
  {
    id: 4,
    icon: Img4,
    title: "BOTOX AND FILLERS TREATMENT",
    description:
      "These wrinkles are a result of the underlying muscle movement used for facial expression.",
    link: "/",
  },
  {
    id: 5,
    icon: Img5,
    title: "PIGMENTATION & DE TANNING TREATMENT",
    description:
      "Skin pigmentation results from the body producing either too much or too little melanin pigment.",
    link: "/",
  },
  // {
  //   id: 6,
  //   icon: faUserMd,
  //   title: "FACE AND BODY TIGHTENING",
  //   description:
  //     "These are effective in reducing the downward pulling action of muscles in the face and thus lifting the skin upward.",
  //   link: "/",
  // },
  // {
  //   id: 7,
  //   icon: faUserMd,
  //   title: "DERMATOLOGY CLINIC",
  //   description:
  //     "Rosacea is a common condition characterized by symptoms of facial flushing and a spectrum of other signs, including redness, coarseness of skin, papules and pimples an eruption resembling acne. It affects approximately 1 in 20 people.",
  //   link: "/",
  // },
  // {
  //   id: 8,
  //   icon: faUserMd,
  //   title: "WEDDING / BRIDAL TREATMENT",
  //   description:
  //     "It's that once-in-a-lifetime moment when you have to look your radiant and most gorgeous best. And no bride wants to take chances with that. And since weddings mean several days of heavy make-up, non-stop food, alcohol and late nights, it's best to start a skin regimen as soon as possible.",
  //   link: "/",
  // },
  // {
  //   id: 9,
  //   icon: faUserMd,
  //   title: "SEMI PERMANENT MAKE UP/MEDICAL TATTOO",
  //   description:
  //     "Semi permanent make up will enhance your natural beauty and give your features shape and definition without ever having to visit your make up bag.",
  //   link: "/",
  // },
];

const Services2: React.FC = () => {
  const windowWidth = useWindowWidth();

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
    <div className="container-fluid">
      {windowWidth <= 991 ? (
        <div className="row g-0">
          <Slider {...settings}>
            {services.map((service, i) => (
              <div className="col " key={service?.id}>
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
      ) : (
        <div className="row g-0">
          {services.map((service, i) => (
            <div className="col " key={service?.id}>
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
