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
        label: "Facial Treatments",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Hydration & Rejuvenation",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Oxygen Facial Treatment",
              },
              {
                path: "/",
                label: "Hydration Facial Treatment",
              },
              {
                path: "/",
                label: "Oxygen Facial Treatment",
              },
              {
                path: "/",
                label: "Silk Peel Dermal Infusion",
              },
              {
                path: "/",
                label: "Crystal Exfoliation",
              },
              {
                path: "/",
                label: "NCTF",
              },
              {
                path: "/",
                label: "Viscoderm",
              },
              {
                path: "/",
                label: "Diamond Tip",
              },
              {
                path: "/",
                label: "Glutathione Whitening Treatment",
              },
            ],
          },
          {
            path: "/",
            label: "Anti-Aging & Skin Tightening",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "CACI Treatment",
              },
              {
                path: "/",
                label: "Skin Polishing",
              },
              {
                path: "/",
                label: "Body & Face Tightening",
              },
              {
                path: "/",
                label: "Non-Surgical Skin Tightening",
              },
              {
                path: "/",
                label: "Fine Lines & Wrinkles",
              },
              {
                path: "/",
                label: "Wrinkle Reduction",
              },
              {
                path: "/",
                label: "Clear Lift Photo Facial",
              },
              {
                path: "/",
                label: "Radiofrequency Growth Removal (RF Growth Removal)",
              },
              {
                path: "/",
                label: "Accent Ultra RF Pixel",
              },
              {
                path: "/",
                label: "Accent Ultra Skin Body Contouring",
              },
              {
                path: "/",
                label: "Ultracel Q+ HIFU",
              },
              {
                path: "/",
                label: "Face Thread Lift",
              },
              {
                path: "/",
                label: "Body Thread Lift",
              },
              {
                path: "/",
                label: "Liquid Facelift Treatment",
              },
              {
                path: "/",
                label: "PRP Vampire Facelift",
              },
              {
                path: "/",
                label: "PRP",
              },
              {
                path: "/",
                label: "Mesotherapy Treatment",
              },
            ],
          },
          {
            path: "/",
            label: "Pigmentation & Whitening",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Whitening Facial",
              },
              {
                path: "/",
                label: "Cosmelan Depigmentation Treatment",
              },
              {
                path: "/",
                label: "Melasma",
              },
              {
                path: "/",
                label: "Hyperpigmentation",
              },
              {
                path: "/",
                label: "Pigmented Lesion",
              },
              {
                path: "/",
                label: "Crystal Skin Polishing",
              },
            ],
          },
          {
            path: "/",
            label: "Acne & Scar Treatments",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Acne Scars",
              },
              {
                path: "/",
                label: "Active Acne",
              },
              {
                path: "/",
                label: "Acne Treatment",
              },
            ],
          },
          {
            path: "/",
            label: "Exfoliation & Peels",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Gel Peels",
              },
              {
                path: "/",
                label: "Chemical Peels",
              },
              {
                path: "/",
                label: "Deep Peel",
              },
              {
                path: "/",
                label: "Crystal Exfoliation",
              },
            ],
          },
        ],
      },
      {
        path: "/treatments/bridal-packages",
        label: "Body Treatments",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Slimming & Contouring",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Body Slimming Treatment",
              },
              {
                path: "/",
                label: "Lipo Contrast (Lower Level Laser Light)",
              },
              {
                path: "/",
                label: "Fat Loss & Inch Loss",
              },
              {
                path: "/",
                label: "Accent Ultra Skin Body Contouring",
              },
            ],
          },
          {
            path: "/",
            label: "Skin Tightening & Rejuvenation",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Non-Surgical Skin Tightening",
              },
            ],
          },
        ],
      },
      {
        path: "/treatments/bridal-packages",
        label: "Hair Treatments",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Hair Loss Solutions",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Low Level Light Laser for Hair Loss",
              },
              {
                path: "/",
                label: "PRP for Hair Loss Treatment",
              },
              {
                path: "/",
                label: "Stem Cells for Hair Loss",
              },
              {
                path: "/",
                label: "QR678",
              },
              {
                path: "/",
                label: "Hair Loss Treatment",
              },
            ],
          },
          {
            path: "/",
            label: "Hair Removal",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Painless Laser Hair Removal",
              },
              {
                path: "/",
                label: "NDYAG / Hair Removal Treatment",
              },
              {
                path: "/",
                label: "Soprano Ice",
              },
            ],
          },
        ],
      },
      {
        path: "/treatments/bridal-packages",
        label: "Cosmetic Enhancements",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Injectables & Fillers",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Botox",
              },
              {
                path: "/",
                label: "Dermal Fillers",
              },
              {
                path: "/",
                label: "Hydration Filler",
              },
            ],
          },
          {
            path: "/",
            label: "Skin Resurfacing & Regeneration",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "PRP Vampire Facelift",
              },
              {
                path: "/",
                label: "PRP",
              },
              {
                path: "/",
                label: "Derma Roller Treatment",
              },
              {
                path: "/",
                label: "Dermapen for Hair and Face",
              },
              {
                path: "/",
                label: "Dermapen Exosome Polynucleotide",
              },
            ],
          },
        ],
      },
      {
        path: "/treatments/bridal-packages",
        label: "Tattoo & Pigmentation Removal",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Tattoo Removal",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Painless Tattoo Removal",
              },
              {
                path: "/",
                label: "Tattoo Removal",
              },
              {
                path: "/",
                label: "Tribeam Tattoo",
              },
            ],
          },
          {
            path: "/",
            label: "Pigmentation & Mark Removal",
            dropdown: true,
            subElements: [
              {
                path: "/",
                label: "Harmony XL Birth Mark Removal",
              },
              {
                path: "/",
                label: "Harmony XL Spider Vein Removal",
              },
              {
                path: "/",
                label: "Clear Lift Photo Facial",
              },
              {
                path: "/",
                label: "Alma Harmony XL",
              },
            ],
          },
        ],
      },
      {
        path: "/treatments/bridal-packages",
        label: "Additional Services",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Semi-Permanent Makeup",
          },
          {
            path: "/",
            label: "Medical Tattooing",
          },
          {
            path: "/",
            label: "Wart Removal",
          },
          {
            path: "/",
            label: "Nail Infection",
          },
          {
            path: "/",
            label: "Carbon Peel",
          },
          {
            path: "/",
            label: "Tribeam Carbon Treatment",
          },
          {
            path: "/",
            label: "Laser Toning",
          },
        ],
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
        label: "Based on skin type",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Sun & Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/acne-scars",
            label: "X-Ray of Skin (Skin Analysis)",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/rosacea-pink-face",
            label: "Oily Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/eczema",
            label: "Dry Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/allergy-itching",
            label: "Normal / Combination Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/warts-corns",
            label: "Pigmented Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/skin-growths",
            label: "Sensitive Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/keloid-hypertrophic-scars",
            label: "Nutrition & Skin Care",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/dry-skin-xerosis",
            label: "Skin Care Through the Ages",
          },
          {
            path: "/medical-clinic/dermatology-treatment/skin-problem/bacterial-infection",
            label: "Skin Care & Smoking",
          },
          { path: "/", label: "Causes of facial wrinkles" },
          { path: "/", label: "Facial volume loss Treatment" },
          { path: "/", label: "Skin rejuvenation Treatment" },
        ],
      },
      {
        path: "/",
        label: "Skin problem",
        dropdown: true,
        subElements: [
          {
            path: "/medical-clinic/laser-treatment/painless-laser-hair-removal",
            label: "Acne",
          },
          {
            path: "/medical-clinic/laser-treatment/stretch-marks-treatment",
            label: "Acne Scars",
          },
          {
            path: "/medical-clinic/laser-treatment/scars-treatment",
            label: "Rosacea / Pink Face",
          },
          {
            path: "/medical-clinic/laser-treatment/burn-scars-treatment",
            label: "Eczema",
          },
          {
            path: "/medical-clinic/laser-treatment/keloid-treatment",
            label: "Allergy / Itching",
          },
          {
            path: "/medical-clinic/laser-treatment/photo-facial",
            label: "Warts / Corns",
          },
          {
            path: "/medical-clinic/laser-treatment/birth-mark-treatment",
            label: "Unwanted Skin Growths",
          },
          {
            path: "/medical-clinic/laser-treatment/acne-scar-treatment",
            label: "Keloid / Hypertrophic Scars",
          },
          {
            path: "/medical-clinic/laser-treatment/laser-skin-whitening",
            label: "Dry Skin / Xerosis",
          },
          {
            path: "/medical-clinic/pigmentation-removal-treatment",
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
          { path: "/", label: "Burns" },
          { path: "/", label: "Lice & Bites" },
          { path: "/", label: "Drug Reaction" },
          { path: "/", label: "Mouth Ulcers" },
          { path: "/", label: "Excessive Sweating" },
          { path: "/", label: "Seborrheic Dermatitis" },
        ],
      },
      {
        path: "/",
        label: "Nail problem",
        dropdown: true,
        subElements: [
          { path: "/", label: "Nail Infections" },
          { path: "/", label: "Splitting / Peeling / Brittle Nails" },
        ],
      },
      {
        path: "/",
        label: "Skin tigthening",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Alma Double Chin Radio Frequency Skin Tightening",
          },
          { path: "/", label: "Vampire Face lift" },
        ],
      },
      {
        path: "/",
        label: "Laser based",
        dropdown: true,
        subElements: [
          { path: "/", label: "Painless Laser Hair Removal" },
          { path: "/", label: "Stretch Marks Treatment" },
          { path: "/", label: "Scars Treatment" },
          { path: "/", label: "Burn Scars Treatment" },
          { path: "/", label: "Keloid Treatment" },
          { path: "/", label: "Photo Facial" },
          { path: "/", label: "Birth Mark Treatment" },
          { path: "/", label: "Acne Scar Treatment" },
          { path: "/", label: "Laser Skin Whitening" },
          { path: "/", label: "Pigmentation Removal Treatment" },
        ],
      },
      {
        path: "/",
        label: "Botox",
        dropdown: true,
        subElements: [
          { path: "/", label: "Frown Line / Worry Line Treatment" },
          { path: "/", label: "Eyebrow Shaping / Lifting Treatment" },
          { path: "/", label: "Periorbital Dark Circle / Crows Feet" },
          { path: "/", label: "Cheek Enhancement Treatment" },
          { path: "/", label: "Lip Enhancement Treatment" },
          { path: "/", label: "Smile Line" },
          { path: "/", label: "Chin / Jaw Line Skin Tightening Treatment" },
        ],
      },
      {
        path: "/",
        label: "Body slimming",
        dropdown: true,
        subElements: [
          { path: "/", label: "Inch Loss" },
          { path: "/", label: "Cellulite" },
          { path: "/", label: "Fat dissolve Injection" },
          { path: "/", label: "Accent Ultra Body Shaping" },
        ],
      },
      {
        path: "/",
        label: "Skin tightening",
        dropdown: true,
        subElements: [
          {
            path: "/",
            label: "Alma Double Chin Radio Frequency Skin Tightening",
          },
          { path: "/", label: "Vampire Face lift" },
          { path: "/", label: "V Shaped Face Tightening" },
        ],
      },
    ],
  },
  {
    path: "/media",
    label: "Media",
    dropdown: true,
    subItems: [
      { path: "/media/whats-new", label: "What's New" },
      { path: "/media/articles", label: "Articles" },
      { path: "/media/blog", label: "Blog" },
      { path: "/media/photogallery", label: "Photogallery" },
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

  const [state, setState] = useState<boolean>(false);

  const handleNavLinkClick = (path: string) => {
    setActiveTab(path);
  };

  const renderMenu = (items: any, index: any) => {
    // If items are more than 13, split them into sections
    const chunkSize = 18;
    const chunks =
      items.length > chunkSize
        ? Array.from({ length: Math.ceil(items.length / chunkSize) }, (_, i) =>
            items.slice(i * chunkSize, i * chunkSize + chunkSize)
          )
        : [items]; // No split if less than or equal to chunkSize

    return (
      <ul className="dropdown-menu multi-level">
        <div className={index === 1 ? "multi-level-wrap" : "multi-level-wrap"}>
          {chunks.map((chunk: any, chunkIndex: any) => (
            <div
              key={chunkIndex}
              className="menu-section"
              // style={{ overflowY: "auto", maxHeight: "300px" }} // Apply overflow here
            >
              {chunk.map((item: any, itemIndex: any) => (
                <li
                  key={itemIndex}
                  className={
                    item.subItems || item.subElements
                      ? "nav-elem dropdown-submenu"
                      : "nav-elem"
                  }
                >
                  <a
                    href={item.dropdown ? "#" : item.path}
                    className={
                      item.subItems || item.subElements
                        ? "nav-elem dropdown-toggle"
                        : "nav-elem"
                    }
                    style={{ fontSize: "12px" }}
                  >
                    {item.label}
                    {(item.subItems || item.subElements) && (
                      <b className="caret"></b>
                    )}
                  </a>
                  {(item.subItems || item.subElements) &&
                    renderMenu(item.subItems || item.subElements, index)}
                </li>
              ))}
            </div>
          ))}
        </div>
      </ul>
    );
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <ul className="nav navbar-nav d-flex justify-content-center align-items-center">
              {navItems.map((item, index) => (
                <li key={index} className={item.dropdown ? "dropdown" : ""}>
                  <a
                    href={item.dropdown ? "#" : item.path}
                    className={
                      item.dropdown
                        ? "nav-link dropdown-toggle"
                        : activeTab === item.path
                        ? "nav-link active"
                        : "nav-link"
                    }
                    data-toggle={item.dropdown ? "dropdown" : ""}
                  >
                    {item.label}
                    {item.dropdown && <b className="caret"></b>}
                  </a>
                  {item.dropdown && renderMenu(item.subItems, index)}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
