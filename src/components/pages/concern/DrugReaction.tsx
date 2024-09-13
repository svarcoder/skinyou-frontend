import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const DrugReaction: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Drug Reaction</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <p>
                  A Drug Reaction/ Eruption usually appear within the first 2-3
                  weeks of starting a drug.
                </p>

                <h5>SOME OF THE MOST COMMON DRUG ERUPTIONS ARE</h5>
                <h5>FIXED DRUG ERUPTION (FDE)</h5>
                <p>
                  In this type of drug reaction a particular body site is
                  repeatedly involved with each exposure to a particular drug,
                  i.e. it is limited to a particular site.
                </p>

                <p>
                  Drugs causing FDE are- sulphonamides, antiepileptic drug
                  (phenytoin), NSAIDS (pain medications), etc
                </p>

                <p>
                  It appears as circular or oval, reddish patch within 1-2 days
                  of intake of the offending drug. It can be burning or itchy in
                  nature. After few days it starts darkening in colour, and
                  heals leaving behind pigmentation.
                </p>

                <p>
                  If rechallenged with the same agent, the same site becomes red
                  again and heals with pigmentation.
                </p>

                <p>
                  Sites more commonly involved are: hands, feet, palms, soles,
                  face, oral mucosa and around mouth.
                </p>

                <h5>ERYTHEMA MULTIFORME</h5>
                <h5>
                  THIS TYPE OF REACTION CAN BE CAUSED BY OTHER FACTORS ALSO
                  APART FROM DRUGS
                </h5>

                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Drugs: NSAIDS (e.g. aspirin)tetracycline’s, penicillin’s,
                    anti-TB (rifampicin, PAS, isoniazid)
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Infections: viral (herpes simplex), bacterial (streptococcal
                    pharyngitis), TB Rarely food additives, SLE, sarcoidosis,
                    infectious mononucleosis, can be the triggering factors.
                  </p>
                </p>

                <p>
                  Lesions are multiform. Initially it will be reddish flat
                  lesion and patch which becomes rapidly elevated with a dark
                  centre. And within next few days, it progresses to typical
                  bull eye type appearance or target lesions with three zones of
                  from outside in bright redness, pale swelling, and dark red or
                  grey at the centre. Erosions can be seen in mucosa of oral or
                  genital area.
                </p>

                <p>
                  Sites most commonly involved are: palms, soles, extremities,
                  oral and conjunctival mucosa, lips and glans penis.
                </p>

                <h5>DIAGNOSIS</h5>
                <p>
                  Diagnosis is based on history of evolution, drug intake,
                  associated diseases, and appearance of the skin lesion.
                </p>

                <h5>COMPLICATIONS</h5>
                <p>
                  Drug eruption such as Erythema multiform can sometimes rapidly
                  progress to involve other parts to whole of the body,
                  condition known as Steven Johnson syndrome and toxic epidermal
                  necrosis. It’s a life threatening condition with severe skin
                  maceration and massive fluid loss and has to be managed in an
                  intensive care accordingly.
                </p>

                <h5>TREATMENT ATSKIN &YOU CLINIC</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Offending agent has to diagnosed and patient should carry
                    with them Adverse drug reaction card with them all time.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Topical and oral short course steroid can be prescribed.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Ocular antibiotic and moistening agents to be used for eye
                    protection.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Nutritional and electrolyte balance maintenance should be
                    followed.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    In severe cases, of Steven-Johnson and TEN intensive care is
                    advised.
                  </p>
                </p>

                <h5>WHY KIN & YOU CLINIC FOR DRUG REACTION?</h5>
                <p>
                  We, at Skin & You Clinic, assess, examine and treat all
                  dermatological conditions with utmost care and latest
                  interventions available.
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

export default DrugReaction;
