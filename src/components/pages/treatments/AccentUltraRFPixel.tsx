import React from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AccentUltraRFPixel: React.FC = () => {
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

                <p>
                  With today’s emphasis on an active, healthy lifestyle, most
                  men and women feel a lot younger than they look. Aging,
                  acne-scarred and sun damaged skin, wrinkles and fine lines
                  around the eyes, and brown spots often mask your inner beauty.
                  Fortunately, there is a revolutionary, new aesthetic treatment
                  based on Pixel Radio Frequency, also called RF Pixel that
                  provides a fresh chance to turn back the clock on signs of
                  ageing. This treatment repairs scars, sun damaged skin,
                  acne-scarred skin and helps in skin resurfacing.
                </p>

                <p>
                  RF Pixel treatment can be used to – Improve conditions present
                  in superficial and deeper layers of the skin.
                </p>

                <p>
                  Treatment indications include – Skin resurfacing, treatment of
                  wrinkles around the eyes, treatment of pigmented lesions, such
                  as age spots, sun spots, melasma and treatment of scars
                  resulting from acne, chicken pox, surgery, or trauma. After RF
                  Pixel Treatment, your skin generally feels softer, looks
                  smoother and tighter, and pores are usually smaller.
                </p>

                <p>
                  How it works – To appreciate the benefits of RF Pixel
                  Treatment, think of a photographic portrait or digital image
                  in need of high quality re-touching or colour balance. Just as
                  a damaged painting is delicately restored one area at a time,
                  or a photographic image is altered, pixel by pixel, the RF
                  Pixel improves your appearance by affecting only a fraction of
                  your skin at a time with thousands of microscopic RF Pixel
                  spots. It’s like Photoshop for your face!
                </p>

                <p>
                  RF Pixel Treatment restores a more youthful look by helping
                  reverse the appearance of ageing, acne scarring and sun
                  damage.
                </p>

                <h5>BENEFITS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Stretch Marks Reduction of up to 60% in 5 Sessions
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    Scar/ Acne Scar Reduction of 60%
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin rejuvenation
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Burn scars
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dark circles
                  </p>
                </p>

                <p>
                  Types and signs of aging – Although the ageing of our skin is
                  a complex biological process, there are two main causes
                </p>

                <p>
                  The visible results of ageing are superficial blemishes –
                  broken capillaries, freckles (lentigos), and keratoses, scars,
                  fine wrinkles and deep furrows.
                </p>

                <p>
                  Benefits of Accent Ultra RF Pixel when combined with other RF
                  therapies – This unique ‘fractional’ approach is a major step
                  forward in providing significant cosmetic results with minimal
                  downtime, especially when used in conjunction with other
                  unique treatments for skin tightening and recon touring and
                  rejuvenating your skin. This combined technology embraces
                  multiple RF therapy that cannot be achieved with other light
                  based treatments.
                </p>

                <p>
                  This advanced treatment is the first cosmetic RF device to
                  provide an effective, gradual procedure that creates new skin
                  with no downtime.
                </p>

                <p>
                  Time required for the treatment – RF Pixel Treatment can be
                  performed at Skin & You Clinic, Mumbai, in most cases without
                  any topical anaesthesia. Treatment takes about 30 minutes,
                  depending on the size of the area(s) being treated.
                </p>

                <p>
                  Because the procedure does not “ablate” or remove the outer
                  skin layer, patients can resume routine activities right after
                  treatment. Swelling is minimal and generally resolves on the
                  same day. The skin will have a pinkish tone for 2-3 days.
                </p>

                <p>
                  Number of sessions required – For optimal improvement, a
                  series of 3-5 treatments 2-4 weeks apart has been shown to be
                  most effective. The time between treatments varies from
                  patient to patient depending on individual healing and the
                  depth of treatment.
                </p>

                <p>
                  Results are both immediate and progressive, with noticeable
                  and beneficial effects accumulating over 1-3 months. Collagen
                  regeneration will continue for up to 6 months.
                </p>

                <h5>
                  ACCENT ULTRA RF PIXEL – A PROVEN TREATMENT FOR ACNE SCARRING.
                </h5>
                <p>
                  For most people RF Pixel represents the most advanced new wave
                  of clinically proven treatments available as it improves sun
                  damaged skin, acne scars, chicken pox scars without the
                  downside of surgery.
                </p>

                <p>
                  We recommend a planned course of treatments for the best
                  results. One must have a ‘maintenance’ session scheduled every
                  3-6 months, combined with the most suitable take home skincare
                  range for your skin.
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

export default AccentUltraRFPixel;
