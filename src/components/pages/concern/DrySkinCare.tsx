import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DrySkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Dry Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Dry skin is caused by inactive oil glands that don't produce
                  enough sebum for lubrication.
                </p>
                <p>
                  It has a dull appearance and the skin feels dry and itchy. The
                  skin feels tight especially after cleansing and is prone to
                  flaking and red patches. It has a tendency toward fine lines
                  and wrinkles. Dry skin may appear ashy or dull from dead skin
                  build up.
                </p>
                <p>
                  Dry skin needs to be hydrated regularly with fresh water mist
                  as well as moisturized by rich hydrating creams or lotions.
                  Calming and hydrating products with active yet gentle
                  ingredients are the key to shedding the dry layers and
                  revealing a bright, smooth complexion.
                </p>
                <p>
                  Tip – Use Luke warm water and not hot water for cleansing. Use
                  mild non soapy cleansers or creamy face wash as they preserve
                  natural oils in the skin. Use cleansers containing glycerine.
                  Rich hydrating moisturizers are required for dry skin. These
                  will increase the skin's water content, improve its smoothness
                  and decrease symptoms of itching, stinging and burning.
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

export default DrySkinCare;
