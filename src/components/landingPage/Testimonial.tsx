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
    name: "Aditi S",
    image: Testimonials1,
    feedback:
      "I was struggling with hair thinning for years, and it took a toll on my confidence. After visiting Dr. Geeta at the Skin & You Clinic, I started a customized treatment plan. Within a few months, I noticed a significant improvement in my hair density and overall health. The staff was incredibly supportive throughout the process, and I felt cared for every step of the way. I couldn't be happier with the results!",
    date: "June 25, 2024",
  },
  {
    name: "Neha R",
    image: Testimonials2,
    feedback:
      "I was nervous about trying Botox for the first time, but Dr. Geeta made me feel completely at ease. She took the time to explain the entire process and what I could expect. The results were fantastic! My forehead lines have softened significantly, giving me a more youthful appearance without looking overdone. I'm thrilled with the outcome and would highly recommend her to anyone considering Botox.",
    date: "July 5, 2024",
  },
  {
    name: "Sonal P",
    image: Testimonials3,
    feedback:
      "I had been contemplating getting fillers to address some volume loss in my cheeks and under-eye area. Dr. Geeta's approach was so natural and precise that I look refreshed without any obvious signs of treatment. The subtle enhancement has made such a difference in my confidence. Her expertise and eye for detail are unmatched. I’m so happy with my experience at the Skin & You Clinic!",
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
                        <div className="position-relative mb-2">
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
                        </div>
                        <p className="fs-4 fw-normal animate__animated animate__bounceInRight animate__slow">
                          {item?.feedback}
                        </p>
                        <hr className="w-25 mx-auto" />
                        <h3 className="animate__animated animate__bounceInUp animate__slow">
                          {item?.name}
                        </h3>
                        <h6 className="fw-normal text-primary mb-3 animate__animated animate__bounceInUp animate__slow">
                          {item?.date}
                        </h6>
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
