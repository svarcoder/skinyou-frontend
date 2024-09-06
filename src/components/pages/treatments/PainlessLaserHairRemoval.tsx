import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const PainlessLaserHairRemoval: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Painless Laser Hair Removal</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={BlogImg1}
                  alt="img"
                  style={{ height: "600px" }}
                />

                <p>
                  How does the laser work – Hair has pigment called melanin that
                  gives it colour. Laser works on the colour of hair and on its
                  thickness.
                </p>

                <p>An ideal candidate – Is one who has thick, dark hair.</p>

                <p>
                  Number of treatments required – The hair that regrows is much
                  lighter and finer. About 6-8 treatments are required.
                </p>

                <p>
                  Not painful or uncomfortable – The treatment feels somewhat
                  like the snapping of a rubber band. The sapphire chill tip in
                  the laser makes the treatment quite comfortable.
                </p>

                <p>
                  Possible side effects – In trained hands side effects would be
                  minimal. There can sometimes be temporary redness or swelling.
                  To prevent side effects one can do a patch test for sensitive
                  skin. Pre-screening is done at the clinic by trained
                  dermatologist.
                </p>

                <p>
                  Age for treatment – Once you are 16-18 yrs plus and till your
                  hair is black in colour.
                </p>

                <p>
                  Effective Results – After the treatment one can see a
                  reduction in the density and thickness of hair. People with
                  hormonal problem, light hair or those who have experienced
                  laser failure before need to be evaluated (before the start of
                  the treatment). Areas that can be treated – Laser treatment
                  can be used to remove hair from any part of the body. Common
                  areas are – face, lower face, chin, under arms, arms, chest,
                  abdomen, back, legs, bikini line and body.
                </p>

                <p>
                  Number of sessions required – Usually 6-8 sessions are
                  required to achieve total hair reduction in a particular area.
                  For most patients, the hair removal is permanent. 10% to 20%
                  patients may require ‘maintenance’ treatment sessions once or
                  twice per year.
                </p>

                <p>
                  Time per session – For the face 15-20 minutes; for the body
                  1-3 hrs. Benefits of the treatment – Faster, relatively
                  painless, FDA approved reliable and sophisticated method of
                  laser hair reduction.
                </p>

                <h5>TREATMENT PROTOCOL</h5>
                <h5>The Do’s</h5>

                <p>
                  Shave the area to be treated. Lather the area with soap and
                  shave along the hair growth. Leave a patch for us to access
                  the hair growth. The area to be treated should be clean and
                  free of any makeup. Sun protection is very important after the
                  treatment, so please use a sunscreen on the treated area as
                  advised by the doctor.
                </p>
                <h5>The Don’ts</h5>

                <p>
                  Avoid procedures like plucking, waxing, bleaching or
                  electrolysis two weeks prior to the treatment. Avoid excessive
                  exposure to the sun. Avoid saunas, steam and sunbathing for at
                  least 4-6 days after the treatment. Follow up sessions
                </p>

                <p>
                  Do not get alarmed if you notice re-growth in the area being
                  treated. Hair growth has a cycle of 3 phases and the length of
                  the hair varies for different body parts. However, as the
                  treatment progresses, the hair generally becomes finer and
                  sparser.
                </p>

                <h5>Intervals between follow-up sessions</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Face – After 4-5 weeks
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Upper Body – After 5-6 weeks
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Lower Body – After 6-8 weeks
                  </p>
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR PAINLESS LASER HAIR REMOVAL?</h5>
                <p>
                  At Skin & You Clinic we use the in motion technology by Alma
                  for hair removal the treatment is painless with effective
                  results. It also helps in skin rejuvenatiion with the
                  treatment.
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

export default PainlessLaserHairRemoval;
