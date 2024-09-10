import React from "react";
import RandomLinks from "./RandomLinks";

interface SubItem {
  path: string;
  label: string;
}

const itemData: SubItem[] = [
  {
    path: "/treatments/oxygen-facial-treatment",
    label: "Oxygen Facial Treatment",
  },
  {
    path: "/treatments/hydration-facial-treatment",
    label: "Hydration Facial Treatment",
  },
  {
    path: "/treatments/silk-peel-dermalInfusion",
    label: "Silk Peel Dermal Infusion",
  },
  {
    path: "/treatments/crystal-exfoliation",
    label: "Crystal Exfoliation",
  },
  {
    path: "/treatments/nctf",
    label: "NCTF",
  },
  {
    path: "/treatments/viscoderm",
    label: "Viscoderm",
  },
  {
    path: "/treatments/diamond-tip",
    label: "Diamond Tip",
  },
  {
    path: "/treatments/glutathione-whitening-treatment",
    label: "Glutathione Whitening Treatment",
  },
  {
    path: "/treatments/clean-up",
    label: "Clean Up (Pore cleansing)",
  },
  {
    path: "/treatments/caci-treatment",
    label: "CACI Treatment",
  },
  {
    path: "/treatments/skin-polishing",
    label: "Skin Polishing",
  },
  {
    path: "/treatments/body-face-tightening",
    label: "Body & Face Tightening",
  },
  {
    path: "/treatments/non-surgical-skin-tightening",
    label: "Non-Surgical Skin Tightening",
  },
  {
    path: "/treatments/fine-lines-wrinkles",
    label: "Fine Lines & Wrinkles",
  },
  {
    path: "/treatments/wrinkle-reduction",
    label: "Wrinkle Reduction",
  },
  {
    path: "/treatments/clear-lift-photo-facial",
    label: "Clear Lift Photo Facial",
  },
  {
    path: "/treatments/radiofrequency-growth-removal",
    label: "Radiofrequency Growth Removal (RF Growth Removal)",
  },
  {
    path: "/treatments/accent-ultra-rf-pixel",
    label: "Accent Ultra RF Pixel",
  },
  {
    path: "/treatments/accent-ultra-skin-body-contouring",
    label: "Accent Ultra Skin Body Contouring",
  },
  {
    path: "/treatments/ultracel-q-hifu",
    label: "Ultracel Q+ HIFU",
  },
  {
    path: "/treatments/face-thread-lift",
    label: "Face Thread Lift",
  },
  {
    path: "/treatments/body-thread-lift",
    label: "Body Thread Lift",
  },
  {
    path: "/treatments/liquid-facelift-treatment",
    label: "Liquid Facelift Treatment",
  },
  {
    path: "/treatments/mesotherapy-treatment",
    label: "PRP Vampire Facelift",
  },
  {
    path: "/treatments/mesotherapy-treatment",
    label: "Mesotherapy Treatment",
  },
  {
    path: "/treatments/whitening-facial-treatment",
    label: "Whitening Facial",
  },
  {
    path: "/treatments/cosmelan-depigmentation-treatment",
    label: "Cosmelan Depigmentation Treatment",
  },
  {
    path: "/treatments/melasma",
    label: "Melasma",
  },
  {
    path: "/treatments/hyperpigmentation",
    label: "Hyperpigmentation",
  },
  {
    path: "/treatments/pigmented-lesion",
    label: "Pigmented Lesion",
  },
  {
    path: "/treatments/crystal-skin-polishing",
    label: "Crystal Skin Polishing",
  },
  {
    path: "/treatments/acne-scars",
    label: "Acne Scars",
  },
  {
    path: "/treatments/active-acne",
    label: "Active Acne",
  },
  {
    path: "/treatments/gel-peels-treatment",
    label: "Gel Peels",
  },
  {
    path: "/treatments/chemical-peels",
    label: "Chemical Peels",
  },
  {
    path: "/treatments/deep-peel",
    label: "Deep Peel",
  },
  {
    path: "/treatments/body-slimming-treatment",
    label: "Body Slimming Treatment",
  },
  {
    path: "/treatments/lipo-contrast",
    label: "Lipo Contrast (Lower Level Laser Light)",
  },
  {
    path: "/treatments/fat-loss-inch-loss",
    label: "Fat Loss & Inch Loss",
  },
  {
    path: "/treatments/accent-ultra-skin-body-contouring",
    label: "Accent Ultra Skin Body Contouring",
  },
  {
    path: "/treatments/non-surgical-skin-tightening",
    label: "Non-Surgical Skin Tightening",
  },
  {
    path: "/treatments/lowlevel-light-laser-hair-loss",
    label: "Low Level Light Laser for Hair Loss",
  },
  {
    path: "/treatments/PRP-hair-loss-treatment",
    label: "PRP for Hair Loss Treatment",
  },
  {
    path: "/treatments/stem-sells-hair-loss",
    label: "Stem Cells for Hair Loss",
  },
  {
    path: "/treatments/QR678",
    label: "QR678",
  },
  {
    path: "/treatments/hair-loss-treatment",
    label: "Hair Loss Treatment",
  },
  {
    path: "/treatments/painless-laser-hair-removal",
    label: "Painless Laser Hair Removal",
  },
  {
    path: "/treatments/NDYAG-hair-removal-treatment",
    label: "NDYAG / Hair Removal Treatment",
  },
  {
    path: "/treatments/soprano-ice",
    label: "Soprano Ice",
  },
  {
    path: "/treatments/botox",
    label: "Botox",
  },
  {
    path: "/treatments/dermal-fillers",
    label: "Dermal Fillers",
  },
  {
    path: "/treatments/hydration-filler",
    label: "Hydration Filler",
  },
  {
    path: "/treatments/PRP-vampire-facelift",
    label: "PRP Vampire Facelift",
  },
  {
    path: "/treatments/PRP",
    label: "PRP",
  },
  {
    path: "/treatments/derma-roller-treatment",
    label: "Derma Roller Treatment",
  },
  {
    path: "/treatments/dermapen-hair-face",
    label: "Dermapen for Hair and Face",
  },
  {
    path: "/treatments/dermapen-exosome-polynucleotide",
    label: "Dermapen Exosome Polynucleotide",
  },
  {
    path: "/treatments/painless-tattoo-removal",
    label: "Painless Tattoo Removal",
  },
  {
    path: "/treatments/tattoo-removal",
    label: "Tattoo Removal",
  },
  {
    path: "/treatments/tribeam-tattoo",
    label: "Tribeam Tattoo",
  },
  {
    path: "/treatments/harmony-XL-birth-mark-removal",
    label: "Harmony XL Birth Mark Removal",
  },
  {
    path: "/treatments/harmony-XL-spider-vein-removal",
    label: "Harmony XL Spider Vein Removal",
  },
  {
    path: "/treatments/clear-lift-photo-facial",
    label: "Clear Lift Photo Facial",
  },
  {
    path: "/treatments/alma-harmony-XL",
    label: "Alma Harmony XL",
  },
  {
    path: "/treatments/semi-permanent-makeup",
    label: "Semi-Permanent Makeup",
  },
  {
    path: "/treatments/medical-tattooing",
    label: "Medical Tattooing",
  },
  {
    path: "/treatments/wart-removal",
    label: "Wart Removal",
  },
  {
    path: "/treatments/nail-in-fection",
    label: "Nail Infection",
  },
  {
    path: "/treatments/tribeam-carbon-treatment",
    label: "Tribeam Carbon Treatment",
  },
  {
    path: "/treatments/laser-toning",
    label: "Laser Toning",
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
