import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PainlessTattooRemoval: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Painless Tattoo Removal</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>EFFECTIVE TREATMENT FOR DARK TATTOO INKS</h5>
                <p>
                  With the overwhelming popularity of tattoos over the last ten
                  years, the market for effective tattoo removal has exploded.
                </p>

                <p>
                  Injecting colored pigment into small deep holes made in the
                  skin creates tattoos. Regardless of whether a tattoo artist or
                  an untrained individual injects the pigment, the marks or
                  designs are relatively permanent. When people subsequently
                  want their tattoos removed, most physicians today consider
                  laser surgery one of the best methods.
                </p>

                <p>
                  The Q-switched Nd: YAG is the most frequently used laser for
                  tattoo removal.
                </p>

                <p>
                  During treatment, pulses of light from the laser are directed
                  onto the tattoo, breaking up the tattoo pigment. Over the next
                  several weeks the body’s cells remove the ink of the tattoo
                  from the skin. With the Q switched ND YAG laser available on
                  the Harmony laser system you can effectively treat dark tattoo
                  inks, specifically black (which accounts for more than half of
                  all tattoos), blue and green. Patients should expect to come
                  back for several treatments to achieve expected results.
                </p>

                <h5>TECHNOLOGY IN USE</h5>
                <p>
                  Tattoo ink and natural pigmentation like melanin absorb short
                  pulse duration/high peak energy Q-switched pulses so quickly
                  that they create a photo-acoustic effect within the pigment
                  clusters. This effect breaks down the ink into much smaller
                  particles that can be more easily removed by the body’s
                  natural filtering system.
                </p>

                <p>
                  Dark colors: like black, blue and green with 1064-nm
                  wavelength Brighter colors: like red, orange and yellow with
                  532-nm wavelength.
                </p>
                <h5>KEY ADVANTAGES TO PATIENTS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Minimal risk of side effects
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Effective treatment for dark tattoo inks (black, blue and
                    green)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dramatic results after 4-6 sessions.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Almost painless feels like snapping of a rubber band.
                  </p>
                </p>

                <h5>TATTOO REMOVAL WITHOUT LASER</h5>
                <p>
                  Tattoos have become a very popular way of adorning our bodies
                  and expressing ourselves. Often chosen in the spur of the
                  moment, we later come to regret our chosen design. An unwanted
                  tattoo can cause psychological and emotional distress and
                  difficulty in social and work environments.
                </p>
                <p>
                  The procedure is suited for tatoo that cannot be removed by
                  laser. E-raze tattoo removal utilises a specially designed
                  inorganic chemical remover, applied in the same method as the
                  original tattoo. It is designed to draw the tattoo pigment out
                  of the skin, removing the unwanted tattoo.
                </p>
                <p>
                  The treatment is substantially less painful than other removal
                  methods and frequently more effective than laser removal
                  options. It is can be used on professional or home made
                  tattoos and permanent make-up.
                </p>

                <p>
                  Number of treatments may vary depending on your individual
                  circumstances and condition of original tattoo. A body tattoo
                  can be removed on average in around 4-8 treatments, while
                  permanent makeup can usually be removed in 2-3 treatments.
                </p>

                <p>
                  Treatments e are spaced at 8-12 week intervals and larger
                  tattoos may have to be divided into sections for subsequent
                  treatment.
                </p>
                <p>
                  Aftercare of the skin is of vital importance and must be
                  followed rigidly to ensure the pigments are properly expelled,
                  and the area heals properly. It will take some time for the
                  skin to fully regain its normal pigment and to properly accept
                  a tan
                </p>
                <h5>WHY SKIN & YOU CLINIC FOR TATTOO REMOVAL?</h5>
                <p>
                  At Skin & You Clinic we have the best technology partners
                  called alma lasers with the best hands on experience onthe
                  system to provide you with effective tattoo clearance with no
                  possible side effects.
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

export default PainlessTattooRemoval;
