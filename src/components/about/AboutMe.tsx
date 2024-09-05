import React from "react";
import AboutMeImg from "../../assets/Dr geeta Transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../assets/About us_2.mp4";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container">
          <div className="text-center">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container mt-4">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="mb-5">
                <video
                  src={BackgroundVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="img-fluid w-100 rounded mb-5"
                />

                <h2 className="mb-4">
                  Dr. Geeta Sajid Fazalbhoy (MBBS, DPD UK, AAAM USA)
                </h2>

                <p>
                  Managing Director & Founder of Skin & You Clinic, Nariman
                  Point, Mumbai. She is also a consultant at St. Elizabeth
                  Hospital, Malabar Hill. Dr. Geeta Sajid Fazalbhoy has
                  participated in numerous medical conferences and has served on
                  the jury panel for several beauty pageants across India.
                </p>

                <p>
                  Skin & You Clinic was ranked 3rd in dermatology, laser, and
                  anti-aging treatments in the 2015 All India Lifestyle Hospital
                  & Clinic Ranking Survey by the Times of India. Known for its
                  advanced dermatology treatments, Skin & You Clinic offers
                  state-of-the-art procedures such as painless laser hair
                  removal, skin tightening for sagging skin, and non-surgical
                  radiofrequency treatments for acne scars and stretch marks.
                </p>

                <p>
                  The clinic attracts patients from all over the world, many
                  traveling to Mumbai for renowned laser treatments and
                  skin-tightening procedures. Additionally, the clinic
                  specializes in chemical peels and pigmentation treatments,
                  using techniques from the UK, Australia, and New Zealand.
                </p>
                <p>
                  Dr. Geeta introduced several cutting-edge technologies,
                  including Micro Current Non-Invasive Technology for instant
                  results and Pain-Free Radio Frequency Skin Tightening for
                  double chin and sagging skin. She was also a pioneer in RF
                  Pixel technology for stretch mark and acne scar removal, as
                  well as I-Lipo and Accent Ultra for body contouring, shaping,
                  and cellulite removal—non-invasive, pain-free treatments with
                  visible results in just a few sessions.
                </p>
                <p>
                  At Skin & You Clinic, Dr. Geeta also specializes in treating
                  various dermatological conditions such as rosacea, eczema,
                  psoriasis, keloids, seborrheic dermatitis, fungal infections,
                  nail and hair problems, excessive sweating, melasma, acne, and
                  acne scarring.
                </p>

                <h5>Academic Qualifications & Certifications</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    MBBS (DR D.Y.PATIL Medical College, Navi Mumbai, INDIA) 2004
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    DPD (Diploma in Practical Dermatology Cardiff, UK)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Board Certified (DIPLOMATE) Member Of American Academy of
                    Aesthetic Medicine, USA
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Diploma in Aesthetic Medicine (American Academy of Aesthetic
                    Medicine, California, USA)
                  </p>
                </p>

                <h5>International Training</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    International training at ( Malaysia ) under MICHEL E.
                    DELUNE , MD California. (An International Authority in Anti
                    Aging on Botox , Fillers, Chemical Peels & Mesotherapy ).
                    Dr. Delune has done his private fellowship with Dr. Obagi ,
                    USA.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Participated in International Masters Course on aging skin
                    2008 (IMCAS Singapore)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Certificate Course with duly completed Clinical workshops on
                    Aesthetic Medicine. (Hong Kong)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Certificate of attendance of teaching course( IMCAS
                    Singapore) – Asian Eyelid & Periorbital rejuvenation
                  </p>
                </p>

                <h5> International Memberships & Professional Affiliations </h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    American Academy of Aesthetic Medicine California, USA
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    (ESCAD) European Society for Cosmetic & Aesthetic
                    Dermatology, Munich , Germany
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Cosmetology Society of India
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    (IACD) International Academy of Cosmetic Dermatology,
                    Pennsylvania, USA
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Indian Association of Cosmetic Laser Surgeons.
                  </p>
                </p>

                <h5>Awards & Achievements</h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    ⁠India’s Most Trusted Brand 2015 (Best Laser & Aesthetic
                    Treatment Clinic Category)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    ⁠Praxis Media National Business & Service Excellence Award
                    2016 (Winner)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    ⁠Vogue Beauty Award 2017 for Best of Industry Skin Expert
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    ⁠Speaker and Medical Trainer for ALMA Lasers and Glenmark
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    ⁠Conducted Medical Camp at Elizabeth Hospital for skin,
                    hair, and nails
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Speaker and Trainer at various medical conferences,
                    including Cosmolasercon and ASCISON
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
