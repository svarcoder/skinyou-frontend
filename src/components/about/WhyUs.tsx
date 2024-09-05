import React from "react";
import AboutMeImg from "../../assets/Dr geeta Transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../assets/About us_2.mp4";

const WhyUs: React.FC = () => {
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

                <h2 className="mb-4">Why us</h2>

                <p>
                  Skin & You Clinic, Mumbai, is a doctor-based skin clinic that
                  focuses on all dermatology concerns. Treatments at the clinic
                  are non-invasive and non-surgical that are handpicked and
                  customized by Dr. Geeta Mehra Fazalbhoy for individual skin
                  types.
                </p>

                <p>
                  At Skin & You Clinic, Mumbai, each of our services and
                  treatments are modified to suit your needs. Every individual’s
                  needs are different and thus we prescribe treatments best
                  suited to your required goals, priorities and tolerance to
                  pain.
                </p>

                <h5>
                  Expert Team of Doctors headed by Dr. Geeta Mehra Fazalbhoy
                </h5>

                <p>
                  All our doctors have been personally trained by Dr. Geeta
                  Mehra Fazalbhoy herself and are extremely skilled with an
                  international approach and training to their work. Monthly
                  training sessions help them stay up to date and exchange
                  notes. The panel of doctors at Skin &You Clinic, Mumbai,
                  collaborate and decide on what is best for your skin.
                </p>

                <h5>Years of Experience</h5>

                <p>
                  Eight years of experience in non-invasive & non-surgical skin
                  treatments have given us a rare insight into Indian clients
                  and their needs. This has enabled us to select and create new
                  treatment plans with the least downtime and virtually painless
                  skin treatments.All dermatology concerns are also addresses
                  with care and understanding of the impact of the disease on
                  the patient.
                </p>

                <h5>
                  Pioneers of virtually painless and non-surgical treatments
                </h5>

                <p>
                  Dr Geeta Mehra has been a pioneering force in bringing some of
                  the newest and most effective medical technologies in the
                  field of dermatology and cosmetology to India. Our list of
                  firsts includes – Micro Pulse, RF Skin Tightening (a break
                  through painless technology), Juvederm XC and Voluma, alma
                  clear lift painless laser for pigmentation.
                </p>

                <h5>Incorporate US FDA approved technologies and treatments</h5>

                <p>
                  We have exclusive access to the latest US FDA approved
                  technologies and treatments that Dr Geeta Mehra and her team
                  study during their travels across the world. This has enabled
                  us to bring into our clinic best practices and skincare
                  treatments from Australia, USA and Europe.
                </p>
                <h5>Use of world-class leading technologies</h5>

                <p>
                  Dr. Geeta Mehra Fazalbhoy’s believes in using the latest
                  technology from global leaders in skincare to keep the clinic
                  up to date with international training. Unrestricted access to
                  break-through research and developments, information and
                  technology, and the seamless flow of medical and aesthetic
                  know-how is encouraged at Skin & You Clinic, Mumbai. Dr. Geeta
                  Mehra Fazalbhoy and the team strongly focus on the diktat –
                  Better the knowledge and technology partner, better the
                  quality of skin treatment and post-recovery.
                </p>
                <h5>Quality – A focus</h5>

                <p>
                  Our key values focus on – Best practices in pre &
                  post-treatment client care, excellence in pain management,
                  highest standards in skincare hygiene and minimum post –
                  treatment downtime for clients.
                </p>
                <h5>Pre & Post-Treatment client support</h5>

                <p>
                  All our clients have constant access to Dr. Geeta Mehra
                  Fazalbhoy and the team of doctors in case of any pre or
                  post-treatment questions and support.
                </p>
                <h5>Ensure your safety</h5>

                <p>
                  All the medical treatments at Skin & You Clinic, Mumbai, are
                  conducted using the highest skincare protocol by the doctors.
                  All skincare plans are formulated by trained professional
                  doctors. Medical equipments are also handled only by trained
                  professional doctors.
                </p>
                <h5>Pharmacy Support</h5>

                <p>
                  Our in-house pharmacy department and a dedicated team looks
                  after your prescription needs. They ensure timely supplies and
                  help you follow your skincare regime for best results. The
                  pharmacy only stocks proven and reliable brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
