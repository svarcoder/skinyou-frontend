import React from "react";
import BlogImg1 from "../../assets/cosmetician-gives-botox-injection-in-the-stomach-N3Y4WGD-1024x678.jpg";
import BlogImg2 from "../../assets/beautiful-patient-woman-smile-lying-on-bed-in-surg-P2RWSH3-1024x678.jpg";
import BlogImg3 from "../../assets/woman-in-cosmetology-studio-on-laser-hair-removal-8SLYCSJ-1024x678.jpg";
import UserImg from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import useWindowWidth from "../../hook/useWindowWidth";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import InstagramReel from "../Instagram/InstagramReel";
import BotoxVideo from "../../assets/video/Botox.mp4";
import BotoxVideo2 from "../../assets/video/Deep Peel.mp4";
import BotoxVideo3 from "../../assets/video/Dermal Fillers.mp4";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
    blogImage: BotoxVideo,
    author: "Dr. Geeta",
    link: "https://www.instagram.com/reel/C_C2SbHShZY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    title: "Dr. Geeta’s article on How technology has changed beauty",
    blogImage: BotoxVideo2,
    author: "Dr. Geeta",
    link: "https://www.instagram.com/reel/C_Al5vSSt_n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo3,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const Instagram: React.FC = () => {
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
    <div className="container-fluid py-5" ref={ref}>
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block text-primary about animate__animated animate__bounceInLeft animate__slow">
            Latest
          </h5>
          <h1 className="display-4 animate__animated animate__bounceInRight animate__slow">
            Instagram Post
          </h1>
        </div>

        {windowWidth <= 991
          ? inView && (
              <div className="row g-5">
                <Slider {...settings}>
                  {articles.map((article, i) => (
                    <InstagramReel
                      index={i}
                      id={i}
                      blogImage={article?.blogImage}
                      title={article?.title}
                      link={article?.link}
                    />
                  ))}
                </Slider>
              </div>
            )
          : inView && (
              <div className="row g-5">
                {articles.map((article, i) => (
                  <InstagramReel
                    index={i}
                    id={i}
                    blogImage={article?.blogImage}
                    title={article?.title}
                    link={article?.link}
                  />
                ))}
              </div>
            )}
      </div>
      <div
        className="col-12 text-center mt-4"
        onClick={() => navigate("/instapost")}
      >
        <button className="btn btn-primary py-3 px-5">Load More</button>
      </div>
    </div>
  );
};

export default Instagram;
