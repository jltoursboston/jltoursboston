// TODO: Update prices, dates, and images when client provides new info
// WhatsApp number: +1 857-389-9523

export interface TourContent {
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  schedule: string;
  price: string;
  priceNote?: string;
  duration: string;
  capacity?: string;
  departure: string;
  return: string;
}

export interface Tour {
  id: string;
  slug: string;
  image: string;
  imageAlt: { es: string; en: string };
  whatsappMessage: { es: string; en: string };
  es: TourContent;
  en: TourContent;
}

const WA_BASE = 'https://wa.me/18573899523?text=';

export const tours: Tour[] = [
  {
    id: 'niagara',
    slug: 'cataratas-niagara',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80',
    imageAlt: {
      es: 'Cataratas del Niágara',
      en: 'Niagara Falls',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour a las Cataratas del Niágara. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Niagara Falls tour. Could you give me more information?'),
    },
    es: {
      name: 'Cataratas del Niágara',
      tagline: '2 días de pura maravilla natural',
      description:
        'Vive la experiencia de estar frente a una de las maravillas naturales del mundo. Dos días de aventura, historia y naturaleza con todo incluido. Salida a las 4:00 AM desde Walgreens East Boston.',
      includes: [
        '1 noche de hotel a una cuadra de las cataratas',
        'Almuerzo buffet día 1 + desayuno continental día 2',
        'Visita a la Basílica de Fátima y Outlets',
        'Transporte en bus/van de lujo',
        'Tour en barco en las cataratas',
        'Guía permanente en español',
      ],
      schedule: 'Salida 4:00 AM · Regreso 10:00 PM (día siguiente)',
      price: '$410 USD/persona',
      priceNote: 'Cuarto privado para pareja: +$55/persona. Reserva con 50%.',
      duration: '2 días / 1 noche',
      capacity: 'Acomodación en cuartos de 3+ personas',
      departure: '4:00 AM — Walgreens, East Boston',
      return: '10:00 PM del día siguiente',
    },
    en: {
      name: 'Niagara Falls',
      tagline: '2 days of pure natural wonder',
      description:
        'Experience the breathtaking beauty of one of the world\'s natural wonders. Two days of adventure, history, and nature — all included. Departure at 4:00 AM from Walgreens East Boston.',
      includes: [
        '1 night hotel one block from the falls',
        'Buffet lunch day 1 + continental breakfast day 2',
        'Visit to Fatima Shrine and Outlets',
        'Luxury bus/van transportation',
        'Maid of the Mist boat tour at the falls',
        'Permanent bilingual guide',
      ],
      schedule: 'Departure 4:00 AM · Return 10:00 PM (next day)',
      price: '$410 USD/person',
      priceNote: 'Private room for couples: +$55/person. 50% deposit to book.',
      duration: '2 days / 1 night',
      capacity: 'Shared rooms (3+ people)',
      departure: '4:00 AM — Walgreens, East Boston',
      return: '10:00 PM next day',
    },
  },
  {
    id: 'nyc-completa',
    slug: 'nueva-york-completa',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&q=80',
    imageAlt: {
      es: 'Estatua de la Libertad, Nueva York',
      en: 'Statue of Liberty, New York City',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour Nueva York – Experiencia Completa. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the New York Complete Experience tour. Could you give me more information?'),
    },
    es: {
      name: 'Nueva York – Experiencia Completa',
      tagline: 'Los íconos de NYC en un solo día',
      description:
        'El tour más completo de Nueva York: Ferry a la Estatua de la Libertad, el World Trade Center, Times Square y más. Solo 13 cupos disponibles para una experiencia personalizada.',
      includes: [
        'Ferry e ingreso a la Estatua de la Libertad',
        'World Trade Center (Memorial)',
        'Charging Bull · Rockefeller Center · St. Patrick\'s Cathedral',
        'Times Square',
        'Fiambre tipo picnic incluido',
        'Guía permanente en español',
        'Transporte ida y vuelta',
      ],
      schedule: 'Salida 6:00 AM · Regreso 11:00 PM',
      price: '$270 USD/persona',
      duration: '1 día',
      capacity: 'Solo 13 cupos',
      departure: '6:00 AM — Walgreens, East Boston',
      return: '11:00 PM',
    },
    en: {
      name: 'New York – Complete Experience',
      tagline: 'NYC\'s most iconic spots in one day',
      description:
        'The most complete New York City tour: Statue of Liberty ferry, World Trade Center, Times Square and more. Only 13 spots available for a personalized experience.',
      includes: [
        'Ferry and entry to Statue of Liberty',
        'World Trade Center (9/11 Memorial)',
        'Charging Bull · Rockefeller Center · St. Patrick\'s Cathedral',
        'Times Square',
        'Picnic-style lunch included',
        'Permanent bilingual guide',
        'Round-trip transportation',
      ],
      schedule: 'Departure 6:00 AM · Return 11:00 PM',
      price: '$270 USD/person',
      duration: '1 day',
      capacity: 'Only 13 spots',
      departure: '6:00 AM — Walgreens, East Boston',
      return: '11:00 PM',
    },
  },
  {
    id: 'nyc-vip',
    slug: 'nueva-york-vip',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&q=80',
    imageAlt: {
      es: 'Manhattan desde mirador, Nueva York VIP',
      en: 'Manhattan skyline from observation deck, NYC VIP',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour New York VIP – Miradores & Íconos. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the New York VIP – Skylines & Icons tour. Could you give me more information?'),
    },
    es: {
      name: 'New York VIP – Miradores & Íconos',
      tagline: 'Manhattan desde las alturas',
      description:
        'La experiencia premium de Nueva York: sube al Edge at Hudson Yards o SUMMIT One Vanderbilt y contempla Manhattan desde las alturas. Solo 13 cupos.',
      includes: [
        'Ingreso a mirador premium (Edge o SUMMIT One Vanderbilt)',
        'World Trade Center (Memorial)',
        'Charging Bull · Rockefeller Center (árbol de Navidad en temporada)',
        'St. Patrick\'s Cathedral · Times Square',
        'Transporte ida y vuelta',
      ],
      schedule: 'Salida 6:00 AM · Regreso 1:00 AM',
      price: '$280 USD/persona',
      duration: '1 día',
      capacity: 'Solo 13 cupos',
      departure: '6:00 AM — Walgreens, East Boston',
      return: '1:00 AM',
    },
    en: {
      name: 'New York VIP – Skylines & Icons',
      tagline: 'Manhattan from above',
      description:
        'The premium New York City experience: ascend Edge at Hudson Yards or SUMMIT One Vanderbilt and take in Manhattan from above. Only 13 spots.',
      includes: [
        'Premium observation deck (Edge or SUMMIT One Vanderbilt)',
        'World Trade Center (9/11 Memorial)',
        'Charging Bull · Rockefeller Center (Christmas tree in season)',
        'St. Patrick\'s Cathedral · Times Square',
        'Round-trip transportation',
      ],
      schedule: 'Departure 6:00 AM · Return 1:00 AM',
      price: '$280 USD/person',
      duration: '1 day',
      capacity: 'Only 13 spots',
      departure: '6:00 AM — Walgreens, East Boston',
      return: '1:00 AM',
    },
  },
  {
    id: 'atlantic-city',
    slug: 'atlantic-city-philadelphia',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    imageAlt: {
      es: 'Atlantic City boardwalk y Philadelphia',
      en: 'Atlantic City boardwalk and Philadelphia',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour Atlantic City & Philadelphia. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Atlantic City & Philadelphia tour. Could you give me more information?'),
    },
    es: {
      name: 'Atlantic City & Philadelphia',
      tagline: 'Playa, casino e historia en 2 días',
      description:
        'Combina la emoción del casino y la playa de Atlantic City con la historia viva de Philadelphia: la Campana de la Libertad y las escalinatas de Rocky.',
      includes: [
        '1 noche en hotel-casino en Atlantic City',
        'Tiempo de playa en el boardwalk',
        'Almuerzo sábado incluido',
        'Guía permanente',
        'Recorrido por Philadelphia: Liberty Bell, Philadelphia Museum of Art, centro histórico',
        'Transporte ida y vuelta',
      ],
      schedule: 'Salida sábado 4:00 AM · Regreso domingo 10:00 PM',
      price: '$420 USD/persona',
      duration: '2 días / 1 noche',
      departure: '4:00 AM (sábado) — Walgreens, East Boston',
      return: '10:00 PM (domingo)',
    },
    en: {
      name: 'Atlantic City & Philadelphia',
      tagline: 'Beach, casino, and history in 2 days',
      description:
        'Combine the excitement of Atlantic City\'s casino and beach with Philadelphia\'s living history: the Liberty Bell and the iconic Rocky steps.',
      includes: [
        '1 night at casino hotel in Atlantic City',
        'Beach time at the boardwalk',
        'Saturday lunch included',
        'Permanent guide',
        'Philadelphia tour: Liberty Bell, Philadelphia Museum of Art (Rocky steps), historic district',
        'Round-trip transportation',
      ],
      schedule: 'Departure Saturday 4:00 AM · Return Sunday 10:00 PM',
      price: '$420 USD/person',
      duration: '2 days / 1 night',
      departure: '4:00 AM (Saturday) — Walgreens, East Boston',
      return: '10:00 PM (Sunday)',
    },
  },
  {
    id: 'washington',
    slug: 'washington-dc',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80',
    imageAlt: {
      es: 'Monumento a Lincoln en Washington D.C.',
      en: 'Lincoln Memorial in Washington D.C.',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour a Washington D.C. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Washington D.C. tour. Could you give me more information?'),
    },
    es: {
      name: 'Washington D.C.',
      tagline: 'El corazón de Estados Unidos',
      description:
        'Recorre la capital de la nación con un tour guiado de 3 horas por los monumentos más emblemáticos. Los museos del Smithsonian son de entrada libre.',
      includes: [
        '1 noche de hotel',
        'Almuerzo sábado + desayuno domingo',
        'Tour guiado de 3 horas',
        'Casa Blanca (afueras) · Capitolio · Monumento a Lincoln',
        'National Mall · Obelisco · Monumento WWII · Pentágono',
        'Tiempo libre para museos Smithsonian (entrada gratis)',
        'Transporte ida y vuelta',
      ],
      schedule: 'Salida sábado · Regreso domingo 10:00 PM',
      price: '$430 USD/persona',
      duration: '2 días / 1 noche',
      departure: 'Walgreens, East Boston',
      return: 'domingo 10:00 PM',
    },
    en: {
      name: 'Washington D.C.',
      tagline: 'The heart of the United States',
      description:
        'Tour the nation\'s capital with a 3-hour guided visit to its most iconic monuments. Smithsonian museums are free admission.',
      includes: [
        '1 night hotel',
        'Saturday lunch + Sunday breakfast',
        '3-hour guided tour',
        'White House (exterior) · U.S. Capitol · Lincoln Memorial',
        'National Mall · Washington Monument · WWII Memorial · Pentagon',
        'Free time at Smithsonian museums (free admission)',
        'Round-trip transportation',
      ],
      schedule: 'Departure Saturday · Return Sunday 10:00 PM',
      price: '$430 USD/person',
      duration: '2 days / 1 night',
      departure: 'Walgreens, East Boston',
      return: 'Sunday 10:00 PM',
    },
  },
  {
    id: 'templo-hindu',
    slug: 'templo-hindu-new-jersey',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1625125886064-a5577a9bd84b?w=800&q=80',
    imageAlt: {
      es: 'Templo Hindú BAPS en Robbinsville, New Jersey',
      en: 'BAPS Hindu Temple in Robbinsville, New Jersey',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour al Templo Hindú & New Jersey. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Hindu Temple & New Jersey tour. Could you give me more information?'),
    },
    es: {
      name: 'Templo Hindú & New Jersey',
      tagline: 'Cultura, compras y vistas a Manhattan',
      description:
        'Visita el templo hindú más grande fuera de India (2.5 horas), el American Dream Mall para almorzar y comprar, y una parada panorámica con vista a Manhattan desde New Jersey.',
      includes: [
        'Visita al Templo Hindú BAPS (2.5 horas) — el más grande fuera de India',
        'American Dream Mall (2 horas — almuerzo y compras)',
        'Parada panorámica con vista a Manhattan desde NJ',
        'Transporte ida y vuelta',
      ],
      schedule: 'Salida 5:00 AM · Regreso 10:30 PM',
      price: '$190 USD/persona',
      duration: '1 día',
      departure: '5:00 AM — Walgreens, East Boston',
      return: '10:30 PM',
    },
    en: {
      name: 'Hindu Temple & New Jersey',
      tagline: 'Culture, shopping, and Manhattan views',
      description:
        'Visit the largest Hindu temple outside India (2.5 hours), American Dream Mall for lunch and shopping, and a scenic stop with panoramic views of Manhattan from New Jersey.',
      includes: [
        'BAPS Hindu Temple visit (2.5 hrs) — largest outside India',
        'American Dream Mall (2 hrs — lunch and shopping)',
        'Scenic overlook with Manhattan skyline views from NJ',
        'Round-trip transportation',
      ],
      schedule: 'Departure 5:00 AM · Return 10:30 PM',
      price: '$190 USD/person',
      duration: '1 day',
      departure: '5:00 AM — Walgreens, East Boston',
      return: '10:30 PM',
    },
  },
  {
    id: 'cavernas',
    slug: 'cavernas-nueva-york',
    // TODO: replace with real photo from @jltoursboston
    image: 'https://images.unsplash.com/photo-1520637836993-5078b9e82f83?w=800&q=80',
    imageAlt: {
      es: 'Cavernas subterráneas en Nueva York',
      en: 'Underground caverns in New York',
    },
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour a las Cavernas de NY. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the NY Caverns tour. Could you give me more information?'),
    },
    es: {
      name: 'Cavernas de NY',
      tagline: 'Aventura subterránea a 47 metros',
      description:
        'Una aventura única: desciende 47 metros bajo tierra para explorar cavernas milenarias con formaciones espectaculares y navegación subterránea en bote.',
      includes: [
        'Ticket de entrada a las cavernas',
        'Formaciones milenarias de estalactitas y estalagmitas',
        'Navegación subterránea en bote',
        'Transporte ida y vuelta',
      ],
      schedule: 'Salida 7:00 AM · Regreso al atardecer',
      price: '$190 USD/persona',
      // TODO: update date when confirmed
      priceNote: 'Consultar fecha de próxima salida vía WhatsApp.',
      duration: '1 día',
      departure: '7:00 AM — Walgreens, East Boston',
      return: 'Al atardecer',
    },
    en: {
      name: 'NY Caverns',
      tagline: 'Underground adventure 47 meters deep',
      description:
        'A unique adventure: descend 47 meters underground to explore ancient caves with spectacular formations and an underground boat ride.',
      includes: [
        'Cave entry ticket',
        'Ancient stalactite and stalagmite formations',
        'Underground boat ride',
        'Round-trip transportation',
      ],
      schedule: 'Departure 7:00 AM · Return at sunset',
      price: '$190 USD/person',
      // TODO: update date when confirmed
      priceNote: 'Ask for next departure date via WhatsApp.',
      duration: '1 day',
      departure: '7:00 AM — Walgreens, East Boston',
      return: 'At sunset',
    },
  },
];

// Excursión #8 — Parques familiares (precio variable, se maneja separado)
export const familyParks = {
  parks: [
    'Six Flags New England',
    'Water Country',
    'Zoo New England (Franklin Park Zoo & Stone Zoo)',
    'Parques acuáticos',
    'Eventos de temporada',
  ],
  parksEn: [
    'Six Flags New England',
    'Water Country',
    'Zoo New England (Franklin Park Zoo & Stone Zoo)',
    'Water parks',
    'Seasonal events',
  ],
  whatsappMessage: {
    es: WA_BASE + encodeURIComponent('Hola, me interesan los tours a parques familiares (Six Flags, Water Country, Zoo). ¿Cuáles son las próximas fechas y precios?'),
    en: WA_BASE + encodeURIComponent('Hello, I\'m interested in the family parks tours (Six Flags, Water Country, Zoo). What are the upcoming dates and prices?'),
  },
};
