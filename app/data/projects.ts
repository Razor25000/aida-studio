export type ArchitectureCategory =
  | "Résidentiel"
  | "Rénovation"
  | "Commercial"
  | "Intérieur"
  | "Hôtellerie"
  | "Concours"
  | "Recherche";

export type ArchitectureProject = {
  slug: string;
  num: string;
  name: string;
  location: string;
  category: ArchitectureCategory;
  year: string;
  status: "Livré" | "En cours" | "Concours";
  area?: string;
  client?: string;
  cover: string;        // /img/... path
  gallery: string[];    // /img/... paths
  description: string[];
};

const img = (filename: string) =>
  `/img/${encodeURIComponent(filename).replace(/%2B/g, "+")}`;

export const architectureProjects: ArchitectureProject[] = [
  {
    slug: "housebuenosaires",
    num: "R01",
    name: "Maison Acassuso",
    location: "Buenos Aires, Argentine",
    category: "Résidentiel",
    year: "2018",
    status: "Livré",
    area: "320 m²",
    cover: img("imgi_84_Maison 1.jpg"),
    gallery: [
      img("imgi_84_Maison 1.jpg"),
      img("imgi_86_Vue Piscine.jpg"),
      img("imgi_87_IMG_6009.jpg"),
      img("imgi_84_Maison 1.jpg"),
      img("imgi_86_Vue Piscine.jpg"),
    ],
    description: [
      "Une maison individuelle en périphérie de Buenos Aires, articulée autour d'un arbre central et d'une séquence patio-piscine-jardin. La structure béton est laissée brute, contrastée par des menuiseries en noyer local.",
    ],
  },
  {
    slug: "chalet-chamrousse",
    num: "R02",
    name: "Maison Chamrousse",
    location: "Alpes, France",
    category: "Résidentiel",
    year: "2019",
    status: "Livré",
    area: "240 m²",
    cover: img("imgi_59_CHALET MAGNE 01_PNG.png"),
    gallery: [
      img("imgi_59_CHALET MAGNE 01_PNG.png"),
      img("imgi_13_4d3c8b5d-0fde-410a-862b-aea78318b69c.jpg"),
      img("imgi_60_4d3c8b5d-0fde-410a-862b-aea78318b69c.jpg"),
      img("imgi_59_CHALET MAGNE 01_PNG.png"),
      img("imgi_13_4d3c8b5d-0fde-410a-862b-aea78318b69c.jpg"),
    ],
    description: [
      "Réinterprétation contemporaine du chalet alpin : structure bois lamellé-collé, toiture monopente et façade sud entièrement vitrée face au massif.",
    ],
  },
  {
    slug: "renovation-paris-17",
    num: "F01",
    name: "Appartement Paris 17",
    location: "Paris 17, France",
    category: "Rénovation",
    year: "2020",
    status: "Livré",
    area: "120 m²",
    cover: img("imgi_62_IMG_0535_PNG.png"),
    gallery: [
      img("imgi_62_IMG_0535_PNG.png"),
      img("imgi_65_IMG_0545_PNG.png"),
      img("imgi_71_IMG_0517_JPG.jpg"),
      img("imgi_62_IMG_0535_PNG.png"),
      img("imgi_65_IMG_0545_PNG.png"),
    ],
    description: [
      "Une rénovation complète d'un appartement haussmannien dans le 17ᵉ arrondissement. Le brief : ouvrir la séquence centrale des pièces en conservant les moulures d'origine, le parquet à bâtons rompus et les cheminées.",
      "La nouvelle cuisine s'installe dans l'ancien office, libérant les pièces de vie principales. Une menuiserie sur mesure en chêne teinté blanc court sur toute la longueur, intégrant rangements, assises et tête de litière de la suite parentale.",
    ],
  },
  {
    slug: "renovation-appartement-paris",
    num: "F02",
    name: "Appartement Paris 9",
    location: "Paris 9, France",
    category: "Rénovation",
    year: "2021",
    status: "Livré",
    area: "95 m²",
    cover: img("imgi_54_APPART CAMILLE 02_PNG.png"),
    gallery: [
      img("imgi_54_APPART CAMILLE 02_PNG.png"),
      img("imgi_65_IMG_0545_PNG.png"),
      img("imgi_62_IMG_0535_PNG.png"),
      img("imgi_54_APPART CAMILLE 02_PNG.png"),
      img("imgi_65_IMG_0545_PNG.png"),
    ],
    description: [
      "Réhabilitation d'un appartement situé au-dessus d'un atelier d'artiste. Conservé : la hauteur sous plafond et les traces de l'ancien usage. Transformé : tout le reste.",
    ],
  },
  {
    slug: "boutique",
    num: "C01",
    name: "PING PANG Store",
    location: "Paris 13, France",
    category: "Commercial",
    year: "2021",
    status: "Livré",
    area: "180 m²",
    cover: img("imgi_72_©JUANJEREZ_A_IDA-PING-PANG-PARIS-0986.jpg"),
    gallery: [
      img("imgi_72_©JUANJEREZ_A_IDA-PING-PANG-PARIS-0986.jpg"),
      img("imgi_71_IMG_0517_JPG.jpg"),
      img("imgi_70_3F7A6029+++JPG.jpg"),
      img("imgi_72_©JUANJEREZ_A_IDA-PING-PANG-PARIS-0986.jpg"),
      img("imgi_71_IMG_0517_JPG.jpg"),
    ],
    description: [
      "Premier flagship parisien d'une marque de sport asiatique. Le concept : une table de ping-pong centrale autour de laquelle s'organisent l'ensemble des présentoirs et essayages.",
    ],
  },
  {
    slug: "boutiquesingapore",
    num: "C02",
    name: "Boutique M21G Duxton",
    location: "Singapour",
    category: "Commercial",
    year: "2022",
    status: "Livré",
    area: "210 m²",
    cover: img("imgi_67_M21G DUXTON 02_PNG.png"),
    gallery: [
      img("imgi_67_M21G DUXTON 02_PNG.png"),
      img("imgi_73_M21G MBS 01_PNG.png"),
      img("imgi_75_M21G SYDN 01_PNG.png"),
      img("imgi_67_M21G DUXTON 02_PNG.png"),
      img("imgi_73_M21G MBS 01_PNG.png"),
    ],
    description: [
      "Boutique pilote pour le marché sud-est asiatique. Mobilier en aluminium recyclé et parois textiles imprimées pour évoquer l'architecture des shophouses.",
    ],
  },
  {
    slug: "boutique-singapour-mbs",
    num: "C03",
    name: "Boutique M21G MBS",
    location: "Singapour",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "260 m²",
    cover: img("imgi_73_M21G MBS 01_PNG.png"),
    gallery: [
      img("imgi_73_M21G MBS 01_PNG.png"),
      img("imgi_67_M21G DUXTON 02_PNG.png"),
      img("imgi_75_M21G SYDN 01_PNG.png"),
      img("imgi_73_M21G MBS 01_PNG.png"),
      img("imgi_67_M21G DUXTON 02_PNG.png"),
    ],
    description: [
      "Boutique au Marina Bay Sands. Le brief exigeait une expérience silencieuse, presque minérale, à mille lieues de l'effervescence du mall.",
    ],
  },
  {
    slug: "boutiquesydney",
    num: "C04",
    name: "Boutique M21G Sydney",
    location: "Sydney, Australia",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "190 m²",
    cover: img("imgi_75_M21G SYDN 01_PNG.png"),
    gallery: [
      img("imgi_75_M21G SYDN 01_PNG.png"),
      img("imgi_28_M21G SYDN 01_PNG.png"),
      img("imgi_67_M21G DUXTON 02_PNG.png"),
      img("imgi_75_M21G SYDN 01_PNG.png"),
      img("imgi_28_M21G SYDN 01_PNG.png"),
    ],
    description: [
      "Boutique dans le quartier de Paddington, articulée autour d'une cour intérieure découverte lors du désamiantage.",
    ],
  },
  {
    slug: "copie-de-store-ksa",
    num: "C05",
    name: "Boutique M21G Shenzhen",
    location: "Chine · 2023",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "340 m²",
    cover: img("imgi_79_M21G CHINE SHENZEN 02_PNG.png"),
    gallery: [
      img("imgi_79_M21G CHINE SHENZEN 02_PNG.png"),
      img("imgi_32_M21G CHINE SHENZEN 02_PNG.png"),
      img("imgi_33_WeChat Image_20231127114841.jpg"),
      img("imgi_79_M21G CHINE SHENZEN 02_PNG.png"),
      img("imgi_32_M21G CHINE SHENZEN 02_PNG.png"),
    ],
    description: [
      "Boutique flagship au cœur du district de Nanshan. Système modulaire de panneaux pivotants en acier laqué, reconfigurable en fonction des collections.",
    ],
  },
  {
    slug: "copie-de-store-singapour-mbs",
    num: "C06",
    name: "Boutique M21G Riyad",
    location: "Saudi Arabia",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "280 m²",
    cover: img("imgi_77_M21G KSA STORE 02_PNG.png"),
    gallery: [
      img("imgi_77_M21G KSA STORE 02_PNG.png"),
      img("imgi_30_M21G KSA STORE 02_PNG.png"),
      img("imgi_77_M21G KSA STORE 02_PNG.png"),
      img("imgi_77_M21G KSA STORE 02_PNG.png"),
      img("imgi_30_M21G KSA STORE 02_PNG.png"),
    ],
    description: [
      "Boutique au Riyadh Front. Adaptation du concept M21G à un contexte culturel différent : espaces de réception séparés, paravent textile, orientation modifiée.",
    ],
  },
  {
    slug: "copie-de-store-sanya-haitanbay",
    num: "C07",
    name: "Boutique M21G Hainan",
    location: "China",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "230 m²",
    cover: img("imgi_80_WeChat Image_20231127114841.jpg"),
    gallery: [
      img("imgi_80_WeChat Image_20231127114841.jpg"),
      img("imgi_33_WeChat Image_20231127114841.jpg"),
      img("imgi_79_M21G CHINE SHENZEN 02_PNG.png"),
      img("imgi_80_WeChat Image_20231127114841.jpg"),
      img("imgi_33_WeChat Image_20231127114841.jpg"),
    ],
    description: [
      "Boutique balnéaire à Haitan Bay. Grands panneaux coulissants permettant d'ouvrir complètement la façade sur la promenade.",
    ],
  },
  {
    slug: "copie-de-store-shenzhen",
    num: "C08",
    name: "Boutique M21G Doha",
    location: "Qatar",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "220 m²",
    cover: img("imgi_83_M21G QATAR_PNG.png"),
    gallery: [
      img("imgi_83_M21G QATAR_PNG.png"),
      img("imgi_36_M21G QATAR_PNG.png"),
      img("imgi_83_M21G QATAR_PNG.png"),
      img("imgi_83_M21G QATAR_PNG.png"),
      img("imgi_36_M21G QATAR_PNG.png"),
    ],
    description: [
      "Boutique au Place Vendôme de Lusail. Murs en pierre reconstituée, mobilier en bronze brossé. Lumière indirecte très chaude.",
    ],
  },
  {
    slug: "copie-de-boutique-singapore",
    num: "C09",
    name: "Boutique M21G Hô Chi Minh",
    location: "Vietnam",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "170 m²",
    cover: img("imgi_76_08_JPG.jpg"),
    gallery: [
      img("imgi_76_08_JPG.jpg"),
      img("imgi_29_08_JPG.jpg"),
      img("imgi_21_08.jpg"),
      img("imgi_76_08_JPG.jpg"),
      img("imgi_29_08_JPG.jpg"),
    ],
    description: [
      "Boutique au cœur du district 1. Récupération du carrelage d'origine, mise en valeur par un éclairage rasant.",
    ],
  },
  {
    slug: "copie-de-house-buenos-aires",
    num: "C10",
    name: "Boutique M21G Séoul",
    location: "Corée du Sud",
    category: "Commercial",
    year: "2023",
    status: "Livré",
    area: "240 m²",
    cover: img("imgi_74_AIDA M21G-3.jpg"),
    gallery: [
      img("imgi_74_AIDA M21G-3.jpg"),
      img("imgi_27_AIDA M21G-3.jpg"),
      img("imgi_45_BIBLIO COREE 02_PNG.png"),
      img("imgi_74_AIDA M21G-3.jpg"),
      img("imgi_27_AIDA M21G-3.jpg"),
    ],
    description: [
      "Boutique au quartier de Hannam. Dialogue entre la marque coréenne et le studio parisien : un espace partagé, deux langues de design.",
    ],
  },
  {
    slug: "v",
    num: "I01",
    name: "Hôtel Val Thorens",
    location: "Val Thorens, France",
    category: "Hôtellerie",
    year: "2022",
    status: "Livré",
    area: "4 200 m²",
    cover: img("imgi_85_VALTHO 02_PNG.png"),
    gallery: [
      img("imgi_85_VALTHO 02_PNG.png"),
      img("imgi_38_VALTHO 02_PNG.png"),
      img("imgi_39_Vue Piscine.jpg"),
      img("imgi_85_VALTHO 02_PNG.png"),
      img("imgi_38_VALTHO 02_PNG.png"),
    ],
    description: [
      "Rénovation complète d'un un hôtel 4★ à 2300 m d'altitude. 64 chambres, restaurant panoramique, spa et piscine intérieure.",
    ],
  },
  {
    slug: "copie-de-renovation-paris-9",
    num: "I02",
    name: "Appartement Paris 11",
    location: "Paris 11, France",
    category: "Intérieur",
    year: "2023",
    status: "Livré",
    area: "85 m²",
    cover: img("imgi_56_IMG_0525_JPG.jpg"),
    gallery: [
      img("imgi_56_IMG_0525_JPG.jpg"),
      img("imgi_71_IMG_0517_JPG.jpg"),
      img("imgi_24_IMG_0517_JPG.jpg"),
      img("imgi_56_IMG_0525_JPG.jpg"),
      img("imgi_71_IMG_0517_JPG.jpg"),
    ],
    description: [
      "Aménagement intérieur complet d'un un 3-pièces pour un jeune couple. Rangements intégrés, verrière d'atelier, cuisine ouverte.",
    ],
  },
  {
    slug: "observatorycabins",
    num: "I03",
    name: "Observatory Cabins",
    location: "YAC · Italia",
    category: "Concours",
    year: "2021",
    status: "Concours",
    area: "150 m² / unité",
    cover: img("imgi_66_e73edb54-5c9a-49da-9efd-4af8809e9f55_edited.jpg"),
    gallery: [
      img("imgi_66_e73edb54-5c9a-49da-9efd-4af8809e9f55_edited.jpg"),
      img("imgi_19_e73edb54-5c9a-49da-9efd-4af8809e9f55_edited.jpg"),
      img("imgi_66_e73edb54-5c9a-49da-9efd-4af8809e9f55_edited.jpg"),
      img("imgi_66_e73edb54-5c9a-49da-9efd-4af8809e9f55_edited.jpg"),
      img("imgi_19_e73edb54-5c9a-49da-9efd-4af8809e9f55_edited.jpg"),
    ],
    description: [
      "Concours Young Architects Competitions : conception de 5 unités d'observation en zone alpine, autonomes en énergie et construites en matériaux locaux.",
    ],
  },
  {
    slug: "passerelle",
    num: "X01",
    name: "RXE",
    location: "YAC · Italia",
    category: "Recherche",
    year: "2020",
    status: "Concours",
    cover: img("imgi_82_42fc3bfe01293cab3142df18a5181f4.jpg"),
    gallery: [
      img("imgi_82_42fc3bfe01293cab3142df18a5181f4.jpg"),
      img("imgi_35_42fc3bfe01293cab3142df18a5181f4.jpg"),
      img("imgi_82_42fc3bfe01293cab3142df18a5181f4.jpg"),
      img("imgi_82_42fc3bfe01293cab3142df18a5181f4.jpg"),
      img("imgi_35_42fc3bfe01293cab3142df18a5181f4.jpg"),
    ],
    description: [
      "Concours de recherche YAC : passerelle piétonne sur un site industriel en reconversion. Structure en treillis acier, tablier en CLT.",
    ],
  },
  {
    slug: "copie-de-rxe",
    num: "X02",
    name: "Concours Bibliothèque",
    location: "Gwangju, Corée du Sud",
    category: "Recherche",
    year: "2021",
    status: "Concours",
    area: "1 800 m²",
    cover: img("imgi_92_BIBLIO COREE 02_PNG.png"),
    gallery: [
      img("imgi_92_BIBLIO COREE 02_PNG.png"),
      img("imgi_45_BIBLIO COREE 02_PNG.png"),
      img("imgi_92_BIBLIO COREE 02_PNG.png"),
      img("imgi_92_BIBLIO COREE 02_PNG.png"),
      img("imgi_45_BIBLIO COREE 02_PNG.png"),
    ],
    description: [
      "Concours international pour une bibliothèque de quartier à Gwangju. Structure bois lamellé-collé, façade en briques de terre cuite locales.",
    ],
  },
];

export const designProjects = [
  // 10 design projects from the mockup — added in next pass
] as const;

export const featuredProjectSlugs = [
  "renovation-paris-17",
  "boutique",
  "boutique-singapour-mbs",
  "v",
  "copie-de-store-ksa",
  "housebuenosaires",
];