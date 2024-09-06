import React, { useLayoutEffect } from "react";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const MesotherapyTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Mesotherapy Treatment</h1>
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
                  This medical technique was invented in 1952 by Michel Pistor
                  and was soon recognized by the French Academy of Medicine.
                </p>

                <p>
                  A Mesotherapy treatment involves injecting small quantities of
                  pharmaceutical, homeopathic medications, plant extracts,
                  vitamins and other ingredients just below the surface layer of
                  the skin. This direct administration impacts the desired area
                  quickly and shows noticeable results in just a few sessions.
                </p>
                <h5>MESOTHERAPY TREATMENTS CAN BE USED FOR</h5>
                <p>
                  Pigmentation: For increased pigmentation like Melasma,
                  blemishes, freckles and post-inflammatory hyper-pigmentation,
                  this technique is used to deliver lightening agents, like
                  Glutathione and Vitamin C, directly into the skin layers.
                  Dramatic improvement can be seen in just 4 sessions.
                </p>

                <p>
                  Hair Loss: Mesotherapy can be used to aid hair restoration. A
                  formulation of vitamins, DHT blockers and minerals, injected
                  into the scalp stimulate the circulation of blood, thus
                  replacing lost vitamins and minerals and allowing hair
                  follicles to get rejuvenated.
                </p>

                <p>
                  Skin Rejuvenation: Mesotherapy is used to infuse lightening
                  and anti-aging materials directly into the skin layers, aiding
                  better product efficacy and quicker results with reduced
                  downtime. It can also help reduce lines and wrinkles, improve
                  sun-damaged skin; and works as an ideal glow treatment.
                </p>

                <p>
                  Acne scars/scars: Scar filling, especially those caused by
                  acne, can be done by administering materials like hyaluronic
                  acid, into the affected areas. This technique is less costly
                  than fillers, and one can see results in just 4 sessions. The
                  skin can finally get resurfaced with Accent Ultra RF Pixel.
                </p>

                <p>
                  Time taken: Each session is convenient and quick, lasting
                  approximately 20-30 minutes. The number of treatments required
                  varies and each patient is advised following a consultation.
                  Micro-injections are then administered every two weeks until a
                  monthly maintenance regime is started to complete the course.
                </p>

                <h5>PRE-TREATMENT INSTRUCTIONS</h5>
                <p>
                  Avoid certain vitamins 3 days prior to the treatment
                  (especially Vitamin E and ginkgo biloba) Discontinue Aspirin,
                  Ecosprin or Disprin 3 days before the treatment. You may apply
                  an anesthetic gel 2 hours prior to the treatment to minimize
                  discomfort, as advised.
                </p>
                <h5>POST-TREATMENT INSTRUCTIONS</h5>
                <p>
                  There is no recovery period needed after Mesotherapy, you can
                  resume work straight away. If you feel any discomfort,
                  anti-inflammatory medicines can be used, as advised. Patients
                  may feel burning and/or discomfort for 20 minutes after the
                  treatment. There may be some bruising at the treated area. You
                  may experience some swelling on the treated area for 48 hours.
                </p>
                <h5>WHY SKIN & YOU CLINIC FOR MESOTHERAPY?</h5>
                <p>
                  Mesotherapy treats a broad range of conditions that include
                  hair loss, pigmentation and skin rejuvenation in older, dull
                  or tired skin. It is also popular with younger customers who
                  suffer from acne scars or wish to get a facial glow.
                </p>

                <p>
                  The doctors at Skin & You Clinic, Mumbai, specialize in
                  Mesotherapy treatments. We listen to the patients’ concerns
                  and help them decide which treatments suit them best by
                  considering factors like desired goal, required downtime for
                  recovery and tolerance to the treatment.
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

export default MesotherapyTreatment;
