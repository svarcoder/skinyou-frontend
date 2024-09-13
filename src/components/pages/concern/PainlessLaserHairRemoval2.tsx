import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PainlessLaserHairRemoval2: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Painless Laser Hair Removal</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>PAIN FREE HAIR FREE</h5>
                <p>The Comfortable Way to Eliminate Unwanted Body Hair:</p>

                <p>
                  Pain- Free, Hair- Free is a state-of-the-art procedure
                  specially designed to remove unwanted hair faster, more
                  comfortably, and with fewer visits than ever before.
                </p>

                <p>
                  Now, because of the patented IN- Motion technology of
                  Pain-free, Hair – Free, you can ever treat sensitive areas
                  without the discomfort of other systems. By using a sweeping,
                  paintbrush technique, the Pain-free, Hair- Free procedure is
                  shorter, more comfortable and gives great results.
                </p>

                <p>More comfortable than ever before</p>

                <p>
                  Pain-free, Hair-free gently heats targeted hair follicles with
                  gentle pulses of laser energy, while you stay comfortable.
                  Nearly any part of the body can be treated safely and
                  comfortably, including the face, neck, legs, arms, bikini
                  line, back and stomach.
                </p>

                <p>
                  Because the laser is constantly in motion, many patients say
                  that Pain-free, Hair- free treatments feel similar to a “hot
                  stone Massage.”
                </p>

                <h5>TECHNOLOGY IN MOTION</h5>
                <p>
                  The IN- Motion technology gradually heats the hair follicles
                  under the skin until they can no longer produce new hair.
                  Since the laser is in constant motion, your treatment area can
                  be wider- which make sessions go quickly.
                </p>

                <p>
                  In additional, a patented DualChill mechanism ensures the
                  surface of your skin stays cool and comfortable throughout
                  your treatment.
                </p>

                <h5>SAFE FOR ALL SKIN TYPES</h5>
                <p>
                  The Pain-Free, Hair- free treatment is suitable for all skin
                  types, including tanned skin. You can expect results from a
                  series of relatively short sessions.
                </p>

                <p>Fast and Comfortable Hair Removal</p>

                <h5>PAIN-FREE, HAIR –FREE TREATMENTS ARE</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Virtually pain- free with no medication or other
                    pre-treatments required. Long-lasting.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Quick—treatments are usually under an hour.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Recovery-free, so you can return to normal activities
                    immediately.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Effective for all skin types, including tanned skin, as well
                    as different hair types.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    More complete in coverage than other laser Hair removal
                    options
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Perfect for any area of the body- including more sensitive
                    areas like the face, neck and bikini area.
                  </p>
                </p>

                <h5>SAFE AND EFFECTIVE</h5>
                <p>
                  Hair removal is one of the aesthetic medical industry’s most
                  well-known and researched uses of lasers. Thousands of
                  patients worldwide have enjoyed a life without unwanted hair,
                  thanks to Pain- free, Hair- Free.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR PAINLESS LASER HAIR REMOVAL?</h5>
                <p>
                  This is the most sophisticated technology for Hair removal,
                  with no downtime pain and good results for Hair Reduction.
                </p>

                <p>
                  We at Skin & You Clinic specialized in this In- Motion
                  technology. At Skin & You Clinic we understand that patient
                  comfort and result are most important.
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

export default PainlessLaserHairRemoval2;
