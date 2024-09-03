import React from "react";
import AboutMeImg from "../../assets/Dr geeta Transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../assets/About us_2.mp4";

const AboutMe: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary">
        <div className="container container-top">
          <div className="text-center mt-4">
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
                  Dr. Geeta Mehra Fazalbhoy (MBBS, DPD UK, AAAM USA)
                </h2>

                <p>
                  Managing Director & Founder Member of Skin & You Clinic,
                  Nariman Point, Mumbai. She is also a consultant at St.
                  Elizabeth Hospital Malabar Hill.
                </p>

                <p>
                  Dr. Geeta Mehra Fazalbhoy has been a part of various medical
                  conferences and events. She has been a Jury Panel for Skin
                  Care at a number of Beauty Pageants across the country.
                </p>

                <p>
                  Skin & You Clinic has been ranked by Times of India in All
                  India Lifestyle Hospital & Clinic Ranking Survey 2015, As 5th
                  Best Clinic in Dermatology, Laser and Anti Ageing.
                </p>

                <p>
                  Skin & You is a leading South Mumbai Skin Lasers & Non
                  invasive dermatology treatment clinic. The World Class Clinic
                  set in pristine setting is a one stop specialty skin clinic to
                  handle all types of dermatology and aesthetic treatments.
                  State of the Art Pain Free Laser Hair Removal, Pain Free Skin
                  Tightening for Removal of Double Chin and Sagging skin, Non
                  Surgical Radio frequency for removal of Acne Scars & Stretch
                  Marks, Painless clear lift treatment for pigmentation and skin
                  whitening. The Clinic has attracted hundreds of overseas
                  patients worldwide, where most visit us in Mumbai, India,
                  exclusively for Laser Hair removal and Skin Tightening RF,
                  <Link to="/treatments-at-clinic/rf-pixel">RF Pixel</Link>. The
                  Skin Clinic specializes in the laser treatments to remove
                  pigmentation and{" "}
                  <Link to="/treatments-at-clinic/gel-peels-and-chemical-peels">
                    Chemical Peels
                  </Link>
                  from UK & Australia / New Zealand.
                </p>
                <p>
                  Dr. Geeta Mehra Fazalbhoy was 1st to introduce Micro Current
                  Non Invasive Technology for instant results and the 1st to
                  introduce World’s leading Technology Pain Free Radio Frequency
                  skin tightening for removal of Sagging Skin and Double Chin &
                  Pain free RF Pixel technology for Stretch Mark removal and
                  acne scars removal.
                </p>
                <p>
                  Dr. Geeta Mehra Fazalbhoy has also introduced the
                  revolutionary I-Lipo and accent ultra for Body Contouring,
                  Body -Shaping & Cellulite removal which is pain free & Non
                  invasive. Results are visible in few sessions.
                </p>
                <p>
                  At Dr. Geeta Mehra Fazalbhoy’s Skin & You Clinic also
                  specializes in dermatology skin conditions like
                  <Link to="/medical-services-for/dermatology-clinic/skin-facial-redness-rosacea">
                    Skin & Facial Redness (Rosacea)
                  </Link>
                  ,
                  <Link to="/medical-services-for/dermatology-clinic/eczema-dermatitis">
                    Eczema/Dermatitis
                  </Link>{" "}
                  ,{" "}
                  <Link to="/medical-services-for/dermatology-clinic/psoriasis">
                    Psoriasis
                  </Link>
                  ,
                  <Link to="/medical-services-for/dermatology-clinic/itching">
                    Itching
                  </Link>{" "}
                  ,
                  <Link to="//medical-services-for/dermatology-clinic/hypertrophic-scars-keloids">
                    Hypertrophic Scars/ Keloids
                  </Link>
                  ,
                  <Link to="/medical-services-for/dermatology-clinic/seborrheic-dermatitis">
                    Seborrheic Dermatitis
                  </Link>{" "}
                  ,
                  <Link to="/medical-services-for/dermatology-clinic/fungal-infections">
                    Fungal Infections
                  </Link>{" "}
                  ,
                  <Link to="/medical-services-for/dermatology-clinic/nail-problems">
                    Nail Problems
                  </Link>{" "}
                  ,{" "}
                  <Link to="/medical-services-for/dermatology-clinic/hair-problems">
                    Hair Problems
                  </Link>{" "}
                  ,{" "}
                  <Link
                    to="/
                   medical-services-for/dermatology-clinic/excessive-sweating"
                  >
                    Excessive Sweating
                  </Link>{" "}
                  ,
                  <Link to="/medical-services-for/pigmentation/pigmentary-changes">
                    Pigmentation changes
                  </Link>{" "}
                  ,{" "}
                  <Link to="/medical-services-for/pigmentation/melasma-chloasma">
                    Melasma/ Chloasma
                  </Link>
                  ,
                  <Link to="/medical-services-for/acne/acne-treatment">
                    Acne
                  </Link>{" "}
                  ,
                  <Link to="/medical-services-for/acne/acne-scarring">
                    Acne Scarring
                  </Link>{" "}
                  .
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
