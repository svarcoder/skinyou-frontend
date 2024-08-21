import React from "react";
import Slider from "react-slick";
import Price1 from "../../assets/price-1.jpg";
import Price2 from "../../assets/price-2.jpg";
import Price3 from "../../assets/price-3.jpg";
import Price4 from "../../assets/price-4.jpg";
const carouselItems = [
  {
    imgSrc: Price1,
    title: "Pregnancy Care",
    price: "49",
    features: [
      "Emergency Medical Treatment",
      "Highly Experienced Doctors",
      "Highest Success Rate",
      "Telephone Service",
    ],
  },
  {
    imgSrc: Price2,
    title: "Health Checkup",
    price: "99",
    features: [
      "Emergency Medical Treatment",
      "Highly Experienced Doctors",
      "Highest Success Rate",
      "Telephone Service",
    ],
  },
  {
    imgSrc: Price3,
    title: "Dental Care",
    price: "149",
    features: [
      "Emergency Medical Treatment",
      "Highly Experienced Doctors",
      "Highest Success Rate",
      "Telephone Service",
    ],
  },
  {
    imgSrc: Price4,
    title: "Operation & Surgery",
    price: "199",
    features: [
      "Emergency Medical Treatment",
      "Highly Experienced Doctors",
      "Highest Success Rate",
      "Telephone Service",
    ],
  },
];

const Pricing: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            Medical Packages
          </h5>
          <h1 className="display-4">Awesome Medical Programs</h1>
        </div>
        <div
          className="price-carousel position-relative"
          style={{ padding: "0 45px 45px 45px" }}
        >
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div key={index} className="bg-light rounded text-center">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded-top"
                    src={item.imgSrc}
                    alt={`price-${index}`}
                  />
                  <div
                    className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center"
                    style={{ background: "rgba(29, 42, 77, 0.8)" }}
                  >
                    <h3 className="text-white">{item.title}</h3>
                    <h1 className="display-4 text-white mb-0">
                      <small
                        className="align-top fw-normal"
                        style={{ fontSize: "22px", lineHeight: "45px" }}
                      >
                        $
                      </small>
                      {item.price}
                      <small
                        className="align-bottom fw-normal"
                        style={{ fontSize: "16px", lineHeight: "40px" }}
                      >
                        / Year
                      </small>
                    </h1>
                  </div>
                </div>
                <div className="text-center py-5">
                  {item.features.map((feature, idx) => (
                    <p key={idx}>{feature}</p>
                  ))}
                  <a
                    href="/"
                    className="btn btn-primary rounded-pill py-3 px-5 my-2"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
