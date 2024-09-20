import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

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
            ],
          },
          {
            path: "/",
            label: "Anti-Aging & Skin Tightening",
            dropdown: true,
            subElements: [
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
            ],
          },
          {
            path: "/",
            label: "Pigmentation & Whitening",
            dropdown: true,
            subElements: [
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
            ],
          },
          {
            path: "/",
            label: "Acne & Scar Treatments",
            dropdown: true,
            subElements: [
              {
                path: "/treatments/acne-scars",
                label: "Acne Scars",
              },
              {
                path: "/treatments/active-acne",
                label: "Active Acne",
              },
            ],
          },
          {
            path: "/",
            label: "Exfoliation & Peels",
            dropdown: true,
            subElements: [
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
            ],
          },
          {
            path: "/",
            label: "Skin Tightening & Rejuvenation",
            dropdown: true,
            subElements: [
              {
                path: "/treatments/non-surgical-skin-tightening",
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
            ],
          },
          {
            path: "/",
            label: "Hair Removal",
            dropdown: true,
            subElements: [
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
            ],
          },
          {
            path: "/",
            label: "Skin Resurfacing & Regeneration",
            dropdown: true,
            subElements: [
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
            ],
          },
          {
            path: "/",
            label: "Pigmentation & Mark Removal",
            dropdown: true,
            subElements: [
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
            path: "/treatment-concern/sun-skin-care",
            label: "Sun & Skin Care",
          },
          {
            path: "/treatment-concern/x-ray-skin",
            label: "X-Ray of Skin (Skin Analysis)",
          },
          {
            path: "/treatment-concern/oily-skin-care",
            label: "Oily Skin Care",
          },
          {
            path: "/treatment-concern/dry-skin-care",
            label: "Dry Skin Care",
          },
          {
            path: "/treatment-concern/normal-combination-skin-care",
            label: "Normal / Combination Skin Care",
          },
          {
            path: "/treatment-concern/pigmented-skin-care",
            label: "Pigmented Skin Care",
          },
          {
            path: "/treatment-concern/sensitive-skin-care",
            label: "Sensitive Skin Care",
          },
          {
            path: "/treatment-concern/nutrition-skin-care",
            label: "Nutrition & Skin Care",
          },
          {
            path: "/treatment-concern/skin-care-through-ages",
            label: "Skin Care Through the Ages",
          },
          {
            path: "/treatment-concern/skin-care-smoking",
            label: "Skin Care & Smoking",
          },
          {
            path: "/treatment-concern/causes-facial-wrinkles",
            label: "Causes of facial wrinkles",
          },
          {
            path: "/treatment-concern/facial-volume-loss-treatment",
            label: "Facial volume loss Treatment",
          },
          {
            path: "/treatment-concern/skin-rejuvenation-treatment",
            label: "Skin rejuvenation Treatment",
          },
        ],
      },
      {
        path: "/",
        label: "Skin problem",
        dropdown: true,
        subElements: [
          {
            path: "/treatment-concern/acne",
            label: "Acne",
          },
          {
            path: "/treatment-concern/acne-scars",
            label: "Acne Scars",
          },
          {
            path: "/treatment-concern/rosacea-pink-face",
            label: "Rosacea / Pink Face",
          },
          {
            path: "/treatment-concern/eczema",
            label: "Eczema",
          },
          {
            path: "/treatment-concern/allergy-itching",
            label: "Allergy / Itching",
          },
          {
            path: "/treatment-concern/warts-corns",
            label: "Warts / Corns",
          },
          {
            path: "/treatment-concern/unwanted-skin-growths",
            label: "Unwanted Skin Growths",
          },
          {
            path: "/treatment-concern/keloid-hypertrophic-scars",
            label: "Keloid / Hypertrophic Scars",
          },
          {
            path: "/treatment-concern/dry-skin-xerosis",
            label: "Dry Skin / Xerosis",
          },
          {
            path: "/treatment-concern/bacterial-infection",
            label: "Bacterial Infection",
          },
          {
            path: "/treatment-concern/fungal-infection",
            label: "Fungal Infection",
          },
          {
            path: "/treatment-concern/viral-infection",
            label: "Viral Infection",
          },
          {
            path: "/treatment-concern/candid-infection",
            label: "Candid Infection",
          },
          { path: "/treatment-concern/psoriasis", label: "Psoriasis" },
          { path: "/treatment-concern/lichen-planus", label: "Lichen Planus" },
          {
            path: "/treatment-concern/vitiligo-white-patches",
            label: "Vitiligo / White Patches",
          },
          {
            path: "/treatment-concern/xanthelasma-palpebrarum",
            label: "Xanthelasma Palpebrarum",
          },
          {
            path: "/treatment-concern/pigmentation",
            label: "Pigmentation (Melasma / Freckles)",
          },
          { path: "/treatment-concern/burns", label: "Burns" },
          { path: "/treatment-concern/lice-bites", label: "Lice & Bites" },
          { path: "/treatment-concern/drug-reaction", label: "Drug Reaction" },
          { path: "/treatment-concern/mouth-ulcers", label: "Mouth Ulcers" },
          {
            path: "/treatment-concern/excessive-sweating",
            label: "Excessive Sweating",
          },
          {
            path: "/treatment-concern/seborrheic-dermatitis",
            label: "Seborrheic Dermatitis",
          },
        ],
      },
      {
        path: "/",
        label: "Nail problem",
        dropdown: true,
        subElements: [
          {
            path: "/treatment-concernnail-infections",
            label: "Nail Infections",
          },
          {
            path: "/treatment-concern/splitting-peeling-brittle-nails",
            label: "Splitting / Peeling / Brittle Nails",
          },
        ],
      },
      {
        path: "/",
        label: "Skin tigthening",
        dropdown: true,
        subElements: [
          {
            path: "/treatment-concern/alma-double-chin-radio-frequency-skin-tightening",
            label: "Alma Double Chin Radio Frequency Skin Tightening",
          },
          {
            path: "/treatment-concern/vampire-face-lift",
            label: "Vampire Face lift",
          },
        ],
      },
      {
        path: "/",
        label: "Laser based",
        dropdown: true,
        subElements: [
          {
            path: "/treatment-concern/painless-laserHair-removal-concern",
            label: "Painless Laser Hair Removal",
          },
          {
            path: "/treatment-concern/stretch-marks-treatment",
            label: "Stretch Marks Treatment",
          },
          {
            path: "/treatment-concern/scars-treatment",
            label: "Scars Treatment",
          },
          {
            path: "/treatment-concern/burn-scars-treatment",
            label: "Burn Scars Treatment",
          },
          {
            path: "/treatment-concern/keloid-treatment",
            label: "Keloid Treatment",
          },
          { path: "/treatment-concern/photo-facial", label: "Photo Facial" },
          {
            path: "/treatment-concern/birth-mark-treatment",
            label: "Birth Mark Treatment",
          },
          {
            path: "/treatment-concern/acne-scar-treatment",
            label: "Acne Scar Treatment",
          },
          {
            path: "/treatment-concern/laser-skin-whitening",
            label: "Laser Skin Whitening",
          },
          {
            path: "/treatment-concern/pigmentation-removal-treatment",
            label: "Pigmentation Removal Treatment",
          },
        ],
      },
      {
        path: "/",
        label: "Botox",
        dropdown: true,
        subElements: [
          {
            path: "/treatment-concern/frown-lineWorry-line-treatment",
            label: "Frown Line / Worry Line Treatment",
          },
          {
            path: "/treatment-concern/eyebrow-shaping-lifting-treatment",
            label: "Eyebrow Shaping / Lifting Treatment",
          },
          {
            path: "/treatment-concern/periorbital-dark-circle-crows-feet",
            label: "Periorbital Dark Circle / Crows Feet",
          },
          {
            path: "/treatment-concern/cheek-enhancement-reatment",
            label: "Cheek Enhancement Treatment",
          },
          {
            path: "/treatment-concern/lip-enhancement-treatment",
            label: "Lip Enhancement Treatment",
          },
          { path: "/treatment-concern/smile-line", label: "Smile Line" },
          {
            path: "/treatment-concern/chin-jaw-line-skin-tightening-treatment",
            label: "Chin / Jaw Line Skin Tightening Treatment",
          },
        ],
      },
      {
        path: "/",
        label: "Body slimming",
        dropdown: true,
        subElements: [
          { path: "/treatment-concern/inch-loss", label: "Inch Loss" },
          { path: "/treatment-concern/cellulite", label: "Cellulite" },
          {
            path: "/treatment-concern/fat-dissolve-injection",
            label: "Fat dissolve Injection",
          },
          {
            path: "/treatment-concern/accent-ultra-body-shaping",
            label: "Accent Ultra Body Shaping",
          },
        ],
      },
      {
        path: "/",
        label: "Skin tightening",
        dropdown: true,
        subElements: [
          {
            path: "/treatment-concern/alma-double-chin-radio-frequency-skin-tightening",
            label: "Alma Double Chin Radio Frequency Skin Tightening",
          },
          {
            path: "/treatment-concern/vampire-face-lift",
            label: "Vampire Face lift",
          },
          {
            path: "/treatment-concern/v-shaped-face-tightening",
            label: "V Shaped Face Tightening",
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

const NavBar: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const [state, setState] = useState<boolean>(false);

  const handleNavLinkClick = (path: string) => {
    setActiveTab(path);
  };

  const renderMenu = (items: any, index: any) => {
    const chunkSize = 12;
    const chunks =
      items.length > chunkSize
        ? Array.from({ length: Math.ceil(items.length / chunkSize) }, (_, i) =>
            items.slice(i * chunkSize, i * chunkSize + chunkSize)
          )
        : [items];

    return (
      <ul className="dropdown-menu multi-level">
        <div className={index === 1 ? "multi-level-wrap" : "multi-level-wrap"}>
          {chunks.map((chunk: any, chunkIndex: any) => (
            <div
              key={chunkIndex}
              className="menu-section"
              // style={{ overflowY: "auto", maxHeight: "300px" }} // Apply overflow here
              onClick={(e) => e.stopPropagation()}
            >
              {chunk.map((item: any, itemIndex: any) => (
                <li
                  key={itemIndex}
                  className={
                    item.subItems || item.subElements
                      ? "nav-elem dropdown-submenu"
                      : "nav-elem"
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href={item.dropdown ? "#" : item.path}
                    className={
                      item.subItems || item.subElements
                        ? "nav-elem dropdown-toggle"
                        : "nav-elem"
                    }
                    style={{ fontSize: "12px" }}
                    onClick={(e) => e.stopPropagation()}
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

  const [results, setResults] = useState<SubItem[]>([]);
  const [query, setQuery] = useState("");

  const handleSearch = (filteredResults: SubItem[]) => {
    setResults(filteredResults);
  };

  const navigate = useNavigate();

  const handleSelect = (e: any, path: string) => {
    e.preventDefault();
    setResults([]);
    setQuery("");
    navigate(`${path}`);
  };

  const [showInput, setShowInput] = useState(false);

  const handleIconClick = () => {
    setShowInput(true); // Show input when icon is clicked
  };

  const handleInputBlur = () => {
    setShowInput(false); 
    setResults([]);
    setQuery("");
  };

  return (
    <div className="container-fluid navbar-wrap">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a
            href="/"
            className="navbar-brand d-flex justify-content-between align-items-center"
            style={{ width: "150px", height: "60px" }}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.label}
                    {item.dropdown && <b className="caret"></b>}
                  </a>
                  {item.dropdown && renderMenu(item.subItems, index)}
                </li>
              ))}

              {showInput ? (
                <SearchBar
                  data={itemData}
                  onSearch={handleSearch}
                  query={query}
                  setQuery={setQuery}
                  handleInputBlur={handleInputBlur}
                />
              ) : (
                <i
                  className="bi bi-search search-icon mt-1"
                  onClick={handleIconClick}
                ></i>
              )}

              {results.length > 0 && (
                <ul className="result-shown border rounded mt-2 bg-white shadow-lg w-full py-2 p-0">
                  {results.map((item) => (
                    <li
                      key={item.label}
                      className="p-2 border-b hover:bg-gray-100 "
                      onClick={(e) => handleSelect(e, item.path)}
                    >
                      <strong>{item.label}</strong>
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
