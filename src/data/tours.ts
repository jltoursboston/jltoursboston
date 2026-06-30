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
        '🗺️ Guía permanente en español',
      ],
      schedule: 'Salida 4:00 AM · Regreso 10:00 PM (día siguiente)',
      price: '$410 USD/persona',
      priceNote: 'Cuarto privado para pareja: +$55/persona. Reserva con 50%.',
      duration: '2 días / 1 noche',
      capacity: 'Cuartos compartidos (3+ personas)',
      departure: '4:00 AM — East Boston, MA',
      return: '10:00 PM del día siguiente',
      itinerary: [
        { time: '4:00 AM', label: 'Salida desde East Boston' },
        { time: '~7:00 AM', label: 'Parada de descanso en ruta ⛰️' },
        { time: '~12:30 PM', label: 'Llegada a las Cataratas del Niágara' },
        { time: 'Tarde', label: 'Tour en barco · Cueva de los Vientos · Parque Nacional 🏞️' },
        { time: '10:00 PM', label: 'Cataratas iluminadas + show de fuegos 🎆' },
        { time: 'Noche', label: 'Check-in en hotel (a una cuadra de las cataratas) 🏨' },
        { time: 'Día 2 — 8:00 AM', label: 'Desayuno continental en el hotel ☕' },
        { time: 'Día 2 — 10:00 AM', label: 'Basílica de Fátima y Outlets 🛍️' },
        { time: 'Día 2 — 4:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: 'Día 2 — ~10:00 PM', label: 'Llegada aproximada a East Boston' },
      ],
      faq: [
        {
          q: '¿Qué documentos necesito para el tour?',
          a: 'Solo necesitas una identificación válida (pasaporte, licencia de conducir o ID estatal). Para cruzar al lado canadiense de las cataratas se requiere pasaporte vigente.',
        },
        {
          q: '¿El tour en barco (Maid of the Mist) está incluido?',
          a: 'No está incluido en el precio base, pero lo ofrecemos como actividad opcional por $25/persona (precio regular $31.50). Puedes pagarlo en efectivo el día del tour.',
        },
        {
          q: '¿Cómo reservo mi lugar?',
          a: 'Escríbenos por WhatsApp al +1 857-389-9523. Para asegurar tu cupo solo necesitas el 50% del valor del tour. El saldo restante se paga antes o el día de la salida.',
        },
        {
          q: '¿El hotel es compartido?',
          a: 'Los cuartos son compartidos entre 3 o más personas del mismo grupo. Si deseas cuarto privado para pareja, hay un suplemento de +$55/persona.',
        },
      ],
      addons: [
        { name: '⛴️ Maid of the Mist (tour en barco)', price: 25, originalPrice: 31.50 },
        { name: '💦 Cueva de los Vientos', price: 17, originalPrice: 23 },
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
        '🗺️ Permanent bilingual guide',
      ],
      schedule: 'Departure 4:00 AM · Return 10:00 PM (next day)',
      price: '$410 USD/person',
      priceNote: 'Private room for couples: +$55/person. 50% deposit to book.',
      duration: '2 days / 1 night',
      capacity: 'Shared rooms (3+ people)',
      departure: '4:00 AM — East Boston, MA',
      return: '10:00 PM next day',
      itinerary: [
        { time: '4:00 AM', label: 'Departure from East Boston' },
        { time: '~7:00 AM', label: 'Rest stop en route ⛰️' },
        { time: '~12:30 PM', label: 'Arrival at Niagara Falls' },
        { time: 'Afternoon', label: 'Boat tour · Cave of the Winds · National Park 🏞️' },
        { time: '10:00 PM', label: 'Illuminated falls + fireworks show 🎆' },
        { time: 'Night', label: 'Check-in at hotel (one block from the falls) 🏨' },
        { time: 'Day 2 — 8:00 AM', label: 'Continental breakfast at hotel ☕' },
        { time: 'Day 2 — 10:00 AM', label: 'Fatima Shrine and Outlets 🛍️' },
        { time: 'Day 2 — 4:00 PM', label: 'Departure back to Boston 🚌' },
        { time: 'Day 2 — ~10:00 PM', label: 'Approximate arrival in East Boston' },
      ],
      faq: [
        {
          q: 'What documents do I need for the tour?',
          a: 'You only need a valid ID (passport, driver\'s license, or state ID). To cross to the Canadian side of the falls, a valid passport is required.',
        },
        {
          q: 'Is the Maid of the Mist boat tour included?',
          a: 'It\'s not included in the base price, but we offer it as an optional activity for $25/person (regular price $31.50). You can pay in cash on the day of the tour.',
        },
        {
          q: 'How do I book my spot?',
          a: 'Message us on WhatsApp at +1 857-389-9523. To secure your spot you only need 50% of the tour price. The remaining balance is due before or on the day of departure.',
        },
        {
          q: 'Is the hotel shared?',
          a: 'Rooms are shared among 3 or more people in the same group. If you want a private room for two, there is a supplement of +$55/person.',
        },
      ],
      addons: [
        { name: '⛴️ Maid of the Mist (boat tour)', price: 25, originalPrice: 31.50 },
        { name: '💦 Cave of the Winds', price: 17, originalPrice: 23 },
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
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour Nueva York – Experiencia Completa. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the New York Complete Experience tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-05','2026-07-19',
      '2026-08-02','2026-08-16','2026-08-30',
      '2026-09-13','2026-09-27',
    ],
    es: {
      name: 'Nueva York – Experiencia Completa',
      tagline: 'Los íconos de NYC en un solo día',
      description:
        'El tour más completo de Nueva York: Ferry a la Estatua de la Libertad, el World Trade Center, Times Square y más. Solo 13 cupos disponibles para una experiencia personalizada.',
      includes: [
        '🗽 Ferry e ingreso a la Estatua de la Libertad',
        '🏛️ World Trade Center (Memorial del 9/11)',
        '🐂 Charging Bull · Rockefeller Center · St. Patrick\'s Cathedral',
        '⭐ Times Square',
        '🥪 Fiambre tipo picnic incluido',
        '🗺️ Guía permanente en español',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 6:00 AM · Regreso 11:00 PM',
      price: '$270 USD/persona',
      duration: '1 día',
      capacity: '⚡ Solo 13 cupos',
      departure: '6:00 AM — East Boston, MA',
      return: '11:00 PM',
      itinerary: [
        { time: '6:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '~9:30 AM', label: 'Llegada a Lower Manhattan' },
        { time: '10:00 AM', label: 'Ferry a la Estatua de la Libertad 🗽' },
        { time: '1:00 PM', label: 'World Trade Center & Memorial del 9/11 🏛️' },
        { time: '2:30 PM', label: 'Picnic + Charging Bull + Wall Street 🥪' },
        { time: '4:00 PM', label: 'Rockefeller Center · St. Patrick\'s Cathedral' },
        { time: '5:30 PM', label: 'Times Square ⭐' },
        { time: '7:00 PM', label: 'Tiempo libre en Midtown 🛍️' },
        { time: '9:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~11:00 PM', label: 'Llegada a East Boston' },
      ],
      faq: [
        {
          q: '¿Cuántos cupos hay disponibles?',
          a: 'Este tour tiene un máximo de 13 personas. Esto garantiza una experiencia personalizada y atención directa del guía. ¡Reserva con anticipación!',
        },
        {
          q: '¿El ingreso a la Corona de la Estatua de la Libertad está incluido?',
          a: 'El ferry y el ingreso a la isla están incluidos. El acceso a la Corona tiene un costo adicional de $24/persona (reserva con anticipación ya que los cupos son muy limitados).',
        },
        {
          q: '¿Qué pasa si llueve?',
          a: 'El tour sale igualmente en caso de lluvia leve. En caso de mal tiempo severo, te contactamos con anticipación para reprogramar sin costo adicional.',
        },
        {
          q: '¿Cuándo debo reservar?',
          a: 'Recomendamos reservar con al menos 1 semana de anticipación por los cupos limitados. Escríbenos por WhatsApp para verificar disponibilidad.',
        },
      ],
    },
    en: {
      name: 'New York – Complete Experience',
      tagline: 'NYC\'s most iconic spots in one day',
      description:
        'The most complete New York City tour: Statue of Liberty ferry, World Trade Center, Times Square and more. Only 13 spots available for a personalized experience.',
      includes: [
        '🗽 Ferry and entry to Statue of Liberty',
        '🏛️ World Trade Center (9/11 Memorial)',
        '🐂 Charging Bull · Rockefeller Center · St. Patrick\'s Cathedral',
        '⭐ Times Square',
        '🥪 Picnic-style lunch included',
        '🗺️ Permanent bilingual guide',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 6:00 AM · Return 11:00 PM',
      price: '$270 USD/person',
      duration: '1 day',
      capacity: '⚡ Only 13 spots',
      departure: '6:00 AM — East Boston, MA',
      return: '11:00 PM',
      itinerary: [
        { time: '6:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '~9:30 AM', label: 'Arrival in Lower Manhattan' },
        { time: '10:00 AM', label: 'Statue of Liberty ferry 🗽' },
        { time: '1:00 PM', label: 'World Trade Center & 9/11 Memorial 🏛️' },
        { time: '2:30 PM', label: 'Picnic + Charging Bull + Wall Street 🥪' },
        { time: '4:00 PM', label: 'Rockefeller Center · St. Patrick\'s Cathedral' },
        { time: '5:30 PM', label: 'Times Square ⭐' },
        { time: '7:00 PM', label: 'Free time in Midtown 🛍️' },
        { time: '9:00 PM', label: 'Departure back to Boston 🚌' },
        { time: '~11:00 PM', label: 'Arrival in East Boston' },
      ],
      faq: [
        {
          q: 'How many spots are available?',
          a: 'This tour has a maximum of 13 people. This guarantees a personalized experience and direct attention from the guide. Book early!',
        },
        {
          q: 'Is access to the Statue of Liberty Crown included?',
          a: 'The ferry and island entry are included. Crown access has an additional cost of $24/person (book in advance as spots are very limited).',
        },
        {
          q: 'What happens if it rains?',
          a: 'The tour departs in light rain. In case of severe weather, we will contact you in advance to reschedule at no extra cost.',
        },
        {
          q: 'When should I book?',
          a: 'We recommend booking at least 1 week in advance due to limited spots. Message us on WhatsApp to check availability.',
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
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour New York VIP – Miradores & Íconos. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the New York VIP – Skylines & Icons tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-12','2026-07-26',
      '2026-08-09','2026-08-23',
      '2026-09-06','2026-09-20',
    ],
    es: {
      name: 'New York VIP – Miradores & Íconos',
      tagline: 'Manhattan desde las alturas',
      description:
        'La experiencia premium de Nueva York: sube al Edge at Hudson Yards o SUMMIT One Vanderbilt y contempla Manhattan desde las alturas. Solo 13 cupos.',
      includes: [
        '🏙️ Ingreso a mirador premium (Edge o SUMMIT One Vanderbilt)',
        '🏛️ World Trade Center (Memorial del 9/11)',
        '🐂 Charging Bull · Rockefeller Center',
        '🎄 St. Patrick\'s Cathedral · Times Square',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 6:00 AM · Regreso 1:00 AM',
      price: '$280 USD/persona',
      duration: '1 día',
      capacity: '⚡ Solo 13 cupos',
      departure: '6:00 AM — East Boston, MA',
      return: '1:00 AM',
      itinerary: [
        { time: '6:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '~9:30 AM', label: 'Llegada a Lower Manhattan' },
        { time: '10:00 AM', label: 'World Trade Center & Memorial 🏛️' },
        { time: '11:30 AM', label: 'Charging Bull + Wall Street 🐂' },
        { time: '1:00 PM', label: 'Almuerzo libre en Midtown 🍽️' },
        { time: '3:00 PM', label: 'Rockefeller Center · St. Patrick\'s · Times Square ⭐' },
        { time: '5:00 PM', label: 'Ingreso al mirador (Edge o SUMMIT) 🏙️' },
        { time: '7:00 PM', label: 'Tiempo libre · Chelsea · High Line 🌆' },
        { time: '11:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~1:00 AM', label: 'Llegada a East Boston' },
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
          q: '¿Por qué el regreso es tan tarde?',
          a: 'Este tour incluye tiempo libre nocturno en Manhattan para disfrutar la ciudad iluminada, Chelsea Market, el High Line y la vida nocturna de NYC.',
        },
        {
          q: '¿Hay suplemento en temporada navideña?',
          a: 'En diciembre y enero los precios pueden variar por el árbol de Navidad del Rockefeller y mayor demanda. Consulta disponibilidad por WhatsApp.',
        },
      ],
      addons: [
        { name: '🏙️ Edge at Hudson Yards (upgrade)', price: 40, originalPrice: 55 },
        { name: '🌆 SUMMIT One Vanderbilt (upgrade)', price: 45, originalPrice: 60 },
      ],
    },
    en: {
      name: 'New York VIP – Skylines & Icons',
      tagline: 'Manhattan from above',
      description:
        'The premium New York City experience: ascend Edge at Hudson Yards or SUMMIT One Vanderbilt and take in Manhattan from above. Only 13 spots.',
      includes: [
        '🏙️ Premium observation deck (Edge or SUMMIT One Vanderbilt)',
        '🏛️ World Trade Center (9/11 Memorial)',
        '🐂 Charging Bull · Rockefeller Center',
        '🎄 St. Patrick\'s Cathedral · Times Square',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 6:00 AM · Return 1:00 AM',
      price: '$280 USD/person',
      duration: '1 day',
      capacity: '⚡ Only 13 spots',
      departure: '6:00 AM — East Boston, MA',
      return: '1:00 AM',
      itinerary: [
        { time: '6:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '~9:30 AM', label: 'Arrival in Lower Manhattan' },
        { time: '10:00 AM', label: 'World Trade Center & 9/11 Memorial 🏛️' },
        { time: '11:30 AM', label: 'Charging Bull + Wall Street 🐂' },
        { time: '1:00 PM', label: 'Free lunch in Midtown 🍽️' },
        { time: '3:00 PM', label: 'Rockefeller Center · St. Patrick\'s · Times Square ⭐' },
        { time: '5:00 PM', label: 'Observation deck entry (Edge or SUMMIT) 🏙️' },
        { time: '7:00 PM', label: 'Free time · Chelsea · High Line 🌆' },
        { time: '11:00 PM', label: 'Departure back to Boston 🚌' },
        { time: '~1:00 AM', label: 'Arrival in East Boston' },
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
          q: 'Why is the return so late?',
          a: 'This tour includes free evening time in Manhattan to enjoy the illuminated city, Chelsea Market, the High Line, and NYC nightlife.',
        },
        {
          q: 'Is there a surcharge during the holiday season?',
          a: 'In December and January prices may vary due to the Rockefeller Christmas tree and higher demand. Check availability via WhatsApp.',
        },
      ],
      addons: [
        { name: '🏙️ Edge at Hudson Yards (upgrade)', price: 40, originalPrice: 55 },
        { name: '🌆 SUMMIT One Vanderbilt (upgrade)', price: 45, originalPrice: 60 },
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
    whatsappMessage: {
      es: WA_BASE + encodeURIComponent('Hola, quiero reservar el tour Atlantic City & Philadelphia. ¿Podrían darme más información?'),
      en: WA_BASE + encodeURIComponent('Hello, I want to book the Atlantic City & Philadelphia tour. Could you give me more information?'),
    },
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-11','2026-07-25',
      '2026-08-08','2026-08-22',
      '2026-09-12','2026-09-26',
    ],
    es: {
      name: 'Atlantic City & Philadelphia',
      tagline: 'Playa, casino e historia en 2 días',
      description:
        'Combina la emoción del casino y la playa de Atlantic City con la historia viva de Philadelphia: la Campana de la Libertad y las escalinatas de Rocky.',
      includes: [
        '🏨 1 noche en hotel-casino en Atlantic City',
        '🏖️ Tiempo de playa en el boardwalk',
        '🍽️ Almuerzo sábado incluido',
        '🗺️ Guía permanente',
        '🔔 Philadelphia: Liberty Bell, Rocky steps, centro histórico',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida sábado 4:00 AM · Regreso domingo 10:00 PM',
      price: '$420 USD/persona',
      duration: '2 días / 1 noche',
      departure: '4:00 AM (sábado) — East Boston, MA',
      return: '10:00 PM (domingo)',
      itinerary: [
        { time: 'Sábado 4:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '~10:00 AM', label: 'Llegada a Atlantic City 🎰' },
        { time: '10:00 AM – 6:00 PM', label: 'Playa, boardwalk y casino 🏖️' },
        { time: '1:00 PM', label: 'Almuerzo incluido 🍽️' },
        { time: 'Noche', label: 'Hotel-casino en Atlantic City 🏨' },
        { time: 'Domingo 9:00 AM', label: 'Desayuno y checkout 🌅' },
        { time: '10:00 AM', label: 'Salida hacia Philadelphia 🚌' },
        { time: '~12:00 PM', label: 'Liberty Bell & Independence Hall 🔔' },
        { time: '2:00 PM', label: 'Philadelphia Museum of Art (Rocky Steps) 🥊' },
        { time: '4:00 PM', label: 'Centro histórico · Barrio italiano' },
        { time: '6:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~10:00 PM', label: 'Llegada a East Boston' },
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
          q: '¿Cuánto tiempo tenemos en Philadelphia?',
          a: 'Aproximadamente 6 horas en Philadelphia, suficiente para ver los principales monumentos históricos y caminar por el centro.',
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
        '🏖️ Beach time at the boardwalk',
        '🍽️ Saturday lunch included',
        '🗺️ Permanent guide',
        '🔔 Philadelphia: Liberty Bell, Rocky steps, historic district',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure Saturday 4:00 AM · Return Sunday 10:00 PM',
      price: '$420 USD/person',
      duration: '2 days / 1 night',
      departure: '4:00 AM (Saturday) — East Boston, MA',
      return: '10:00 PM (Sunday)',
      itinerary: [
        { time: 'Saturday 4:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '~10:00 AM', label: 'Arrival in Atlantic City 🎰' },
        { time: '10:00 AM – 6:00 PM', label: 'Beach, boardwalk, and casino 🏖️' },
        { time: '1:00 PM', label: 'Included lunch 🍽️' },
        { time: 'Night', label: 'Casino hotel in Atlantic City 🏨' },
        { time: 'Sunday 9:00 AM', label: 'Breakfast and checkout 🌅' },
        { time: '10:00 AM', label: 'Departure to Philadelphia 🚌' },
        { time: '~12:00 PM', label: 'Liberty Bell & Independence Hall 🔔' },
        { time: '2:00 PM', label: 'Philadelphia Museum of Art (Rocky Steps) 🥊' },
        { time: '4:00 PM', label: 'Historic district · Italian Market' },
        { time: '6:00 PM', label: 'Departure back to Boston 🚌' },
        { time: '~10:00 PM', label: 'Arrival in East Boston' },
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
          q: 'How much time do we have in Philadelphia?',
          a: 'Approximately 6 hours in Philadelphia, enough to see the main historic monuments and walk through downtown.',
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
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-18',
      '2026-08-01','2026-08-15',
      '2026-09-05','2026-09-19',
    ],
    es: {
      name: 'Washington D.C.',
      tagline: 'El corazón de Estados Unidos',
      description:
        'Recorre la capital de la nación con un tour guiado de 3 horas por los monumentos más emblemáticos. Los museos del Smithsonian son de entrada libre.',
      includes: [
        '🏨 1 noche de hotel',
        '🍽️ Almuerzo sábado + desayuno domingo',
        '🗺️ Tour guiado de 3 horas',
        '🏛️ Casa Blanca · Capitolio · Monumento a Lincoln',
        '🌿 National Mall · Obelisco · Monumento WWII · Pentágono',
        '🆓 Tiempo libre para museos Smithsonian (entrada gratis)',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida sábado · Regreso domingo 10:00 PM',
      price: '$430 USD/persona',
      duration: '2 días / 1 noche',
      departure: 'East Boston, MA',
      return: 'Domingo 10:00 PM',
      itinerary: [
        { time: 'Sábado — AM', label: 'Salida desde East Boston 🚌' },
        { time: '~12:00 PM', label: 'Llegada a Washington D.C.' },
        { time: 'Tarde', label: 'Almuerzo incluido 🍽️' },
        { time: '2:00 PM', label: 'Tour guiado 3h: Casa Blanca · Capitolio · Lincoln Memorial 🏛️' },
        { time: '5:00 PM', label: 'National Mall · Obelisco · Monumento WWII 🌿' },
        { time: '7:00 PM', label: 'Cena libre · Centro de D.C.' },
        { time: 'Noche', label: 'Hotel en Washington D.C. 🏨' },
        { time: 'Domingo 8:00 AM', label: 'Desayuno en el hotel ☕' },
        { time: '9:00 AM', label: 'Museos Smithsonian (entrada libre) 🆓' },
        { time: '2:00 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~10:00 PM', label: 'Llegada a East Boston' },
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
        'Tour the nation\'s capital with a 3-hour guided visit to its most iconic monuments. Smithsonian museums are free admission.',
      includes: [
        '🏨 1 night hotel',
        '🍽️ Saturday lunch + Sunday breakfast',
        '🗺️ 3-hour guided tour',
        '🏛️ White House · U.S. Capitol · Lincoln Memorial',
        '🌿 National Mall · Washington Monument · WWII Memorial · Pentagon',
        '🆓 Free time at Smithsonian museums (free admission)',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure Saturday · Return Sunday 10:00 PM',
      price: '$430 USD/person',
      duration: '2 days / 1 night',
      departure: 'East Boston, MA',
      return: 'Sunday 10:00 PM',
      itinerary: [
        { time: 'Saturday — AM', label: 'Departure from East Boston 🚌' },
        { time: '~12:00 PM', label: 'Arrival in Washington D.C.' },
        { time: 'Afternoon', label: 'Included lunch 🍽️' },
        { time: '2:00 PM', label: '3h guided tour: White House · Capitol · Lincoln Memorial 🏛️' },
        { time: '5:00 PM', label: 'National Mall · Washington Monument · WWII Memorial 🌿' },
        { time: '7:00 PM', label: 'Free dinner · D.C. center' },
        { time: 'Night', label: 'Hotel in Washington D.C. 🏨' },
        { time: 'Sunday 8:00 AM', label: 'Breakfast at the hotel ☕' },
        { time: '9:00 AM', label: 'Smithsonian museums (free admission) 🆓' },
        { time: '2:00 PM', label: 'Departure back to Boston 🚌' },
        { time: '~10:00 PM', label: 'Arrival in East Boston' },
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
    departurePoints: ['East Boston, MA'],
    nextDates: [
      '2026-07-05','2026-07-19',
      '2026-08-02','2026-08-16',
      '2026-09-06','2026-09-20',
    ],
    es: {
      name: 'Templo Hindú & New Jersey',
      tagline: 'Cultura, compras y vistas a Manhattan',
      description:
        'Visita el templo hindú más grande fuera de India (2.5 horas), el American Dream Mall para almorzar y comprar, y una parada panorámica con vista a Manhattan desde New Jersey.',
      includes: [
        '🕌 Visita al Templo Hindú BAPS (2.5 horas) — el más grande fuera de India',
        '🛍️ American Dream Mall (2 horas — almuerzo y compras)',
        '🌆 Parada panorámica con vista a Manhattan desde NJ',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 5:00 AM · Regreso 10:30 PM',
      price: '$190 USD/persona',
      duration: '1 día',
      departure: '5:00 AM — East Boston, MA',
      return: '10:30 PM',
      itinerary: [
        { time: '5:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '~9:00 AM', label: 'Llegada al Templo Hindú BAPS en Robbinsville, NJ 🕌' },
        { time: '9:00 AM – 11:30 AM', label: 'Recorrido por el Templo Hindú (2.5 horas)' },
        { time: '12:00 PM', label: 'American Dream Mall — almuerzo y compras 🛍️' },
        { time: '2:00 PM – 4:00 PM', label: 'Tiempo libre en el mall 🛒' },
        { time: '4:30 PM', label: 'Parada panorámica: vistas a Manhattan desde NJ 🌆' },
        { time: '5:30 PM', label: 'Salida de regreso a Boston 🚌' },
        { time: '~10:30 PM', label: 'Llegada a East Boston' },
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
        '🛍️ American Dream Mall (2 hrs — lunch and shopping)',
        '🌆 Scenic overlook with Manhattan skyline views from NJ',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 5:00 AM · Return 10:30 PM',
      price: '$190 USD/person',
      duration: '1 day',
      departure: '5:00 AM — East Boston, MA',
      return: '10:30 PM',
      itinerary: [
        { time: '5:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '~9:00 AM', label: 'Arrival at BAPS Hindu Temple in Robbinsville, NJ 🕌' },
        { time: '9:00 AM – 11:30 AM', label: 'Temple tour (2.5 hours)' },
        { time: '12:00 PM', label: 'American Dream Mall — lunch and shopping 🛍️' },
        { time: '2:00 PM – 4:00 PM', label: 'Free time at the mall 🛒' },
        { time: '4:30 PM', label: 'Scenic overlook: Manhattan views from NJ 🌆' },
        { time: '5:30 PM', label: 'Departure back to Boston 🚌' },
        { time: '~10:30 PM', label: 'Arrival in East Boston' },
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
    departurePoints: ['East Boston, MA'],
    nextDates: [],
    es: {
      name: 'Cavernas de NY',
      tagline: 'Aventura subterránea a 47 metros',
      description:
        'Una aventura única: desciende 47 metros bajo tierra para explorar cavernas milenarias con formaciones espectaculares y navegación subterránea en bote.',
      includes: [
        '🎟️ Ticket de entrada a las cavernas',
        '🌑 Formaciones milenarias de estalactitas y estalagmitas',
        '🚣 Navegación subterránea en bote',
        '🚌 Transporte ida y vuelta',
      ],
      schedule: 'Salida 7:00 AM · Regreso al atardecer',
      price: '$190 USD/persona',
      priceNote: 'Consultar fecha de próxima salida vía WhatsApp.',
      duration: '1 día',
      departure: '7:00 AM — East Boston, MA',
      return: 'Al atardecer',
      itinerary: [
        { time: '7:00 AM', label: 'Salida desde East Boston 🚌' },
        { time: '~11:00 AM', label: 'Llegada a las cavernas en estado de New York' },
        { time: '11:30 AM', label: 'Descenso de 47 metros a las cavernas 🌑' },
        { time: '12:00 PM – 2:00 PM', label: 'Recorrido guiado por formaciones de estalactitas 🌟' },
        { time: '2:30 PM', label: 'Navegación subterránea en bote 🚣' },
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
        'A unique adventure: descend 47 meters underground to explore ancient caves with spectacular formations and an underground boat ride.',
      includes: [
        '🎟️ Cave entry ticket',
        '🌑 Ancient stalactite and stalagmite formations',
        '🚣 Underground boat ride',
        '🚌 Round-trip transportation',
      ],
      schedule: 'Departure 7:00 AM · Return at sunset',
      price: '$190 USD/person',
      priceNote: 'Ask for next departure date via WhatsApp.',
      duration: '1 day',
      departure: '7:00 AM — East Boston, MA',
      return: 'At sunset',
      itinerary: [
        { time: '7:00 AM', label: 'Departure from East Boston 🚌' },
        { time: '~11:00 AM', label: 'Arrival at caverns in New York State' },
        { time: '11:30 AM', label: 'Descent 47 meters into the caverns 🌑' },
        { time: '12:00 PM – 2:00 PM', label: 'Guided tour through stalactite formations 🌟' },
        { time: '2:30 PM', label: 'Underground boat ride 🚣' },
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
