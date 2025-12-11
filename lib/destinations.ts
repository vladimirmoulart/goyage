type DestinationDetail = {
  id: string
  name: string
  country: string
  continent: string
  heroImage: string
  locationLabel?: string
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
  seychelles: {
    id: "seychelles",
    name: "Seychelles",
    country: "Seychelles",
    continent: "Océan Indien",
    heroImage: "/travel-experience-adventure-colorful.jpg",
    locationLabel: "aux Seychelles",
    description: "Lagons turquoise, granit sculpté et art de vivre créole.",
    longDescription:
      "L'archipel des Seychelles est un sanctuaire naturel où chaque île révèle plages immaculées, forêts primaires et culture créole métissée. Nos hôtes vous accueillent dans leurs maisons d'hôtes familiales pour partager la cuisine locale, les secrets des parcs marins et les traditions artisanales des îles granitiques.",
    highlights: [
      "Snorkeling dans les réserves marines protégées",
      "Ateliers cuisine créole sur Mahé et Praslin",
      "Balades guidées dans les forêts de coco-de-mer",
      "Sessions photo sur les plages aux rochers granitiques",
    ],
    experiences: 28,
    hosts: 14,
    rating: 4.9,
    bestTime: "Avril - Novembre",
    language: "Français, Créole, Anglais",
    currency: "Roupie seychelloise (SCR)",
    timezone: "UTC+4",
  },
  maroc: {
    id: "maroc",
    name: "Maroc",
    country: "Maroc",
    continent: "Afrique",
    heroImage: "/marrakech-morocco-medina-colorful-market.jpg",
    locationLabel: "au Maroc",
    description: "Riads secrets, dunes dorées et hospitalité berbère.",
    longDescription:
      "Des souks de Marrakech aux villages de l'Atlas et jusqu'aux bivouacs sahariens, le Maroc offre mille visages. Les hôtes GOYAGE organisent des immersions artisanales, des ateliers culinaires, des balades à dos de dromadaire et des retraites dans des riads familiaux pour vivre la générosité marocaine.",
    highlights: [
      "Ateliers poterie et tissages traditionnels",
      "Cours de cuisine marocaine dans un riad",
      "Randonnées guidées dans le Haut Atlas",
      "Nuits sous les étoiles dans le désert",
    ],
    experiences: 42,
    hosts: 24,
    rating: 4.9,
    bestTime: "Mars - Juin, Sept - Nov",
    language: "Arabe, Français",
    currency: "Dirham marocain (MAD)",
    timezone: "UTC+1",
  },
  bali: {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    continent: "Asie",
    heroImage: "/bali-rice-temple.png",
    locationLabel: "à Bali",
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
  italie: {
    id: "italie",
    name: "Italie",
    country: "Italie",
    continent: "Europe",
    heroImage: "/cinque-terre-italy-colorful-coastal-villages.jpg",
    locationLabel: "en Italie",
    description: "Dolce vita entre villages perchés, vignes et cuisine familiale.",
    longDescription:
      "Goûtez à la dolce vita entre Ligurie, Toscane et Pouilles. Les hôtes GOYAGE vous guident dans leurs trattorie préférées, les vignobles de famille, les ateliers de céramique et les sentiers côtiers pour ressentir la chaleur italienne, entre patrimoine et slow food.",
    highlights: [
      "Ateliers pasta fresca & pesto dans des cuisines familiales",
      "Randonnées panoramiques sur les côtes méditerranéennes",
      "Dégustations de vins naturels et huiles d'olive",
      "Visites d'artisans (marbre, céramique, cuir)",
    ],
    experiences: 36,
    hosts: 18,
    rating: 4.8,
    bestTime: "Avril - Octobre",
    language: "Italien, Anglais",
    currency: "Euro (EUR)",
    timezone: "UTC+1/+2",
  },
  espagne: {
    id: "espagne",
    name: "Espagne",
    country: "Espagne",
    continent: "Europe",
    heroImage: "/mediterranean-sea-coastal-village-sunset.jpg",
    locationLabel: "en Espagne",
    description: "Ambiance tapas, flamenco et villes baignées de soleil.",
    longDescription:
      "De l'Andalousie aux Baléares en passant par le Pays basque, l'Espagne se vit en musique, en gastronomie et en rencontres chaleureuses. Avec GOYAGE, partagez des tablées de tapas, participez à des ateliers flamenco, explorez les vignobles bio et découvrez les artisans qui perpétuent l'esprit ibérique.",
    highlights: [
      "Routes des tapas guidées dans les barrios historiques",
      "Initiations flamenco et visites d'ateliers de guitare",
      "Excursions en voilier vers des criques secrètes",
      "Dégustations de vins nature et d'huiles d'olive",
    ],
    experiences: 39,
    hosts: 21,
    rating: 4.8,
    bestTime: "Avril - Octobre",
    language: "Espagnol, Anglais",
    currency: "Euro (EUR)",
    timezone: "UTC+1/+2",
  },
}
