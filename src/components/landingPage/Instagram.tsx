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
import BotoxVideo from "../../assets/video/MNRF.mp4";
import BotoxVideo2 from "../../assets/video/Deep Peel.mp4";
import BotoxVideo3 from "../../assets/video/Dermal Fillers.mp4";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title:
      "Ever wished for a skincare saviour to save your skin from all its troubles?",
    blogImage: BotoxVideo,
    author: "Dr. Geeta",
    link: "https://www.instagram.com/reel/C5QYIByovcK/?igsh=ejhwbnZiaG9sdGE0",
  },
  {
    id: 2,
    title: "Dr. Geeta's guide to get rid of dark circles and wrinkles",
    blogImage: BotoxVideo2,
    author: "Dr. Geeta",
    link: "https://www.instagram.com/reel/C4X22IMSFiH/?igsh=OWhleG1jdGpsNmxk",
  },
  {
    id: 3,
    title: "Time to spill the beans on tear trough fillers",
    blogImage: BotoxVideo3,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C2mQiXKSgmS/?igsh=OXp2aTJ6NGZudzdr",
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
