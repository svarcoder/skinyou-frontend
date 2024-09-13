import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const AlmaDoubleChinRadioFrequencySkinTightening: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Alma Double Chin Radio Frequency Skin Tightening</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  So you need to get rid of the unsightly double chin and
                  tighten the skin, you need the Safe & effective method for
                  facial shaping. Alma V Shape is not only the safest, but also
                  the most effective non-invasive option for face contouring. V
                  Shape has been performed in 80 Countries and successfully
                  treated thousands of patients.
                </p>

                <p>
                  Quick Visible Results– You may see results immediately after
                  the first treatment, though most improvement will be noticed
                  in the days and weeks following each treatment session.
                </p>

                <p>
                  Number of Treatment Sessions Required– a set of 4-6 treatment
                  sessions are recommended for the Alma double chin tightening
                  treatment.
                </p>

                <p>
                  No Side Effects– Alma V Shape is safe and effective with no
                  side effects or downtime.
                </p>

                <p>
                  Duration of Each Treatment Session– A typical session of Alma
                  double chin tightening lasts 20-30 minutes. As the procedure
                  is pain-free, you won’t need to spend any time preparing or
                  recovering from the treatment.
                </p>

                <p>
                  Most Body Parts can be Treated– While V Shape is a procedure
                  designed for your chin, cheeks, neck and the periorbital area
                  around your eyes, the treatment can be done on any area of the
                  body that needs tightening.
                </p>

                <h5>
                  WHY SKIN & YOU CLINIC FOR DOUBLE CHIN SKIN TIGHTENING
                  TREATMENT?
                </h5>
                <p>
                  As the name suggest the Alma v shape double chin tightening is
                  to lift the face and give the youthful look. The treatment can
                  reduce the double chin and tighten loose skin at the same
                  time. We at skin and you are one of the few clinics to have
                  used the system successfully with good results.
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

export default AlmaDoubleChinRadioFrequencySkinTightening;
