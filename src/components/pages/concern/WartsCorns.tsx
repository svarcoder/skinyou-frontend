import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const WartsCorns: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Warts / Corns</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>
                  WARTS: one of the most common viral infections caused by HPV
                  virus.
                </h5>
                <h5>DIFFERENT TYPES OF WARTS:</h5>
                <p>
                  Common Warts/ Verruca Vulgaris: they are greyish white, skin
                  colored or darkly pigmented growth which can have rough
                  surface or stalk like projections (digitate wart) or appear as
                  bunch arising from single base resembling fingers of hand
                  (filiform wart) site: elbows , knees, around or under nails,
                  dorsum of hands and feet, even face and neck, scalp, genitals
                  can be involved.
                </p>
                <p>
                  Plane Warts/ Verruca Plana: as the name suggest they are flat
                  grouped skin coloured , brownish smooth lesions present most
                  commonly over face, dorsum of hands and feet, forearms ,
                  shins.
                </p>
                <p>
                  Palmo-Plantar Warts: present over palms and soles, painful,
                  gray or brown colored rounded, deep growths. They will be
                  tender to touch if picked up between fingers. Genital Warts/
                  Venereal Warts/ Condyloma Acuminate: they are sexually
                  transmitted and are most commonly seen over genitals. They can
                  be soft pink or greyish blue, soft,moist, and can even bleed
                  on trauma.
                </p>
                <p>
                  Age:Seen in teenagers, young adults, and immunocompromised
                  individuals. Warts are mostly spread by skin to skin contact,
                  sometimes through fomites (sharing of shaving blades). They
                  have tendency to auto inoculate i.e. spreading and multiplying
                  in number with minor injury like scratching, or picking of
                  growth.
                </p>
                <p>
                  Treatment: electro cautery and trichloroacetic acid
                  application Topically immune modulator creams, as prescribed
                  by practitioner.
                </p>

                <h5>CORNS:</h5>
                <p>
                  Corn or callus is thickened accumulation of dead skin over
                  pressure bearing area of palms and soles. They develop over
                  long duration of constant pressure and friction over the area.
                </p>
                <p>
                  Most common predisposing factors- ill fitted shoes, flat
                  footwear, diabetes mellitus or in patients with neuropathy
                  (sensations are decreased).
                </p>

                <h5>HOW TO DIFFERENTIATE WARTS AND CORN:</h5>
                <h5>WARTS CORNS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    On pairing: blackdots can be seen on the skin
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    On pairing : soft white keratin core seen
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Tender or painful when picked up between fingers
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Tender or painful on vertical pressure
                  </p>
                </p>

                <h5>TREATMENT AT SKIN AND YOU CLINIC:</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Corn extraction can be done under local anaesthesia.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For maintenance, salicylic acid based exfoliating agents can
                    be prescribed.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For longer term patients are advised to wear proper fitting
                    shoes, with soft soles, and to get any local trauma checked
                    out by the physician.
                  </p>
                </p>

                <h5>WHY SKIN AND YOU CLINIC FOR WARTS AND CORN TREATMENT?</h5>
                <p>
                  We at Skin and You Clinic aim at removing your corn and warts
                  as painless as possible. Under the topical or local
                  anaesthesia cover, we perform RF cautery or minor excision
                  procedure along with topical prescription with complete
                  counselling on how to take care post procedure and how to
                  prevent its recurrences.
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

export default WartsCorns;
