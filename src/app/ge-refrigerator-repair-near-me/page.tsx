import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'
import Link from 'next/link'

export const metadata: Metadata = createPageSEO(
  'GE Refrigerator Repair Near Me - Same Day Service Available',
  'Expert GE refrigerator repair service near you. Not cooling, leaking, ice maker problems? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/ge-refrigerator-repair-near-me'
)

const commonGEIssues = [
  {
    problem: 'GE Refrigerator Not Cooling',
    description: 'Most common GE refrigerator issue - can be compressor, thermostat, or refrigerant leak',
    urgency: 'Emergency - Food spoilage risk',
    safety: false
  },
  {
    problem: 'GE Ice Maker Not Working',
    description: 'GE ice makers commonly fail due to water supply, filter, or mechanical issues',
    urgency: 'Moderate - Convenience issue',
    safety: false
  },
  {
    problem: 'GE Refrigerator Leaking Water',
    description: 'Usually blocked drain tube or faulty water line connection',
    urgency: 'Urgent - Potential water damage',
    safety: false
  },
  {
    problem: 'GE Freezer Not Freezing',
    description: 'Temperature control, defrost system, or airflow problems',
    urgency: 'Emergency - Food safety concern',
    safety: true
  },
  {
    problem: 'GE Refrigerator Making Noise',
    description: 'Compressor, evaporator fan, or condenser fan motor issues',
    urgency: 'Moderate - Could indicate bigger problems',
    safety: false
  },
  {
    problem: 'GE Refrigerator Door Not Sealing',
    description: 'Worn door gaskets or misaligned door causing energy waste',
    urgency: 'Moderate - Energy efficiency issue',
    safety: false
  }
]

const geModels = [
  'GE Profile Series', 'GE Café Series', 'GE Appliances', 'GE Monogram',
  'GE French Door', 'GE Side-by-Side', 'GE Top Freezer', 'GE Bottom Freezer'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const geFaqs = [
  {
    question: 'Do you repair all GE refrigerator models?',
    answer: 'Yes! We repair all GE refrigerator models including GE Profile, GE Café, GE Appliances, and GE Monogram series. We service French door, side-by-side, top freezer, and bottom freezer GE refrigerators with 10+ years of experience.'
  },
  {
    question: 'How quickly can you repair my GE refrigerator?',
    answer: 'We offer same-day GE refrigerator repair service when scheduling permits. Most GE refrigerator repairs can be completed promptly with our well-stocked service trucks containing common GE parts.'
  },
  {
    question: 'Why is my GE refrigerator not cooling properly?',
    answer: 'GE refrigerators not cooling can be due to compressor failure, thermostat issues, refrigerant leaks, or dirty condenser coils. Our technicians specialize in GE refrigerator diagnostics and can quickly identify the problem.'
  },
  {
    question: 'Do you have GE refrigerator parts in stock?',
    answer: 'Yes, we stock common GE refrigerator parts including thermostats, compressors, ice maker components, door seals, and water filters. This allows us to complete most GE refrigerator repairs the same day.'
  },
  {
    question: 'What areas do you serve for GE refrigerator repair?',
    answer: 'We provide GE refrigerator repair service throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas.'
  }
]

export default function GERefrigeratorRepairNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'GE Refrigerator Repair Near Me',
            description: 'Expert GE refrigerator repair service with same-day availability. We repair all GE refrigerator models.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Same Day Repairs',
              url: 'https://samedayrepairs.com'
            },
            areaServed: serviceAreas,
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'USD'
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...faqSchema,
            mainEntity: geFaqs.map(faq => ({
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
                GE Refrigerator Repair Near Me
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert GE refrigerator repair service in Northern Virginia. We specialize in all GE models including
                Profile, Café, and Appliances series. Not cooling? Ice maker broken? We can help!
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
              <WrenchScrewdriverIcon className="h-8 w-8 text-blue-500 mr-4" />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-blue-800">
                  GE Refrigerator Not Cooling? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let your GE refrigerator problems worsen. Professional GE refrigerator repair with same-day service when scheduling permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common GE Issues Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common GE Refrigerator Problems We Fix
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all GE refrigerator issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonGEIssues.map((issue, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 ${issue.safety ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500'}`}>
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {issue.problem}
                        {issue.safety && (
                          <ExclamationTriangleIcon className="h-5 w-5 text-red-500 inline ml-2" />
                        )}
                      </h3>
                      <p className="text-gray-600 mb-4">{issue.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        issue.urgency.includes('Emergency') ? 'bg-red-100 text-red-800' :
                        issue.urgency.includes('Urgent') ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {issue.urgency}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GE Models Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* GE Models */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  GE Refrigerator Models We Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {geModels.map((model, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg border-l-4 border-blue-500">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-medium text-gray-900">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us for GE */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us for GE Refrigerator Repair?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">GE Refrigerator Specialists</h3>
                      <p className="text-gray-600">10+ years experience specifically with GE refrigerator models and common issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">GE Parts in Stock</h3>
                      <p className="text-gray-600">We stock common GE refrigerator parts for same-day repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Same-Day Service Available</h3>
                      <p className="text-gray-600">When scheduling permits, we provide same-day GE refrigerator repair</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Upfront Pricing</h3>
                      <p className="text-gray-600">Transparent pricing with no hidden fees for GE refrigerator repairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GE Refrigerator Repair Service Areas
              </h2>
              <p className="text-lg text-gray-600">
                Professional GE refrigerator repair throughout Northern Virginia
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                  <CheckIcon className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <Reviews service="refrigerator" limit={3} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GE Refrigerator Repair FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {geFaqs.map((faq, index) => (
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
              Need GE Refrigerator Repair Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let your GE refrigerator problems get worse. Our expert technicians
              specialize in GE refrigerator repair with same-day service available.
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