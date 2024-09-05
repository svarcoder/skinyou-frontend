import React, { useState } from "react";
import Article1 from "../../assets/articles/vogue-award-collarge.jpg";
import Article2 from "../../assets/articles/india-trusted-brand-skinandyou-clinic.jpg";
import Article3 from "../../assets/articles/femina-style-diva-2015.jpg";
import Article4 from "../../assets/articles/valentines-day-special-art-work1.jpg";

const articles = [
  {
    id: 1,
    title:
      "Vogue Beauty Awards 2017, Best of Industry Skin Expert Dr. Geeta Fazalbhoy",
    articleImage: Article1,
  },
  {
    id: 2,
    title: "India’s Most Trusted Brand Awards 2015",
    articleImage: Article2,
  },
  {
    id: 3,
    title: "Femina Style Diva 2015",
    articleImage: Article3,
  },
  {
    id: 4,
    title: "Shield hair from monsoon humidity",
    articleImage: Article1,
  },
  {
    id: 5,
    title: "Skincare Mistakes Men Make Every Day",
    articleImage: Article1,
  },
  {
    id: 6,
    title:
      "Band Baajaa Bride: An arranged marriage that turned into a love affair",
    articleImage: Article1,
  },
  {
    id: 7,
    title: "Live Chat with Dr. Geeta Mehra Fazalbhoy @ sify.com",
    articleImage: Article1,
  },
  {
    id: 8,
    title: "Skin care tips to look fabulous on your wedding day",
    articleImage: Article1,
  },
  {
    id: 9,
    title: "Look good, feel good on this Valentine’s Day",
    articleImage: Article4,
  },
  {
    id: 10,
    title: "Growth Factors Injections for Hair Loss & Acne Scars",
    articleImage: Article1,
  },

  {
    id: 11,
    title: "No Sweat No Smell Clinic – Alma Sweat X Laser",
    articleImage: Article1,
  },
];

const WhatsNew: React.FC = () => {
  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container ">
          <div className="text-center ">
            <h1>What´s New</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="section section section-xl">
          <div className="container wide">
            <div className="row row-md-80 row-sm-50">
              {articles.map((article, i) => (
                <div className="col-xs-10 col-md-6 col-lg-4" key={i}>
                  <div className="box-info-modern box-md">
                    <div
                      className="box-info-modern-figure"
                      style={{ height: "300px" }}
                    >
                      <img
                        src={article?.articleImage}
                        alt="Img"
                        width={390}
                        height={344}
                      />
                    </div>
                    <div className="box-info-modern-title">
                      <a href="single-massage.html">{article?.title}</a>
                    </div>
                  </div>
                </div>
              ))}

              {/* {visibleItems < articles.length && (
                <div className="col-12 text-center" onClick={loadMore}>
                  <button className="btn btn-primary py-3 px-5">
                    Load More
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
