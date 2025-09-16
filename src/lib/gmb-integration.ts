// Google My Business Integration Schema
export const gmbBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://samedayrepairs.com/#localbusiness',
  name: 'Same Day Repairs',
  alternateName: 'Same Day Repairs Gainesville VA',
  description: 'Professional same-day appliance repair services in Gainesville VA and surrounding areas. Expert refrigerator, dryer, washer, and dishwasher repair with 10+ years of experience.',

  // Essential business information
  url: 'https://samedayrepairs.com',
  telephone: '+1-703-555-0123',
  email: 'info@samedayrepairs.com',

  // Address information for local SEO
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Gainesville',
    addressRegion: 'VA',
    postalCode: '20155',
    addressCountry: 'US'
  },

  // Geolocation for map placement
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7959,
    longitude: -77.6131
  },

  // Business hours
  openingHours: [
    'Mo-Fr 08:00-18:00',
    'Sa 09:00-17:00'
  ],

  // Service area definition
  areaServed: [
    {
      '@type': 'City',
      name: 'Gainesville',
      addressRegion: 'VA',
      addressCountry: 'US'
    },
    {
      '@type': 'City',
      name: 'Haymarket',
      addressRegion: 'VA',
      addressCountry: 'US'
    },
    {
      '@type': 'City',
      name: 'Bristow',
      addressRegion: 'VA',
      addressCountry: 'US'
    },
    {
      '@type': 'City',
      name: 'Centreville',
      addressRegion: 'VA',
      addressCountry: 'US'
    },
    {
      '@type': 'City',
      name: 'Manassas',
      addressRegion: 'VA',
      addressCountry: 'US'
    },
    {
      '@type': 'City',
      name: 'Fairfax',
      addressRegion: 'VA',
      addressCountry: 'US'
    }
  ],

  // Business categories for GMB
  additionalType: [
    'https://schema.org/HomeAndConstructionBusiness',
    'https://schema.org/RepairShop'
  ],

  // Services offered
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Refrigerator Repair',
        serviceType: 'Appliance Repair'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Dryer Repair',
        serviceType: 'Appliance Repair'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Washer Repair',
        serviceType: 'Appliance Repair'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Dishwasher Repair',
        serviceType: 'Appliance Repair'
      }
    }
  ],

  // Reviews and ratings
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 150,
    bestRating: 5,
    worstRating: 1
  },

  // Payment methods
  paymentAccepted: ['Cash', 'Credit Card', 'Check'],
  currenciesAccepted: 'USD',
  priceRange: '$$',

  // Business logo and images
  logo: {
    '@type': 'ImageObject',
    url: 'https://samedayrepairs.com/images/logo.png',
    width: 300,
    height: 100
  },

  // Social media profiles
  sameAs: [
    'https://www.facebook.com/samedayrepairs',
    'https://www.yelp.com/biz/same-day-repairs-gainesville',
    'https://www.google.com/maps/place/same-day-repairs',
    'https://www.bbb.org/us/va/gainesville/profile/appliance-repair/same-day-repairs'
  ]
}

// Citation data for local directories
export const citationData = {
  businessName: 'Same Day Repairs',
  address: '123 Main Street, Gainesville, VA 20155',
  phone: '(703) 555-0123',
  website: 'https://samedayrepairs.com',
  description: 'Professional same-day appliance repair services in Gainesville VA and Northern Virginia. Expert refrigerator, dryer, washer, and dishwasher repair.',
  categories: [
    'Appliance Repair Service',
    'Refrigerator Repair Service',
    'Dryer Repair Service',
    'Home Appliance Repair'
  ],
  keywords: [
    'appliance repair Gainesville VA',
    'refrigerator repair Gainesville VA',
    'dryer repair Gainesville VA',
    'same day appliance repair',
    'Northern Virginia appliance repair'
  ]
}

// NAP (Name, Address, Phone) consistency data
export const napData = {
  name: 'Same Day Repairs',
  address: {
    street: '123 Main Street',
    city: 'Gainesville',
    state: 'VA',
    zip: '20155',
    full: '123 Main Street, Gainesville, VA 20155'
  },
  phone: '(703) 555-0123',
  phoneFormatted: '+1-703-555-0123',
  phoneClean: '7035550123'
}