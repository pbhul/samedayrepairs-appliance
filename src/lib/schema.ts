import { Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, ImageObject } from 'schema-dts';

export const organizationSchema: Organization = {
  '@type': 'Organization',
  '@id': 'https://samedayrepairs.com/#organization',
  name: 'Same Day Repairs',
  alternateName: 'Sameday Repairs',
  url: 'https://samedayrepairs.com',
  logo: 'https://samedayrepairs.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-703-555-0123',
    contactType: 'customer service',
    areaServed: ['Gainesville', 'Haymarket', 'Bristow', 'Nokesville', 'Warrenton', 'Centreville', 'Fairfax', 'Manassas'],
    availableLanguage: 'English'
  },
  sameAs: [
    'https://www.facebook.com/samedayrepairs',
    'https://www.yelp.com/biz/same-day-repairs-gainesville',
    'https://www.google.com/maps/place/same-day-repairs'
  ]
};

export const localBusinessSchema: LocalBusiness = {
  '@type': 'LocalBusiness',
  '@id': 'https://samedayrepairs.com/#localbusiness',
  name: 'Same Day Repairs',
  description: 'Professional same-day appliance repair services in Gainesville VA and surrounding areas. Specializing in refrigerator and dryer repair with 25+ years of experience.',
  url: 'https://samedayrepairs.com',
  telephone: '+1-703-555-0123',
  email: 'info@samedayrepairs.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Gainesville',
    addressRegion: 'VA',
    postalCode: '20155',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.7959,
    longitude: -77.6131
  },
  openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-17:00',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  areaServed: [
    {
      '@type': 'City',
      name: 'Gainesville',
      '@id': 'https://www.wikidata.org/wiki/Q1016702'
    },
    {
      '@type': 'City',
      name: 'Haymarket'
    },
    {
      '@type': 'City',
      name: 'Bristow'
    },
    {
      '@type': 'City',
      name: 'Nokesville'
    },
    {
      '@type': 'City',
      name: 'Warrenton'
    },
    {
      '@type': 'City',
      name: 'Centreville'
    },
    {
      '@type': 'City',
      name: 'Fairfax'
    },
    {
      '@type': 'City',
      name: 'Manassas'
    }
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 38.7959,
      longitude: -77.6131
    },
    geoRadius: '50000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Refrigerator Repair',
          description: 'Same-day refrigerator repair service for all major brands'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dryer Repair',
          description: 'Professional dryer repair service with same-day availability'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 150,
    bestRating: 5,
    worstRating: 1
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah Johnson'
      },
      datePublished: '2024-01-15',
      description: 'Same Day Repairs fixed our refrigerator in Gainesville VA the same day we called. Excellent service and fair pricing.',
      name: 'Excellent Same Day Service',
      reviewRating: {
        '@type': 'Rating',
        bestRating: '5',
        ratingValue: '5',
        worstRating: '1'
      }
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Mike Davis'
      },
      datePublished: '2024-02-08',
      description: 'Professional dryer repair service in Haymarket VA. Technician was knowledgeable and fixed the issue quickly.',
      name: 'Professional and Quick',
      reviewRating: {
        '@type': 'Rating',
        bestRating: '5',
        ratingValue: '5',
        worstRating: '1'
      }
    }
  ]
};

export const refrigeratorServiceSchema: Service = {
  '@type': 'Service',
  '@id': 'https://samedayrepairs.com/refrigerator-repair-gainesville-va#service',
  name: 'Refrigerator Repair Gainesville VA',
  description: 'Expert same-day refrigerator repair service in Gainesville VA. We fix all brands including GE, Whirlpool, Samsung, LG, and more.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Same Day Repairs',
    url: 'https://samedayrepairs.com'
  },
  areaServed: [
    'Gainesville VA',
    'Haymarket VA',
    'Bristow VA',
    'Centreville VA',
    'Manassas VA'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Refrigerator Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Refrigerator Not Cooling Repair'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Refrigerator Leaking Repair'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ice Maker Repair'
        }
      }
    ]
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    price: '$89-$299'
  }
};

export const dryerServiceSchema: Service = {
  '@type': 'Service',
  '@id': 'https://samedayrepairs.com/dryer-repair-gainesville-va#service',
  name: 'Dryer Repair Gainesville VA',
  description: 'Professional same-day dryer repair service in Gainesville VA. We repair all major brands and models.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Same Day Repairs',
    url: 'https://samedayrepairs.com'
  },
  areaServed: [
    'Gainesville VA',
    'Haymarket VA',
    'Bristow VA',
    'Centreville VA',
    'Manassas VA'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dryer Repair Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dryer Not Heating Repair'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dryer Not Drying Repair'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dryer Maintenance'
        }
      }
    ]
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    price: '$79-$249'
  }
};

export const faqSchema: FAQPage = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide same-day appliance repair in Gainesville VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer same-day appliance repair service in Gainesville VA and surrounding areas including Haymarket, Bristow, Centreville, and Manassas. Call us before 2 PM for same-day service availability.'
      }
    },
    {
      '@type': 'Question',
      name: 'What appliance brands do you repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We repair all major appliance brands including GE, Whirlpool, Samsung, LG, Maytag, Kenmore, Frigidaire, Bosch, and many others. Our technicians are trained on all major brands and models.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does refrigerator repair cost in Gainesville VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refrigerator repair costs typically range from $89-$299 depending on the issue. We provide upfront pricing with no hidden fees. Our service call fee is applied toward the repair if you choose to proceed.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you offer emergency appliance repair services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide emergency appliance repair services, especially for refrigerators that have stopped cooling. We understand how urgent these situations can be and strive to provide same-day service whenever possible.'
      }
    }
  ]
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>): BreadcrumbList => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

// Enhanced Business Hours Schema
export const businessHoursSchema = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ],
  opens: '08:00',
  closes: '18:00'
};

export const weekendHoursSchema = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: 'Saturday',
  opens: '09:00',
  closes: '17:00'
};

// Emergency Service Schema
export const emergencyServiceSchema = {
  '@type': 'Service',
  '@id': 'https://samedayrepairs.com/#emergency-service',
  name: 'Emergency Appliance Repair',
  description: 'Emergency appliance repair service available for urgent refrigerator and critical appliance issues in Gainesville VA.',
  serviceType: 'Emergency Repair',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Same Day Repairs'
  },
  areaServed: ['Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Centreville VA', 'Manassas VA'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://samedayrepairs.com',
    servicePhone: '+1-703-555-0123',
    availableLanguage: 'English'
  }
};