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
      //hdjhdjjd

      {
        path: "/treatments/placenta-extract-treatment",
        label: "Prp Vampire Facelift",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Liquid Facelift Treatment",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Stretch Marks Treatment",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Non Surgical Skin Tightening",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Hair Loss Treatment",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Semi Permanent Make Up",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Medical Tattooing",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Painless Laser Hair Removal",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Ndyag/ Hair Removal Treatment",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Accent Ultra Skin Body Contouring",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Accent Ultra RF Pixel",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "RF Growth Removal",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Harmony XL Birth Mark Removal",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Harmony XL Spider Vein Removal",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "PRP for Hair Loss Treatment",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Stem Cells for Hair Loss",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Painless Tattoo Removal",
      },
      {
        path: "/treatments/placenta-extract-treatment",
        label: "Body Slimming Treatment",
      },
    ],
  },
  {
    path: "/",
    label: "Skin & FAQ",
    dropdown: true,
    subItems: [
      { path: "/", label: "Sun & Skin Care" },
      { path: "/", label: "X-Ray of Skin (Skin Analysis)" },
      { path: "/", label: "Oily Skin Care" },
      { path: "/", label: "Dry Skin Care" },
      { path: "/", label: "Normal / Combination Skin Care" },
      { path: "/", label: "Pigmented Skin Care" },
      { path: "/", label: "Sensitive Skin Care" },
      { path: "/", label: "Nutrition & Skin Care" },
      { path: "/", label: "Skin Care Through the Ages" },
      { path: "/", label: "Skin Care & Smoking" },
      { path: "/", label: "Causes of facial wrinkles" },
      { path: "/", label: "Facial volume loss Treatment" },
      { path: "/", label: "Skin rejuvenation Treatment" },
    ],
  },
  {
    path: "/",
    label: "MEDICAL CLINIC",
    dropdown: true,
    subItems: [
      { path: "/about", label: "About Us" },
      { path: "/team", label: "Our Team" },
      { path: "/history", label: "Our History" },
    ],
  },
  { path: "/photogallery", label: "Photogallery" },
  {
    path: "/media",
    label: "Media",
    dropdown: true,
    subItems: [
      { path: "/", label: "What's New" },
      { path: "/", label: "Articles" },
      { path: "/", label: "Events" },
      { path: "/", label: "Newsletters" },
      { path: "/", label: "Blog" },
      { path: "/", label: " CLINIC VIDEOS" },
    ],
  },
  {
    path: "/about",
    label: "About Us",
    dropdown: true,
    subItems: [
      { path: "/", label: "Dr. Geeta Mehra Fazalbhoy" },
      { path: "/", label: "Why Us" },
      { path: "/", label: " How to Prepare for an appointment" },
    ],
  },
  {
    path: "/contact",
    label: "Contact",
    dropdown: true,
    subItems: [
      { path: "/", label: "FRANCHISE" },
      { path: "/", label: "CAREER" },
    ],
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
                                {item.subItems
                                  .slice(0, 2)
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
                                <h4 className="dropdown-item"> Skin Types</h4>
                                {item.subItems
                                  .slice(2, 13)
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
