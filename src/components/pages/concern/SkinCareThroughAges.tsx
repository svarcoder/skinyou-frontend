import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SkinCareThroughAges: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Skin Care Through the Ages</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  From the silky smoothness of a baby's skin to the deep
                  wrinkles of an 80-year-old, perhaps nothing reflects the
                  movement of time as well as skin. It functions normally till
                  puberty; thereafter, around adolescence, clear wrinkle-free
                  complexion starts getting hit by the onset of pimples.
                </p>
                <p>
                  As you age, skin gets less stable due to genetic changes and
                  sun damage further adds to skin woes. Certain factors of
                  natural aging are beyond our control. But today, we know that
                  the sun, and not just our genes, can be blamed for skin
                  turning blemished and wrinkled.
                </p>

                <p>
                  Some of the ways to limit this damage is by avoiding excessive
                  sun exposure, using protection against UV rays, not smoking,
                  limiting alcohol intake, choosing a skin care regime ideal for
                  your skin type and even including anti-aging creams as early
                  as in the 30s.
                </p>

                <h5>EFFECTS OF SKIN AGING</h5>
                <h5>ON LAYERS OF THE SKIN</h5>
                <p>
                  Epidermis – As we age, the top layer of the skin becomes
                  thinner, the rate of skin regeneration reduces and the surface
                  becomes uneven and feels rough. Dermis – Over time, the two
                  building blocks of the dermis, collagen and elastin start
                  breaking down faster than they reproduce. This results in
                  wrinkles and lines, open pores, skin laxity, easy bruisability
                  and prominent blood vessels. Pigmentary Changes – Sun damage
                  spots appear and pigmentary changes are more pronounced.
                </p>
                <h5>IN OTHER AREAS</h5>
                <p>
                  Loss of fat – This is common below the skin, in the cheeks,
                  temples, chin, and eye area, resulting in further loosening of
                  skin with creation of grooves, folds and sunken eyes. Bone
                  loss – This is commonly seen around the ages 50 and 60, around
                  the mouth and chin. Cartilage loss – This may happen around
                  the nose, leading to drooping of its tip.
                </p>
                <h5>SKIN TROUBLES AT DIFFERENT AGES</h5>
                <p>
                  Acne-ridden teens – The most common problem at this age is
                  acne. Time combined with increased androgen production results
                  in excessive oil production. Also, increased outdoor
                  activities without sun protection result in early tanning and
                  sun damage.
                </p>
                <p>
                  Wear and tear in the 20s – It is important not to neglect your
                  skin in these years, as it heralds the onset of expression
                  lines while laughing, talking and frowning. An abundance of
                  collagen and elastin imparts a firm, plump and healthy glow to
                  the face. Wrinkles are virtually non-existent but you need a
                  good sunscreen and a regular skincare routine.
                </p>
                <p>
                  Early damage in the 30s – At this stage, one can prevent
                  premature aging of the skin. The skin still glows, but the
                  aging process starts to show. The skin begins to lose collagen
                  and elastin, making it less supple, and some superficial
                  wrinkles, blotchiness, dryness and tiny fine lines begin to
                  appear. The correct use of skincare products helps minimize
                  lines and creases. Moisturizers cannot actually prevent aging,
                  but can reduce its dry and parched appearance. The use of
                  sunscreen on the face is critical.
                </p>
                <p>
                  Irregularities in the 40s – In these years, it is essential to
                  keep wrinkles and age spots away. It can be a decade of dry
                  skin when dead skin cells stick, darker patches appear and
                  expression lines are formed. Weakening of collagen and elastin
                  fibres, loss of fat and muscles, coupled with gravity's pull,
                  result in the appearance of sagging eyelids, drooping brows
                  and hollowness under the eyes. Expect to see not only the
                  age-related change in your skin but also larger open pores
                  because of the breakdown in collagen. Skin becomes thinner
                  with loss of elasticity. Skin becomes drier as a result of
                  more prominent pigmentation. Fine lines and wrinkles get
                  pronounced due to volume loss.
                </p>
                <p>
                  Visible sun damage at 50+ – By this age, both menopause and
                  the sun have wrecked havoc on your skin, especially if you
                  haven't been a loyal user of sunscreen. Wrinkles, age spots,
                  spider vein and dry skin become prominent. Women in this age
                  group may see more pronounced wrinkles as the moisture and fat
                  content in the skin begin to decrease.{" "}
                </p>
                <p>
                  Declining levels of estrogen during menopause effect skin
                  elasticity, pigment, firmness and tone. Estrogen contributes
                  to sebum production, and thus when this reduces, the skin
                  becomes drier. Estrogen also stimulates fat deposits which
                  serve to make the face, hands and neck look more youthful
                  appearance. Pigment producing cells, controlled by estrogen,
                  slow down, causing irregular dark patches.
                </p>
                <h5>SKIN CHANGES WITH PREGNANCY</h5>
                <p>
                  90% of pregnant women develop hyper pigmentation, an
                  overproduction of melanin that produces dark spots. 70%
                  develop Chloasma, also known as ""mask of pregnancy"". But in
                  the months following childbirth, all the dark spots on the
                  arms and face disappear. 90% of women develop stretch marks
                  during pregnancy. These can be helped by using creams, lotions
                  and with laser, especially the use of RF pixel. Severity of
                  acne and eczema increases in some women.
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

export default SkinCareThroughAges;
