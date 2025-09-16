import { NextResponse } from 'next/server'

export async function GET() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://samedayrepairs.com/#business',
    name: 'Same Day Repairs',
    alternateName: 'Same Day Repairs Gainesville VA',
    description: 'Professional same-day appliance repair services in Gainesville VA and Northern Virginia. Specializing in refrigerator, dryer, washer, and dishwasher repair with 10+ years of experience.',
    url: 'https://samedayrepairs.com',
    telephone: '+17035550123',
    email: 'info@samedayrepairs.com',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],

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

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00'
      }
    ],

    serviceArea: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 38.7959,
          longitude: -77.6131
        },
        geoRadius: '50000'
      }
    ],

    areaServed: [
      { '@type': 'City', name: 'Gainesville', addressRegion: 'VA' },
      { '@type': 'City', name: 'Haymarket', addressRegion: 'VA' },
      { '@type': 'City', name: 'Bristow', addressRegion: 'VA' },
      { '@type': 'City', name: 'Nokesville', addressRegion: 'VA' },
      { '@type': 'City', name: 'Warrenton', addressRegion: 'VA' },
      { '@type': 'City', name: 'Centreville', addressRegion: 'VA' },
      { '@type': 'City', name: 'Fairfax', addressRegion: 'VA' },
      { '@type': 'City', name: 'Manassas', addressRegion: 'VA' }
    ],

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Appliance Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://samedayrepairs.com/refrigerator-repair-gainesville-va',
            name: 'Refrigerator Repair',
            description: 'Same-day refrigerator repair service for all major brands',
            provider: { '@id': 'https://samedayrepairs.com/#business' }
          },
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          priceRange: '$89-$299'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://samedayrepairs.com/dryer-repair-gainesville-va',
            name: 'Dryer Repair',
            description: 'Professional dryer repair service with same-day availability',
            provider: { '@id': 'https://samedayrepairs.com/#business' }
          },
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          priceRange: '$79-$249'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://samedayrepairs.com/washer-repair-gainesville-va',
            name: 'Washer Repair',
            description: 'Expert washing machine repair with quick diagnosis',
            provider: { '@id': 'https://samedayrepairs.com/#business' }
          },
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          priceRange: '$99-$279'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': 'https://samedayrepairs.com/dishwasher-repair-gainesville-va',
            name: 'Dishwasher Repair',
            description: 'Professional dishwasher repair for all major brands',
            provider: { '@id': 'https://samedayrepairs.com/#business' }
          },
          availability: 'https://schema.org/InStock',
          priceCurrency: 'USD',
          priceRange: '$89-$259'
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

    sameAs: [
      'https://www.facebook.com/samedayrepairs',
      'https://www.yelp.com/biz/same-day-repairs-gainesville',
      'https://www.google.com/maps/place/same-day-repairs',
      'https://www.bbb.org/us/va/gainesville/profile/appliance-repair/same-day-repairs'
    ],

    logo: {
      '@type': 'ImageObject',
      url: 'https://samedayrepairs.com/images/logo.png',
      width: 300,
      height: 100
    },

    image: [
      {
        '@type': 'ImageObject',
        url: 'https://samedayrepairs.com/images/refrigerator-repair-gainesville-va.jpg',
        width: 800,
        height: 600,
        caption: 'Refrigerator repair service in Gainesville VA'
      },
      {
        '@type': 'ImageObject',
        url: 'https://samedayrepairs.com/images/dryer-repair-gainesville-va.jpg',
        width: 800,
        height: 600,
        caption: 'Professional dryer repair in Gainesville VA'
      }
    ]
  }

  return NextResponse.json(businessSchema, {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200'
    }
  })
}