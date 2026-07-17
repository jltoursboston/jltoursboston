// WhatsApp number: +1 857-389-9523

export interface ItineraryItem {
  time: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Addon {
  name: string;
  price: number;
  originalPrice?: number;
}

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
  itinerary: ItineraryItem[];
  faq: FaqItem[];
  addons?: Addon[];
}

export interface Tour {
  id: string;
  slug: string;
  image: string;
  imageAlt: { es: string; en: string };
  gallery?: string[];
  whatsappMessage: { es: string; en: string };
  departurePoints: string[];
  nextDates: string[];
  es: TourContent;
  en: TourContent;
}

const WA_BASE = 'https://wa.me/18573899523?text=';

export const tours: Tour[] = [
  {
    id: 'niagara',
    slug: 'cataratas-niagara',
    image: '/images/tours/niagara.jpg',
    imageAlt: {
      es: 'Cataratas del Niágara',
      en: 'Niagara Falls',
    },
    gallery: [
      '/images/tours/niagara-g01.jpg',
      '/images/tours/niagara-g02.jpg',
      '/images/tours/niagara-g03.jpg',
      '/images/tours/niagara-g04.jpg',
      '/images/tours/niagara-g05.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour a las Cataratas del Niágara. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Niagara Falls tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-04','2026-07-11','2026-07-18','2026-07-25',
      '2026-08-01','2026-08-08','2026-08-15','2026-08-22','2026-08-29',
      '2026-09-05','2026-09-12','2026-09-26',
      '2026-10-03','2026-10-10',
    ],
    es: {
      name: 'Cataratas del Niágara',
      tagline: '2 días de pura maravilla natural',
      description:
        'Vive la experiencia de estar frente a una de las maravillas naturales del mundo. Dos días de aventura, historia y naturaleza con todo incluido. Salida a las 4:00 AM desde East Boston.',
      includes: [
        '🏨 1 noche de hotel a una cuadra de las cataratas',
        '🍽️ Almuerzo buffet día 1 + desayuno continental día 2',
        '⛪ Visita a la Basílica de Fátima y Outlets',
        '🚌 Transporte en bus/van de lujo',
        '⛴️ Tour en barco en las cataratas',
        '🗺️ Guía en español · tour guiado en español',
      ],
      schedule: 'Salida 4:00 AM · Regreso 10:00 PM (día siguiente)',
      price: '$410 USD/persona',
      priceNote: 'Cuarto privado para pareja: +$55/persona. Reserva con 50%.',
      duration: '2 días / 1 noche',
      capacity: 'Cuartos compartidos (3+) y privados',
      departure: '4:00 AM — Walgreens East Boston, MA',
      return: '10:00 PM del día siguiente',
      itinerary: [
        { time: '4:00 AM', label: 'Salida desde Walgreens de East Boston 🚌' },
        { time: '8:00 AM', label: 'Parada en el camino para descanso y desayuno ☕' },
        { time: '12:20 PM', label: 'Llegada a Niágara · almuerzo en el bufet 🍽️' },
        { time: '1:30 PM', label: 'Nos dirigimos hacia el parque de las Cataratas del Niágara 🏞️' },
        { time: '2:10 PM', label: 'Recorrido por el parque: miradores y reconocimiento general' },
        { time: 'Tarde', label: 'Entrada a la Cueva de los Vientos 💦' },
        { time: '6:00 PM', label: 'Check-in en hotel (a una cuadra de las Cataratas) 🏨' },
        { time: '10:00 PM', label: 'Cataratas iluminadas + juegos artificiales 🎆' },
        { time: 'Día 2 — 7:00 AM', label: 'Desayuno continental en el hotel ☕' },
        { time: 'Día 2 — 8:00 AM', label: 'Tour en barco ⛴️' },
        { time: 'Día 2 — 9:30 AM', label: 'Paseo en globo 🎈' },
        { time: 'Día 2 — 10:30 AM', label: 'Checkout del hotel · visita a la Basílica de Fátima ⛪' },
        { time: 'Día 2 — 11:00 AM', label: 'Llegada al outlet 🛍️' },
        { time: 'Día 2 — 2:00 PM', label: 'Salida hacia Boston 🚌' },
        { time: 'Día 2 — 5:30 PM', label: 'Descanso en área de servicio' },
        { time: 'Día 2 — ~10:00 PM', label: 'Llegada aproximada a East Boston' },
      ],
      faq: [
        {
          q: '¿Cómo reservo mi lugar?',
          a: 'Escríbenos por WhatsApp al +1 857-389-9523. Para asegurar tu cupo solo necesitas el 50% del valor del tour. El saldo restante se paga una semana antes de la salida.',
        },
        {
          q: '¿El hotel es compartido?',
          a: 'Tenemos la opción de cuarto compartido o cuarto privado, de acuerdo a la cantidad de personas y la elección del paquete. Si deseas cuarto privado para pareja, hay un suplemento de +$55/persona.',
        },
      ],
      addons: [
        { name: '💦 Cueva de los Vientos', price: 23, originalPrice: 28 },
        { name: '🎈 Paseo en globo', price: 47, originalPrice: 72 },
      ],
    },
    en: {
      name: 'Niagara Falls',
      tagline: '2 days of pure natural wonder',
      description:
        'Experience the breathtaking beauty of one of the world\'s natural wonders. Two days of adventure, history, and nature — all included. Departure at 4:00 AM from East Boston.',
      includes: [
        '🏨 1 night hotel one block from the falls',
        '🍽️ Buffet lunch day 1 + continental breakfast day 2',
        '⛪ Visit to Fatima Shrine and Outlets',
        '🚌 Luxury bus/van transportation',
        '⛴️ Maid of the Mist boat tour at the falls',
        '🗺️ Spanish-speaking guide · tour in Spanish',
      ],
      schedule: 'Departure 4:00 AM · Return 10:00 PM (next day)',
      price: '$410 USD/person',
      priceNote: 'Private room for couples: +$55/person. 50% deposit to book.',
      duration: '2 days / 1 night',
      capacity: 'Shared (3+) & private rooms',
      departure: '4:00 AM — Walgreens East Boston, MA',
      return: '10:00 PM next day',
      itinerary: [
        { time: '4:00 AM', label: 'Departure from Walgreens in East Boston 🚌' },
        { time: '8:00 AM', label: 'Rest stop on the way for breakfast ☕' },
        { time: '12:20 PM', label: 'Arrival at Niagara · buffet lunch 🍽️' },
        { time: '1:30 PM', label: 'Head to Niagara Falls State Park 🏞️' },
        { time: '2:10 PM', label: 'Park tour: viewpoints and general overview' },
        { time: 'Afternoon', label: 'Cave of the Winds entry 💦' },
        { time: '6:00 PM', label: 'Hotel check-in (one block from the Falls) 🏨' },
        { time: '10:00 PM', label: 'Illuminated falls + fireworks 🎆' },
        { time: 'Day 2 — 7:00 AM', label: 'Continental breakfast at the hotel ☕' },
        { time: 'Day 2 — 8:00 AM', label: 'Boat tour ⛴️' },
        { time: 'Day 2 — 9:30 AM', label: 'Balloon ride 🎈' },
        { time: 'Day 2 — 10:30 AM', label: 'Hotel checkout · visit to Fatima Shrine ⛪' },
        { time: 'Day 2 — 11:00 AM', label: 'Arrival at the outlet 🛍️' },
        { time: 'Day 2 — 2:00 PM', label: 'Departure to Boston 🚌' },
        { time: 'Day 2 — 5:30 PM', label: 'Rest stop at service area' },
        { time: 'Day 2 — ~10:00 PM', label: 'Approximate arrival in East Boston' },
      ],
      faq: [
        {
          q: 'How do I book my spot?',
          a: 'Message us on WhatsApp at +1 857-389-9523. To secure your spot you only need 50% of the tour price. The remaining balance is due one week before departure.',
        },
        {
          q: 'Is the hotel shared?',
          a: 'We offer shared room or private room options, depending on the number of people and the package chosen. If you want a private room for two, there is a supplement of +$55/person.',
        },
      ],
      addons: [
        { name: '💦 Cave of the Winds', price: 23, originalPrice: 28 },
        { name: '🎈 Balloon ride', price: 47, originalPrice: 72 },
      ],
    },
  },
  {
    id: 'nyc-completa',
    slug: 'nueva-york-completa',
    image: '/images/tours/nyc-completa.jpg',
    imageAlt: {
      es: 'Estatua de la Libertad, Nueva York',
      en: 'Statue of Liberty, New York City',
    },
    gallery: [
      '/images/tours/nyc-completa-g01.jpg',
      '/images/tours/nyc-completa-g02.jpg',
      '/images/tours/nyc-completa-g03.jpg',
      '/images/tours/nyc-completa-g04.jpg',
      '/images/tours/nyc-completa-g05.jpg',
      '/images/tours/nyc-completa-g06.jpg',
      '/images/tours/nyc-completa-g07.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour Nueva York – Experiencia Completa. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the New York Complete Experience tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-14',
      '2026-08-01',
      '2026-08-22',
    ],
    es: {
      name: 'Nueva York – Experiencia Completa',
      tagline: 'Los íconos de NYC en un solo día',
      description:
        'El tour más completo de Nueva York: Ferry a la Estatua de la Libertad, el World Trade Center, Times Square y más.',
      includes: [
        '🗽 Ferry e ingreso a la Isla de la Estatua de la Libertad',
        '🏛️ World Trade Center (Memorial del 9/11)',
        '🐂 Toro de Wall Street · Rockefeller Center · Catedral de San Patricio',
        '⭐ Times Square',
        '🥪 Almuerzo tipo picnic incluido',
        '🗺️ Guía en español · tour guiado en español',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 6:00 AM · Regreso 11:30 PM',
      price: '$275 USD/persona',
      duration: '1 día',
      departure: '6:00 AM — Walgreens East Boston, MA',
      return: '11:30 PM',
      itinerary: [
        { time: '6:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '9:00 AM', label: 'Parada para desayuno en área de servicio ☕' },
        { time: '10:30 AM', label: 'Llegada a Lower Manhattan' },
        { time: '11:00 AM', label: 'Ingreso al ferry hacia la Estatua de la Libertad 🗽' },
        { time: '1:00 PM', label: 'Almuerzo 🥪' },
        { time: '2:00 PM', label: 'Inicio del recorrido: Toro de Wall Street · World Trade Center · Torre de la Libertad 🐂' },
        { time: '3:30 PM', label: 'Oculus Mall 🏛️' },
        { time: '4:30 PM', label: 'Recorrido por Midtown: Quinta Avenida · Rockefeller Center · Catedral de San Patricio' },
        { time: '6:00 PM', label: 'Recorrido libre en Times Square ⭐' },
        { time: '8:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~11:30 PM', label: 'Llegada aproximada a East Boston' },
      ],
      faq: [
        {
          q: '¿Cuántos cupos hay disponibles?',
          a: 'Este tour tiene un máximo de 13 personas. Esto garantiza una experiencia personalizada y atención directa del guía. ¡Reserva con anticipación!',
        },
        {
          q: '¿Qué pasa si llueve?',
          a: 'El tour sale igualmente en caso de lluvia leve. En caso de mal tiempo severo, te contactamos con anticipación para reprogramar sin costo adicional.',
        },
        {
          q: '¿Cuándo debo reservar?',
          a: 'Recibimos reservas hasta el momento de agotar la disponibilidad de cada salida. Escríbenos por WhatsApp para verificar disponibilidad.',
        },
      ],
    },
    en: {
      name: 'New York – Complete Experience',
      tagline: 'NYC\'s most iconic spots in one day',
      description:
        'The most complete New York City tour: Statue of Liberty ferry, World Trade Center, Times Square and more.',
      includes: [
        '🗽 Ferry and entry to Liberty Island',
        '🏛️ World Trade Center (9/11 Memorial)',
        '🐂 Charging Bull · Rockefeller Center · St. Patrick\'s Cathedral',
        '⭐ Times Square',
        '🥪 Picnic-style lunch included',
        '🗺️ Spanish-speaking guide · tour in Spanish',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 6:00 AM · Return 11:30 PM',
      price: '$275 USD/person',
      duration: '1 day',
      departure: '6:00 AM — Walgreens East Boston, MA',
      return: '11:30 PM',
      itinerary: [
        { time: '6:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '9:00 AM', label: 'Breakfast stop at a service area ☕' },
        { time: '10:30 AM', label: 'Arrival in Lower Manhattan' },
        { time: '11:00 AM', label: 'Ferry to the Statue of Liberty 🗽' },
        { time: '1:00 PM', label: 'Lunch 🥪' },
        { time: '2:00 PM', label: 'Tour begins: Charging Bull · World Trade Center · One World Trade 🐂' },
        { time: '3:30 PM', label: 'Oculus Mall 🏛️' },
        { time: '4:30 PM', label: 'Midtown tour: Fifth Avenue · Rockefeller Center · St. Patrick\'s Cathedral' },
        { time: '6:00 PM', label: 'Free time in Times Square ⭐' },
        { time: '8:00 PM', label: 'Departure back to Boston 🚌' },
        { time: '~11:30 PM', label: 'Approximate arrival in East Boston' },
      ],
      faq: [
        {
          q: 'How many spots are available?',
          a: 'This tour has a maximum of 13 people. This guarantees a personalized experience and direct attention from the guide. Book early!',
        },
        {
          q: 'What happens if it rains?',
          a: 'The tour departs in light rain. In case of severe weather, we will contact you in advance to reschedule at no extra cost.',
        },
        {
          q: 'When should I book?',
          a: 'We accept reservations until each departure sells out. Message us on WhatsApp to check availability.',
        },
      ],
    },
  },
  {
    id: 'nyc-vip',
    slug: 'nueva-york-vip',
    image: '/images/tours/nyc-vip.jpg',
    imageAlt: {
      es: 'Manhattan desde mirador, Nueva York VIP',
      en: 'Manhattan skyline from observation deck, NYC VIP',
    },
    gallery: [
      '/images/tours/nyc-vip-g01.jpg',
      '/images/tours/nyc-vip-g02.jpg',
      '/images/tours/nyc-vip-g03.jpg',
      '/images/tours/nyc-vip-g04.jpg',
      '/images/tours/nyc-vip-g05.jpg',
      '/images/tours/nyc-vip-g06.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour New York VIP – Miradores & Íconos. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the New York VIP – Skylines & Icons tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-12','2026-07-26',
      '2026-08-09','2026-08-22','2026-08-23',
      '2026-09-06','2026-09-20',
    ],
    es: {
      name: 'New York VIP – Miradores & Íconos',
      tagline: 'Manhattan desde las alturas',
      description:
        'La experiencia premium de Nueva York: sube al Edge at Hudson Yards o SUMMIT One Vanderbilt y contempla Manhattan desde las alturas.',
      includes: [
        '🏙️ Ingreso a mirador premium (Edge o SUMMIT One Vanderbilt)',
        '🏛️ World Trade Center (Memorial del 9/11)',
        '🐂 Toro de Wall Street · Plaza Rockefeller',
        '🎄 St. Patrick\'s Cathedral · Times Square',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 6:00 AM · Regreso 11:30 PM',
      price: '$295 USD/persona',
      duration: '1 día',
      departure: '6:00 AM — Walgreens East Boston, MA',
      return: '11:30 PM',
      itinerary: [
        { time: '6:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '9:00 AM', label: 'Parada para desayuno en área de servicio ☕' },
        { time: '11:00 AM', label: 'Memorial 9/11 · Toro de Wall Street · Broadway · Mall Oculus 🐂' },
        { time: '1:00 PM', label: 'Almuerzo 🍽️' },
        { time: '3:00 PM', label: '5ª Avenida · Plaza Rockefeller · Catedral de San Patricio' },
        { time: '4:00 PM', label: 'Ingreso al mirador (Edge o SUMMIT) 🏙️' },
        { time: '6:30 PM', label: 'Llegada a Times Square ⭐' },
        { time: '8:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~11:30 PM', label: 'Llegada aproximada a East Boston' },
      ],
      faq: [
        {
          q: '¿Cuál mirador visitamos, Edge o SUMMIT?',
          a: 'Dependiendo de la disponibilidad y la fecha, visitamos Edge at Hudson Yards o SUMMIT One Vanderbilt. Ambos ofrecen vistas espectaculares de 360° de Manhattan.',
        },
        {
          q: '¿El ingreso al mirador está incluido en el precio?',
          a: 'Sí, el ticket de entrada al mirador está incluido en el precio del tour.',
        },
        {
          q: '¿Hay suplemento en temporada navideña?',
          a: 'En diciembre y enero los precios pueden variar por el árbol de Navidad del Rockefeller y mayor demanda. Consulta disponibilidad por WhatsApp.',
        },
      ],
    },
    en: {
      name: 'New York VIP – Skylines & Icons',
      tagline: 'Manhattan from above',
      description:
        'The premium New York City experience: ascend Edge at Hudson Yards or SUMMIT One Vanderbilt and take in Manhattan from above.',
      includes: [
        '🏙️ Premium observation deck (Edge or SUMMIT One Vanderbilt)',
        '🏛️ World Trade Center (9/11 Memorial)',
        '🐂 Charging Bull · Rockefeller Center',
        '🎄 St. Patrick\'s Cathedral · Times Square',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 6:00 AM · Return 11:30 PM',
      price: '$295 USD/person',
      duration: '1 day',
      departure: '6:00 AM — Walgreens East Boston, MA',
      return: '11:30 PM',
      itinerary: [
        { time: '6:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '9:00 AM', label: 'Breakfast stop at a service area ☕' },
        { time: '11:00 AM', label: '9/11 Memorial · Charging Bull · Broadway · Oculus Mall 🐂' },
        { time: '1:00 PM', label: 'Lunch 🍽️' },
        { time: '3:00 PM', label: 'Fifth Avenue · Rockefeller Plaza · St. Patrick\'s Cathedral' },
        { time: '4:00 PM', label: 'Observation deck entry (Edge or SUMMIT) 🏙️' },
        { time: '6:30 PM', label: 'Arrival at Times Square ⭐' },
        { time: '8:00 PM', label: 'Departure back to Boston 🚌' },
        { time: '~11:30 PM', label: 'Approximate arrival in East Boston' },
      ],
      faq: [
        {
          q: 'Which observation deck do we visit, Edge or SUMMIT?',
          a: 'Depending on availability and date, we visit Edge at Hudson Yards or SUMMIT One Vanderbilt. Both offer spectacular 360° views of Manhattan.',
        },
        {
          q: 'Is the observation deck ticket included in the price?',
          a: 'Yes, the observation deck entry ticket is included in the tour price.',
        },
        {
          q: 'Is there a surcharge during the holiday season?',
          a: 'In December and January prices may vary due to the Rockefeller Christmas tree and higher demand. Check availability via WhatsApp.',
        },
      ],
    },
  },
  {
    id: 'atlantic-city',
    slug: 'atlantic-city-philadelphia',
    image: '/images/tours/atlantic-city.jpg',
    imageAlt: {
      es: 'Atlantic City boardwalk y Philadelphia',
      en: 'Atlantic City boardwalk and Philadelphia',
    },
    gallery: [
      '/images/tours/atlantic-city-g01.jpg',
      '/images/tours/atlantic-city-g02.jpg',
      '/images/tours/atlantic-city-g03.jpg',
      '/images/tours/atlantic-city-g04.jpg',
      '/images/tours/atlantic-city-g05.jpg',
      '/images/tours/atlantic-city-g06.jpg',
      '/images/tours/atlantic-city-g07.jpg',
      '/images/tours/atlantic-city-g08.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour Atlantic City & Philadelphia. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Atlantic City & Philadelphia tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: ['2026-08-09'],
    es: {
      name: 'Atlantic City & Philadelphia',
      tagline: 'Playa, casino e historia en 2 días',
      description:
        'Combina la emoción del casino y la playa de Atlantic City con la historia viva de Philadelphia: la Campana de la Libertad y las escalinatas de Rocky.',
      includes: [
        '🏨 1 noche en hotel-casino en Atlantic City',
        '🚁 Playa, boardwalk y opción de paseo en helicóptero',
        '🍽️ Almuerzo buffet en Philadelphia incluido',
        '🗺️ Guía en español · tour guiado en español',
        '🔔 Philadelphia: Liberty Bell, Betsy Ross House, Rocky steps, centro histórico',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 4:00 AM · Regreso 10:00 PM (día siguiente)',
      price: '$420 USD/persona',
      duration: '2 días / 1 noche',
      departure: '4:00 AM — Walgreens East Boston, MA',
      return: '10:00 PM (día siguiente)',
      itinerary: [
        { time: '4:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '8:00 AM', label: 'Desayuno en área de servicio ☕' },
        { time: '9:30 AM', label: 'Llegada a Philadelphia' },
        { time: '10:00 AM', label: 'Campana de la Libertad · Betsy Ross House · centro histórico · escalones de Rocky (Museo de Arte) 🔔' },
        { time: '1:00 PM', label: 'Almuerzo buffet en Philadelphia 🍽️' },
        { time: '2:30 PM', label: 'Salida hacia Atlantic City 🚌' },
        { time: '4:00 PM', label: 'Llegada a Atlantic City: casino resort, helicóptero, malecón, atracciones, playa 🎰' },
        { time: 'Noche', label: 'Hotel-casino en Atlantic City 🏨' },
        { time: 'Día 2 — 11:00 AM', label: 'Checkout del hotel' },
        { time: 'Día 2 — 12:00 PM', label: 'Outlets 🛍️' },
        { time: 'Día 2 — 2:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: 'Día 2 — ~10:00 PM', label: 'Llegada a East Boston' },
      ],
      faq: [
        {
          q: '¿Puedo llevar menores de edad al casino?',
          a: 'El hospedaje es en un hotel-casino. Los menores de edad pueden alojarse pero no tienen acceso al área de juegos. Las playas y el boardwalk son aptos para toda la familia.',
        },
        {
          q: '¿El casino está incluido?',
          a: 'El hotel es en un complejo casino pero el juego no está incluido ni es obligatorio. El tour se enfoca en la playa, el boardwalk y Philadelphia.',
        },
        {
          q: '¿El cuarto de hotel es privado?',
          a: 'El cuarto incluye camas para todos los ocupantes. Si viajas en pareja o solo y deseas privacidad total, consúltanos por WhatsApp para opciones.',
        },
      ],
    },
    en: {
      name: 'Atlantic City & Philadelphia',
      tagline: 'Beach, casino, and history in 2 days',
      description:
        'Combine the excitement of Atlantic City\'s casino and beach with Philadelphia\'s living history: the Liberty Bell and the iconic Rocky steps.',
      includes: [
        '🏨 1 night at casino hotel in Atlantic City',
        '🚁 Beach, boardwalk, and optional helicopter ride',
        '🍽️ Buffet lunch in Philadelphia included',
        '🗺️ Spanish-speaking guide · tour in Spanish',
        '🔔 Philadelphia: Liberty Bell, Betsy Ross House, Rocky steps, historic district',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 4:00 AM · Return 10:00 PM (next day)',
      price: '$420 USD/person',
      duration: '2 days / 1 night',
      departure: '4:00 AM — Walgreens East Boston, MA',
      return: '10:00 PM (next day)',
      itinerary: [
        { time: '4:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '8:00 AM', label: 'Breakfast at a service area ☕' },
        { time: '9:30 AM', label: 'Arrival in Philadelphia' },
        { time: '10:00 AM', label: 'Liberty Bell · Betsy Ross House · historic district · Rocky Steps (Museum of Art) 🔔' },
        { time: '1:00 PM', label: 'Buffet lunch in Philadelphia 🍽️' },
        { time: '2:30 PM', label: 'Departure to Atlantic City 🚌' },
        { time: '4:00 PM', label: 'Arrival in Atlantic City: casino resort, helicopter rides, boardwalk, attractions, beach 🎰' },
        { time: 'Night', label: 'Casino hotel in Atlantic City 🏨' },
        { time: 'Day 2 — 11:00 AM', label: 'Hotel checkout' },
        { time: 'Day 2 — 12:00 PM', label: 'Outlets 🛍️' },
        { time: 'Day 2 — 2:00 PM', label: 'Departure back to Boston 🚌' },
        { time: 'Day 2 — ~10:00 PM', label: 'Arrival in East Boston' },
      ],
      faq: [
        {
          q: 'Can I bring minors to the casino?',
          a: 'The hotel is in a casino complex. Minors can stay at the hotel but do not have access to the gaming floor. The beaches and boardwalk are family-friendly.',
        },
        {
          q: 'Is casino gambling included?',
          a: 'The hotel is in a casino complex, but gambling is not included or required. The tour focuses on the beach, boardwalk, and Philadelphia.',
        },
        {
          q: 'Is the hotel room private?',
          a: 'The room includes beds for all occupants. If you\'re traveling as a couple or solo and want total privacy, contact us on WhatsApp for options.',
        },
      ],
    },
  },
  {
    id: 'washington',
    slug: 'washington-dc',
    image: '/images/tours/washington-lincoln.jpg',
    imageAlt: {
      es: 'Monumento a Lincoln en Washington D.C.',
      en: 'Lincoln Memorial in Washington D.C.',
    },
    gallery: [
      '/images/tours/washington-g01.jpg',
      '/images/tours/washington-g02.jpg',
      '/images/tours/washington-g03.jpg',
      '/images/tours/washington-g04.jpg',
      '/images/tours/washington-g05.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour a Washington D.C. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Washington D.C. tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: ['2026-09-05'],
    es: {
      name: 'Washington D.C.',
      tagline: 'El corazón de Estados Unidos',
      description:
        'Recorre la capital de la nación con un tour guiado de 4 horas con historiador local por los monumentos más emblemáticos. Los museos del Smithsonian son de entrada libre.',
      includes: [
        '🏨 1 noche de hotel',
        '🍽️ Almuerzo sábado y snacks',
        '🗺️ Tour guiado de 4 horas con historiador local',
        '🏛️ Casa Blanca · Capitolio · Monumento a Lincoln',
        '🌿 National Mall · Obelisco · Monumento WWII · Pentágono',
        '🆓 Tiempo libre para museos Smithsonian (entrada gratis)',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida sábado · Regreso domingo 11:00 PM',
      price: '$430 USD/persona',
      duration: '2 días / 1 noche',
      departure: 'Walgreens East Boston, MA',
      return: 'Domingo 11:00 PM',
      itinerary: [
        { time: '4:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '9:00 AM', label: 'Desayuno en área de servicio ☕' },
        { time: '12:30 PM', label: 'Llegada a Washington D.C. · visita al Museo Nacional del Aire y el Espacio 🚀' },
        { time: '6:00 PM', label: 'Check-in en hotel 🏨' },
        { time: '7:00 PM', label: 'Tiempo libre' },
        { time: 'Día 2 — 7:00 AM', label: 'Desayuno en el hotel ☕' },
        { time: 'Día 2 — 8:00 AM', label: 'Recorrido con guía historiador: Casa Blanca · National Mall · Capitolio · Obelisco · Monumento a Lincoln, entre otros 🏛️' },
        { time: 'Día 2 — 12:30 PM', label: 'Almuerzo en el mall 🍽️' },
        { time: 'Día 2 — 2:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: 'Día 2 — 11:00 PM', label: 'Llegada a East Boston' },
      ],
      faq: [
        {
          q: '¿Los museos Smithsonian son realmente gratis?',
          a: 'Sí, todos los museos del Smithsonian Institution en el National Mall tienen entrada completamente gratuita. Incluyen el Museo Nacional del Aire y el Espacio, el Museo Nacional de Historia Natural, el Museo Nacional de Historia Americana, entre otros.',
        },
        {
          q: '¿Podemos entrar a la Casa Blanca?',
          a: 'El tour incluye la vista exterior de la Casa Blanca. Para ingresar al interior se necesita una solicitud especial con meses de anticipación a través de un congresista. Esto no está incluido en el tour.',
        },
        {
          q: '¿Hay tiempo para el Pentágono?',
          a: 'Pasamos por fuera del Pentágono durante el recorrido. Las visitas al interior requieren reserva especial y no están incluidas.',
        },
        {
          q: '¿Cuántas personas van en este tour?',
          a: 'El grupo puede ser más grande que nuestros tours de NYC. Si deseas un tour más íntimo, consúltanos la disponibilidad del NYC VIP.',
        },
      ],
    },
    en: {
      name: 'Washington D.C.',
      tagline: 'The heart of the United States',
      description:
        'Tour the nation\'s capital with a 4-hour guided visit with a local historian to its most iconic monuments. Smithsonian museums are free admission.',
      includes: [
        '🏨 1 night hotel',
        '🍽️ Saturday lunch and snacks',
        '🗺️ 4-hour guided tour with local historian',
        '🏛️ White House · U.S. Capitol · Lincoln Memorial',
        '🌿 National Mall · Washington Monument · WWII Memorial · Pentagon',
        '🆓 Free time at Smithsonian museums (free admission)',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure Saturday · Return Sunday 11:00 PM',
      price: '$430 USD/person',
      duration: '2 days / 1 night',
      departure: 'Walgreens East Boston, MA',
      return: 'Sunday 11:00 PM',
      itinerary: [
        { time: '4:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '9:00 AM', label: 'Breakfast at a service area ☕' },
        { time: '12:30 PM', label: 'Arrival in Washington D.C. · visit to the National Air and Space Museum 🚀' },
        { time: '6:00 PM', label: 'Hotel check-in 🏨' },
        { time: '7:00 PM', label: 'Free time' },
        { time: 'Day 2 — 7:00 AM', label: 'Breakfast at the hotel ☕' },
        { time: 'Day 2 — 8:00 AM', label: 'Guided tour with local historian: White House · National Mall · Capitol · Washington Monument · Lincoln Memorial, among others 🏛️' },
        { time: 'Day 2 — 12:30 PM', label: 'Lunch at the mall 🍽️' },
        { time: 'Day 2 — 2:00 PM', label: 'Departure back to Boston 🚌' },
        { time: 'Day 2 — 11:00 PM', label: 'Arrival in East Boston' },
      ],
      faq: [
        {
          q: 'Are the Smithsonian museums really free?',
          a: 'Yes, all Smithsonian Institution museums on the National Mall have completely free admission. They include the National Air and Space Museum, National Museum of Natural History, National Museum of American History, among others.',
        },
        {
          q: 'Can we enter the White House?',
          a: 'The tour includes the exterior view of the White House. To enter the interior, a special request months in advance through a congressman is needed. This is not included in the tour.',
        },
        {
          q: 'Is there time for the Pentagon?',
          a: 'We pass by the Pentagon exterior during the tour. Interior visits require special reservations and are not included.',
        },
        {
          q: 'How many people go on this tour?',
          a: 'The group may be larger than our NYC tours. If you prefer a more intimate tour, ask us about NYC VIP availability.',
        },
      ],
    },
  },
  {
    id: 'templo-hindu',
    slug: 'templo-hindu-new-jersey',
    image: '/images/tours/templo-hindu.jpg',
    imageAlt: {
      es: 'Templo Hindú BAPS en Robbinsville, New Jersey',
      en: 'BAPS Hindu Temple in Robbinsville, New Jersey',
    },
    gallery: [
      '/images/tours/templo-hindu-g01.jpg',
      '/images/tours/templo-hindu-g02.jpg',
      '/images/tours/templo-hindu-g03.jpg',
      '/images/tours/templo-hindu-g04.jpg',
      '/images/tours/templo-hindu-g05.jpg',
      '/images/tours/templo-hindu-g06.jpg',
      '/images/tours/templo-hindu-g07.jpg',
      '/images/tours/templo-hindu-g08.jpg',
      '/images/tours/templo-hindu-g09.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour al Templo Hindú & New Jersey. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Hindu Temple & New Jersey tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: ['2026-07-11', '2026-07-17', '2026-08-16'],
    es: {
      name: 'Templo Hindú & New Jersey',
      tagline: 'Cultura, compras y vistas a Manhattan',
      description:
        'Visita el templo hindú más grande fuera de India (2.5 horas), el American Dream Mall para almorzar y comprar, y una parada panorámica con vista a Manhattan desde New Jersey.',
      includes: [
        '🕌 Visita al Templo Hindú BAPS (2.5 horas) — el más grande fuera de India',
        '🛍️ American Dream Mall (3 horas — almuerzo y compras)',
        '🌆 Parada panorámica con vista a Manhattan desde NJ',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 5:00 AM · Regreso 11:00 PM',
      price: '$190 USD/persona',
      duration: '1 día',
      departure: '5:00 AM — Walgreens East Boston, MA',
      return: '11:00 PM',
      itinerary: [
        { time: '5:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '8:00 AM', label: 'Desayuno en área de servicio ☕' },
        { time: '11:00 AM', label: 'Llegada e inicio de recorrido en el Templo Hindú BAPS 🕌' },
        { time: '1:30 PM', label: 'Salida hacia American Dream Mall 🛍️' },
        { time: '2:30 PM', label: 'Almuerzo 🍽️' },
        { time: '5:30 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '6:00 PM', label: 'Parada panorámica: vista a Manhattan desde New Jersey (20 min) 🌆' },
        { time: '~11:00 PM', label: 'Llegada a East Boston' },
      ],
      faq: [
        {
          q: '¿Hay restricciones de vestimenta en el Templo?',
          a: 'Sí, en el Templo Hindú BAPS se requiere vestimenta modesta: cubrir hombros y rodillas. Pueden prestar telas o pañuelos a la entrada. No se permiten zapatos dentro del templo.',
        },
        {
          q: '¿El American Dream Mall tiene restaurantes latinos?',
          a: 'El mall tiene una variada oferta de restaurantes (comida rápida y restaurantes formales). Hay opciones para todos los gustos aunque no específicamente latinos.',
        },
        {
          q: '¿Es necesario llevar efectivo?',
          a: 'La entrada al templo está incluida. Para comidas, compras y actividades opcionales del mall se recomienda llevar efectivo o tarjeta.',
        },
        {
          q: '¿Se puede entrar al templo a tomar fotos?',
          a: 'Hay áreas designadas para fotografías. Dentro de los santuarios principales no se permiten fotos. El guía te indicará dónde sí se puede fotografiar.',
        },
      ],
    },
    en: {
      name: 'Hindu Temple & New Jersey',
      tagline: 'Culture, shopping, and Manhattan views',
      description:
        'Visit the largest Hindu temple outside India (2.5 hours), American Dream Mall for lunch and shopping, and a scenic stop with panoramic views of Manhattan from New Jersey.',
      includes: [
        '🕌 BAPS Hindu Temple visit (2.5 hrs) — largest outside India',
        '🛍️ American Dream Mall (3 hrs — lunch and shopping)',
        '🌆 Scenic overlook with Manhattan skyline views from NJ',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 5:00 AM · Return 11:00 PM',
      price: '$190 USD/person',
      duration: '1 day',
      departure: '5:00 AM — Walgreens East Boston, MA',
      return: '11:00 PM',
      itinerary: [
        { time: '5:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '8:00 AM', label: 'Breakfast at a service area ☕' },
        { time: '11:00 AM', label: 'Arrival and start of tour at the BAPS Hindu Temple 🕌' },
        { time: '1:30 PM', label: 'Departure to American Dream Mall 🛍️' },
        { time: '2:30 PM', label: 'Lunch 🍽️' },
        { time: '5:30 PM', label: 'Departure back to Boston 🚌' },
        { time: '6:00 PM', label: 'Scenic stop: Manhattan views from New Jersey (20 min) 🌆' },
        { time: '~11:00 PM', label: 'Arrival in East Boston' },
      ],
      faq: [
        {
          q: 'Are there dress code requirements at the Temple?',
          a: 'Yes, the BAPS Hindu Temple requires modest dress: shoulders and knees must be covered. Shawls or fabric may be provided at the entrance. No shoes are allowed inside the temple.',
        },
        {
          q: 'What restaurants are at American Dream Mall?',
          a: 'The mall has a wide variety of restaurants (fast food and formal dining). There are options for all tastes, though not specifically Latino cuisine.',
        },
        {
          q: 'Do I need to bring cash?',
          a: 'Temple entry is included. For meals, shopping, and optional mall activities, it is recommended to bring cash or a card.',
        },
        {
          q: 'Can you take photos inside the temple?',
          a: 'There are designated areas for photography. Photos are not allowed inside the main sanctuaries. Your guide will indicate where photos are permitted.',
        },
      ],
    },
  },
  {
    id: 'cavernas',
    slug: 'cavernas-nueva-york',
    image: '/images/tours/cavernas.jpg',
    imageAlt: {
      es: 'Cavernas subterráneas en Nueva York',
      en: 'Underground caverns in New York',
    },
    gallery: [
      '/images/tours/cavernas-g02.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour a las Cavernas de NY. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the NY Caverns tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [],
    es: {
      name: 'Cavernas de NY',
      tagline: 'Aventura subterránea a 47 metros',
      description:
        'Una aventura única: desciende 47 metros bajo tierra para explorar cavernas milenarias con formaciones espectaculares.',
      includes: [
        '🎟️ Ticket de entrada a las cavernas',
        '🌑 Formaciones milenarias de estalactitas y estalagmitas',
        '🚐 Vans de 14 pasajeros con WiFi, TV, audio y bodega — ideal para familias, grupos de amigos e iglesias',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 7:00 AM · Regreso al atardecer',
      price: '$190 USD/persona',
      priceNote: 'Consultar fecha de próxima salida vía WhatsApp.',
      duration: '1 día',
      departure: '7:00 AM — Walgreens East Boston, MA',
      return: 'Al atardecer',
      itinerary: [
        { time: '7:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '~11:00 AM', label: 'Llegada a las cavernas en estado de New York' },
        { time: '11:30 AM', label: 'Descenso de 47 metros a las cavernas 🌑' },
        { time: '12:00 PM – 2:00 PM', label: 'Recorrido guiado por formaciones de estalactitas 🌟' },
        { time: '2:30 PM', label: 'Almuerzo en el área 🍽️' },
        { time: '3:30 PM', label: 'Tiempo libre · Área de picnic' },
        { time: '4:30 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~8:00 PM', label: 'Llegada a East Boston' },
      ],
      faq: [
        {
          q: '¿Cuándo es la próxima salida?',
          a: 'Las fechas de este tour se confirman según demanda. Escríbenos por WhatsApp al +1 857-389-9523 para saber la próxima fecha disponible.',
        },
        {
          q: '¿Es apto para niños y adultos mayores?',
          a: 'Las cavernas tienen caminos accesibles para la mayoría de edades. Se recomienda ropa cómoda y zapatos cerrados antideslizantes. Consulta si tienes necesidades especiales de movilidad.',
        },
        {
          q: '¿Qué temperatura hace dentro de las cavernas?',
          a: 'La temperatura dentro es de aproximadamente 10-12°C (50-54°F) todo el año. Se recomienda llevar una chaqueta ligera independientemente de la época.',
        },
        {
          q: '¿Hay tiempo para almorzar?',
          a: 'Hay un área de picnic cerca de la entrada. Puedes traer tu almuerzo o comprarlo en el lugar. No está incluido en el precio del tour.',
        },
      ],
    },
    en: {
      name: 'NY Caverns',
      tagline: 'Underground adventure 47 meters deep',
      description:
        'A unique adventure: descend 47 meters underground to explore ancient caves with spectacular formations.',
      includes: [
        '🎟️ Cave entry ticket',
        '🌑 Ancient stalactite and stalagmite formations',
        '🚐 14-passenger vans with WiFi, TV, audio, and storage — ideal for families, groups of friends, and church groups',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 7:00 AM · Return at sunset',
      price: '$190 USD/person',
      priceNote: 'Ask for next departure date via WhatsApp.',
      duration: '1 day',
      departure: '7:00 AM — Walgreens East Boston, MA',
      return: 'At sunset',
      itinerary: [
        { time: '7:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '~11:00 AM', label: 'Arrival at caverns in New York State' },
        { time: '11:30 AM', label: 'Descent 47 meters into the caverns 🌑' },
        { time: '12:00 PM – 2:00 PM', label: 'Guided tour through stalactite formations 🌟' },
        { time: '2:30 PM', label: 'Lunch in the area 🍽️' },
        { time: '3:30 PM', label: 'Free time · Picnic area' },
        { time: '4:30 PM', label: 'Departure back to Boston 🚌' },
        { time: '~8:00 PM', label: 'Arrival in East Boston' },
      ],
      faq: [
        {
          q: 'When is the next departure?',
          a: 'Dates for this tour are confirmed based on demand. Message us on WhatsApp at +1 857-389-9523 to find out the next available date.',
        },
        {
          q: 'Is it suitable for children and seniors?',
          a: 'The caverns have accessible paths suitable for most ages. Comfortable clothing and non-slip closed-toe shoes are recommended. Contact us if you have special mobility needs.',
        },
        {
          q: 'What is the temperature inside the caverns?',
          a: 'The temperature inside is approximately 10-12°C (50-54°F) year-round. A light jacket is recommended regardless of the season.',
        },
        {
          q: 'Is there time for lunch?',
          a: 'There is a picnic area near the entrance. You can bring your own lunch or buy food on-site. Lunch is not included in the tour price.',
        },
      ],
    },
  },
  {
    id: 'parques-familiares',
    slug: 'parques-familiares',
    image: '/images/tours/parks-familia.jpg',
    imageAlt: {
      es: 'Familia disfrutando un parque de diversiones',
      en: 'Family enjoying a theme park',
    },
    gallery: [
      '/images/tours/parks-sixflags.jpg',
      '/images/tours/parks-agua.jpg',
      '/images/tours/parks-zoo.jpg',
    ],
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, me interesan los tours a parques familiares (Six Flags, Water Country, Zoo). ¿Cuáles son las próximas fechas y precios?'),
      en: WA_BASE + encodeURIComponent('Hello, I\'m interested in the family parks tours (Six Flags, Water Country, Zoo). What are the upcoming dates and prices?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [],
    es: {
      name: 'Parques Familiares',
      tagline: 'Six Flags, Water Country, Zoo y más',
      description:
        'Diversión garantizada para toda la familia en los mejores parques de atracciones del noreste. Nosotros nos encargamos del transporte — tú solo disfruta. Cotiza tu salida personalizada por WhatsApp.',
      includes: [
        '🎢 Six Flags New England, Water Country y Zoo New England',
        '🚐 Transporte ida y vuelta en vans y buses modernos con WiFi, TV y audio',
        '👨‍👩‍👧‍👦 Plan ideal para familias, grupos de amigos e iglesias',
        '📅 Fechas flexibles — tú eliges el día del paseo',
      ],
      schedule: 'Salida coordinada según el parque y la temporada',
      price: 'Cotiza con nosotros',
      priceNote: 'El precio varía según el parque, la temporada y el tamaño del grupo. Escríbenos por WhatsApp para tu cotización personalizada.',
      duration: '1 día',
      departure: 'A coordinar — Walgreens East Boston, MA',
      return: 'Al cierre del parque',
      itinerary: [
        { time: 'A coordinar', label: 'Salida desde East Boston 🚌' },
        { time: 'Mañana', label: 'Llegada al parque seleccionado 🎢' },
        { time: 'Día libre', label: 'Atracciones, juegos y shows para toda la familia' },
        { time: 'Almuerzo', label: 'Comida dentro del parque 🍽️' },
        { time: 'Cierre', label: 'Salida de regreso a Boston 🚌' },
        { time: 'A coordinar', label: 'Llegada a East Boston' },
      ],
      faq: [
        {
          q: '¿Cómo funciona la cotización?',
          a: 'Cada parque y temporada tiene un precio distinto. Escríbenos por WhatsApp al +1 857-389-9523 indicando el parque que quieres, la fecha tentativa y el número de personas, y te enviamos tu cotización personalizada.',
        },
        {
          q: '¿Qué parques cubren?',
          a: 'Six Flags New England, Water Country, Zoo New England (Franklin Park Zoo & Stone Zoo), parques acuáticos y eventos de temporada. Si tienes otro parque en mente, consúltanos.',
        },
        {
          q: '¿Las entradas al parque están incluidas?',
          a: 'El transporte con JL Tours siempre está incluido. Las entradas al parque pueden gestionarse con nosotros o comprarse directamente. Te asesoramos para conseguir el mejor precio.',
        },
        {
          q: '¿Cuál es la salida mínima?',
          a: 'Trabajamos con grupos familiares pequeños y grandes. Consúltanos para grupos, iglesias o celebraciones especiales.',
        },
      ],
    },
    en: {
      name: 'Family Parks',
      tagline: 'Six Flags, Water Country, Zoo & more',
      description:
        'Guaranteed fun for the whole family at the best theme parks in the Northeast. We handle the transportation — you just enjoy. Get your custom quote on WhatsApp.',
      includes: [
        '🎢 Six Flags New England, Water Country, and Zoo New England',
        '🚐 Round-trip transportation in modern vans and buses with WiFi, TV, and audio',
        '👨‍👩‍👧‍👦 Perfect for families, groups of friends, and church groups',
        '📅 Flexible dates — you choose the day of the trip',
      ],
      schedule: 'Departure coordinated based on the park and season',
      price: 'Get a quote',
      priceNote: 'Price varies based on the park, season, and group size. Message us on WhatsApp for your personalized quote.',
      duration: '1 day',
      departure: 'To be coordinated — Walgreens East Boston, MA',
      return: 'At park closing',
      itinerary: [
        { time: 'TBD', label: 'Departure from East Boston 🚌' },
        { time: 'Morning', label: 'Arrival at the selected park 🎢' },
        { time: 'Free time', label: 'Rides, games, and shows for the whole family' },
        { time: 'Lunch', label: 'Food inside the park 🍽️' },
        { time: 'Closing', label: 'Departure back to Boston 🚌' },
        { time: 'TBD', label: 'Arrival in East Boston' },
      ],
      faq: [
        {
          q: 'How does the quote work?',
          a: 'Each park and season has a different price. Message us on WhatsApp at +1 857-389-9523 with the park you want, a tentative date, and the number of people, and we\'ll send you a personalized quote.',
        },
        {
          q: 'Which parks do you cover?',
          a: 'Six Flags New England, Water Country, Zoo New England (Franklin Park Zoo & Stone Zoo), water parks, and seasonal events. If you have another park in mind, just ask.',
        },
        {
          q: 'Are park tickets included?',
          a: 'Transportation with JL Tours is always included. Park tickets can be arranged through us or purchased directly. We\'ll help you find the best price.',
        },
        {
          q: 'What is the minimum group size?',
          a: 'We work with both small family groups and large ones. Ask us about groups, churches, or special celebrations.',
        },
      ],
    },
  },
];
