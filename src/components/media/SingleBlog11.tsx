import React from "react";
import BlogImg11 from "../../assets/blog/myth-about-sunscreen-and-skin.jpg";
import SideBar from "./SideBar";

const SingleBlog11: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
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
                  src={BlogImg11}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">Myth About Sunscreen And Skin</h3>

                <h5>I don’t need a sunscreen in the morning</h5>
                <p>
                  UVA and UVB rays hit their peak between 10 am and 4 pm. UVA
                  rays are present whenever it’s light outside, even in the
                  morning or late afternoon, during the winter or on cloudy
                  days. So a sunscreen is always required.
                </p>
                <h5>If I wear a sunscreen of SPF 70, I need not worry</h5>
                <p>
                  Protection offered by higher SPFs is minimal – – SPF 15
                  screens 93% of the sun’s UVB rays, SPF 30 protects 97% and SPF
                  50 protects against 98%. Seeing a broad spectrum on the bottle
                  of a sunscreen is more important as it provides protection
                  against both UVA and UVB rays.
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

export default SingleBlog11;
