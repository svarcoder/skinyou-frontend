import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const Eczema: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Eczema</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>ECZEMA / DERMATITIS</h5>
                <p>
                  Eczema is a general term for many types of skin inflammation
                  (dermatitis).
                </p>
                <p>Eczema can present as an:</p>
                <p>
                  Acute-rapidly evolving red rash which may be blistered and
                  swollen.
                </p>
                <p>
                  Chronic– longstanding irritable area that gets
                  darker,thickened (lichenified) and is being scratched
                  repeatedly.
                </p>
                <h5>COMMONLY FOUND IN</h5>
                <p>
                  Infants and young children. All races can be affected by
                  Eczema.
                </p>
                <h5>TYPES OF DERMATITIS:</h5>
                <h5>Atopic dermatitis:</h5>
                <p>
                  It is a chronic condition ,more common in children who have
                  other allergies, like asthma and hay fever.
                </p>
                <p>
                  It tends to run in families, and may be triggered by allergens
                  in the environment such as house dust, mites, animal dander,
                  grass pollens and moulds. In infant face is affected mostly,
                  later on as kids get older, elbows, behind the knees, and/or
                  on wrists and hands are affected.
                </p>
                <h5>Contact dermatitis</h5>
                <p>
                  It is a localized reaction that includes redness, itching, and
                  burning in areas where the skin has come into contact with an
                  allergen (substances that an individual has not been
                  sensitized to) or with a general irritant such as an acid, a
                  cleaning agent, or other chemicals.
                </p>
                <p>
                  Contact eczema includes reactions to laundry detergents,
                  soaps, nickel (a metal present in jewellery), cosmetics,
                  certain fabrics, clothing, and perfumes. Seborrheic dermatitis
                </p>
                <p>
                  A condition sometimes classified as a form of eczema that is
                  closely related to dandruff. It causes dry or greasy peeling
                  of the scalp, eyebrows and face, and sometimes of the chest.
                </p>
                <h5>Xerotic eczema</h5>
                <p>
                  Commonly seen in the older age group. It is also known as
                  “winter itch” and is seen in extremely dry skin. It worsens in
                  dry winter weather; hands, legs and trunk are mostly affected
                </p>
                <h5>Stasis dermatitis</h5>
                <p>
                  Stasis dermatitis can occur when fluid accumulates in the
                  tissues just beneath the skin — typically on your lower legs —
                  due to a sluggish circulation. This condition typically occurs
                  around the ankle area. Possible underlying factors include:
                  Varicose veins, Obesity, conditions that affect circulation in
                  your legs, such as pregnancy or deep vein thrombosis. The
                  disorder can make the individual prone to develop leg ulcers
                  later on.
                </p>
                <p>
                  Causes of Eczema: defect in skins protective barrier function
                  against outside agents, abnormal bodies defence mechanism, and
                  presence of triggering factors.
                </p>
                <h5>TREATMENTS @ SKIN AND YOUFOR ECZEMA:</h5>
                <p>
                  An important aspect of treatment is to identify and tackle any
                  contributing or aggravating factors.
                </p>
                <h5>COMMON RISK FACTORS INCLUDE:</h5>
                <h5>Family history of eczema</h5>
                <p>
                  Family history of allergies, including hay fever and asthma
                  Contact with irritants in the environment or occupational
                  exposure.
                </p>
                <h5>Emotional stress</h5>
                <p>
                  Allergens such as house dust, mites, animal dander, grass
                  pollens and moulds. Occasionally, allergic reaction to
                  particular foods
                </p>
                <p>
                  Treatment is always based on:age, type and severity of
                  condition
                </p>
                <p>
                  Bathing: use lukewarm water and avoid hot long water baths.
                  Replace standard soap with a substitute such as a mild
                  soap-free moisturizing cleanser.
                </p>
                <p>
                  Clothing: Wear soft cotton clothes; while, wool, nylon is best
                  avoided.
                </p>
                <p>
                  Irritants: Protect your skin from dust, water, solvents and
                  detergents. Gloves can be worn while handling irritants.
                </p>
                <p>
                  Moisturizers (emollients): Use liberally minimum twice a day
                  on damp skin.
                </p>
                <h5>HOW TO APPLY MOISTURIZER?</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Gentle application of moisturizer into the skin in the same
                    direction that the hair grows.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For very dry skin, apply the emollient every 2 or 3 hours.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    After a bath or shower, gently dry the skin and then
                    immediately apply the emollient while the skin is still
                    moist.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Do not share emollients with other people.
                  </p>
                </p>
                <p>
                  Topical corticosteroids:Itis prescribed to decrease the
                  inflammatory reaction in the skin. Depending of severity
                  duration of application is determined by dermatologist.
                </p>
                <p>
                  Oral corticosteroids: For severe, wide spread and
                  non-responsive cases, a short course of oral steroids may be
                  used. It should be used only under the guidance of a medical
                  practitioner.
                </p>
                <p>
                  Anti-itch medicines: oral anti-histamines may be required, for
                  serious itching.
                </p>
                <p></p>Topical immunosuppressant: Both Tacrolimus and
                Pimecrolimus are topically appliedin combination with steroids
                and moisturisers or separately to reduce itching and
                inflammation.
                <h5>WHY SKIN AND YOU CLINIC FOR ECZEMA?</h5>
                <p>
                  We, at Skin and you, assess, examine and treat all
                  dermatological conditions with utmost care.
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

export default Eczema;
