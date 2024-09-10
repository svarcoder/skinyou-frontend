import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Dermapen for hair and face.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DermapenHairFace: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Dermapen for Hair and Face</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <video
                  src={ArticleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="img-fluid w-100 rounded mb-5"
                  style={{ height: "600px" }}
                />
                <h5>
                  Dermapen for Hair and Face: Revitalize Your Skin and Stimulate
                  Hair Growth
                </h5>
                <p>
                  At Skin & You Clinic, we offer Dermapen treatments for both
                  hair and face, providing an effective solution for
                  rejuvenating your skin and stimulating hair growth. This
                  advanced microneedling technology is designed to improve the
                  appearance of fine lines, scars, and uneven skin tone while
                  also promoting hair regrowth in areas of thinning or loss.
                  Dermapen treatments are minimally invasive, with little to no
                  downtime, making them a convenient option for those looking to
                  enhance their natural beauty.
                </p>
                <h5>How It Works:</h5>
                <h5>For Face:</h5>
                <p>
                  Dermapen works by creating tiny, controlled micro-injuries in
                  the skin's surface using ultra-fine needles. These
                  micro-injuries stimulate the body's natural healing process,
                  leading to increased production of collagen and elastin, which
                  are essential for firm, youthful skin. As the skin heals,
                  you'll notice an improvement in the texture, tone, and overall
                  appearance of your face, with reduced wrinkles, scars, and
                  pigmentation.
                </p>
                For Hair:
                <p>
                  When used on the scalp, the Dermapen stimulates the hair
                  follicles, encouraging hair growth in areas of thinning or
                  loss. The micro-injuries increase blood flow to the scalp and
                  create channels that allow for better absorption of hair
                  growth serums and nutrients. This combined approach can
                  effectively promote thicker, healthier hair growth over time.
                </p>
                <h5>Treatment Areas:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Face: Fine lines, wrinkles, acne scars, large pores, and
                    uneven skin tone.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Hair: Areas of thinning or hair loss on the scalp.
                  </p>
                </p>
                <h5>The Procedure:</h5>
                <p>
                  Each Dermapen session typically lasts between 30 to 60
                  minutes, depending on the area being treated. A numbing cream
                  is applied to minimize discomfort, and the Dermapen device is
                  then glided across the treatment area, creating the
                  micro-injuries. For hair treatments, a topical hair growth
                  serum may be applied after the procedure to enhance results.
                </p>
                <h5>Results:</h5>
                <p>
                  For the face, improvements in skin texture and tone can be
                  seen within a few weeks, with continued improvement as
                  collagen production increases. For hair, visible signs of
                  regrowth may take a few months to become noticeable, as hair
                  growth is a gradual process. A series of treatments is
                  recommended for optimal results, with maintenance sessions as
                  needed.
                </p>
                <h5>Possible Side Effects:</h5>
                <p>
                  Dermapen treatments are generally well-tolerated, with minimal
                  side effects. Some redness, swelling, or sensitivity in the
                  treated area may occur, but these effects are temporary and
                  typically resolve within a few days. There is little to no
                  downtime, allowing you to quickly resume your normal
                  activities.
                </p>
                <h5>Why Choose Skin & You Clinic for Dermapen Treatments?</h5>
                <p>
                  At Skin & You Clinic, we combine the latest in microneedling
                  technology with personalized care to help you achieve your
                  skin and hair goals. Our skilled professionals are dedicated
                  to delivering safe, effective treatments tailored to your
                  unique needs. Whether you're looking to rejuvenate your skin
                  or stimulate hair growth, trust us to provide you with the
                  best possible results.
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

export default DermapenHairFace;
