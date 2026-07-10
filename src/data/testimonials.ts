export interface Testimonial {
  name: string;
  location: string;
  text: string;
  tour: string;
}

export interface LocalizedTestimonial {
  es: Testimonial;
  en: Testimonial;
}

export const testimonials: LocalizedTestimonial[] = [
  {
    es: {
      name: 'Diana P.',
      location: 'Boston, MA',
      text: 'Woooo sin palabras, Dios les bendiga a todos, qué maravilla que Dios nos puso en esta aventura. ¡Gracias JL Tours!',
      tour: 'Atlantic City & Philadelphia',
    },
    en: {
      name: 'Diana P.',
      location: 'Boston, MA',
      text: 'Wooow, no words, God bless you all, what a wonderful thing that God put us on this adventure. Thank you JL Tours!',
      tour: 'Atlantic City & Philadelphia',
    },
  },
  {
    es: {
      name: 'Rosanna P.',
      location: 'Boston, MA',
      text: 'Gracias, agradecida con ustedes por todas sus atenciones maravillosas. Fue una muy bonita experiencia, nos hicieron sentir en familia. Espero volver a repetir, ¡gracias!',
      tour: 'Atlantic City & Philadelphia',
    },
    en: {
      name: 'Rosanna P.',
      location: 'Boston, MA',
      text: 'Thank you, so grateful to you all for your wonderful attention. It was a beautiful experience, you made us feel like family. I hope to come back again, thank you!',
      tour: 'Atlantic City & Philadelphia',
    },
  },
  {
    es: {
      name: 'María P.',
      location: 'Boston, MA',
      text: 'Gracias JL Tours por su calidez, profesionalismo y por hacer con cariño todo lo que hacen. Nos hicieron pasar una experiencia inolvidable para mi familia y yo. ¡Muchas bendiciones!',
      tour: 'Atlantic City & Philadelphia',
    },
    en: {
      name: 'María P.',
      location: 'Boston, MA',
      text: 'Thank you JL Tours for your warmth, professionalism, and for doing everything with so much care. You gave my family and me an unforgettable experience. Many blessings!',
      tour: 'Atlantic City & Philadelphia',
    },
  },
  {
    es: {
      name: 'Luz',
      location: 'Boston, MA',
      text: 'Los mejores. Fue un maravilloso placer compartir con todos, ojalá en otro viaje estemos todos otra vez. ¡Bendiciones!',
      tour: 'Atlantic City & Philadelphia',
    },
    en: {
      name: 'Luz',
      location: 'Boston, MA',
      text: 'The best. It was a wonderful pleasure sharing with everyone, hopefully we\'ll all be together again on another trip. Blessings!',
      tour: 'Atlantic City & Philadelphia',
    },
  },
  {
    es: {
      name: 'Viajero(a) JL Tours',
      location: 'Boston, MA',
      text: 'Mil gracias a JL Tours y su excelente equipo, nos hicieron sentir como en familia. Ha sido una experiencia maravillosa.',
      tour: 'Atlantic City & Philadelphia',
    },
    en: {
      name: 'JL Tours traveler',
      location: 'Boston, MA',
      text: 'A thousand thanks to JL Tours and their excellent team, they made us feel like family. It has been a wonderful experience.',
      tour: 'Atlantic City & Philadelphia',
    },
  },
  {
    es: {
      name: 'Familia viajera',
      location: 'Boston, MA',
      text: 'Solo me queda decir mil gracias por tan excelente servicio JL Tours. Fue un gusto compartir esta hermosa experiencia junto a todos este fin de semana.',
      tour: 'Atlantic City & Philadelphia',
    },
    en: {
      name: 'Traveling family',
      location: 'Boston, MA',
      text: 'All I can say is a thousand thanks for such excellent service, JL Tours. It was a pleasure sharing this beautiful experience with everyone this weekend.',
      tour: 'Atlantic City & Philadelphia',
    },
  },
];
