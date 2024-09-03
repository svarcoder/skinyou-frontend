import React from "react";
import RandomLinks from "./RandomLinks";
import BlogImg1 from "../../assets/blog/beauty-possibilities.jpg";
import BlogImg2 from "../../assets/blog/de-tanning.jpg";
import BlogImg3 from "../../assets/blog/festive-season-offer.jpg";
import BlogImg4 from "../../assets/blog/lipocontrast-blog.jpg";
import BlogImg5 from "../../assets/blog/milk-peel-vitamin-peel-blog.jpg";
import BlogImg6 from "../../assets/blog/myth-about-sunscreen-and-skin.jpg";
import BlogImg7 from "../../assets/blog/open-pores.jpg";
import BlogImg8 from "../../assets/blog/skin-acne-free.jpg";
import BlogImg9 from "../../assets/blog/skin-care.jpg";
import BlogImg10 from "../../assets/blog/this-rakshabandhan.jpg";
import BlogImg11 from "../../assets/blog/thread-lift.jpg";

const articlesData = [
  {
    id: 1,
    title: "Thread Lift",
    blogImage: BlogImg11,
    description:
      "Get Healthier, Firmer & Tighter Skin in few Minutes Indications Lines and Wrinkles Folds benefits Healthier, Firmer & Tighter Skin Hepls Restoring Firmness & giving youthful appearance Skin Lifting Results Last upto 2 years but Collagen Stimulation may go on Procedure just 45 mins. procedure Therads can be done for face & neck Best suited",
  },
  {
    id: 2,
    title: "Beauty Possibilities",
    blogImage: BlogImg1,
    description:
      "We have a solution to your each concern Concerns Solution Hair concerns:Hair fall, Hair thinning, patches in hair, Dandruff Hair light, growth factor injections, Hair transplant Forehead concerns: Worry lines, frown lines, eye brow lift Botox, vampire lift, Threads Eye concern: Crow’s feet, Dark circles, sunken eyes, Hollow eyes Botox, fillers, vampire lift Mid face",
  },
  {
    id: 3,
    title: "Now “LIPOCONTRAST” at skin & you clinic",
    blogImage: BlogImg4,
    description:
      "LipoContrast is a new technology that results in localized fat reduction within a Selective and non-invasive procedure: thermal contrast lipolysis. Lipocontrast is the non-invasive technique for local fat reduction is on the move. DURATION OF THE TREATMENT Single session will last about 60 minutes. EFFECTS: Fat cells elimination The elimination process of exposed adipocytes to",
  },
  {
    id: 4,
    title: "Milk Peel and Vitamin C Peel",
    blogImage: BlogImg5,
    description:
      "The latest introduced Peel for this party and Festive Season to begin with Vitamin C Peel Vitamin C Containing Peel which has 20 percent of Vitamin C The treatment is mild, safe, no down time, no burning with a nice citrus fragrance Treatment Time is 30 mins Effects Glow, facial lightening, skin brightening, tan removal",
  },
  {
    id: 5,
    title: "This Festive Season",
    blogImage: BlogImg3,
    description:
      "Get Rejuvenated Look, Push Off Years from your Face and Look Glamorous… Skin & You Clinic offers you a package including: Whitening Facial Underarm Painless Laser Hair Reduction (1 Session ) Botox For Frown Lines Lower Face Tightening (1 Session) At Absolutely Unbelievable Price*",
  },
  {
    id: 6,
    title: "This Rakshabandhan……",
    blogImage: BlogImg10,
    description:
      "Get Rejuvenated Look, Push Off Years from your Face and Look Glamorous…. Skin & You Clinic offers you a package including… Whitening Facial Laser Hair Reduction (Small Area) Botox Trial Oxygen Facial At Absolutely Unbelievable Price*",
  },
  {
    id: 7,
    title: "SKIN CARE DURING MONSOON",
    blogImage: BlogImg9,
    description:
      "After bearing that extreme heat of sun in summer days monsoon comes as sing of relief , little changes in the way you take care of your skin could have positive effects during monsoons. Keep skin moist by using soap free cleansers. Sunscreen lotion must be used even if sun is not visible. Waterproof light",
  },
  {
    id: 8,
    title: "Get Detanned at Skin & You Clinic",
    blogImage: BlogImg2,
    description:
      "The harmful UV radiations both UVA and UVB exposure for a longer period are responsible for tanning during summers. Excess solar radiation causes direct and indirect damage to skin leading to tanning , sun burn, skin pigmentation and early aging. How can one avoid sun tanning? Use a good sunscreen with both UVA and UVB",
  },
  {
    id: 9,
    title: "Open Pores",
    blogImage: BlogImg7,
    description:
      "Open pores refer to large pores on the skin. The appearance of pores can be reduced. Causes Increases with acne Blackheads Poor skin care routine Genetic and stress Treatment The Q switched ND Yag pore tightening is quick, painless, highly effective, takes 15 minutes Benefits Plumps up the skin Tightens the skin Certain pore refiner",
  },
  {
    id: 10,
    title: "Acne Care for Summer",
    blogImage: BlogImg8,
    description:
      "Onset of hot & humid weather during summer can be a big nightmare for oily skin!! Here are a few tips to keep your skin acne free during summer. Cleanse your face for oil control with a Salicylic Acid containing face wash. Use an oil free non comedogenic moisturiser. Use of a light, non-comedogenic sunscreen",
  },
  {
    id: 11,
    title: "Myth About Sunscreen And Skin",
    blogImage: BlogImg6,
    description:
      "I don’t need a sunscreen in the morning UVA and UVB rays hit their peak between 10 am and 4 pm. UVA rays are present whenever it’s light outside, even in the morning or late afternoon, during the winter or on cloudy days. So a sunscreen is always required. If I wear a sunscreen of",
  },
];

const SideBar: React.FC = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Recent Post
        </h4>
        <RandomLinks subItems={articlesData} />
      </div>
    </>
  );
};

export default SideBar;
