import React, { useLayoutEffect } from "react";
import AboutMeImg from "../../assets/Dr geeta Transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackgroundVideo from "../../assets/About us_2.mp4";

const PrepareApointment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container">
          <div className="text-center">
            <h1>How to prepare for an appointment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
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

                <h5>
                  Skin & You Clinic work on an appointment basis –
                  <span>
                    {" "}
                    We request you to book a slot for yourself before you visit
                    us for a consultation.
                  </span>
                </h5>
                <br />
                <h5>
                  Make a quick SMS to get in touch with us –
                  <span>
                    {" "}
                    With this facility you can now just send us a message on
                    (+91) 9920033331 and we will revert within 24 hours.
                  </span>
                </h5>
                <br />
                <h5>
                  Show up on time @ Skin & You Clinic, Mumbai –
                  <span>
                    {" "}
                    At your first visit, you will need to fill up a clinic
                    registration form about your personal information and
                    clinical history. We suggest you arrive 10-15 minutes prior
                    to your appointment.
                  </span>
                </h5>
                <br />
                <h5>
                  Get your every question answered –
                  <span>
                    {" "}
                    We would like you to maximise your visit at Skin & You
                    Clinic, Mumbai, by asking us about every skin-related issue
                    that bothers you.
                  </span>
                </h5>
                <br />
                <h5>
                  Avoid make-up when visiting Skin & You Clinic, Mumbai –
                  <span>
                    {" "}
                    For your appointment, it is best to come without any make-up
                    as this will help the doctor assess your skin better.
                  </span>
                </h5>
                <br />
                <h5>
                  Make necessary clarifications –
                  <span>
                    {" "}
                    If you don’t understand or disagree with the doctor’s
                    recommendation, please feel free to question and clarify.
                  </span>
                </h5>
                <br />
                <h5>
                  Let’s works in collaboration –
                  <span>
                    {" "}
                    To help Skin & You Clinic, Mumbai, show you better results,
                    we recommend you keep all appointments suggested by the
                    doctor.
                  </span>
                </h5>
                <br />
                <h5>
                  Skin & You Clinic, Mumbai, helps manage your prescription –
                  <span>
                    {" "}
                    To ensure satisfactory results, we advise you to regularly
                    collect your prescription and follow the treatment as
                    required by the doctors.
                  </span>
                </h5>
                <br />
                <h5>
                  Avail of the Pharmacy Support –
                  <span>
                    {" "}
                    For any refills on the creams, feel free to approach the
                    clinic at any time with a call, SMS or e-mail.
                  </span>
                </h5>
                <br />
                <h5>
                  Let Skin & You Clinic, Mumbai, serve you well –
                  <span>
                    {" "}
                    The front staff at the clinic will help you with all your
                    queries and guide you with your visit.
                  </span>
                </h5>
                <br />
                <h5>
                  Inform us of appointment changes –
                  <span>
                    {" "}
                    If you need to reschedule or postpone your appointment, do
                    let our staff know at the earliest.
                  </span>
                </h5>
                <br />
                <h5>
                  Schedule an urgent appointment –
                  <span>
                    {" "}
                    Once you call Skin & You Clinic, Mumbai, we can schedule an
                    appointment on the same day itself, just within a few hours.
                  </span>
                </h5>
                <br />
                <h5>
                  We value our every customer and strive toward bringing you to
                  health and radiance.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrepareApointment;
