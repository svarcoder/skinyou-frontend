import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const navItems = [
  { path: "/", label: "Home" },
  {
    path: "/",
    label: "TREATMENTS",
    dropdown: true,
    subItems: [
      {
        path: "/treatments/bridal-packages",
        label: "Bridal Package Treatment",
      },
      {
        path: "/treatments/gel-peels-chemical-peels-treatment",
        label: "Gel Peels / Chemical Peels Treatment",
      },
      { path: "/treatments/caci-treatment", label: "Caci Treatment" },
      {
        path: "/treatments/skin-polishing-microdermabrasion",
        label: "Skin Polishing (Microdermabrasion)",
      },
      {
        path: "/treatments/oxygen-facial-treatment",
        label: "Oxygen Facial Treatment",
      },
      {
        path: "/treatments/whitening-facial-treatment",
        label: "Whitening Facial Treatment",
      },
      {
        path: "/treatments/tightening-facial-treatment",
        label: "Tightening Facial Treatment",
      },
      {
        path: "/treatments/clean-up-facial-treatment-pore-cleansing",
        label: "Clean Up Treatment (Pore Cleansing)",
      },
      { path: "/treatments/oxygen-treatment", label: "Oxygen Treatment" },
      {
        path: "/treatments/hydration-facial-treatment",
        label: "Hydration Facial Treatment",
      },
      {
        path: "/treatments/glutathione-whitening-treatment",
        label: "Glutathione Whitening Treatment",
      },
      {
        path: "/treatments/cosmelan-depigmentation-treatment",
        label: "Cosmelan Depigmentation Treatment",
      },
      {
        path: "/treatments/low-level-light-laser-for-hair-loss",
        label: "Low Level Light Laser for Hair Loss",
      },
      {
        path: "/treatments/botox-treatment",
        label: "Botox Treatment",
      },
      {
        path: "/treatments/dermal-filler-treatment",
        label: "Dermal Filler Treatment",
      },
      {
        path: "/treatments/clear-lift-photo-facial",
        label: "Clear Lift Photo Facial",
      },
      {
        path: "/treatments/pore-tightening-treatment",
        label: "Pore Tighting Treatment",
      },
      {
        path: "/treatments/derma-roller-treatment",
        label: "Derma Roller Treatment",
      },
      {
        path: "/treatments/mesotheraphy-treatment",
        label: "Mesotheraphy Treatment",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Placenta Extract Treatment",
      },
      {
        path: "/treatments/prp-vampire-facelift",
        label: "Prp Vampire Facelift",
      },
      {
        path: "/treatments/liquid-facelift-treatment",
        label: "Liquid Facelift Treatment",
      },
      {
        path: "/treatments/stretch-marks-treatment",
        label: "Stretch Marks Treatment",
      },
      {
        path: "/treatments/non-surgicalskin-tightening",
        label: "Non Surgical Skin Tightening",
      },
      {
        path: "/treatments/hair-loss-treatment",
        label: "Hair Loss Treatment",
      },
      {
        path: "/treatments/semi-permanent-make-up",
        label: "Semi Permanent Make Up",
      },
      {
        path: "/treatments/medical-tattooing",
        label: "Medical Tattooing",
      },
      {
        path: "/treatments/painless-laser-hair-removal",
        label: "Painless Laser Hair Removal",
      },
      {
        path: "/treatments/ndyag-hair-removal-treatment",
        label: "Ndyag/ Hair Removal Treatment",
      },
      {
        path: "/treatments/accent-ultra-skin-body-contouring",
        label: "Accent Ultra Skin Body Contouring",
      },
      {
        path: "/treatments/accent-ultra-rf-pixel",
        label: "Accent Ultra RF Pixel",
      },
      {
        path: "/treatments/rf-growth-removal-cautery",
        label: "RF Growth Removal",
      },
      {
        path: "/treatments/harmony-xl-birthmark-removal-nevus-of-otaito",
        label: "Harmony XL Birth Mark Removal",
      },
      {
        path: "/treatments/harmony-xl-spider-vein-removal",
        label: "Harmony XL Spider Vein Removal",
      },
      {
        path: "/treatments/prp-for-hair-loss-treatment",
        label: "PRP for Hair Loss Treatment",
      },
      {
        path: "/treatments/stem-cells-for-hair-loss",
        label: "Stem Cells for Hair Loss",
      },
      {
        path: "/treatments/painless-tattoo-removal",
        label: "Painless Tattoo Removal",
      },
      {
        path: "/treatments/body-slimming-treatment",
        label: "Body Slimming Treatment",
      },
    ],
  },
  {
    path: "/",
    label: "Treatment by Concern",
    dropdown: true,
    subItems: [
      {
        path: "/",
        label: "Dermatology Treatment",
        dropdown: true,
        subElements: [
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/acne",
            label: "Acne",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/acne-scars",
            label: "Acne Scars",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/rosacea-pink-face",
            label: "Rosacea / Pink Face",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/eczema",
            label: "Eczema",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/allergy-itching",
            label: "Allergy / Itching",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/warts-corns",
            label: "Warts / Corns",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/skin-growths",
            label: "Unwanted Skin Growths",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/keloid-hypertrophic-scars",
            label: "Keloid / Hypertrophic Scars",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/dry-skin-xerosis",
            label: "Dry Skin / Xerosis",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/bacterial-infection",
            label: "Bacterial Infection",
          },
          { path: "/", label: "Fungal Infection" },
          { path: "/", label: "Viral Infection" },
          { path: "/", label: "Candid Infection" },
          { path: "/", label: "Psoriasis" },
          { path: "/", label: "Lichen Planus" },
          { path: "/", label: "Vitiligo / White Patches" },
          { path: "/", label: "Xanthelasma Palpebrarum" },
          { path: "/", label: "Pigmentation (Melasma / Freckles)" },
          { path: "/", label: "Lice & Bites" },
          { path: "/", label: "Drug Reaction" },
          { path: "/", label: "Mouth Ulcers" },
          { path: "/", label: "Excessive Sweating" },
          { path: "/", label: "Seborrheic Dermatitis" },
          { path: "/", label: "Nail Infections" },
          { path: "/", label: "Nail Changes" },
          { path: "/", label: "Splitting / Peeling / Brittle Nails" },
          { path: "/", label: "Hair Problem" },
          { path: "/", label: "Patchy Hair Loss / Alopecia Areata" },
          { path: "/", label: "Hair Loss" },
          { path: "/", label: "Dandruff" },
          { path: "/", label: "Excess Hair" },
          { path: "/", label: "Hair Infection" },
        ],
      },
      {
        path: "/",
        label: "Laser Treatment",
        dropdown: true,
        subElements: [
          {
            path: "/medical-clinic/laser-treatment/painless-laser-hair-removal",
            label: "Painless Laser Hair Removal",
          },
          {
            path: "/medical-clinic/laser-treatment/stretch-marks-treatment",
            label: "Stretch Marks Treatment",
          },
          {
            path: "/medical-clinic/laser-treatment/scars-treatment",
            label: "Scars Treatment",
          },
          {
            path: "/medical-clinic/laser-treatment/burn-scars-treatment",
            label: "Burn Scars Treatment",
          },
          {
            path: "/medical-clinic/laser-treatment/keloid-treatment",
            label: "Keloid Treatment",
          },
          {
            path: "/medical-clinic/laser-treatment/photo-facial",
            label: "Photo Facial",
          },
          {
            path: "/medical-clinic/laser-treatment/birth-mark-treatment",
            label: "Birth Mark Treatment",
          },
          {
            path: "/medical-clinic/laser-treatment/acne-scar-treatment",
            label: "Acne Scar Treatment",
          },
          {
            path: "/medical-clinic/laser-treatment/laser-skin-whitening",
            label: "Laser Skin Whitening",
          },
          {
            path: "/medical-clinic/pigmentation-removal-treatment",
            label: "Pigmentation Removal Treatment",
          },
        ],
      },
      {
        path: "/",
        label: "Anti Ageing Treatment",
        dropdown: true,
        subElements: [
          { path: "/", label: "Frown Line / Worry Line Treatment" },
          { path: "/", label: "Eyebrow Shaping / Lifting Treatment" },
          { path: "/", label: "Periorbital Dark Circle / Crows Feet" },
          { path: "/", label: "Cheek Enhancement Treatment" },
          { path: "/", label: "Lip Enhancement Treatment" },
          { path: "/", label: "Smile Line" },
          { path: "/", label: "Chin / Jaw Line Skin Tightening Treatment" },
          { path: "/", label: "Inch Loss" },
          { path: "/", label: "Cellulite" },
          { path: "/", label: "Fat dissolve Injection" },
          { path: "/", label: "Accent Ultra Body Shaping" },
          {
            path: "/",
            label: "Alma Double Chin Radio Frequency Skin Tightening",
          },
          { path: "/", label: "Vampire Face lift" },
          { path: "/", label: "V Shaped Face Tightening" },
        ],
      },
      {
        path: "/",
        label: "Skin Treatment",
        dropdown: true,
        subElements: [
          { path: "/skin-education/sun-skin", label: "Sun & Skin Care" },
          {
            path: "/skin-education/x-ray-of-skin-skin-analysis",
            label: "X-Ray of Skin (Skin Analysis)",
          },
          { path: "/skin-education/oily-skin", label: "Oily Skin Care" },
          { path: "/skin-education/dry-skin", label: "Dry Skin Care" },
          {
            path: "/skin-education/normal-skincombination-skin",
            label: "Normal / Combination Skin Care",
          },
          {
            path: "/skin-education/pigmented-skin",
            label: "Pigmented Skin Care",
          },
          {
            path: "/skin-education/sensitive-skin",
            label: "Sensitive Skin Care",
          },
          {
            path: "/skin-education/nutrition-skin",
            label: "Nutrition & Skin Care",
          },
          {
            path: "/skin-education/skin-through-the-ages",
            label: "Skin Care Through the Ages",
          },
          {
            path: "/skin-education/skin-smoking",
            label: "Skin Care & Smoking",
          },
          {
            path: "/skin-education/causes-of-facial-wrinkles",
            label: "Causes of facial wrinkles",
          },
          {
            path: "/skin-education/facial-volume-loss",
            label: "Facial volume loss Treatment",
          },
          {
            path: "/skin-education/total-skin-rejuvenation",
            label: "Skin rejuvenation Treatment",
          },
        ],
      },
    ],
  },
  {
    path: "/media",
    label: "Media",
    dropdown: true,
    subItems: [
      { path: "/category/whats-new", label: "What's New" },
      { path: "/category/media/articles", label: "Articles" },
      { path: "/category/media/blog", label: "Blog" },
      { path: "/category/photogallery", label: "Photogallery" },
    ],
  },
  {
    path: "/about",
    label: "About Us",
    dropdown: true,
    subItems: [
      {
        path: "/about-us/dr-geeta-mehra-fazalbhoy",
        label: "Dr. Geeta Mehra Fazalbhoy",
      },
      { path: "/about-us/why-us", label: "Why Us" },
      {
        path: "/about-us/how-to-prepare-for-an-appointment",
        label: "How to Prepare for an appointment",
      },
    ],
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const NavBar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleNavLinkClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <div className="container-fluid navbar-wrap">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a
            href="/"
            className="navbar-brand d-flex justify-content-between align-items-center"
          >
            <img src={Logo} alt="Logo" className="m-0 logo w-100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {navItems.map((item, index) => {
                if (item.dropdown) {
                  return (
                    <div key={index} className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        {item.label}
                      </a>
                      <div className="dropdown-menu m-0">
                        <div className="drpdwn-wrap">
                          <div className="drpdwn-element">
                            {index === 2 ? (
                              <>
                                <div className="medical-clinic p-0">
                                  {item.subItems.map(
                                    (subItem: any, subIndex) => (
                                      <div
                                        key={index}
                                        className="nav-item dropdown"
                                      >
                                        <a
                                          href="#"
                                          className="nav-link dropdown-toggle py-2"
                                          data-bs-toggle="dropdown"
                                          key={subIndex}
                                          onClick={(e) => e.stopPropagation()}
                                        >
                                          {subItem.label}
                                        </a>
                                        {subItem.dropdown && (
                                          <div className="dropdown-menu m-0 m-dropdown">
                                            <div className="drpdwn-wrap">
                                              <div className="drpdwn-element d-flex justify-content-between">
                                                {subIndex === 0 ? (
                                                  <>
                                                    <div>
                                                      {subItem?.subElements
                                                        .slice(0, 12)
                                                        .map(
                                                          (
                                                            subElem: any,
                                                            i: number
                                                          ) => (
                                                            <Link
                                                              key={i}
                                                              to={subElem.path}
                                                              className="dropdown-item"
                                                              onClick={() =>
                                                                handleNavLinkClick(
                                                                  subElem.path
                                                                )
                                                              }
                                                            >
                                                              {subElem.label}
                                                            </Link>
                                                          )
                                                        )}
                                                    </div>
                                                    <div>
                                                      {subItem?.subElements
                                                        .slice(12, 24)
                                                        .map(
                                                          (
                                                            subElem: any,
                                                            i: number
                                                          ) => (
                                                            <Link
                                                              key={i}
                                                              to={subElem.path}
                                                              className="dropdown-item"
                                                              onClick={() =>
                                                                handleNavLinkClick(
                                                                  subElem.path
                                                                )
                                                              }
                                                            >
                                                              {subElem.label}
                                                            </Link>
                                                          )
                                                        )}
                                                    </div>
                                                  </>
                                                ) : subIndex === 1 ? (
                                                  <>
                                                    <div>
                                                      {subItem?.subElements
                                                        .slice(1, 5)
                                                        .map(
                                                          (
                                                            subElem: any,
                                                            i: number
                                                          ) => (
                                                            <Link
                                                              key={i}
                                                              to={subElem.path}
                                                              className="dropdown-item"
                                                              onClick={() =>
                                                                handleNavLinkClick(
                                                                  subElem.path
                                                                )
                                                              }
                                                            >
                                                              {subElem.label}
                                                            </Link>
                                                          )
                                                        )}
                                                    </div>
                                                    <div>
                                                      {subItem?.subElements
                                                        .slice(5, 10)
                                                        .map(
                                                          (
                                                            subElem: any,
                                                            i: number
                                                          ) => (
                                                            <Link
                                                              key={i}
                                                              to={subElem.path}
                                                              className="dropdown-item"
                                                              onClick={() =>
                                                                handleNavLinkClick(
                                                                  subElem.path
                                                                )
                                                              }
                                                            >
                                                              {subElem.label}
                                                            </Link>
                                                          )
                                                        )}
                                                    </div>
                                                  </>
                                                ) : (
                                                  <>
                                                    <div>
                                                      {subItem?.subElements
                                                        .slice(0, 10)
                                                        .map(
                                                          (
                                                            subElem: any,
                                                            i: number
                                                          ) => (
                                                            <Link
                                                              key={i}
                                                              to={subElem.path}
                                                              className="dropdown-item"
                                                              onClick={() =>
                                                                handleNavLinkClick(
                                                                  subElem.path
                                                                )
                                                              }
                                                            >
                                                              {subElem.label}
                                                            </Link>
                                                          )
                                                        )}
                                                    </div>
                                                    <div>
                                                      {subItem?.subElements
                                                        .slice(10, 20)
                                                        .map(
                                                          (
                                                            subElem: any,
                                                            i: number
                                                          ) => (
                                                            <Link
                                                              key={i}
                                                              to={subElem.path}
                                                              className="dropdown-item"
                                                              onClick={() =>
                                                                handleNavLinkClick(
                                                                  subElem.path
                                                                )
                                                              }
                                                            >
                                                              {subElem.label}
                                                            </Link>
                                                          )
                                                        )}
                                                    </div>
                                                  </>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              item.subItems
                                .slice(0, 13)
                                .map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path}
                                    className="dropdown-item"
                                    onClick={() =>
                                      handleNavLinkClick(subItem.path)
                                    }
                                  >
                                    {subItem.label}
                                  </Link>
                                ))
                            )}
                          </div>
                          <div className="drpdwn-element">
                            {item.subItems
                              .slice(13, 26)
                              .map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="dropdown-item"
                                  onClick={() =>
                                    handleNavLinkClick(subItem.path)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                          </div>
                          <div className="drpdwn-element">
                            {item.subItems
                              .slice(26, 39)
                              .map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="dropdown-item"
                                  onClick={() =>
                                    handleNavLinkClick(subItem.path)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className={`nav-item nav-link ${
                      activeTab === item.path ? "active" : ""
                    }`}
                    onClick={() => handleNavLinkClick(item.path)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
