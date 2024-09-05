import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const CaciTreatment: React.FC = () => {
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
                  src={BlogImg1}
                  alt="img"
                  style={{ height: "600px" }}
                />
                <h3 className="mb-4">CACI TREATMENT</h3>

                <h5>Which Of These Are You Most Worried About?</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dark circles with tired looking eyes?
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    feeling that your face is travelling south?
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne/blemishes/scars/pigmentation?
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fine lines/wrinkles/aged hands or stretch marks?
                  </p>
                </p>

                <p>
                  Caci treatment treats every skin problem you can think of and
                  is a brilliant antidote to late nights.
                </p>
                <h5>About CACI Treatment</h5>

                <p>
                  It is a non-invasive procedure, combining laser light, micro
                  current, ultrasound and vacuum, to effectively and painlessly
                  tackle face and body imperfections. All you will feel is a
                  mild tingling sensation.it is a simple relaxing procedure with
                  lasting results.
                </p>
                <p>
                  The treatment delivers tiny electrical impulses that mirror
                  the body’s own natural electrical field. The impulses are
                  delivered through slender probes for muscle re-education
                  thereby increasing circulation and the production of collagen
                  and elastin. This results in an enhanced penetration of the
                  active ingredients of skin care formulations. Based on a
                  consultation with the Dr Geeta Mehra, a course of treatments
                  will be recommended to suit your needs.
                </p>

                <h5>CACI Treatment Can Treat the Following Conditions</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Acne/Blemish/Pigmentation/Scars/Spotty Back – Specially
                    designed to encourage rapid healing and skin regeneration,
                    it acts as a decongestant to problem skin. The ultrasound
                    treatment deep cleanses and exfoliates problem areas. The
                    laser stimulates tissue repair and spots and blemishes are
                    zapped within a few sessions.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dark Circles and tired looking eyes – Ultrasound and blue
                    light therapy are used to remove dead skin cells. The
                    circulation procedure improves congestions and rehydrates,
                    together working as a definitive healing treatment. A course
                    of treatment dramatically reduces wrinkles, smoothens fine
                    lines, and puffy eye bags and dark circles are visibly
                    diminished.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stretch Marks and Cellulite – Wave good bye to the orange
                    peel thighs with the electro cellulite treatment. Electrical
                    stimulation breaks down fatty deposits, lifts sagging body
                    muscles and reduces inches. This combined with I-Lipo
                    assisted non-invasive laser lipolysis gives the desired inch
                    loss.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Anti-aging, Fine Lines Wrinkles and Aged Hands – For an
                    extra boost, the specialised treatment combines seven
                    phases. It stimulates facial muscles to enhance the
                    production of collagen and elastin , softening deep lines
                    and wrinkles for the ultimate anti-ageing experience.
                  </p>
                </p>

                <h5>Why Skin & You Clinic for CACI Treatment?</h5>

                <p>
                  We at Skin & You Clinic are trained by professionals and have
                  passed all due tests to conduct the procedures at our centre
                  in Mumbai. The procedure is simple with lasting results; we at
                  Skin & You Clinic have been trained by a team from United
                  Kingdom, London.
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

export default CaciTreatment;
