import React from "react";
import Img1 from "../../assets/box-home-1-390x344.jpg";
import Img2 from "../../assets/box-home-2-390x344.jpg";
import Img3 from "../../assets/box-home-3-390x344.jpg";

const Services: React.FC = () => {
  return (
    <div className="section section section-lg">
      <div className="container wide">
        <div className="text-center">
          <div className="subtitle about">Massage made easy</div>
          <h2 className="title">How Beautyrel Works</h2>
          <div className="subtitle-2">
            Getting a massage has never been easier.
          </div>
        </div>
        <div className="row row-md-80 row-sm-50">
          <div className="col-xs-10 col-md-6 col-lg-4">
            <div className="box-info-modern">
              <div className="box-info-modern-figure">
                <img src={Img1} alt="Img" width={390} height={344} />
              </div>
              <h4 className="box-info-modern-title">Book</h4>
              <div className="box-info-modern-text">
                Book an appointment on our website or at the salon’s reception
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-md-6 col-lg-4">
            <div className="box-info-modern">
              <div className="box-info-modern-figure">
                <img src={Img2} alt="Img" width={390} height={344} />
              </div>
              <h4 className="box-info-modern-title">Meet</h4>
              <div className="box-info-modern-text">
                Come in time and get ready to relax and unwind at Beautyrel.
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-md-6 col-lg-4">
            <div className="box-info-modern">
              <div className="box-info-modern-figure">
                <img src={Img3} alt="Img" width={390} height={344} />
              </div>
              <h4 className="box-info-modern-title">Relax</h4>
              <div className="box-info-modern-text">
                Forget about all things that worry you and relax at our beauty
                salon.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
