import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const FacialVolumeLossTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Facial Volume Loss Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>VOLUME LOSS AND AGEING</h5>
                <p>
                  One of the key effects of ageing is that our faces lose
                  volume. When we are young, our face is full and voluminous,
                  without any wrinkles. As we get older, wrinkles and folds
                  start forming and the face appears hollowed and sucked in.
                  Thus, volume needs to be added. If it is only 'tightened', it
                  would look incomplete as wrinkles and folds would still be
                  visible.
                </p>

                <h5>AREAS OF THE FACE LIKELY TO GET AFFECTED</h5>
                <p>
                  The temples, cheeks, brows, smile lines and lips often reflect
                  facial volume loss. Cheeks tend to sag and descend from their
                  usual high position in the face near the eyes to a lower
                  position, leading to the formation of nasolabial folds (the
                  folds from the corners of the nose to the mouth), oral
                  commissures (the folds just beneath the corners of the mouth),
                  and jowls (the skin that sags beneath the jaw line). With age,
                  the face looks more like a square while a youthful face
                  resembles the shape of an upside-down triangle – a line
                  through the eyes forming the base, and the chin forming the
                  point of the triangle. Volume can also be lost in the brows,
                  which exposes the upper orbital rim (the area between the
                  eyebrows and the eyes). Thus adding volume becomes more
                  important to make the face look more youthful than just
                  erasing wrinkles and fine lines.
                </p>

                <h5>WHY DOES SKIN AGE?</h5>
                <p>
                  With increasing age, the hyaluronic acid content in the skin
                  decreases, reducing its capacity to stay moist and supple.
                  Oil-producing glands reduce their activity and the skin
                  becomes dry. The skin also starts losing its fat, thus looking
                  less youthful and smooth.
                </p>

                <h5>SKIN AT DIFFERENT AGES</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    At 25 – Visible aging of the skin starts and the skin begins
                    to replace old cells more slowly.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    At 30 – More fine lines develop as collagen and elastin
                    break down and the delicate skin under both the eyes begins
                    to thin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    At 40 – Deeper lines begin to form around the mouth and
                    eyes. Furrows appear on the forehead and circles under the
                    eyes may grow into pouches. Skin becomes noticeably drier.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    At 45+ – Skin becomes thinner, partly because of hormonal
                    changes, thus losing much of its strength and elasticity.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    At 50+ – Age starts to show on your face.
                  </p>
                </p>

                <h5>
                  HOW SKIN & YOU CLINIC CAN HELP YOU COMBAT FACIAL VOLUME LOSS?
                </h5>
                <p>
                  The doctors at Skin & You Clinic, Mumbai, specialize in
                  non-surgical replacement of facial volume with dermal fillers.
                  We will be able to discuss your concerns and appropriately
                  assess how adding facial volume can help you achieve a younger
                  appearance that remains natural.
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

export default FacialVolumeLossTreatment;
