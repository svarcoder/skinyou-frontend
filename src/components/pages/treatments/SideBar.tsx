import React from "react";
import RandomLinks from "./RandomLinks";

interface SubItem {
  path: string;
  label: string;
}

const itemData: SubItem[] = [
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
];

const SideBar: React.FC = () => {
  return (
    <>
      <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Recent Post
        </h4>
        <RandomLinks subItems={itemData} />
      </div>

      {/* <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Tag Cloud
        </h4>
        <div className="d-flex flex-wrap m-n1">
          <a href="/" className="btn btn-primary m-1">
            Design
          </a>
          <a href="/" className="btn btn-primary m-1">
            Development
          </a>
          <a href="/" className="btn btn-primary m-1">
            Marketing
          </a>
          <a href="/" className="btn btn-primary m-1">
            SEO
          </a>
          <a href="/" className="btn btn-primary m-1">
            Writing
          </a>
          <a href="/" className="btn btn-primary m-1">
            Consulting
          </a>
          <a href="/" className="btn btn-primary m-1">
            Design
          </a>
          <a href="/" className="btn btn-primary m-1">
            Development
          </a>
          <a href="/" className="btn btn-primary m-1">
            Marketing
          </a>
          <a href="/" className="btn btn-primary m-1">
            SEO
          </a>
          <a href="/" className="btn btn-primary m-1">
            Writing
          </a>
          <a href="/" className="btn btn-primary m-1">
            Consulting
          </a>
        </div>
      </div>
      <div>
        <h4 className="d-inline-block text-primary text-uppercase mb-4">
          Plain Text
        </h4>
        <div className="bg-light rounded text-center" style={{ padding: 30 }}>
          <p>
            Vero sea et accusam justo dolor accusam lorem consetetur, dolores
            sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor
            magna takimata, amet sit et diam dolor ipsum amet diam
          </p>
          <a href="/" className="btn btn-primary py-2 px-4">
            Read More
          </a>
        </div>
      </div> */}
    </>
  );
};

export default SideBar;
