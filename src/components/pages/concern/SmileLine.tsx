import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const SmileLine: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Smile Line</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
      
              <h5> TOO MUCH TO SMILE ABOUT?</h5>
<p>With a life full of reasons to smile, should you have to think before you smile?

At Skin & You Clinic, you have the opportunity to erase all the lines around your eyes and mouth caused due to smiling. These lines, once removed, can make you look younger and more vibrant.
</p>
<h5>AUSE</h5> 
<p>Smile lines (or nasolabial folds, as they are known medically) are the lines in the skin that run from each side of the nose to the outer corners of the mouth. As their name suggests, they are more pronounced when smiling. These lines become deeper and more visible with age as a result of the reduction in facial fat and loss of collagen and elastin. These deep lines often impact the confidence levels of a person. The best way to tackle this problem and bring a refreshed look to your face, is by addressing the overall volume loss that leads to an aged look, rather than just addressing individual facial wrinkles and folds.</p>

<h5>TREATMENT AT SKIN & YOU CLINIC</h5> 
<p>Smile lines are generally treated by injecting fillers into the lines just beneath the skin that fill out and soften these lines. At Skin & You Clinic we have a variety of fillers available, lasting from 8-12 months. Some filler like Juvederm XC contain a local anaesthetic in them, making the treatment relatively comfortable and painless. Fillers like restylane can also be injected to smoothen the lines out.</p>

<h5>WHY CHOOSE SKIN & YOU CLINIC FOR THE TREATMENT OF SMILE LINES?</h5> 
<p>The doctors at Skin & You Clinic, Mumbai, specialize in non-surgical replacement of facial volume with dermal fillers. We would be happy to discuss your concerns and make an appropriate assessment for adding facial volume to achieve a younger appearance that remains natural
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

export default SmileLine;
