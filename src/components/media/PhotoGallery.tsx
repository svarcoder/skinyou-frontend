import React, { useState } from "react";
import GalleryImage1 from "../../assets/photoGallery/6-sessions-2.jpg";
import GalleryImage2 from "../../assets/photoGallery/body-contouring.jpg";
import GalleryImage3 from "../../assets/photoGallery/cosmelan-depigmentation-5.jpg";
import GalleryImage4 from "../../assets/photoGallery/dark-cricles-before-after.jpg";
import GalleryImage5 from "../../assets/photoGallery/lips-filler-before-after-1.jpg";
import GalleryImage6 from "../../assets/photoGallery/rf-skin-tightening-1.jpg";
import GalleryImage7 from "../../assets/photoGallery/scar-treatment.jpg";
import GalleryImage8 from "../../assets/photoGallery/tighs-strech-marks.jpg";

const articles = [
  {
    id: 1,
    title: "Scar Treatment",
    articleImage: GalleryImage7,
  },
  {
    id: 2,
    title: "Dark Circles",
    articleImage: GalleryImage4,
  },
  {
    id: 3,
    title: "Lips Filler",
    articleImage: GalleryImage5,
  },
  {
    id: 4,
    title: "Cosmelan Depigmentation",
    articleImage: GalleryImage3,
  },
  {
    id: 5,
    title: "Stretch Marks",
    articleImage: GalleryImage8,
  },
  {
    id: 6,
    title: "Combination of Skin Tightening & Accent Ultra",
    articleImage: GalleryImage6,
  },
  {
    id: 7,
    title: "Pain Free Laser Hair removal",
    articleImage: GalleryImage1,
  },
  {
    id: 8,
    title: "RF Pixel",
    articleImage: GalleryImage1,
  },
  {
    id: 9,
    title: "Combination of iLIPO & Accent Ultra",
    articleImage: GalleryImage2,
  },
];

const PhotoGallery: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <>
      <div className="section section-lg bg-primary">
        <div className="container container-top">
          <div className="text-center mt-4">
            <h1>Photogallery</h1>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="section section section-xl">
          <div className="container wide">
            <div className="row row-md-80 row-sm-50">
              {articles.slice(0, visibleItems).map((article, i) => (
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

              {visibleItems < articles.length && (
                <div className="col-12 text-center" onClick={loadMore}>
                  <button className="btn btn-primary py-3 px-5">
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
