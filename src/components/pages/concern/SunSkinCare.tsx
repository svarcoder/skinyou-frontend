import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SunSkinCare: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Sun & Skin Care</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  Ultraviolet radiation (UV) from the sun is composed of three
                  wavelengths – UVA, UVB and UVC. UVA and UVB play different
                  roles when it comes to tanning, burning, and photo aging.
                </p>

                <h5>ABOUT UVA RADIATION</h5>
                <p>
                  UVA is a long wavelength and accounts for up to 95 per cent of
                  the sun's UV radiation that reaches the earth. UVA rays are
                  long and penetrate deep into the skin. UVA rays even penetrate
                  glass and clouds and thus, we are constantly exposed to large
                  doses of it. They damage the skin causing wrinkling, sagging
                  and premature aging; also playing a role in skin cancer.
                </p>

                <h5>ABOUT UVB RADIATION</h5>
                <p>
                  UVB is in the middle range of the UV spectrum. It is
                  responsible for burning, tanning, accelerating skin aging and
                  also plays a key role in the development of skin cancer. The
                  most significant amount of UVB hits between 10 am and 4 pm.
                  UVB rays do not penetrate glass. Overexposure to it causes
                  tough, leathery pigmented skin and uneven texture.
                </p>

                <h5>ABOUT UVC RADIATION</h5>
                <p>
                  UVC is completely absorbed by the ozone layer and does not
                  affect the skin. Direct sun exposure between 10 am to 4 pm
                  should be avoided.
                </p>
                <h5>SUNSCREEN AND ITS USES</h5>
                <p>
                  Sunscreen is the most valuable cosmetic product that one can
                  use regularly to prevent early sun damage of the skin.
                </p>

                <p>
                  The sun produces both UVA and UVB radiations which can cause
                  sun tan, sunburn on exposed areas. A single exposure can lead
                  to painful, red sunburned skin. Long term sun exposure can
                  cause photo aging, wrinkles, freckles, age spots and a change
                  in the texture of the skin. A sunscreen is essential for all
                  age groups. A good sunscreen should be a combination of
                  chemical blockers such as salicylates, cinnamates and physical
                  blockers such as titanium dioxide and zinc oxide.
                </p>

                <h5>A GOOD SUNSCREEN</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    good sunscreen should be cosmetically acceptable for the
                    patient's compliance.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It should be broad spectrum and protect against both UVA and
                    UVB.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It should have a combination of chemical and physical
                    blockers.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It should have components that are not known irritants or
                    allergens.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    It should be waterproof.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />A
                    good sunscreen can be non-comedogenic and also
                    cost-effective.
                  </p>
                </p>

                <h5>SUNSCREEN AND SKIN TYPES</h5>
                <p>
                  For oily skin, use lightweight waterproof, sweat-proof,
                  non-comedogenic, oil-free and paraben-free sunscreens.
                </p>
                <p>
                  For dry skin, use melting texture, colourless sunscreens that
                  leave neither oily film nor white traces; they should be
                  non-comedogenic and photostable.
                </p>
                <h5>WHEN TO USE SUNSCREEN</h5>
                <p>
                  A sunscreen should be used through the year and not only in
                  summer months. It is a myth, that sun protection is not needed
                  on a cloudy day; such a day will only have 20% less UV
                  radiation. High in the snowy mountains or on sun-kissed
                  beaches, severe sunburn occurs, and in such cases one needs a
                  sunscreen with higher SPF. Even when you are indoors for long
                  periods or commuting by cars, sunscreen is essential as UVA
                  rays penetrate through window glass.
                </p>

                <h5>OTHER METHODS OF PHOTO PROTECTION</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Wear loose and dry cotton clothing.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid peak sun between 10 am to 4 pm.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Use sun glasses and a broad brimmed hat.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Use foundations or face powders that have SPF, thus
                    providing marginal protection.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Avoid perfumes as the psoralens in them can react with the
                    sun leading to pigmentation instead spray it onto clothes.
                  </p>
                </p>

                <h5>SPF AND ITS SIGNIFICANCE</h5>
                <p>
                  SPF denotes the length of time you can safely stay in the sun
                  without getting redness or sunburn. SPF of 30 or higher is
                  recommended. Sunscreen should be applied at least 15 to 20
                  minutes before exposure and reapplied every 2-3 hours. SPF
                  does not indicate tan prevention.
                </p>

                <h5>LABELS ON A SUNSCREEN</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Broad spectrum – Protects against both UVA and UVB
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Water-resistant – Retains the SPF even after 30 to 40
                    minutes of water immersion
                  </p>
                </p>

                <h5>MYTHS ABOUT SUN AND SKIN</h5>
                <p>
                  MYTH 1 – I DON'T NEED A SUNSCREEN IN THE MORNING UVA and UVB
                  rays hit their peak between 10 am and 4 pm. UVA rays are
                  present whenever it's light outside, even in the morning or
                  late afternoon, during the winter or on cloudy days. So a
                  sunscreen is always required.
                </p>

                <h5>
                  MYTH 2 – IF I WEAR A SUNSCREEN OF SPF 70, I NEED NOT WORRY
                </h5>
                <p>
                  Protection offered by higher SPFs is minimal – – SPF 15
                  screens 93% of the sun's UVB rays, SPF 30 protects 97% and SPF
                  50 protects against 98%. Seeing a broad spectrum on the bottle
                  of a sunscreen is more important as it provides protection
                  against both UVA and UVB rays.
                </p>

                <h5>MYTH 3 – WATER-RESISTANT MEANS "WATERPROOF"</h5>
                <p>
                  Sunscreen isn't waterproof, it is water-resistant, which means
                  a dip in the water won't wash it off but will enable it to
                  stay on longer than regular sunscreens. Also, it will not stay
                  on the whole day after you've taken a plunge in the water and
                  towelled off. Thus, it needs to be reapplied so as to having
                  continued effect.
                </p>

                <h5>MYTH 4 – I NEED DIRECT SUNLIGHT FOR VITAMIN D</h5>
                <p>
                  Long-term sun exposure is neither a safe nor an efficient way
                  to boost Vitamin D intake. Only the early morning sun, between
                  7 and 9.30 am for just 15 minutes is good and safe for Vitamin
                  D production. Efficient and healthy levels of Vitamin D can be
                  obtained through a diet rich in it as well.
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

export default SunSkinCare;
