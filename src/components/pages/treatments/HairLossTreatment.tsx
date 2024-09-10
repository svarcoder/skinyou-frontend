import React, { useLayoutEffect } from "react";
import ArticleVideo from "../../../assets/Treatments/Face and body hair removal.mp4";
import UserImg from "../../../assets/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";

const HairLossTreatment: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>Hair Loss Treatment</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="mb-5">
                <video
                  src={ArticleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="img-fluid w-100 rounded mb-5"
                  style={{ height: "600px" }}
                />
                <h5>LIGHT THERAPY FOR HAIR</h5>
                <h5>WHAT IS LIGHT THERAPY FOR HAIR?</h5>
                <p>
                  LLLT is a non-invasive Low Level Light Therapy for hair loss.
                </p>

                <p>
                  These LLLT devices emit low power red light in the wavelength
                  of 635-655 nm. LLLT for hair growth in both men and women
                  appears to be both safe and effective.
                </p>

                <h5>HOW DOES IT WORK ON HAIR LOSS?</h5>
                <p>
                  The main mechanism is hypothesized to be stimulation of stem
                  cells in the hair follicle and shifting the hair follicles
                  from telogen phase i.e.resting stage, into anagen phase, i.e.
                  the active and growing phase.
                </p>

                <p>
                  It changes the hair cycle pattern from thin vellus hair to
                  thick terminal hairs.
                </p>

                <p>
                  It also decreases the stress factors around the hair
                  follicles, with increase in local blood flow and local growth
                  factors influx.
                </p>

                <h5>HOW MANY SESSIONS ARE NEEDED FOR RESULTS TO APPEAR?</h5>
                <p>
                  Results vary from individual to individual. Usually it takes
                  12-16 week period to see gradual improvement.
                </p>

                <p>
                  It requires minimum of two sessions per week, with each
                  session lasting 30-40 mins.
                </p>

                <h5>CAN IT BE COMBINED WITH OTHER TOPICAL AGENTS?</h5>
                <p>
                  Yes, LLLT is a very safe and effective if combined with other
                  topical solutions such as minoxidil (2%-10%), caffeine based
                  solutions, stem cells, etc.
                </p>

                <p>
                  It can also be combined with other procedures such as
                  micro-needling and derma pen procedures for earlier response.
                </p>

                <h5>DERMA PEN FOR HAIR</h5>
                <h5>WHAT IS A DERMA PEN?</h5>
                <p>
                  A derma pen is a motorized surgical instrument which has a
                  disposable cartridge tip outfitted with micro-needles. The
                  length of these medical grade needles vary from 0.5-2.5 mm.
                </p>

                <h5>
                  HOW DOES IT WORK IN HAIR LOSS AND HOW MANY SESSIONS ARE
                  NEEDED?
                </h5>
                <p>
                  Derma pen has inbuilt motor, which causes the micro-needle in
                  the cartridge tip to oscillates at high speed and puncture the
                  skin causing controlled micro-trauma.
                </p>

                <p>
                  These micro-trauma attract increase blood flow in the skin
                  during healing phase alongwith increased growth factors in the
                  area involved.
                </p>

                <p>
                  This leads to activation of latent stem cells in the hair to
                  regrow and multiplicate. Moreover, it leads to the
                  dihydrotestosterone level decrease in the local surrounding
                  area of hair bulb with increased blood flow.
                </p>

                <p>
                  In androgenetic alopecia, it is found there is increase in the
                  DHT levels and its receptors in the hair follicles of the
                  scalp.
                </p>

                <p>
                  Thus, with derma pen, the changes are occurring at the
                  cellular level and can be seen only after successive 5-6
                  sessions.
                </p>

                <h5>WHAT IS THE DOWNTIME WITH DERMA PEN PROCEDURE?</h5>
                <p>
                  It is an office based procedure. Since it causes controlled
                  micro-trauma consisting of uniform depth channels, the
                  recovery time is minimal with 1-2 days, with no or minimal
                  bleeding.
                </p>

                <h5>DERMAROLLER FOR HAIR</h5>
                <h5>WHAT IS A DERMAROLLER?</h5>
                <p>
                  A derma roller is a basically, a handheld device with a wheel
                  attached to a handle. The wheel is outfitted with tiny
                  needles, ranging from 0.5 to 2.5 millimetres long.
                </p>

                <h5>HOW DOES DERMAROLLER HELP?</h5>
                <p>
                  The device is rolled over the skin, causing the needles to
                  press against the tissue and cause channels of microtrauma
                  with normal skin tissue between each channel.
                </p>

                <p>
                  These microtrauma causes the blood flow to increase in the
                  involved area for the healing process, which in turn increases
                  the availability of local growth factors to come in contact
                  with the hair follicle bulb and bulge area.
                </p>

                <p>
                  These area contain progenitor stem cells which on being
                  activated by the various growth factors start proliferating,
                  and replacing the old thin hair into thick terminal hairs.
                </p>

                <h5>HOW MANY SESSIONS ARE NEEDED?</h5>
                <p>
                  Minimum of 5-6 sessions are required for the results to
                  appear. These sessions can be carried out with a gap of 4-6
                  weeks.
                </p>

                <h5>Medical Tattooing</h5>

                <p>
                  There are many times, when an individual cannot go for hair
                  transplant, or the other modalities have been repeatedly
                  failed or when there is a localised patch with scarring which
                  cannot result in regrowth of hair. In these conditions,
                  procedure such as medical micro-needle tattooing can be under
                  taken.
                </p>

                <p>
                  These micro-needling tattooing machine are outfitted with
                  medical graded disposable needle cartridge (from 3 needle- 7
                  needle cartridge) with imported dyes being used with it.
                </p>

                <p>
                  First, base color is matched with the surrounding hair color
                  with a test patch in the area to be taken up for tattooing.
                </p>

                <p>
                  Patient is asked to follow up in 7-10 days, and the test patch
                  is evaluated.
                </p>

                <p>
                  If the color is matching and there is no adverse reaction to
                  the color, the selected dye is taken up for the procedure.
                </p>

                <p>
                  The area selected is marked with marking pen, and anaesthetic
                  cream is applied.
                </p>

                <p>After sterilizing the area, procedure is started.</p>

                <p>
                  There can be minor discomfort during the procedure, with
                  anaesthetic cover providing the least possible pain.
                </p>

                <p>There can minor pin-point bleeding.</p>

                <p>
                  Results can be seen in 1-2 weeks time after the redness has
                  settled down. The main outcome of the procedure is to give the
                  scalp fuller appearance.
                </p>

                <h5>WHY SKIN & YOU CLINIC FOR HAIR LOSS TREATMENTS?</h5>
                <p>
                  We at Skin & You Clinic use a combination of treatment
                  approaches to help in hair regrowth. In the first month of
                  sessions you will see the hair fall getting better, by second
                  month some change in the hair growth is noticed and by the end
                  of 3 months changes are visible. But the changes are not
                  temporary. In cases where no treatments have worked medical
                  tattooing of the scalp is a good option.
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

export default HairLossTreatment;
