const withBase = (path: string) => `${(import.meta as any).env.BASE_URL}${path.replace(/^\//, '')}`;

export const IMAGES = {
  LOGO: withBase('images/logo.svg'),
  HERO_BANNER: withBase('images/hero_banner.jpeg'),
  HEINEKEN: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBovHQuvkEcgN_e49kHZWQiW8R2M9goDXtKirFzU5s3O9ytRbO-gcBmd4Ym5NduT8I9ZA1w6SUVW96dempzjY88qmlHZIwG_KoZ4K0QcRuAd9sejeLPM35luw9XmWVWBojOUipSZZHa4tdoYw9MJ8yzdR5-ABI6b8jvdhd6zfs1rh-M_lIVKUTDctzOmOYXbHJ2lYUT5OMhvUOBUVOl9feWGRxHR_4fBz-lJn4iENY_vaMAcgKiyEOKlGf5Uku9sm0j6swJ5bM0I9I',
  AMSTEL: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlWeLg3s9QoSJy3UwJUhYQVIOi_-Fp76Jh_TmJg-s0qziL87EIm8TzQoG9zjWg8D0OHHDacLyOhTlO4puHuMsnMarfi3l5ndHvUZyt2r1ZmYTeiJivZ9_RDwYEbrzBSlKaXwjWlPhAoJ9a-tRnODu-GzEdKKoQ4702gDVkggjGaKZoVKrI7FAWbB1Mllz-Pdl1c7rl3kd8a84Bx9_Su6mV8fp5JhxbNdlBZ25paUA3G4EnA-HbFkAglt1Wo9XzSO_iYpjP1vCmk2c',
  ORIGINAL: withBase('images/original.png'),
  SPATEN: withBase('images/spaten.png'),
  ABOUT_HERO: withBase('images/about_hero.jpeg'), // Adicione esta imagem
  MAP: withBase('images/map.png'), // Adicione esta imagem
};

export const CONTACT_INFO = {
  PHONE: '(11) 96404-2721,
  WHATSAPP: '(11) 96404-2721,
  EMAIL: 'contato@galpaocontinental.com.br',
  ADDRESS: 'Av. Francisco Etorre Pedro Mari, 555 - Taboão da Serra, SP'
};
