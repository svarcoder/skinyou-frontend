import React, { useEffect, useState } from "react";

const InstantTalkButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="contact-button"
          data-caption-animate="fadeInUp"
          data-caption-delay={450}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Book Apointment
        </button>
      )}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Book Appointment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0"
                      placeholder="Your Email"
                      style={{ height: 55 }}
                    />
                  </div>

                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0"
                      placeholder="Your Query"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="number"
                      className="form-control bg-light border-0"
                      placeholder="Your Phone"
                      style={{ height: 55 }}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control bg-light border-0"
                      rows={5}
                      placeholder="Your Message"
                    />
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Make An Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstantTalkButton;
