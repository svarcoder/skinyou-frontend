import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Pigmentation: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Pigmentation (Melasma / Freckles)</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>ABOUT FRECKLES</h5>
                <p>
                  Freckles are small, multiple, symmetrical,discrete, flat, pale
                  brownish hyperpigmented lesion, that occurs in sun exposed
                  area of fair complexioned individuals. It is caused by UV
                  radiation leading to localized excess of production of melanin
                  (pigment responsible for skin colour).
                </p>

                <p>
                  It is more commonly seen in genetically predisposed
                  individuals and mostly, over face, shoulder and back. Seasonal
                  variation i.e., increases in summer and decrease in winters in
                  the number is also seen in this condition.
                </p>

                <h5>MELASMA / CHLOASMA</h5>
                <h5>ABOUT MELASMA</h5>
                <p>
                  It is an acquired patchy tan brown or blue-gray skin
                  discoloration seen on the face and generally common among
                  women in their reproductive years. Though also possible in
                  males, it is seldom seen in them.
                </p>

                <h5>OCCURRENCE</h5>
                <p>
                  Melasma typically appears on the forehead, upper cheeks, upper
                  lip, forehead, and chin of women between 20-50 years of age.
                </p>
                <h5>Triggers</h5>

                <h5>
                  WHILE ITS EXACT CAUSE IS STILL UNKNOWN, SOME OF THE COMMON
                  TRIGGERS ARE –
                </h5>
                <p>
                  A history of daily or intermittent and unprotected sun
                  exposure. External hormones like birth control pills, hormone
                  replacement therapy, and internal hormonal changes during
                  pregnancy. Melasma that occurs during pregnancy is called
                  chloasma or “the mask of pregnancy” and is caused due to an
                  increase in hormone levels like estrogen, progesterone and a
                  melanocyte stimulating hormone. Family history
                </p>
                <p>
                  Anti-seizure medications.Certain products or treatments that
                  cause an increase in melanin production.
                </p>

                <h5>MANAGEMENT</h5>
                <p>
                  Use mild gentle cleansers that are not too harsh and do not
                  erode the natural moisture of the skin.
                </p>
                <p>
                  Skin lightening creams can be used like hydroquinone, azelaic
                  acid, glycolic acid, tretinoin creams, kojic acid, soy,
                  arbutin and those containing liquorice. But these should be
                  used under strict guidance and as prescribed.
                </p>
                <p>
                  Use of a good sunscreen with an SPF of 30+ with both UVA and
                  UVB protection filters, is a must. Sunscreens containing
                  physical blockers, such as zinc oxide and titanium dioxide,
                  are recommended to block UV rays. The regular use of sun
                  protection enhances Melasma treatments.
                </p>
                <h5>TREATMENTS AT SKIN & YOU CLINIC FOR MELASMA?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    CACI treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Mesotherapy treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Chemical peels
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Derma roller treatment
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Whitening injections – glutathione injections can be
                    injected in the patches and they cause whitening of the area
                    of pigmentation.
                  </p>
                </p>

                <h5>
                  WHY SKIN & YOU CLINIC FOR MELASMA AND FRECKLES TREATMENT?
                </h5>
                <p>
                  Melasma is a difficult condition which requires careful
                  management. Any aggressive treatments can make it worse. At
                  Skin & You Clinic, Mumbai, we specialize in the treatment of
                  Melasma. After establishing the type of Melasma you have and
                  the depth of pigmentation, treatment plans are formulated. We
                  have a wide range of treatments available that are combined
                  with the best technology, customised to best suit your skin
                  type.
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

export default Pigmentation;
