

import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const LaserSkinWhitening: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Laser Skin Whitening</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
            
              <p>Dark spots on the face can affect our self-esteem and moral and decrease our confidence. The dark spots may not be an indicator of a medical condition but you are still affected and feel greatly embarrassed by it.</p>

              <p>And surely, you have done tons of treatments and applied lots of skin lightening creams just to get rid of those dark spots.</p>

              <h5>WHAT IS LASER SKIN LIGHTENING?</h5> 
<p>Laser Skin whitening is a laser light that is used on the face of a certain wavelength of light. And for many years, laser treatment is one of the effective ways to help lighten dark spots.

Laser whitening is a type of procedure that works by directing concentrated beams of light energy on the dark spots to help gently exfoliate the skin.

This high energy light, which comes in different wavelengths, will then create heat and treat the problem through destruction, or in this case in removing the spots.
</p>
<h5> HOW IS LASER SKIN WHITENING PERFORMED?</h5>
<p>Laser skin whitening is a clinic procedure, painless and with immediate results and no downtime. The laser light acts on the skin pigment melanin and haemoglobin in the skin, the light eventually destroy the dark spots and lighten your skin. The Q-Switched that treats fine lines and wrinkles while also shrinking the appearance of pores, diminishing acne scarring and improving small veins, vessels and redness brought on by Red vessels. The Beauty of this treatment is that it allows microscopic beams to penetrate deeply to stimulate the production of collagen without wounding the outer layer of the skin, and thereby making this procedure pain free and without downtime.</p>

<h5>TIME NEEDED</h5> 
<p>The procedure usually takes minutes, depending on how big or small the pigmented areas are. For larger areas, a minimum of 30 minutes will do.</p>

<h5>BENEFITS OF LASER SKIN WHITENING</h5> 
<p>Useful for sun damaged skin
Improve the tone and texture of skin
Lighten the skin colour
Works on red and brown marks left by acne
Lightens pigmented spots
Lightens freckles
For peri orbital darkening/dark circles</p>
<h5> WHY SKIN & YOU CLINIC FOR LASER SKIN WHITENING?</h5>
<p>We at Skin & You Clinic have the safest lasers available, well researched and FDA approved syatem.It Provides Faster Results than Other Procedures. It Enhances Your Skin. Aside from helping you get rid of dark spots, it can also improve your complexion and make you feel good about yourself.

It Can Boost Your Overall Confidence.</p>
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

export default LaserSkinWhitening;
