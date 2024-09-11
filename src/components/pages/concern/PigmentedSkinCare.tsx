import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PigmentedSkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Sun & Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Human skin color is primarily due to the presence of Pigment
                  Cells (melanin) in the skin. Skin color ranges from almost
                  black to white with a pinkish tinge due to blood vessels
                  underneath.
                </p>
                <p>Pigmented skin can be oily, dry, normal or combination.</p>
                <p>
                  Pigmentation can be classified into epidermal (superficial),
                  dermal (deep), and mixed.
                </p>
                <p>
                  Excessive skin pigmentation can be caused by UV exposure,
                  hormones, skin trauma. The mode of treatment used will be
                  determined by the type of pigmentation, patient preference,
                  and patient risk tolerance.
                </p>
                <p>
                  UV protection/sunscreen is paramount in the treatment of
                  pigmentation.
                </p>
                <p>
                  Different treatments are used for different types of skin
                  pigmentation and skin types, like lasers and lightening
                  creams.
                </p>
                <p>
                  Tip – For cleansing use a mild cleanser containing lightening
                  and brightening agents, do not use cleansers that are harsh on
                  the skin as they tend to dry the facial skin.
                </p>
                <p>
                  Tip – Use moisturisers containing glycolic acid with topical
                  Vitamin C & E, and niacinamide containing creams.
                </p>
                <p>
                  Tip – Skin lightening agents or cosmeceuticals containing
                  kojic acid, licorice, hydroquinone can also be used but only
                  under supervision of the physician.
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

export default PigmentedSkinCare;
