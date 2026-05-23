export const siteConfig = {
  name: 'Instituto Celsius',
  tagline: 'Formando profesionales en oficios hace 18 años',
  description: 'Instituto de enseñanza con más de 100.000 egresados. Cursos de oficio y gestión, presenciales y 100% online en Mendoza, Argentina.',
  url: 'https://www.celsiusinstituto.com.ar',
  whatsapp: {
    number: '+542616795316',
    message: 'Hola! Vi su web y me interesa obtener más información sobre los cursos.',
  },
  email: {
    general: 'info@celsiusinstituto.com.ar',
    administration: 'administracion@celsiusinstituto.com.ar',
  },
  phone: '+54 261 679-5316',
  address: {
    street: 'Montecaseros 1169',
    city: 'Mendoza',
    province: 'Mendoza',
    postalCode: '5500',
    country: 'Argentina',
    full: 'Montecaseros 1169, Mendoza, Argentina 5500',
  },
  coordinates: {
    lat: -32.8894,
    lng: -68.8458,
  },
  hours: {
    weekdays: 'Lunes - Sábado',
    time: '9 - 19',
  },
  social: {
    instagram: 'https://www.instagram.com/institutocelsius.mendoza',
    facebook: 'https://www.facebook.com/institutocelsiusmendoza',
    whatsapp: 'https://wa.me/542616795316',
  },
  rating: {
    average: 4.8,
    count: 247,
  },
  badges: {
    years: 18,
    graduates: 100000,
  },
} as const;

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export function getWhatsAppLink(message?: string): string {
  const baseMessage = message || siteConfig.whatsapp.message;
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${siteConfig.whatsapp.number.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

export function getWhatsAppLinkWithContext(contextMessage: string): string {
  return getWhatsAppLink(contextMessage);
}