import React, { useLayoutEffect, useState } from "react";
import ArticleImg1 from "../../assets/articles2/How-technology-has-changed-beauty.jpg";
import ArticleImg2 from "../../assets/articles2/choose-the-right-sunscreen.jpg";
import ArticleImg3 from "../../assets/articles2/dna-25-7-2018-facial-popsicle-dr-geeta.jpg";
import ArticleImg4 from "../../assets/articles2/dna-3-10-2018-baby-botox-dr-geeta.jpg";
import ArticleImg5 from "../../assets/articles2/dr-geetas-article-in-times-of-india-on-beat-the-clock.jpg";
import ArticleImg6 from "../../assets/articles2/ht-15-9-2018-wrinkle-dr-geeta.jpg";
import ArticleImg7 from "../../assets/articles2/ht-17-10-2018-mens-grooming-dr-geeta.jpg";
import ArticleImg8 from "../../assets/articles2/ht-21-8-2018-charcol-peel-off-dr-geeta.jpg";
import ArticleImg9 from "../../assets/articles2/hyperpigmentation.jpg";
import ArticleImg10 from "../../assets/articles2/monsoon-beauty-tips-dr-geeta.jpg";
import ArticleImg11 from "../../assets/articles2/pimple-positive.jpg";
import ArticleImg12 from "../../assets/articles2/threadlift.jpg";

const articles = [
  {
    id: 1,
    title: "Dr. Geeta’s article on “How to treat hyperpigmentation”",
    articleImage: ArticleImg9,
  },
  {
    id: 2,
    title: "Dr. Geeta’s article on How technology has changed beauty",
    articleImage: ArticleImg1,
  },
  {
    id: 3,
    title:
      "Dr. Geeta’s article on Everything you wanted to know about threadlift",
    articleImage: ArticleImg12,
  },
  {
    id: 4,
    title:
      "Dr. Geeta’s article on Choose the right sunscreen for your body in Times Of India",
    articleImage: ArticleImg2,
  },
  {
    id: 5,
    title: "Dr. Geeta’s article on Beat the Clock in Times Of India",
    articleImage: ArticleImg5,
  },
  {
    id: 6,
    title: "Dr Geeta’s article on Pimple Positivity in DNA",
    articleImage: ArticleImg11,
  },
  {
    id: 7,
    title: "Dr Geeta’s article on Charcol Peel off in HT",
    articleImage: ArticleImg8,
  },
  {
    id: 8,
    title: "Dr Geeta’s article on Mens Grooming in HT",
    articleImage: ArticleImg7,
  },
  {
    id: 9,
    title: "Dr Geeta’s article on Wrinkle in HT",
    articleImage: ArticleImg6,
  },
  {
    id: 10,
    title: "Dr Geeta’s article on Facial Popsicle in DNA",
    articleImage: ArticleImg3,
  },
  {
    id: 11,
    title: "Dr Geeta’s article on Baby Botox in DNA",
    articleImage: ArticleImg4,
  },
  {
    id: 12,
    title: "Dr. Geeta’s article in HT on Monsoon Beauty",
    articleImage: ArticleImg10,
  },
];

const Article: React.FC = () => {
  // const [visibleItems, setVisibleItems] = useState(3);

  // const loadMore = () => {
  //   setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  // };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="section section-lg bg-primary container-top">
        <div className="container">
          <div className="text-center">
            <h1>Articles</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5 pt-0">
        <div className="section section section-xl">
          <div className="container wide">
            <div className="row row-md-80 row-sm-50">
              {articles.map((article, i) => (
                <div className="col-xs-10 col-md-6 col-lg-4" key={i}>
                  <div className="box-info-modern box-md">
                    <div className="box-info-modern-figure">
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

export default Article;
