import React, { useLayoutEffect, useState } from "react";
import BlogImg1 from "../../assets/massage-1-390x344.jpg";
import BlogImg2 from "../../assets/massage-2-390x344.jpg";
import BlogImg3 from "../../assets/massage-3-390x344.jpg";
import UserImg from "../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import BotoxVideo from "../../assets/video/Botox.mp4";
import BotoxVideo2 from "../../assets/video/Deep Peel.mp4";
import BotoxVideo3 from "../../assets/video/Dermal Fillers.mp4";
import BotoxVideo4 from "../../assets/video/Dermapen Exosome Polynucleotide.mp4";
import BotoxVideo5 from "../../assets/video/Dermapen for hair and face.mp4";
import BotoxVideo6 from "../../assets/video/Face Thread Lift.mp4";
import BotoxVideo7 from "../../assets/video/Face and body hair removal.mp4";
import BotoxVideo8 from "../../assets/video/Hydration Filler.mp4";
import BotoxVideo9 from "../../assets/video/MNRF.mp4";
import BotoxVideo10 from "../../assets/video/NCTF.mp4";
import BotoxVideo11 from "../../assets/video/PRP.mp4";
import BotoxVideo12 from "../../assets/video/QR678.mp4";
import BotoxVideo13 from "../../assets/video/Silk Peel Derma Infusion.mp4";
import BotoxVideo14 from "../../assets/video/Tattoo Removal.mp4";
import BotoxVideo15 from "../../assets/video/Tribeam Carbon Treatment.mp4";
import BotoxVideo16 from "../../assets/video/Tribeam Laser Toning.mp4";
import BotoxVideo17 from "../../assets/video/Tribeam Tattoo.mp4";
import BotoxVideo18 from "../../assets/video/Ultracel Q+ HIFU.mp4";
import BotoxVideo19 from "../../assets/video/Viscoderm.mp4";
import BotoxVideo20 from "../../assets/video/Wart Removal.mp4";
import { Link } from "react-router-dom";

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
  {
    id: 4,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo4,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 5,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo5,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo6,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 7,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo7,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 8,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo8,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 9,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo9,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 10,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo10,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 11,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo11,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 12,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo12,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 13,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo13,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 14,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo14,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 15,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo15,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 16,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo16,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 17,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo17,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 18,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo18,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 19,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo19,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 20,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    blogImage: BotoxVideo20,
    author: "Dr. Geeta",
    views: 12345,
    comments: 123,
    link: "https://www.instagram.com/reel/C_ARVn2oddB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const InstaGramPost: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 animate__animated animate__bounceInRight animate__slow">
              Instagram Post
            </h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="section section section-xl mt-0 pt-0">
          <div className="container wide">
            <div className="row row-md-80 row-sm-50">
              {articles.map((article, i) => (
                <div className="col-xs-10 col-md-6 col-lg-4">
                  <Link to={article?.link} target="_blank">
                    <div className="box-info-modern box-md">
                      <div className="box-info-modern-figure">
                        <video
                          src={article?.blogImage}
                          className="img-fluid rounded w-100"
                          style={{ height: "200px" }}
                          width={390}
                          height={200}
                          controls
                          autoPlay={true}
                          muted={true}
                          loop={true}
                          playsInline
                        />
                      </div>
                      <div className="box-info-modern-title">
                        <a href="single-massage.html">{article?.title}</a>
                      </div>
                      <div className="box-info-modern-text small">
                        {article?.author}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              {/* {visibleItems < articles.length && (
                <div className="col-12 text-center" onClick={loadMore}>
                  <button className="btn btn-primary py-3 px-5">
                    Load More
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstaGramPost;
