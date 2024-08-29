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

const articles = [
  {
    id: 1,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation",
    description:
      "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    blogImage: BlogImg1,
    authorImage: UserImg,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
  },
  {
    id: 2,
    title: "Dr. Geeta’s article on How technology has changed beauty",
    description:
      "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    blogImage: BlogImg2,
    authorImage: UserImg,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
  },
  {
    id: 1,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    description:
      "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    blogImage: BlogImg3,
    authorImage: UserImg,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
  },
];

const Blog: React.FC = () => {
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
    <div className="container-fluid py-5" ref={ref}>
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block text-primary about animate__animated animate__bounceInLeft animate__slow">
            Latest
          </h5>
          <h1 className="display-4 animate__animated animate__bounceInRight animate__slow">
            News From the Blog
          </h1>
        </div>

        {windowWidth <= 991
          ? inView && (
              <div className="row g-5">
                <Slider {...settings}>
                  {articles.map((article, i) => (
                    <div
                      className={`col-xl-4 col-lg-6 animate__animated  animate__slow ${
                        i % 2 === 0
                          ? "animate__bounceInUp"
                          : "animate__bounceInDown"
                      }`}
                      key={article?.id}
                    >
                      <div className=" rounded overflow-hidden">
                        <img
                          className="img-fluid rounded w-100"
                          src={article.blogImage}
                          alt="img"
                        />
                        <div className="pt-4 pb-4">
                          <a className="h3 d-block mb-3" href="/">
                            {article.title}
                          </a>
                          <p className="m-0">{article.description}</p>
                        </div>
                        {/* <div className="d-flex justify-content-between border-top p-4">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle me-2"
              src={article.authorImage}
              width={25}
              height={25}
              alt="img"
            />
            <small>{article.author}</small>
          </div>
          <div className="d-flex align-items-center">
            <small className="ms-3">
              <FontAwesomeIcon
                icon={faEye}
                className="text-primary me-1"
              />
              {article.views}
            </small>
            <small className="ms-3">
              <FontAwesomeIcon
                icon={faComment}
                className="text-primary me-1"
              />
              {article.comments}
            </small>
          </div>
        </div> */}

                        <button
                          className="btn btn-outline-dark rounded-pill py-3 px-5"
                          type="submit"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )
          : inView && (
              <div className="row g-5">
                {articles.map((article, i) => (
                  <div
                    className={`col-xl-4 col-lg-6 animate__animated  animate__slow ${
                      i % 2 === 0
                        ? "animate__bounceInUp"
                        : "animate__bounceInDown"
                    }`}
                    key={article?.id}
                  >
                    <div className=" rounded overflow-hidden">
                      <img
                        className="img-fluid rounded w-100"
                        src={article.blogImage}
                        alt="img"
                      />
                      <div className="pt-4 pb-4">
                        <a className="h3 d-block mb-3" href="/">
                          {article.title}
                        </a>
                        <p className="m-0">{article.description}</p>
                      </div>
                      {/* <div className="d-flex justify-content-between border-top p-4">
          <div className="d-flex align-items-center">
            <img
              className="rounded-circle me-2"
              src={article.authorImage}
              width={25}
              height={25}
              alt="img"
            />
            <small>{article.author}</small>
          </div>
          <div className="d-flex align-items-center">
            <small className="ms-3">
              <FontAwesomeIcon
                icon={faEye}
                className="text-primary me-1"
              />
              {article.views}
            </small>
            <small className="ms-3">
              <FontAwesomeIcon
                icon={faComment}
                className="text-primary me-1"
              />
              {article.comments}
            </small>
          </div>
        </div> */}

                      <button
                        className="btn btn-outline-dark rounded-pill py-3 px-5"
                        type="submit"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
      </div>
    </div>
  );
};

export default Blog;
