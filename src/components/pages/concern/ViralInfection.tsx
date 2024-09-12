import React, { useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const ViralInfection: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Viral Infection</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <h5>MOLLUSCUM CONTAGIOSUM</h5>
                <p>
                  Most commonly seen in children acquired via skin to skin
                  contact while playing, immunocompromised individuals and in
                  adults through sexual contact.
                </p>

                <p>
                  They are smooth, shiny, pearly white or yellowish dome shaped
                  in appearance.
                </p>

                <p>
                  Treatment: Under local anaesthesia removal of lesions can be
                  done, by needle or small curette.
                </p>

                <h5>CHICKEN POX/ VARICELLA</h5>
                <p>
                  Age : commonly seen in children, sometimes even in adults.
                </p>

                <h5>CLINICAL SIGNS AND SYMPTOMS</h5>
                <p>
                  Vary according to duration, and progression of disease. It
                  presents as multiple itchy crops of lesion which can be
                  reddish, or fluid filled over red background, giving an
                  appearance of “dew drop over rose petal “ , or even pus filled
                  tiny lesions can be seen.
                </p>

                <p>
                  They heal by crusting and till the crusts fall off, the
                  individual is still infective. Initially face and trunk are
                  affected which later on spread onto arms n legs as well as
                  oral mucosa can be affected.
                </p>

                <p>
                  Treatment:Antiviral oral acyclovir/ Val acyclovir with topical
                  anti-itching medications can be taken as prescribed by the
                  practitioner.
                </p>

                <h5>HERPES ZOSTER</h5>
                <p>
                  Herpes zoster is reactivation of latent varicella- zoster
                  virus in nerve root resulting in segmental or localised
                  pattern or linear pattern in the distribution of nerve segment
                  involved.
                </p>

                <p>
                  They present as painful tiny tense grouped fluid filled
                  blisters, which can rupture on trivial trauma, leaving behind
                  superficial erosions and heal by leaving crusts and scabs
                  which fall off to leave scars. Lesions are accompanied or
                  preceded by pain, excessive sensitive skin, tingling,
                  numbness, fever or malaise, if on face even with facial
                  deformities or hearing disturbances.
                </p>

                <p>
                  Most common complication is Post- herpetic neuralgia, I,e,
                  pain accompanying with the disease eruption can continue for
                  months, after the initial lesions have healed. It can vary
                  from burning in nature to painful in nature from person to
                  person.
                </p>

                <p>
                  More commonly seen in older age group, in cases of low
                  immunity, and in patients undergoing organ transplants or
                  chemotherapy.
                </p>

                <p>
                  Diagnosis : based on distribution of lesion, constitutional
                  symptoms herpes zoster infection can be diagnosed. Alongwith
                  complete opthalmological and ear, nose , throat examination is
                  to be done in cases of infection involving face.
                </p>

                <h5>TREATMENT AT SKIN & YOU CLINIC</h5>
                <p className="d-flex flex-column justify-content-start">
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Oral acyclovir/ valacyclovir/ famcyclovir can be given for
                    5-7 days, along with topical soothing and antibiotic agents.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    For Herpetic Neuralgia : carbamazepine, lamotrigine or
                    gabapentine can be prescribed for longer duration.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Herpes Iabialis :It is localized infection, caused by herpes
                    simplex type I infection limited to lips and area
                    surrounding mouth.
                  </p>
                  <p className="rounded mb-0 d-flex align-items-center">
                    <FontAwesomeIcon icon={faAngleRight} className="me-2" />
                    Herpes Genitalis :It is localized infection, caused by
                    herpes simplex virus type II limited to genital region.
                    Transmitted via sexual contact mainly.
                  </p>
                </p>

                <h5>
                  Chances of recurrences are very high in Herpes Infection.
                  Predisposing factors are :
                </h5>

                <p>
                  Fever, sore throat, fever, stress, low immunity, surgery,
                  trauma.
                </p>

                <h5>CLINICAL SIGNS AND SYMPTOMS</h5>
                <p>
                  Appearance of grouped tense small fluid filled lesions having
                  reddish halo around it, which rupture to leave behind crusts,
                  and superficial scars will be seen. Sometimes, there can be
                  superimposed secondary Bacterial Infection
                </p>

                <p>
                  Treatments at Skin & You Clinic: Oral acyclovir/ valacyclovir
                  should be taken for the prescribed period. Topical soothing
                  agents with antibiotic can be prescribed to prevent secondary
                  infection.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR VIRAL INFECTION?</h5>
                <p>
                  We, at Skin and you Clinic, assess, examine and treat all
                  dermatological conditions with utmost care and with latest
                  treatment options available.
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

export default ViralInfection;
