import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const OilySkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Oily Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Oily skin is shiny, especially in the T-zone (the forehead,
                  nose and chin). It is caused by glands that produce excessive
                  oil resulting in skin that has a greasy texture, shiny
                  appearance and large pores.
                </p>
                <p>
                  Signs of oily skin include enlarged pores, acne and
                  blackheads, all due to increased oil production by oil
                  producing glands.
                </p>
                <p>
                  Such skin is often prone to fungal infections and scalp
                  dandruff. The good thing about oily skin is it ages better
                  than dry skin as the oils keep the skin plump, allowing fewer
                  wrinkles to form.
                </p>
                <p>
                  Tip – Use a light weight non-comedogenic sunscreen with a face
                  wash containing salicylic acid and moisturizers containing
                  lactic acid.
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

export default OilySkinCare;
