import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface InstagramReelProps {
  index: number;
  id: number;
  blogImage?: string;
  title?: string;
  description?: string;
  link: string;
}

const InstagramReel: React.FC<InstagramReelProps> = ({
  index,
  id,
  blogImage,
  title,
  description,
  link,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`col-xl-4 col-lg-6 animate__animated  animate__delay-1s ${
        index % 2 === 0 ? "animate__bounceInUp" : "animate__bounceInDown"
      }`}
      key={id}
    >
      <div className=" rounded overflow-hidden">
        <video
          src={`${blogImage}`}
          className="img-fluid rounded w-100"
          style={{ height: "200px" }}
          controls
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline
        ></video>

        <div className="pt-4 pb-4">
          <a className="h3 d-block mb-3" href="/">
            {title}
          </a>
          <p className="m-0">{description}</p>
        </div>

        <Link
          className="btn btn-outline-dark rounded-pill py-3 px-5"
          type="submit"
          to={link}
          target="_blank"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default InstagramReel;
