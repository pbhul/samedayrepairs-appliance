import { Metadata } from 'next';

export const defaultSEO: Metadata = {
  title: 'Same Day Repairs - #1 Appliance Repair Gainesville VA | Refrigerator & Dryer Experts',
  description: 'Same-day appliance repair in Gainesville VA. Expert refrigerator & dryer repair services. 25+ years experience. Call now for fast, reliable repairs!',
  metadataBase: new URL('https://samedayrepairs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samedayrepairs.com',
    siteName: 'Same Day Repairs',
    title: 'Same Day Repairs - #1 Appliance Repair Gainesville VA',
    description: 'Same-day appliance repair in Gainesville VA. Expert refrigerator & dryer repair services. 25+ years experience.',
    images: [
      {
        url: '/images/sameday-repairs-gainesville-va.jpg',
        width: 1200,
        height: 630,
        alt: 'Same Day Repairs - Appliance Repair Gainesville VA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Same Day Repairs - #1 Appliance Repair Gainesville VA',
    description: 'Same-day appliance repair in Gainesville VA. Expert refrigerator & dryer repair services.',
    creator: '@samedayrepairs',
    images: ['/images/sameday-repairs-twitter.jpg'],
  },
  keywords: ['appliance repair Gainesville VA', 'refrigerator repair', 'dryer repair', 'same day service', 'Haymarket', 'Bristow', 'Centreville', 'Manassas'],
  authors: [{ name: 'Same Day Repairs' }],
  creator: 'Same Day Repairs',
  publisher: 'Same Day Repairs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const createPageSEO = (
  title: string,
  description: string,
  path: string,
  additionalTags?: Partial<Metadata>
): Metadata => ({
  ...defaultSEO,
  title: `${title} | Same Day Repairs`,
  description,
  alternates: {
    canonical: path,
  },
  openGraph: {
    ...defaultSEO.openGraph,
    title,
    description,
    url: `https://samedayrepairs.com${path}`,
  },
  ...additionalTags,
});

// Service-specific SEO configs
export const servicePages = {
  refrigerator: {
    title: 'Refrigerator Repair Gainesville VA - Same Day Service',
    description: 'Expert refrigerator repair in Gainesville VA. Same-day service for all brands. Not cooling? Leaking? We fix it fast. Call now!',
    path: '/refrigerator-repair-gainesville-va',
    keywords: 'refrigerator repair Gainesville VA, fridge repair, same day refrigerator repair, not cooling, refrigerator leaking'
  },
  dryer: {
    title: 'Dryer Repair Gainesville VA - Fast Same Day Service',
    description: 'Professional dryer repair in Gainesville VA. Not heating? Not drying? Same-day service available. 25+ years experience. Call now!',
    path: '/dryer-repair-gainesville-va',
    keywords: 'dryer repair Gainesville VA, dryer not heating, dryer not drying, same day dryer repair'
  },
  washer: {
    title: 'Washer Repair Gainesville VA - Quick Professional Service',
    description: 'Expert washing machine repair in Gainesville VA. Not spinning? Leaking? Won\'t drain? Same-day repair service available.',
    path: '/washer-repair-gainesville-va',
    keywords: 'washer repair Gainesville VA, washing machine repair, washer not spinning, washer leaking'
  },
  dishwasher: {
    title: 'Dishwasher Repair Gainesville VA - Professional Service',
    description: 'Professional dishwasher repair in Gainesville VA. Not cleaning? Not draining? Same-day service for all major brands.',
    path: '/dishwasher-repair-gainesville-va',
    keywords: 'dishwasher repair Gainesville VA, dishwasher not cleaning, dishwasher not draining'
  }
};

// Location-specific SEO configs
export const locationPages = {
  haymarket: {
    title: 'Appliance Repair Haymarket VA - Same Day Service',
    description: 'Professional appliance repair in Haymarket VA. Refrigerator, dryer, washer repair. Same-day service available. Call now!',
    path: '/appliance-repair-haymarket-va'
  },
  bristow: {
    title: 'Appliance Repair Bristow VA - Fast Professional Service',
    description: 'Expert appliance repair in Bristow VA. Same-day refrigerator & dryer repair. 25+ years experience serving Northern Virginia.',
    path: '/appliance-repair-bristow-va'
  },
  centreville: {
    title: 'Appliance Repair Centreville VA - Same Day Service',
    description: 'Professional appliance repair in Centreville VA. Same-day service for refrigerators, dryers, washers & more. Call today!',
    path: '/appliance-repair-centreville-va'
  },
  manassas: {
    title: 'Appliance Repair Manassas VA - Expert Service',
    description: 'Expert appliance repair in Manassas VA. Same-day refrigerator & dryer repair. Fast, reliable service since 1998.',
    path: '/appliance-repair-manassas-va'
  }
};