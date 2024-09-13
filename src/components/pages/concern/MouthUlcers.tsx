import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const MouthUlcers: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Mouth Ulcers</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>WHAT IS A MOUTH ULCER?</h5>
                <p>
                  A Mouth Ulcer is the loss or erosion of part of the delicate
                  tissue that lines the inside of the mouth (Mucous Membrane).
                </p>

                <h5>WHAT CAUSES MOUTH ULCERS?</h5>
                <p>Some of the most common causes of mouth ulcers are:</p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Accidental biting of the cheek
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Constant rubbing/friction against misaligned or sharp teeth
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Constant rubbing/friction due to dentures or braces
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Poor oral hygiene
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Nutritional problems, such as vitamin B-12, zinc, folic
                    acid, or iron deficiency
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Burns from eating hot spicy food
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Infections: Oral thrush infection, Herpes simplex viral
                    infection (cold sore), Syphilis infection
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Reaction to certain drugs, such as chemotherapeutic agents
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Autoimmune diseases (for example, lichen planus, pemphigus)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Certain diseases including tuberculosis, AIDS, diabetes
                    mellitus and inflammatory bowel disease
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Cancer of the lip.
                  </p>
                </p>

                <h5>WHAT ARE THE SYMPTOMS OF MOUTH ULCERS?</h5>
                <p>
                  You can have Mouth Ulcers, if you have the following symptoms:
                </p>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    round sore or sores inside the mouth
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Swollen skin around the sores
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Tenderness
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Problems with chewing or tooth brushing because of the
                    tenderness
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Irritation of the sores by salty, spicy or sour foods
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Loss of appetite.
                  </p>
                </p>

                <h5>HOW CAN YOU MAKE A DIAGNOSIS?</h5>
                <p>
                  Depending on cause and history and clinical examination
                  diagnosis to cause and type of mouth ulcer can be made. If
                  required skin biopsy and blood investigations, can be done as
                  needed
                </p>

                <p>
                  Grouped superficial painful erosions with/ without presence of
                  fever suggest herpes infection.
                </p>

                <p>
                  Single large tender yellowish ulcer could be due to trauma
                </p>

                <p>
                  Round, well defined ulcer with yellowish floor and reddish
                  halo suggest apthous ulcer In Drug reaction, ulcers could vary
                  from mild erythema to severe blistering and necrosis.
                </p>

                <h5>HOW IS MOUTH ULCER TREATED?</h5>
                <p>
                  Most of the mouth ulcers are traumatic and heal by themselves.
                  However, if there is an etiology , then treatment is required.
                  Usually treatment options include the following
                </p>

                <p>
                  Application antiseptic gel to the ulcers prior to meals- to
                  decrease pain/ burning sensation
                </p>
                <p>
                  Medicated mouthwashes- to prevent bacterial infection Use
                  steroid gels or tablets- to fasten the healing process in
                  cases of apthous ulcer or autoimmune conditions
                </p>
                <p>
                  Anti-viral drugs for recommended period for herpes infection.
                  Treat oral thrush with anti-fungal drugs.
                </p>
                <p>
                  Immunosuppressant drugs are sometimes required in resistant
                  cases.
                </p>
                <h5>HOW TO PREVENT MOUTH ULCERS?</h5>
                <p>
                  Mouth ulcers tend to reoccur in most of the cases. However,
                  following steps can be taken to prevent or delay its
                  recurrences
                </p>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoiding foods that irritate your mouth, including acidic or
                    spicy foods
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoiding irritation from gum chewing
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Brushing with a soft-bristled brush after meals and flossing
                    daily.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoiding metallic dental fixtures, if possible.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Eat a well-balanced and nutritious diet.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Make sure that underlying conditions, such as nutritional
                    deficiency, diabetes mellitus and inflammatory bowel
                    disease, are managed appropriately.
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR MOUTH ULCERS TREATMENT?</h5>
                <p>
                  We, at Skin & You Clinic,aim at finding the cause for Mouth
                  Ulcers, diagnosing and treating it accordingly, and making the
                  necessary dietary or lifestyle changes to achieve the best
                  result.
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

export default MouthUlcers;
