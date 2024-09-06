import React, { useLayoutEffect, useState } from "react";
import BlogImg4 from "../../assets/blog/milk-peel-vitamin-peel-blog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SingleBlog4: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center">
            <h1>Blog Post</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={BlogImg4}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">Milk Peel and Vitamin C Peel</h3>

                <p>
                  The latest introduced Peel for this party and Festive Season
                  to begin with
                </p>
                <h5>Vitamin C Peel</h5>
                <p>
                  Vitamin C Containing Peel which has 20 percent of Vitamin C
                  The treatment is mild, safe, no down time, no burning with a
                  nice citrus fragrance Treatment Time is 30 mins
                </p>
                <h5>Effects</h5>
                <p>Glow, facial lightening, skin brightening, tan removal</p>
                <h5>Milk peel</h5>
                <p>
                  Natural lightening and brightening agents containing peel No
                  down time, mild acting peel for Dull complexion treatment
                  Treatment Time is 30 to 40 minutes Skin whitening and
                  brightening Works good for post acne dark spots (PIH) marks
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog4;
