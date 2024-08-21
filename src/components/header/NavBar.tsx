import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

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
        path: "/treatments/hydration-facial-treatment",
        label: "Hydration Facial Treatment",
      },
      {
        path: "/treatments/hydration-facial-treatment",
        label: "Hydration Facial Treatment",
      },
    ],
  },
  {
    path: "/",
    label: "Skin & FAQ",
    dropdown: true,
    subItems: [
      { path: "/about", label: "About Us" },
      { path: "/team", label: "Our Team" },
      { path: "/history", label: "Our History" },
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
  { path: "/media", label: "Media" },
  {
    path: "/",
    label: "Blog",
    dropdown: true,
    subItems: [
      { path: "/article", label: "Blog Grid" },
      { path: "/article/1", label: "Blog Detail" },
      { path: "/testimonial", label: "Testimonial" },
      { path: "/appointment", label: "Appointment" },
      { path: "/search", label: "Search" },
    ],
  },
  { path: "/contact", label: "Contact" },
  {
    path: "/about",
    label: "About Us",
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
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="Logo" className="m-0 logo" />
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
                            {item.subItems
                              .slice(0, 6)
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
                              .slice(6, 12)
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
                              .slice(12, 18)
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
