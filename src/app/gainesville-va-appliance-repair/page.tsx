import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { localBusinessSchema, faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'
import Link from 'next/link'

export const metadata: Metadata = createPageSEO(
  'Appliance Repair Gainesville VA - #1 Same Day Service',
  'Top-rated appliance repair in Gainesville VA. Refrigerator, dryer, washer repair with same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/gainesville-va-appliance-repair'
)

const services = [
  {
    name: 'Refrigerator Repair',
    icon: '❄️',
    description: 'Not cooling, leaking, or making noise? Same-day service available.',
    href: '/refrigerator-repair-gainesville-va',
    urgent: true
  },
  {
    name: 'Dryer Repair',
    icon: '🌀',
    description: 'Not heating, not drying, or taking too long? Professional repair.',
    href: '/dryer-repair-gainesville-va',
    urgent: true
  },
  {
    name: 'Washer Repair',
    icon: '🧺',
    description: 'Not spinning, leaking, or won\'t drain? Quick diagnosis.',
    href: '/washer-repair-gainesville-va',
    urgent: false
  },
  {
    name: 'Dishwasher Repair',
    icon: '🍽️',
    description: 'Not cleaning, not draining, or strange noises? We can help.',
    href: '/dishwasher-repair-gainesville-va',
    urgent: false
  }
]

const nearbyAreas = [
  'Haymarket VA', 'Bristow VA', 'Nokesville VA', 'Warrenton VA',
  'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const gainesvilleFaqs = [
  {
    question: 'Do you provide same-day appliance repair in Gainesville VA?',
    answer: 'Yes! We offer same-day appliance repair service in Gainesville VA when scheduling permits. We prioritize urgent repairs like refrigerators not cooling and dryers not heating. Call us early in the day for best availability.'
  },
  {
    question: 'What appliance repair services do you offer in Gainesville?',
    answer: 'We provide comprehensive appliance repair services in Gainesville VA including refrigerator repair, dryer repair, washer repair, dishwasher repair, ice maker repair, and garbage disposal repair. We service all major brands.'
  },
  {
    question: 'How quickly can you respond to appliance repair calls in Gainesville?',
    answer: 'We strive to provide same-day service in Gainesville VA when possible. Our response time depends on current scheduling and the urgency of your repair, but we prioritize emergency appliance repairs.'
  },
  {
    question: 'Do you service all appliance brands in Gainesville VA?',
    answer: 'Yes, we repair all major appliance brands in Gainesville including GE, Whirlpool, Samsung, LG, Maytag, Kenmore, Frigidaire, Bosch, KitchenAid, and many others. Our technicians are trained on most residential brands.'
  },
  {
    question: 'What areas near Gainesville do you serve?',
    answer: 'In addition to Gainesville VA, we also serve Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, Manassas, and surrounding Northern Virginia areas with professional appliance repair services.'
  }
]

export default function GainesvilleVAApplianceRepair() {
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
            mainEntity: gainesvilleFaqs.map(faq => ({
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
                #1 Appliance Repair Gainesville VA
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Same Day Repairs is the leading appliance repair service in Gainesville VA.
                With 10+ years of experience, we provide expert repair for all major appliances with same-day service available.
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
              <ClockIcon className="h-8 w-8 text-blue-500 mr-4" />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-blue-800">
                  Need Appliance Repair in Gainesville VA? Same-Day Service Available!
                </h2>
                <p className="text-blue-700">
                  Professional appliance repair service in Gainesville Virginia. Same-day service available when scheduling permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Appliance Repair Services in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Expert repair for all major appliances with same-day service available
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${service.urgent ? 'border-l-4 border-orange-500' : 'border-l-4 border-blue-500'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    {service.urgent && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        Same-Day
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Gainesville Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Appliance Repair Services in Gainesville Virginia
                </h2>
                <p className="text-gray-600 mb-6">
                  Gainesville, Virginia is a growing community in Prince William County with over 17,000 residents.
                  As the area continues to develop, Same Day Repairs has been proud to serve Gainesville families
                  with professional appliance repair services for over 10 years.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you live in Heritage Hunt, Virginia Oaks, or any neighborhood in Gainesville,
                  we provide same-day appliance repair service when scheduling permits. Our local knowledge
                  and experience help us serve the Gainesville community efficiently and effectively.
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Why Gainesville Residents Choose Same Day Repairs
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Local Gainesville VA appliance repair experts
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Same-day service available when scheduling permits
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      10+ years serving Northern Virginia families
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      5.0-star rating with 35+ satisfied customers
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Service Areas Near Gainesville VA
                </h3>
                <p className="text-gray-600 mb-6">
                  In addition to Gainesville, we also provide appliance repair services
                  throughout Northern Virginia:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {nearbyAreas.map((area, index) => (
                    <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow">
                      <MapPinIcon className="h-5 w-5 text-blue-500 mr-3" />
                      <span className="font-medium text-gray-900">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Same Day Repairs for Gainesville VA Appliance Repair?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  Same-day appliance repair service available in Gainesville VA when scheduling permits. We understand appliance emergencies can&apos;t wait.
                </p>
              </div>
              <div className="text-center">
                <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Gainesville Experts</h3>
                <p className="text-gray-600">
                  We know Gainesville VA well and have been serving the community for over 10 years. Local knowledge means faster, more efficient service.
                </p>
              </div>
              <div className="text-center">
                <StarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.0 Star Rating</h3>
                <p className="text-gray-600">
                  Over 35+ five-star reviews from satisfied Gainesville customers. Professional, reliable service with upfront pricing and no hidden fees.
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
                Frequently Asked Questions About Appliance Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {gainesvilleFaqs.map((faq, index) => (
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
              Need Appliance Repair in Gainesville VA Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let broken appliances disrupt your life. Same Day Repairs provides fast,
              professional appliance repair service throughout Gainesville Virginia.
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