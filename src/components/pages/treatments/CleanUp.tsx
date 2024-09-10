import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import SideBar from "./SideBar";

const CleanUp: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Clean up (Pore cleansing)</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h3 className="mb-4">Pore reduction</h3>

                <p>
                  Deep pore cleansing facial is recommended for oily and
                  acne-prone skin, while the pore cleansing facial helps control
                  and cure severe cases of acne.
                </p>

                <h5>The Process</h5>
                <p>
                  This treatment includes deep pore cleansing, necessary
                  extraction and thorough exfoliation of the skin.
                </p>

                <h5>The Results</h5>
                <p>
                  The special mask helps to dry acne and reduce the production
                  of excess oil on the face.
                </p>

                <h5>Deep Pore Cleansing Facial</h5>
                <p>
                  Generally pores that are on the larger side tend to be more
                  susceptible to one or more acne-related conditions like
                  blackheads, whiteheads or cysts. Typically people with oily
                  skin have enlarged pores that secrete excess oil or sebum.
                  These pores get clogged due to irregular cleansing routines,
                  dirt, bacteria or pollution. This facial combats these issues
                  and gives your skin a rejuvenated look.
                </p>

                <h5>The Process</h5>
                <p>
                  The procedure involves application of a gel application to
                  help soften whiteheads/blackheads, followed by a clean-up of
                  blackheads and whiteheads Pore cleansing facial is a gentle
                  and calming facial which takes around 45 minutes. Any redness
                  caused is calmed down with a cooling gel mask that also
                  brightens the face.
                </p>

                <h5>Why Skin &You Clinic for Pore Cleansing Facial?</h5>
                <p>
                  We at Skin & You Clinic understand your skin type and your
                  skin concerns. A plan is then formulated keeping in mind the
                  needed changes expected. Pore cleansing treatment is a
                  relaxing and simple treatment with lasting results.
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

export default CleanUp;
