import React from "react";
import Testimonials1 from "../../assets/testimonial-1.jpg";
import Testimonials2 from "../../assets/testimonial-2.jpg";
import Testimonials3 from "../../assets/testimonial-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import useWindowWidth from "../../hook/useWindowWidth";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "Aditi S, 34",
    image: Testimonials1,
    feedback:
      "I was struggling with hair thinning, but after starting treatment with Dr. Geeta, my hair looks fuller and healthier. The care and support I received were amazing. I'm so happy with the results!",
    date: "June 25, 2024",
  },
  {
    name: "Neha R, 45",
    image: Testimonials2,
    feedback:
      "I was nervous about Botox, but Dr. Geeta explained everything and made me comfortable. My forehead lines have softened, and I look refreshed. Highly recommend!",
    date: "July 5, 2024",
  },
  {
    name: "Sonal P, 38",
    image: Testimonials3,
    feedback:
      "I wanted fillers for a more youthful look, and Dr. Geeta's work was perfect. The results are natural, and I feel more confident. Great experience at Skin & You Clinic!",
    date: "August 2, 2024 ",
  },
];

const Testimonials: React.FC = () => {
  const windowWidth = useWindowWidth();

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
    <div className="container-fluid p-0 testimonial-wrap" ref={ref}>
      <div className="container">
        <div className="text-center mx-auto  mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block mt-2 text-primary about">
            Testimonial
          </h5>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {inView && (
              <div className="testimonial-carousel">
                <Slider {...settings}>
                  {testimonials &&
                    testimonials.map((item, i) => (
                      <div
                        className="testimonial-item text-center mb-4"
                        key={i}
                      >
                        {/* <div className="position-relative mb-2">
                          <img
                            className="img-fluid rounded-circle mx-auto animate__animated animate__bounceInLeft animate__slow"
                            src={item?.image}
                            alt="img"
                          />
                          <div
                            className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                            style={{ width: 60, height: 60 }}
                          >
                            <FontAwesomeIcon
                              icon={faQuoteLeft}
                              size="2x"
                              className="text-primary"
                            />
                          </div>
                        </div> */}
                        <p className="fs-4 fw-normal animate__animated animate__bounceInRight animate__slow">
                          {item?.feedback}
                        </p>
                        <hr className="w-25 mx-auto" />
                        <h3 className="animate__animated animate__bounceInUp animate__slow">
                          {item?.name}
                        </h3>
                        {/* <h6 className="fw-normal text-primary mb-3 animate__animated animate__bounceInUp animate__slow">
                          {item?.date}
                        </h6> */}
                      </div>
                    ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
