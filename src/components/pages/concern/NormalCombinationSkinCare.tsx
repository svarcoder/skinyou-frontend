import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const NormalCombinationSkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Normal / Combination Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Normal skin is neither too oily nor too dry. The oil glands
                  produce sebum at a moderate rate resulting in balanced state.
                  The pores are medium-sized.
                </p>
                <p>
                  {" "}
                  Combination skin type may have a slightly oily T-zone area
                  (the forehead, nose and chin) and normal or patchy and drier
                  skin on the cheeks.
                </p>
                <p></p>Smooth and even texture of the skin with relatively good
                blood circulation. Skin has a healthy colour and looks
                consistently plump, moist and vibrant.
                <p>Tip – Use a sunscreen, moisturiser and cleanser</p>
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

export default NormalCombinationSkinCare;
