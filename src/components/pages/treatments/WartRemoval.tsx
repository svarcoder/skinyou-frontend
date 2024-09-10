import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Wart Removal.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const WartRemoval: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Wart Removal</h1>
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
                  Wart Removal: Safe and Effective Solutions for Clear Skin
                </h5>
                <p>
                  At Skin & You Clinic, we offer safe and effective wart removal
                  treatments to help you achieve clear, smooth skin free from
                  these unsightly lesions.
                </p>
                <h5>How It Works:</h5>
                <p>
                  Wart removal at our clinic involves the use of advanced
                  techniques such as laser therapy, cryotherapy, or minor
                  surgical excision, depending on the size, type, and location
                  of the wart. These methods work by targeting the wart tissue,
                  causing it to break down and eventually fall off, without
                  harming the surrounding skin.
                </p>
                <h5>Treatment Methods:</h5>
                <p></p>Laser Therapy: Utilizes targeted laser energy to destroy
                the wart tissue. Cryotherapy: Freezes the wart with liquid
                nitrogen, causing it to blister and fall off. Surgical Excision:
                Involves cutting out the wart under local anesthesia.
                <h5>The Procedure:</h5>
                <p>
                  The chosen treatment is performed in a quick, in-office
                  procedure that typically takes just a few minutes. The area is
                  numbed beforehand to ensure your comfort. Depending on the
                  method used, the wart may be removed immediately or may take a
                  few days to fall off.
                </p>
                <h5>Results:</h5>
                <p>
                  Most patients experience complete removal of the wart after
                  just one session, although some may require additional
                  treatments for larger or more stubborn warts. The treated area
                  will heal over the course of a few weeks, leaving behind
                  smooth, clear skin.
                </p>
                <h5>Why Choose Skin & You Clinic for Wart Removal?</h5>
                <p>
                  At Skin & You Clinic, we provide customized wart removal
                  treatments tailored to your skin type and the specific
                  characteristics of your warts. Our experienced practitioners
                  ensure that your treatment is as painless and effective as
                  possible, minimizing the risk of scarring or recurrence.
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

export default WartRemoval;
