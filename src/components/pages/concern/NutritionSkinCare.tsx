import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const NutritionSkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Nutrition & Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  The skin is a fingerprint of what is going on inside our body.
                  Therefore, the focus lies not only on the external use of
                  creams and lotions but also on what we consume. Today, in the
                  beauty industry, the power of vitamins, minerals and nutrients
                  for a more healthy and youthful glow is paramount.
                </p>

                <p>
                  Find below some key nutritional elements and their
                  significance in our diets.
                </p>

                <h5>VITAMIN C AND E</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    They counter the effect of sun damage (photo protection).
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Reduce damage caused by free radicals (smoke, pollution).
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    They help in the formation of building blocks that support
                    skin structure and prevent formation of wrinkles.
                  </p>
                </p>

                <p>
                  Sources of Vitamin C – Citrus fruits, amla, broccoli, bell
                  pepper, tomato. A daily intake of 500-1000mg/day
                </p>

                <p>
                  Sources of Vitamin E – Vegetable oil, nuts, sunflower seeds,
                  olives, flax seeds, soyabean.A daily intake of 400IU/day
                </p>

                <h5>VITAMIN A</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Prevents aging by reducing fine lines and wrinkles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Helps in the repair and maintenance of skin tissue
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    If deficient, it can lead to a dry, flaky complexion
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    High doses of Vitamin A also control acne
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sources – Eggs, meat, fortified milk, cheese, carrots,
                    spinach, mango, papaya
                  </p>
                </p>

                <p>
                  Note – Vitamin A should only be used when prescribed by a
                  doctor and for short periods of time.
                </p>

                <h5>VITAMIN B</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    deficiency in Vitamin B2 can lead to a sore burning tongue
                    and peeling of lips.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    deficiency in Vitamin B3 can lead to a painful fissured
                    tongue and dry irritated skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    deficiency in Vitamin B6 can lead to Seborrheic dermatitis.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    deficiency in Vitamin B7 can lead to hair loss, brittle
                    nails and dry scaly skin.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sources – Fish, chicken, eggs, bananas, wheat germ, oats
                  </p>
                </p>

                <h5>VITAMIN K</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> It
                    helps reduce dark circles and bruise marks
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sources – Lettuce, broccoli, coriander, spinach, prunes
                  </p>
                </p>

                <h5>IRON</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Essential in the formation of haemoglobin
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Low iron levels result in hair loss and dark circles
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sources – Spinach, soya bean, kidney bean, egg yolk, whole
                    grain, sesame seeds
                  </p>
                </p>

                <h5>ZINC</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" /> A
                    deficiency in zinc may lead to acne, ridges on the nails or
                    hair loss
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Zinc helps in clearing skin of acne by reducing the sebum
                    production
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Sources – Oysters, meat, poultry products, sesame seeds,
                    watermelon seeds, pumpkin seeds, nuts, beans, dairy products
                  </p>
                </p>

                <h5>SELENIUM AND COPPER</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Selenium is a good antioxidant that prevents damage caused
                    by free radicals
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Selenium and copper help in reducing sun damage
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Copper help develop elastin and collagen, the building
                    blocks of skin structure
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Copper helps reduce skin roughness, fine lines, wrinkling
                    and other photo damage
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Copper helps improve skin elasticity and thickness
                  </p>
                </p>

                <p>
                  Sources – Seafood, meat, cereals, dairy products, garlic, eggs
                  ALPHA LIPOIC ACID, DMAE AND COENZYME Q10 Alpha lipoic acid
                  helps smoothen skin and reduces signs of aging DMAE and
                  Coenzyme q10 are powerful antioxidants that protect against
                  free radical damage Sources – Shell fish, spinach, nuts
                </p>
                <h5>HYALURONIC ACID</h5>
                <p>
                  Hyaluronic acid helps give skin elasticity and suppleness It
                  holds onto the moisture, thus providing fullness and radiance
                  to the skin
                </p>
                <h5>WHAT ARE FREE RADICALS?</h5>
                <p>
                  These are highly-charged oxygen molecules generated when food
                  is oxidized to create energy. Excessive production of free
                  radicals is harmful to the skin and body resulting in skin
                  damage, often seen in the form of wrinkling. Antioxidants like
                  Vitamin C and E are helpful in neutralising their effects. The
                  most common causes of free radical damage are the sun,
                  smoking, stress and obesity.
                </p>

                <h5>GLUTATHIONE</h5>
                <h5>SUPER ANTIOXIDANT AND WHITENING AGENT</h5>
                <p>
                  A Very Simple Antioxidant produced naturally in our Body. It
                  is formed by 3 Simple Proteions/Amino Acids Cysteine, Glycine
                  and Glutamine. Glutathione decreases the Oxidative stress in
                  the body Caused by Sun, Pollution, Stress, Smoking to mention
                  a few. Glutathione works on the damaged cells which cause the
                  skin to darken and lighten your Skin, Safely, Evenly, giving
                  you a Natural Luminous Complexion. In many places like Canada
                  Intravenous Infusion’s are given but not common in India.
                </p>

                <p>
                  High Dose Glutahione with Vitamin C combination works magic on
                  pigmentation and gives the needed flawless complexion through
                  internal cell renewal of the body
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

export default NutritionSkinCare;
