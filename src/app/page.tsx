import { PhoneIcon, ClockIcon, CheckIcon, StarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { faqSchema } from '@/lib/schema'

const services = [
  {
    name: 'Refrigerator Repair',
    description: 'Same-day refrigerator repair for all major brands. Not cooling, leaking, or making noise? We fix it fast.',
    features: ['Same-day service', 'All major brands', 'Emergency repairs'],
    href: '/refrigerator-repair-gainesville-va',
    urgent: true
  },
  {
    name: 'Dryer Repair',
    description: 'Expert dryer repair service. Not heating, not drying, or taking too long? Professional repair available today.',
    features: ['Same-day service', 'Safety inspections', 'Vent cleaning'],
    href: '/dryer-repair-gainesville-va',
    urgent: true
  },
  {
    name: 'Washer Repair',
    description: 'Professional washing machine repair. Not spinning, leaking, or won\'t drain? Quick diagnosis and repair.',
    features: ['Quick diagnosis', 'All brands', 'Warranty included'],
    href: '/washer-repair-gainesville-va',
    urgent: false
  },
  {
    name: 'Dishwasher Repair',
    description: 'Dishwasher repair service for all brands. Not cleaning, not draining, or strange noises? We can help.',
    features: ['Professional service', 'Parts in stock', 'Upfront pricing'],
    href: '/dishwasher-repair-gainesville-va',
    urgent: false
  }
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const homePageFaqs = [
  {
    question: 'What appliance repair services do you provide in Gainesville VA?',
    answer: 'We provide comprehensive appliance repair services in Gainesville VA including refrigerator repair, dryer repair, washer repair, dishwasher repair, garbage disposal repair, and ice maker repair. We service all major brands with same-day service available.'
  },
  {
    question: 'Do you offer same-day appliance repair in Gainesville VA?',
    answer: 'Yes! We offer same-day appliance repair service in Gainesville VA and surrounding areas when you call before 2 PM. Emergency repairs for refrigerators not cooling can often be scheduled within 2-4 hours.'
  },
  {
    question: 'What areas do you serve for appliance repair?',
    answer: 'We provide appliance repair services throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas. Same-day service is available in all these areas.'
  },
  {
    question: 'How much does appliance repair cost in Gainesville VA?',
    answer: 'Appliance repair costs vary by type of appliance and issue. Typical ranges: refrigerator repair $89-$299, dryer repair $79-$249, washer repair $89-$279. We provide upfront pricing with no hidden fees.'
  }
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...faqSchema,
            mainEntity: homePageFaqs.map(faq => ({
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  #1 Appliance Repair Gainesville VA
                  <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                    Same-Day Service Available
                  </span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Same Day Repairs provides expert appliance repair in Gainesville VA with 25+ years of experience.
                  Refrigerator not cooling? Dryer not heating? We fix it fast with same-day service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href="tel:7035550123"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
                  >
                    <PhoneIcon className="h-6 w-6 mr-2" />
                    Call (703) 555-0123
                  </a>
                  <a
                    href="#emergency-service"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors text-center"
                  >
                    Emergency Service
                  </a>
                </div>
                <div className="flex items-center text-blue-200">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="mr-4">4.9/5 Stars</span>
                  <ClockIcon className="h-5 w-5 mr-1" />
                  <span>Same-Day Service Available</span>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/appliance-repair-gainesville-va-hero.jpg"
                  alt="Professional appliance repair service in Gainesville VA"
                  className="rounded-lg shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Notice */}
        <section id="emergency-service" className="bg-red-50 border-l-4 border-red-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-red-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-red-800">
                  Appliance Emergency? Same-Day Service Available in Gainesville VA!
                </h2>
                <p className="text-red-700">
                  Refrigerator not cooling? Dryer overheating? Don&apos;t wait - these are emergencies!
                  Call now for same-day repair service. Available 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 ${service.urgent ? 'border-l-4 border-orange-500' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    {service.urgent && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        Same-Day
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Appliance Repair Service Areas in Northern Virginia
              </h2>
              <p className="text-lg text-gray-600">
                Professional same-day appliance repair throughout the region
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <MapPinIcon className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <span className="font-medium text-gray-900">{area}</span>
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
                Why Choose Same Day Repairs for Appliance Repair in Gainesville VA?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service</h3>
                <p className="text-gray-600">
                  Most appliance repairs completed the same day you call. Emergency service available for refrigerators and other critical appliances.
                </p>
              </div>
              <div className="text-center">
                <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">25+ Years Experience</h3>
                <p className="text-gray-600">
                  Expert technicians with over 25 years of experience repairing all major appliance brands. Factory-trained and certified.
                </p>
              </div>
              <div className="text-center">
                <StarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.9 Star Rating</h3>
                <p className="text-gray-600">
                  Over 150 five-star reviews from satisfied customers. Professional, reliable service with upfront pricing and no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Appliance Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {homePageFaqs.map((faq, index) => (
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
              professional appliance repair service throughout Northern Virginia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7035550123"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call (703) 555-0123 Now
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-4 px-8 rounded-lg text-lg transition-colors text-center"
              >
                Schedule Online
              </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p>⭐ 4.9/5 Stars • 150+ Reviews • Same-Day Service Available • 25+ Years Experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
