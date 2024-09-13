import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LiceBites: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Lice & Bites</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>BITES</h5>
                <p>
                  Reaction to Bites and Stings is initiated either to a toxin or
                  an allergen injected by the offending creature. Allergen could
                  be venoms, irritating hairs, salivary secretions, body parts
                  or insect excreta.
                </p>

                <h5>SIGNS AND SYMPTOMS</h5>
                <p>
                  Reactions seen could vary from systemic complaints of chills,
                  nausea, tremors, abdominal pain , and sweating to skin
                  complaints at the site of contact with burning sensation,
                  pain, blister formation, peeling of skin, red raised areas,
                  intense itching.
                </p>

                <p>
                  Diagnosis: History of trekking/camping/ bite, clinical
                  presentation with symptoms help in diagnosing offending
                  insect.
                </p>

                <h5>TREATMENTS AT SKIN & YOU CLINIC FOR INSECT BITES?</h5>
                <p>
                  It would depend on offending creature and usually involves
                  systemic antihistaminic with topical antibiotics and steroidal
                  preparation.
                </p>

                <p>
                  Note: patient is advised not to pick, manipulate the bite
                  site, as it can lead to stinger/ or other body parts being
                  left behind, and spread of toxin.
                </p>

                <h5>LICEON HAIR /BODY</h5>
                <p>
                  Head lice is caused blood-sucking lice specific to humans
                  beings.
                </p>

                <p>
                  Head and body lice look similar to one another, however they
                  do have different feeding habits and head lice prefer to
                  confine themselves to the scalp.
                </p>

                <p>
                  The head louse is transmitted through shared clothing and
                  brushes; the body louse , by bedding or clothing’s, and the
                  pubic louse from person-to –person contact mainly.
                </p>

                <p>
                  Diagnosis: Nits may be found most easily on the hairs over
                  scalp.
                </p>

                <p>
                  Body louse can be seen in the seams of clothing and rarely
                  over skin.
                </p>

                <p>
                  Pubic lice can be found over hair present over pubic and
                  peri-anal area. They are located over base of hair.
                </p>

                <p>
                  There will be accompanied scratch marks, persistent reddish
                  lesions, boils accompanied with lice and nits.
                </p>

                <h5>TREATMENT</h5>
                <p>
                  Permethrin 1% cream/ lotion, or combined with oral ivermectin
                  is prescribed to control and eliminate the infestation.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR LICE & BITES?</h5>
                <p>
                  We, at Skin &You Clinic, assess, examine and treat all
                  dermatological conditions with utmost care and latest
                  interventions available.
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

export default LiceBites;
