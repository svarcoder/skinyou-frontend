import React from "react";

const Apointment: React.FC = () => {
  return (
    <div
      className="container-fluid my-5 py-5"
      style={{ backgroundColor: "#FFF6F6" }}
    >
      <div className="container py-5">
        <div className="row gx-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="mb-4">
              <h5 className="d-inline-block text-uppercase about">
                Appointment
              </h5>
              <h1 className="display-4">Make An Appointment</h1>
            </div>
            <p className=" mb-5">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit.
              Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            {/* <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="/">
              Find Doctor
            </a> */}
            <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="/">
              Read More
            </a>
          </div>
          <div className="col-lg-6">
            <div className="bg-white text-center rounded p-5">
              <h1 className="mb-4">Book An Appointment</h1>
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
    </div>
  );
};

export default Apointment;
