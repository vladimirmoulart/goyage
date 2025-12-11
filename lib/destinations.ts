type DestinationDetail = {
  id: string
  name: string
  country: string
  continent: string
  heroImage: string
  description: string
  longDescription: string
  highlights: string[]
  experiences: number
  hosts: number
  rating: number
  bestTime: string
  language: string
  currency: string
  timezone: string
}

export const destinationDetailData: Record<string, DestinationDetail> = {
  marrakech: {
    id: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    continent: "Afrique",
    heroImage: "/marrakech-morocco-medina-colorful-market.jpg",
    description: "Laissez-vous envoûter par les souks, les riads et la magie de la médina.",
    longDescription:
      "Marrakech, la ville rouge, est une destination qui éveille tous les sens. Des ruelles sinueuses de la médina aux jardins luxuriants, en passant par la célèbre place Jemaa el-Fna, chaque coin de rue révèle une nouvelle surprise. Nos hôtes locaux vous feront découvrir les secrets les mieux gardés de cette ville millénaire.",
    highlights: [
      "Médina historique classée UNESCO",
      "Artisanat traditionnel dans les souks",
      "Cuisine marocaine authentique",
      "Architecture des riads",
    ],
    experiences: 45,
    hosts: 23,
    rating: 4.9,
    bestTime: "Mars - Mai, Sept - Nov",
    language: "Arabe, Français",
    currency: "Dirham (MAD)",
    timezone: "UTC+1",
  },
  bali: {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    continent: "Asie",
    heroImage: "/bali-rice-temple.png",
    description: "Rizières en terrasses, temples hindous et spiritualité balinaise.",
    longDescription:
      "L'île des Dieux enchante par sa beauté naturelle et sa richesse spirituelle. Des rizières en terrasses d'Ubud aux temples majestueux, Bali offre une expérience unique où tradition et nature se mêlent harmonieusement. Nos hôtes balinais vous ouvrent les portes de leur culture millénaire.",
    highlights: [
      "Cérémonies balinaises d'offrandes",
      "Cours de cuisine et marché aux épices",
      "Yoga & bien-être sur plage secrète",
      "Découverte des villages d'artisans",
    ],
    experiences: 67,
    hosts: 35,
    rating: 4.8,
    bestTime: "Avril - Octobre (saison sèche)",
    language: "Indonésien, Anglais",
    currency: "Roupie (IDR)",
    timezone: "UTC+8",
  },
  kyoto: {
    id: "kyoto",
    name: "Kyoto",
    country: "Japon",
    continent: "Asie",
    heroImage: "/kyoto-japan-temple-traditional-garden.jpg",
    description: "Temples ancestraux, jardins zen et cérémonies du thé vous attendent.",
    longDescription:
      "Ancienne capitale impériale du Japon, Kyoto est le cœur culturel et spirituel du pays. Avec ses 2000 temples et sanctuaires, ses geishas dans le quartier de Gion et ses jardins zen méditatifs, la ville offre un voyage dans le temps. Nos hôtes vous initieront aux traditions japonaises les plus raffinées.",
    highlights: [
      "Cérémonies du thé privées",
      "Ateliers d'artisanat (kimono, laque)",
      "Balades guidées dans les temples",
      "Gastronomie kaiseki authentique",
    ],
    experiences: 38,
    hosts: 19,
    rating: 4.8,
    bestTime: "Avril (sakura) & Novembre (momiji)",
    language: "Japonais, Anglais",
    currency: "Yen (JPY)",
    timezone: "UTC+9",
  },
  lisbonne: {
    id: "lisbonne",
    name: "Lisbonne",
    country: "Portugal",
    continent: "Europe",
    heroImage: "/lisbon-portugal-colorful-tramway-alfama.jpg",
    description: "Entre fado, azulejos et pastéis de nata, vivez l'âme portugaise.",
    longDescription:
      "Lisbonne charme par sa lumière unique, ses ruelles pavées et son ambiance mélancolique. Du quartier historique d'Alfama aux soirées fado, en passant par les délicieux pastéis de nata, chaque moment est une invitation à la douceur de vivre portugaise.",
    highlights: [
      "Balades en tramway et fado intimiste",
      "Ateliers azulejos et broderie",
      "Cours de cuisine portugaise",
      "Dégustations de vins et pasteis",
    ],
    experiences: 52,
    hosts: 28,
    rating: 4.9,
    bestTime: "Avril - Octobre",
    language: "Portugais, Anglais",
    currency: "Euro (EUR)",
    timezone: "UTC+0/+1",
  },
  "buenos-aires": {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentine",
    continent: "Amérique",
    heroImage: "/buenos-aires-argentina-la-boca-colorful.jpg",
    description: "Tango, asado et passion argentine dans la Paris de l'Amérique du Sud.",
    longDescription:
      "Buenos Aires mélange énergie européenne et chaleur latine. Découvrez ses quartiers mythiques, apprenez le tango auprès de maestros réputés, goûtez aux secrets d'une parrilla familiale et explorez la scène artistique bohème avec nos hôtes GOYAGE.",
    highlights: [
      "Cours de tango privés",
      "Ateliers asado et vins argentins",
      "Street art tour dans La Boca",
      "Rencontres d'artisans du cuir",
    ],
    experiences: 41,
    hosts: 22,
    rating: 4.7,
    bestTime: "Septembre - Décembre",
    language: "Espagnol, Anglais",
    currency: "Peso argentin (ARS)",
    timezone: "UTC-3",
  },
  santorini: {
    id: "santorini",
    name: "Santorin",
    country: "Grèce",
    continent: "Europe",
    heroImage: "/santorini-greece-white-blue-houses-sunset.jpg",
    description: "Maisons blanches, dômes bleus et couchers de soleil légendaires.",
    longDescription:
      "Santorin est l'île des panoramas à couper le souffle. Derrière les cartes postales se cache une culture cycladique riche : viticulture sur sols volcaniques, cuisine méditerranéenne fraîche et traditions maritimes. Nos hôtes vous accueillent pour des expériences intimistes au cœur des villages perchés.",
    highlights: [
      "Cours de cuisine grecque + dégustations",
      "Sorties bateau au coucher du soleil",
      "Ateliers poterie/mosaïque",
      "Visites guidées de villages",
    ],
    experiences: 29,
    hosts: 15,
    rating: 4.9,
    bestTime: "Avril - Octobre",
    language: "Grec, Anglais",
    currency: "Euro (EUR)",
    timezone: "UTC+2/+3",
  },
  "cape-town": {
    id: "cape-town",
    name: "Le Cap",
    country: "Afrique du Sud",
    continent: "Afrique",
    heroImage: "/cape-town-table-mountain.png",
    description: "Entre océan et montagne, une ville arc-en-ciel pleine de contrastes.",
    longDescription:
      "La Mother City mêle culture urbaine, héritage viticole et nature sauvage. GOYAGE vous propose des expériences aux côtés d'hôtes qui vous emmènent surfer à Muizenberg, cuisiner un braai dans les townships, explorer les vignobles ou randonner sur la Table Mountain.",
    highlights: [
      "Randonnées Table Mountain au lever du soleil",
      "Ateliers cuisine braai",
      "Dégustations dans les vignobles",
      "Sorties surf/kayak",
    ],
    experiences: 33,
    hosts: 18,
    rating: 4.8,
    bestTime: "Novembre - Mars",
    language: "Anglais, Afrikaans",
    currency: "Rand (ZAR)",
    timezone: "UTC+2",
  },
  "cinque-terre": {
    id: "cinque-terre",
    name: "Cinque Terre",
    country: "Italie",
    continent: "Europe",
    heroImage: "/cinque-terre-italy-colorful-coastal-villages.jpg",
    description: "Villages colorés accrochés aux falaises de la Riviera italienne.",
    longDescription:
      "Entre mer et vignobles en terrasses, les Cinque Terre offrent un terrain de jeu idyllique pour les amoureux de nature et de gastronomie. Avec GOYAGE, partez en randonnée guidée, initiez-vous à la pesto classico, découvrez la pêche artisanale et dégustez les vins sciachetrà en compagnie d'habitants.",
    highlights: [
      "Randonnées guidées panoramiques",
      "Ateliers pesto & focaccia",
      "Sorties pêche au lever du jour",
      "Dégustations de vins sciachetrà",
    ],
    experiences: 24,
    hosts: 12,
    rating: 4.9,
    bestTime: "Mai - Septembre",
    language: "Italien, Anglais",
    currency: "Euro (EUR)",
    timezone: "UTC+1/+2",
  },
}
