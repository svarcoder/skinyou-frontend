import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const HarmonyXLBirthMarkRemoval: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Harmony XL Birth Mark Removal</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>WHAT IS NEVUS OF OTA?</h5>
                <p>
                  Nevus of Ota, also called as the Birthmark, is a skin
                  condition that affects the upper third of the dermal layer in
                  skin. It presents as bluish grey color patch affecting the
                  forehead, Temple, malar area and periorbital skin. It may be
                  congenital or acquired. Commonly seen in females and often is
                  unilateral.
                </p>

                <h5>WHY DOES IT OCCUR?</h5>
                <p>
                  Nevus of Ota occurs when increased numbers of pigment cells
                  are present in the upper layers of the skin dermis.
                </p>

                <h5>HOW IS IT DIFFERENT FROM THE NEVUS OF ITO?</h5>
                <p>
                  Nevus of Ito also presents as a bluish-grey patch but most
                  commonly located on the shoulders or upper arm.
                </p>

                <h5>HOW IS THE PROCEDURE DONE?</h5>
                <p>
                  During the procedure, a local anesthetic cream is applied to
                  minimize discomfort. Patients may experience mild redness and
                  swelling that gets resolved within a few days. Post procedure
                  antibiotic creams and instructions are given to the patients.
                  Strict sun protection is advised while on the treatment.
                </p>

                <h5>HOW DOES THE LASER WORK?</h5>
                <p>
                  Q switched laser works through selective destruction of the
                  pigment cells in the dermis without causing damage to the
                  surrounding normal skin.
                </p>

                <h5>HOW MANY SESSIONS DO I NEED?</h5>
                <p>
                  2-6 sessions are required depending on the size of the lesion.
                </p>

                <h5>HOW CAN IT BE TREATED?</h5>
                <p>
                  At skin &you clinic , we have a completely safe US FDA
                  approved Q-switched ND: YAG Laser system that gives very good
                  results causing the lightening of the pigment within few
                  sessions depending on the size of the lesion.
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

export default HarmonyXLBirthMarkRemoval;
