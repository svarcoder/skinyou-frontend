import React from "react";
import BlogImg1 from "../../assets/massage-1-390x344.jpg";
import BlogImg2 from "../../assets/massage-2-390x344.jpg";
import BlogImg3 from "../../assets/massage-3-390x344.jpg";
import UserImg from "../../assets/user.jpg";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container">
          <div className="text-center">
            <h1>Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 900 }}
          >
            <h1 className="display-5 mb-4">Get In Touch With Us</h1>
            <p className="mb-0">
              Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae
              maxime. Vel animi eveniet doloremque reiciendis soluta iste
              provident non rerum illum perferendis earum est architecto dolores
              vitae quia vero quod incidunt culpa corporis, porro doloribus.
              Voluptates nemo doloremque cum.
            </p>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <h2 className="display-5 mb-2">Our Contact Form</h2>

              <form>
                <div className="row g-3">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="project"
                        placeholder="Project"
                      />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 160 }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-light d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 90, height: 90, borderRadius: 50 }}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-primary"
                    size="2x"
                  />
                </div>
                <div className="ms-4">
                  <Link
                    className="text-dark pe-3"
                    to="https://maps.app.goo.gl/GvQUuDyFdPguhykk6"
                    target="_blank"
                  >
                    <h4>Addresses</h4>
                    <p className="mb-0">
                      115 B Mittal Court, Nariman Point, Mumbai – 21.
                    </p>
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-light d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 90, height: 90, borderRadius: 50 }}
                >
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="text-primary"
                    size="2x"
                  />
                  <i className="fa fa-phone-alt fa-2x text-primary" />
                </div>
                <div className="ms-4">
                  <Link
                    className="text-dark pe-3"
                    to="tel:+919920033331"
                    target="_blank"
                  >
                    <h4>Mobile</h4>
                    <p className="mb-0">(+91 22) 43154000</p>
                    <p className="mb-0">(+91 22) 22843000</p>
                    <p className="mb-0">(+91 22) 22825555</p>
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="bg-light d-flex align-items-center justify-content-center mb-3"
                  style={{ width: 90, height: 90, borderRadius: 50 }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary"
                    size="2x"
                  />
                  <i className="fa fa-envelope-open fa-2x text-primary" />
                </div>
                <div className="ms-4">
                  <Link
                    className="text-dark pe-3"
                    to="mailto:helpdesk@skinandyou.in"
                    target="_blank"
                  >
                    <h4>Email</h4>
                    <p className="mb-0">helpdesk@skinandyou.in</p>
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-4">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ width: 90, height: 90, borderRadius: 50 }}
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      size="2x"
                      className="text-primary"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <Link
                    className="btn btn-lg-square btn-primary rounded-circle mx-2
                    d-flex justify-content-center align-items-center"
                    to="https://www.facebook.com/SkinandYouClinic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    className="btn btn-lg-square btn-primary rounded-circle mx-2 d-flex justify-content-center align-items-center"
                    to="https://x.com/SkinandYou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link
                    className="btn btn-lg-square btn-primary rounded-circle mx-2 d-flex justify-content-center align-items-center"
                    to="https://www.youtube.com/skinandyou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </Link>

                  <Link
                    className="btn btn-lg-square btn-primary rounded-circle mx-2 d-flex justify-content-center align-items-center"
                    to="https://www.instagram.com/skinandyou.clinic/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded h-100">
                <iframe
                  className="rounded w-100"
                  style={{ height: 500 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.139253437071!2d72.8236386!3d18.9252294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e966d13c5f%3A0xb164725c117a245c!2sSkin%20%26%20You%20Clinic!5e0!3m2!1sen!2sin!4v1725268051195!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
