export type ActivityDetail = {
  id: string
  title: string
  location: string
  host: string
  hostImage: string
  image: string
  price: number
  rating: number
  reviews: number
  duration: string
  maxGuests: number
  category: string
  shortDescription: string
  longDescription: string
  highlights: string[]
  itinerary: string[]
  includes: string[]
  meetingPoint: string
  language: string
  level: string
}

export const activitiesData: Record<string, ActivityDetail> = {
  "1": {
    id: "1",
    title: "Atelier poterie traditionnelle",
    location: "Marrakech, Maroc",
    host: "Ahmed",
    hostImage: "/moroccan-man-artisan-smiling-portrait.jpg",
    image: "/pottery-workshop-morocco-traditional-crafts-hands-.jpg",
    price: 35,
    rating: 4.9,
    reviews: 127,
    duration: "3h",
    maxGuests: 6,
    category: "Artisanat",
    shortDescription: "Apprenez l'art ancestral de la poterie marocaine dans un atelier familial de la médina.",
    longDescription:
      "Ahmed perpétue la tradition depuis trois générations. Dans son atelier niché au cœur de la médina, il vous guide étape par étape : choix de l'argile, modelage, décoration et cuisson. Vous repartez avec votre création et les techniques pour continuer chez vous.",
    highlights: ["Découverte des outils traditionnels", "Décor sur faïence et calligraphie", "Thé à la menthe et pâtisseries"],
    itinerary: ["Accueil et présentation de l'atelier", "Démonstration et exercices guidés", "Décoration et finitions", "Cuisson et dégustation de thé"],
    includes: ["Matériel et argile", "Boisson d'accueil", "Votre pièce emballée"],
    meetingPoint: "Atelier d'Ahmed, Rue des potiers - Médina",
    language: "Français / Arabe / Anglais",
    level: "Ouvert à tous",
  },
  "2": {
    id: "2",
    title: "Randonnée et pique-nique local",
    location: "Cinque Terre, Italie",
    host: "Lucia",
    hostImage: "/italian-woman-hiking-guide-smiling.jpg",
    image: "/hiking-cinque-terre-italy-coastal-view-picnic-natu.jpg",
    price: 55,
    rating: 4.8,
    reviews: 89,
    duration: "5h",
    maxGuests: 8,
    category: "Nature",
    shortDescription: "Randonnez sur les sentiers côtiers avant de savourer un pique-nique préparé avec des produits locaux.",
    longDescription:
      "Lucia connaît chaque terrasse et vignoble suspendu entre ciel et mer. Elle vous emmène sur les plus beaux sentiers, partage les histoires des pêcheurs et installe un pique-nique généreux avec focaccia, pesto et vins sciachetrà.",
    highlights: ["Points de vue privés", "Dégustation de produits artisans", "Conseils photo par Lucia"],
    itinerary: ["Départ de Vernazza", "Randonnée panoramique (2h30)", "Pique-nique et temps libre", "Retour en train local"],
    includes: ["Guide local certifié", "Pique-nique complet", "Billet de train retour"],
    meetingPoint: "Gare de Vernazza",
    language: "Italien / Anglais",
    level: "Bon marcheur",
  },
  "3": {
    id: "3",
    title: "Cours de tango argentin",
    location: "Buenos Aires, Argentine",
    host: "Carlos",
    hostImage: "/argentine-man-tango-dancer-portrait.jpg",
    image: "/tango-dance-lesson-buenos-aires-argentina-couple.jpg",
    price: 40,
    rating: 5.0,
    reviews: 203,
    duration: "2h",
    maxGuests: 10,
    category: "Culture",
    shortDescription: "Apprenez les bases du tango avec un maestro dans une milonga historique.",
    longDescription:
      "Carlos et son équipe vous initient aux mouvements fondamentaux, à la connexion et à l'improvisation. Après la leçon, vous restez pour observer les danseurs locaux et partager un verre de malbec.",
    highlights: ["Cours privé adapté au niveau", "Entrée milonga incluse", "Conseils musique et codes du tango"],
    itinerary: ["Accueil à la milonga", "Échauffement guidé", "Cours par petits groupes", "Moment d'observation et boisson"],
    includes: ["Cours et entrée milonga", "Boisson locale", "Photos souvenirs"],
    meetingPoint: "Milonga Confitería Ideal",
    language: "Espagnol / Anglais",
    level: "Débutant accepté",
  },
  "4": {
    id: "4",
    title: "Street food tour nocturne",
    location: "Bangkok, Thaïlande",
    host: "Niran",
    hostImage: "/thai-man-chef-smiling-portrait.jpg",
    image: "/bangkok-street-food-night-market-tour-thailand.jpg",
    price: 30,
    rating: 4.9,
    reviews: 156,
    duration: "4h",
    maxGuests: 8,
    category: "Gastronomie",
    shortDescription: "Explorez les meilleurs stands de street food de Bangkok avec un chef local.",
    longDescription:
      "Niran a grandi dans le marché de Yaowarat. Il vous emmène hors des sentiers battus pour déguster pad thai au wok charbon, brochettes satay, fruits exotiques et desserts au coco. Vous apprenez à identifier les bonnes adresses et à commander comme un local.",
    highlights: ["10 dégustations incluses", "Astuces d'hygiène et de commande", "Focus sur la cuisine chinoise-thaïe"],
    itinerary: ["Rendez-vous sur Yaowarat Road", "Parcours des stands emblématiques", "Pause boissons locales", "Dessert et discussion culture food"],
    includes: ["Dégustations complètes", "Guide culinaire", "Transports entre spots"],
    meetingPoint: "Métro Wat Mangkon, sortie 2",
    language: "Thaï / Anglais",
    level: "Tous niveaux",
  },
  "5": {
    id: "5",
    title: "Cours de cuisine japonaise",
    location: "Kyoto, Japon",
    host: "Yuki",
    hostImage: "/japanese-woman-chef-traditional-smiling.jpg",
    image: "/happy-travelers-sharing-meal-with-local-host-famil.jpg",
    price: 65,
    rating: 4.9,
    reviews: 178,
    duration: "4h",
    maxGuests: 6,
    category: "Gastronomie",
    shortDescription: "Préparez un menu kaiseki avec une cheffe locale dans sa machiya traditionnelle.",
    longDescription:
      "Yuki partage les techniques de base : dashi, découpe sashimi, dressage minimaliste. Le cours se termine autour d’une dégustation accompagnée de saké artisanal.",
    highlights: ["Recettes imprimées", "Techniques de couteau", "Découverte de condiments rares"],
    itinerary: ["Présentation des ingrédients", "Préparation pas à pas", "Dressage et photo finale", "Repas convivial"],
    includes: ["Ingrédients premium", "Boissons (thé + saké)", "Tablier GOYAGE"],
    meetingPoint: "Maison de Yuki, quartier Gion",
    language: "Japonais / Anglais",
    level: "Gastronome curieux",
  },
  "6": {
    id: "6",
    title: "Safari photo au lever du soleil",
    location: "Le Cap, Afrique du Sud",
    host: "David",
    hostImage: "/placeholder-user.jpg",
    image: "/cape-town-table-mountain.png",
    price: 85,
    rating: 4.8,
    reviews: 94,
    duration: "6h",
    maxGuests: 4,
    category: "Photo",
    shortDescription: "Capturez la faune et les paysages du Cap guidé par un photographe animalier.",
    longDescription:
      "Départ avant l'aube pour repérer autruches, springboks et panoramas sur la péninsule du Cap. David vous accompagne sur la technique (lumière, réglages) et fournit un kit petit-déjeuner.",
    highlights: ["Session coaching photo", "Accès à des spots privés", "Dossier post-traitement et presets"],
    itinerary: ["Transfert vers la réserve", "Safari à pied et en véhicule", "Pause brunch", "Débriefing des clichés"],
    includes: ["Transport privé", "Collation & café", "Guide photographe"],
    meetingPoint: "V&A Waterfront, parking B",
    language: "Anglais",
    level: "Intermédiaire photo",
  },
  "7": {
    id: "7",
    title: "Yoga sur la plage",
    location: "Bali, Indonésie",
    host: "Made",
    hostImage: "/placeholder-user.jpg",
    image: "/placeholder.svg?height=400&width=600",
    price: 25,
    rating: 4.9,
    reviews: 231,
    duration: "1h30",
    maxGuests: 12,
    category: "Bien-être",
    shortDescription: "Séance sunrise yoga suivie d’un jus detox en bord de mer.",
    longDescription:
      "Made adapte la pratique (vinyasa doux) au niveau des participants et partage des exercices de respiration balinais. Après la séance, place à un jus frais et un cercle de discussions.",
    highlights: ["Prêt de tapis et serviette", "Techniques de respiration", "Playlist détente GOYAGE"],
    itinerary: ["Méditation guidée", "Séquence vinyasa", "Relaxation sonore", "Jus detox"],
    includes: ["Matériel", "Boisson fraîche", "Photos souvenirs"],
    meetingPoint: "Plage de Sanur, cabane GOYAGE",
    language: "Anglais / Indonésien",
    level: "Tous niveaux",
  },
  "8": {
    id: "8",
    title: "Tour en vélo vintage",
    location: "Lisbonne, Portugal",
    host: "Miguel",
    hostImage: "/placeholder-user.jpg",
    image: "/lisbon-portugal-colorful-tramway-alfama.jpg",
    price: 45,
    rating: 4.7,
    reviews: 112,
    duration: "3h",
    maxGuests: 8,
    category: "Aventure",
    shortDescription: "Explorez les collines de Lisbonne en vélo vintage électrique accompagné d’un historien local.",
    longDescription:
      "Miguel combine anecdotes historiques, pauses gourmandes et spots photo. Les vélos vintage sont assistés électriquement pour grimper sans effort jusqu'à Graça.",
    highlights: ["Vélos restaurés", "Pause pastel de nata", "Session photo panoramique"],
    itinerary: ["Briefing et équipement", "Parcours Alfama > Graça > Chiado", "Pause café & pâtisserie", "Descente vers la Praça do Comércio"],
    includes: ["Vélo + casque", "Assurance", "Collation"],
    meetingPoint: "Studio GOYAGE, Praça do Comércio",
    language: "Portugais / Anglais / Français",
    level: "À l'aise à vélo",
  },
}
