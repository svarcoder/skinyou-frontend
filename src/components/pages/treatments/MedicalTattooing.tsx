import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const MedicalTattooing: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Medical Tattooing</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Cutting edge techniques are used in the field of medical
                  tattooing to diminish, improve and disguise scarring from
                  surgery, injury, trauma and illness. Medical tattooing helps
                  you to recover physically as well as psychologically by
                  restoring your self esteem and self-confidence.
                </p>

                <h5>TREATMENTS AVAILABLE</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Scar Camouflage
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Usually about one year after a scar has healed, a technique
                    called MCA is used to relax, flatten and soften the scar.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    MCA causes the body to go into a state of natural
                    self-repair.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    In most cases once skin is re-pigmented the color is
                    permanent and will tan and fade the same as the surrounding
                    skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    If the scar does not re-pigment on its own, carefully
                    selected shades of pigments can also be implanted to match
                    the scar to the color of the surrounding skin.
                  </p>
                </p>

                <h5>Areola and Nipple Reconstruction or Enhancement</h5>

                <p>
                  Many women today have undergone a mastectomy, breast
                  reduction, augmentation, reconstruction or uplift.
                  Unfortunately these surgeries often leave behind unsightly and
                  in some case dramatic scarring. An optical reconstruction of
                  the areola and nipple tissue can be carried out following
                  surgery once the breast has healed. Using carefully selected
                  shades of pigment, the nipple and areola complex is
                  realistically recreated with 3 dimensional shading.
                </p>

                <p>
                  Prior to the treatment a thorough consultation is carried out
                  to determine the most pleasing position, shape, colour and
                  size. MCA is also used to reduce outlying scars on the
                  surrounding breast tissue. If you naturally have pale areolas,
                  then the pigments can also be used to darken or add a youthful
                  flush of colour to the areola.
                </p>

                <h5>Burn Relaxation and Camouflage</h5>

                <p>
                  Contracted or uncomfortably tight burn scars can be relaxed
                  and softened using the MCA technique. Camouflage pigments can
                  also be used to blend colour to surrounding skin tissue, this
                  is also extremely successful on skin grafts. Both treatments
                  can only be done once the effected area has healed.
                </p>

                <h5>Other treatments available include</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Scalp camouflage
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Vitiligo camouflage
                  </p>
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

export default MedicalTattooing;
