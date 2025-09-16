import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'
import Link from 'next/link'

export const metadata: Metadata = createPageSEO(
  'Northern Virginia Appliance Repair - Same Day Service Available',
  'Professional appliance repair throughout Northern Virginia. Refrigerator, dryer, washer repair in Gainesville, Haymarket, Bristow, Manassas & more. Call (703) 555-0123!',
  '/northern-virginia-appliance-repair'
)

const cities = [
  {
    name: 'Gainesville VA',
    description: 'Same-day appliance repair service in Gainesville Virginia',
    href: '/gainesville-va-appliance-repair',
    population: '17,000+',
    highlight: true
  },
  {
    name: 'Haymarket VA',
    description: 'Professional appliance repair service in Haymarket Virginia',
    href: '/haymarket-va-appliance-repair',
    population: '2,000+',
    highlight: false
  },
  {
    name: 'Bristow VA',
    description: 'Expert appliance repair service in Bristow Virginia',
    href: '/bristow-va-appliance-repair',
    population: '29,000+',
    highlight: false
  },
  {
    name: 'Nokesville VA',
    description: 'Reliable appliance repair service in Nokesville Virginia',
    href: '/nokesville-va-appliance-repair',
    population: '1,300+',
    highlight: false
  },
  {
    name: 'Warrenton VA',
    description: 'Professional appliance repair service in Warrenton Virginia',
    href: '/warrenton-va-appliance-repair',
    population: '10,000+',
    highlight: false
  },
  {
    name: 'Centreville VA',
    description: 'Same-day appliance repair service in Centreville Virginia',
    href: '/centreville-va-appliance-repair',
    population: '75,000+',
    highlight: true
  },
  {
    name: 'Fairfax VA',
    description: 'Expert appliance repair service in Fairfax Virginia',
    href: '/fairfax-va-appliance-repair',
    population: '24,000+',
    highlight: true
  },
  {
    name: 'Manassas VA',
    description: 'Professional appliance repair service in Manassas Virginia',
    href: '/manassas-va-appliance-repair',
    population: '42,000+',
    highlight: true
  }
]

const services = [
  {
    name: 'Refrigerator Repair',
    icon: '❄️',
    description: 'Not cooling, leaking, or making noise? Same-day service available.',
    href: '/refrigerator-repair-gainesville-va'
  },
  {
    name: 'Dryer Repair',
    icon: '🌀',
    description: 'Not heating, not drying, or taking too long? Professional repair.',
    href: '/dryer-repair-gainesville-va'
  },
  {
    name: 'Washer Repair',
    icon: '🧺',
    description: 'Not spinning, leaking, or won\'t drain? Quick diagnosis.',
    href: '/washer-repair-gainesville-va'
  },
  {
    name: 'Dishwasher Repair',
    icon: '🍽️',
    description: 'Not cleaning, not draining, or strange noises? We can help.',
    href: '/dishwasher-repair-gainesville-va'
  }
]

const northernVirginiaFaqs = [
  {
    question: 'What areas in Northern Virginia do you serve for appliance repair?',
    answer: 'We provide comprehensive appliance repair services throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, Manassas, and surrounding areas. Our service area covers most of Prince William County and Fairfax County.'
  },
  {
    question: 'Do you offer same-day appliance repair throughout Northern Virginia?',
    answer: 'Yes, we offer same-day appliance repair service throughout our Northern Virginia service area when scheduling permits. We prioritize urgent repairs like refrigerators not cooling and dryers not heating.'
  },
  {
    question: 'What makes your Northern Virginia appliance repair service different?',
    answer: 'We specialize in residential appliance repair with 10+ years of local experience in Northern Virginia. Our technicians know the area well and carry common parts for faster repairs. We provide upfront pricing with no hidden fees.'
  },
  {
    question: 'How quickly can you respond to appliance repair calls in Northern Virginia?',
    answer: 'We strive to provide same-day service throughout Northern Virginia when possible. Our response time depends on your location and current scheduling, but we prioritize emergency appliance repairs.'
  },
  {
    question: 'Do you service all appliance brands in Northern Virginia?',
    answer: 'Yes, we repair all major appliance brands including GE, Whirlpool, Samsung, LG, Maytag, Kenmore, Frigidaire, Bosch, and many others. Our technicians are trained on most residential appliance brands sold in Northern Virginia.'
  }
]

export default function NorthernVirginiaApplianceRepair() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...faqSchema,
            mainEntity: northernVirginiaFaqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Northern Virginia Appliance Repair
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Throughout the Region
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Same Day Repairs provides expert appliance repair services throughout Northern Virginia.
                From Gainesville to Fairfax, we serve all major cities with professional, reliable appliance repair.
              </p>
              <div className="flex justify-center mb-6">
                <a
                  href="tel:7035550123"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call (703) 555-0123
                </a>
              </div>
              <div className="flex items-center justify-center text-blue-200">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="mr-4">5.0/5 Stars</span>
                <ClockIcon className="h-5 w-5 mr-1" />
                <span>Same-Day Service Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Notice */}
        <section className="bg-blue-50 border-l-4 border-blue-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <MapPinIcon className="h-8 w-8 text-blue-500 mr-4" />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-blue-800">
                  Serving All of Northern Virginia with Professional Appliance Repair
                </h2>
                <p className="text-blue-700">
                  From Gainesville to Manassas, we provide same-day appliance repair service throughout the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Appliance Repair Services Throughout Northern Virginia
              </h2>
              <p className="text-lg text-gray-600">
                Professional repair for all major appliances with same-day service available
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Appliance Repair Service Areas in Northern Virginia
              </h2>
              <p className="text-lg text-gray-600">
                Professional appliance repair service in all major Northern Virginia cities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${city.highlight ? 'border-l-4 border-orange-500' : 'border-l-4 border-blue-500'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {city.name}
                    </h3>
                    {city.highlight && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-3">{city.description}</p>
                  <p className="text-sm text-blue-600 mb-4">Population: {city.population}</p>
                  <Link
                    href={city.href}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full text-center"
                  >
                    View Service Area
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Same Day Repairs for Northern Virginia Appliance Repair?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPinIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Northern Virginia Experts</h3>
                <p className="text-gray-600">
                  We know Northern Virginia well. Our technicians are familiar with the area and can provide efficient service throughout the region.
                </p>
              </div>
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  Same-day appliance repair service available throughout Northern Virginia when scheduling permits. We prioritize urgent repairs.
                </p>
              </div>
              <div className="text-center">
                <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10+ Years Experience</h3>
                <p className="text-gray-600">
                  Over 10 years of experience serving Northern Virginia families with professional appliance repair services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews limit={6} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Northern Virginia Appliance Repair FAQs
              </h2>
            </div>
            <div className="space-y-6">
              {northernVirginiaFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Appliance Repair in Northern Virginia Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let broken appliances disrupt your life. Same Day Repairs provides fast,
              professional appliance repair service throughout Northern Virginia.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:7035550123"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call (703) 555-0123 Now
              </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p>⭐ 5.0/5 Stars • 35+ Reviews • Same-Day Service Available • 10+ Years Experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}