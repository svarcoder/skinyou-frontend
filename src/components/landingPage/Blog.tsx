import React from "react";
import BlogImg1 from "../../assets/blog/beauty-possibilities.jpg";
import BlogImg4 from "../../assets/blog/lipocontrast-blog.jpg";
import BlogImg11 from "../../assets/blog/thread-lift.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import useWindowWidth from "../../hook/useWindowWidth";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Thread Lift",
    blogImage: BlogImg11,
    description:
      "Get Healthier, Firmer & Tighter Skin in few Minutes Indications Lines and Wrinkles Folds benefits Healthier, Firmer & Tighter Skin Hepls Restoring Firmness & giving youthful appearance Skin Lifting Results Last upto 2 years but Collagen Stimulation may go on Procedure just 45 mins. procedure Therads can be done for face & neck Best suited",
    link: "/media/blog-details/1",
  },
  {
    id: 2,
    title: "Beauty Possibilities",
    blogImage: BlogImg1,
    description:
      "We have a solution to your each concern Concerns Solution Hair concerns:Hair fall, Hair thinning, patches in hair, Dandruff Hair light, growth factor injections, Hair transplant Forehead concerns: Worry lines, frown lines, eye brow lift Botox, vampire lift, Threads Eye concern: Crow’s feet, Dark circles, sunken eyes, Hollow eyes Botox, fillers, vampire lift Mid face",
    link: "/media/blog-details/2",
  },
  {
    id: 3,
    title: "Now “LIPOCONTRAST” at skin & you clinic",
    blogImage: BlogImg4,
    description:
      "LipoContrast is a new technology that results in localized fat reduction within a Selective and non-invasive procedure: thermal contrast lipolysis. Lipocontrast is the non-invasive technique for local fat reduction is on the move. DURATION OF THE TREATMENT Single session will last about 60 minutes. EFFECTS: Fat cells elimination The elimination process of exposed adipocytes to",
    link: "/media/blog-details/3",
  },
];

const Blog: React.FC = () => {
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

  const truncateText = (text: string, maxLength: number = 100): string => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
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
                      className={`col-xl-4 col-lg-6 mb-4 animate__animated  animate__slow ${
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
                          <Link className="h3 d-block mb-3" to={article?.link}>
                            {article.title}
                          </Link>
                          <p className="m-0">
                            {" "}
                            {truncateText(article?.description)}
                          </p>
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

                        {/* <button
                          className="btn btn-outline-dark rounded-pill py-3 px-5"
                          type="submit"
                        >
                          Read More
                        </button> */}
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
                        <Link className="h3 d-block mb-3" to={article?.link}>
                          {article.title}
                        </Link>
                        <p className="m-0">
                          {" "}
                          {truncateText(article?.description)}
                        </p>
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

                      {/* <button
                        className="btn btn-outline-dark rounded-pill py-3 px-5"
                        type="submit"
                      >
                        Read More
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
      </div>

      <div
        className="col-12 text-center mt-4"
        onClick={() => navigate("/media/blog")}
      >
        <button className="btn btn-primary py-3 px-5">Load More</button>
      </div>
    </div>
  );
};

export default Blog;
