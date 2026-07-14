export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  source: 'google';
}

export const googleRating = { rating: 5.0, reviewCount: 13 };

export const testimonials: Testimonial[] = [
  {
    name: 'Juan Felipe Tabares Serna',
    rating: 5,
    text: 'Excelente atención desde el primer contacto por WhatsApp. Me ayudaron a organizar mi viaje y resolvieron todas mis dudas con mucha paciencia. Muy recomendados',
    date: '2026-07',
    source: 'google',
  },
  {
    name: 'yensy gonzalez',
    rating: 5,
    text: 'Fue espectacular lo mejor muchas gracias por ese servicio tan especial con todas las personas',
    date: '2026-07',
    source: 'google',
  },
  {
    name: 'alberto vargas hurtado',
    rating: 5,
    text: 'Excelente atención por las personas organizadoras cumplen con todo lo ofrecido, volveré muy pronto',
    date: '2026-07',
    source: 'google',
  },
  {
    name: 'Maria Cristina Ramírez Tascón',
    rating: 5,
    text: 'Espectacular, Servicio, cumplimiento súper recomendado',
    date: '2026-07',
    source: 'google',
  },
  {
    name: 'Felipe Zuluaga Arcila',
    rating: 5,
    text: 'Fantastica experiencia. Muy recomendado',
    date: '2026-07',
    source: 'google',
  },
  {
    name: 'Luisa Lopera',
    rating: 5,
    text: 'Excelente servicio, súper recomendados!',
    date: '2026-07',
    source: 'google',
  },
];
