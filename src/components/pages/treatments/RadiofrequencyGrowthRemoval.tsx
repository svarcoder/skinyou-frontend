import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const RadiofrequencyGrowthRemoval: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Radiofrequency Growth Removal (RF Growth Removal)</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Youthful skin is smooth, firm, evenly coloured with no growth.
                  However, skin is the first area to show signs of aging.
                  Unwanted growth on the skin not only looks unsightly but makes
                  us look unattractive. This can be treated by Radio wave
                  Technology that uses energy to make cosmetic enhancing
                  incisions. Healing is rapid, virtually bloodless and with
                  little or no bruising or swelling.
                </p>

                <h5>
                  Radio wave technology treats – Many types of skin lesions like
                </h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Age spots
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Moles and raised lesions
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Skin tags
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Warts (verruca)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sun damaged skin
                  </p>
                </p>

                <p>
                  About radio wave technology – It is the passage of ultra-high
                  frequency radio waves into skin for the purpose of eliminating
                  lesions with minimal discomfort and rapid healing.
                </p>

                <p>
                  Radio wave technology vis-à-vis traditional surgery – With
                  radio waves there is no need of cutting or laser; thus there
                  is less bleeding because of cutting and is more comfortable
                  than lasers.
                </p>

                <h5>ADVANTAGES OF RADIOSURGERY</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Virtually no risk of scarring, removal occurs at a very
                    superficial level
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Better and faster healing
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Minimal damage to surrounding skin
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Minimal, if any, pain
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Less swelling and oedema, if any
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    No bleeding
                  </p>
                </p>

                <p>
                  How the treatment area heals – Immediately after excision
                  there is simply a raw non-bleeding surface not bigger than the
                  original surface area of the lesion. This forms a scab and
                  after 7-10 days later, there is a fresh healthy layer of skin
                  which overtime blends into normal skin colour.
                </p>

                <h5>AREAS THAT CAN BE TREATED ARE</h5>
                <p>
                  Face – This technique is particularly useful for facial growth
                  and spots as there is no scarring and the healing period is
                  short. Armpits/ breasts/ neck – These are common sites of
                  fleshy growths called skin tags that can be removed by this
                  technique. Hands – Removal of brown spots, solar Keratoses,
                  other growths Number of sessions required – A single session
                  is usually required. This should be followed up after 7 days.
                </p>

                <p>
                  Benefits of the treatment – It is safe and proven with minimal
                  downtime.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR GROWTH REMOVAL?</h5>
                <p>
                  We at Skin & You Clinic have expertise and knowledge on the
                  use of the equiptment safely without the risk of any scarring
                  or downtime.
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

export default RadiofrequencyGrowthRemoval;
