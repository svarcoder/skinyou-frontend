import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const StemCellsHairLoss: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Stem Cells for Hair Loss</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={BlogImg1}
                  alt="img"
                  style={{ height: "600px" }}
                />

                <h5>WHAT IS STEM CELL?</h5>
                <p>
                  Stem cells are progeny cells which later on differentiate and
                  mature into different tissue cell lines (such as epidermal
                  cells, hair follicle cells ).in hair these stem cells are
                  present in the hair bulge area which can get stimulated to
                  produce new hair follicles.
                </p>

                <p>
                  In cases of hair loss or androgenetic alopecia these stem
                  cells are unable to produce thicker terminal hair or are lost
                  resulting in hair loss.
                </p>

                <p>
                  In the stem cell therapy we stimulate these dormant hair
                  follicles to produce thicker and healthier hair. Hair
                  follicles contain stem cells that aid hair growth. These cells
                  help in growing new hair follicle. The hair follicles are
                  enriched with stem cells which has growth factor .this is
                  introduced on the scalp with derma rollers and derma pen which
                  helps in orienting and developing the follicle togrow hair.
                </p>

                <p>
                  While aging the follicles tends to shrink and stop responding
                  to the chemical signals given to it this hinders the process
                  of hair growth. The follicles of stem cells send signals to
                  shrunken follicles which in turn help in regenerating and
                  growing healthy hair.
                </p>

                <h5>HOW DOES STEM CELL THERAPY WORK FOR HAIR LOSS?</h5>
                <p>
                  Stem cell therapy for hair regrowth is non-surgical remedy to
                  inspire and regrow hair follicles that result in healthy hair
                  growth. These stem cells renew themselves through cell
                  division after a long period of inactivity, thus helping in
                  stimulation of long dead hair follicles in areas of baldness.
                </p>

                <p>
                  It is introduced into the scalp making hair follicles orient
                  in right direction.It helps promote hair growth and fight
                  baldness.
                </p>

                <p>
                  The follicles stem cells send signals to shrunken follicles
                  thus regenerating growth of healthy hair This therapy not only
                  helps hair loss but improves quality and texture of hair No
                  side effects,The treatment is painless and requires 2 to 3
                  sessions to show good results
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

export default StemCellsHairLoss;
