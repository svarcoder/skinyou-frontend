import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Burns: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Burns</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Burns are categorised based on the depth of involvement- as
                  first degree, second degree and third degree.
                </p>
                <p>
                  Depth of burn is often related to its cause, for e.g.; scalds
                  from hot liquids are usually partial thickness, whereas
                  injuries from contact with flames, hot metals, or electric
                  current are usually full thickness in depth of the skin.
                </p>

                <h5>ASSESSMENT FOR BURNS</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Cause of burn
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Body surface area involvement(BSA)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Secondary infection, cellulitis or sepsis
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Fluid and electrolyte balance
                  </p>
                </p>

                <h5>MANAGEMENT</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Immediate: Cold compresses relievepain and reduce swelling.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Topical: Bland emollients, topical antibiotics such are
                    helpful.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Dressing in second degree or severe burns by skin
                    substitutes should be done.
                  </p>
                </p>

                <h5>BURNS SCAR</h5>
                <p>
                  Burns if second or third degree (deeper in depth) in nature
                  often leads to healing with scarring, hypertrophic scar or
                  keloid and contracture formation.
                </p>
                <p>
                  Apart from cosmetic concern, with person’s self-confidence
                  being massively affected, it often leads to difficulty in
                  mobilization and full range movement of affected parts in
                  daily activities.
                </p>

                <h5>TREATMENT FOR BURN SCAR AND CONTRACTURES</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Creams: Topical medications can be prescribed that help in
                    flattening and repigmentation of scar.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Laser treatment for scar: We at skin and you use laser to
                    resurface the scars and release the contractures. The
                    procedure helps in flattening and blending in of scars and
                    over time a scar resurfacing of 90% is noticed by the
                    procedure.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    MCA Treatment: a specialised treatment carried out for scar
                    filling and rejuvenation at skin and you clinic.
                  </p>
                </p>

                <h5>WHY SKIN AND YOU CLINIC FOR BURNS SCAR TREATMENT?</h5>
                <p>
                  We at Skin & You Clinic, assess, counsel and manage these burn
                  scars with topical and Radiofrequency based resurfacing
                  procedures. These procedures have been helpful to release some
                  tension over the contracture bands, with improvement in
                  scarring and pigmentation.
                </p>

                <p>
                  Overall, it helps in regaining individual’s self-confidence
                  with mobility also being improved up to a large extent.
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

export default Burns;
