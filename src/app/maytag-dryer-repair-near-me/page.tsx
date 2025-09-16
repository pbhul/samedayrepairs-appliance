import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Maytag Dryer Repair Near Me - Same Day Service Available',
  'Expert Maytag dryer repair service near you. Not heating, not drying, or making noise? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/maytag-dryer-repair-near-me'
)

const commonMaytagIssues = [
  {
    problem: 'Maytag Dryer Not Heating',
    description: 'Most common Maytag dryer issue - heating element, thermal fuse, or gas valve problems',
    urgency: 'Common Issue',
    safety: false
  },
  {
    problem: 'Maytag Dryer Not Drying Clothes',
    description: 'Often caused by clogged vents, faulty moisture sensor, or Maytag-specific control issues',
    urgency: 'Efficiency Issue',
    safety: false
  },
  {
    problem: 'Maytag Dryer Not Starting',
    description: 'Door latch, control panel, or electrical connection problems common in Maytag models',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Maytag Dryer Making Loud Noises',
    description: 'Worn drum rollers, belt, or blower wheel issues specific to Maytag dryers',
    urgency: 'Mechanical Issue',
    safety: false
  },
  {
    problem: 'Maytag Dryer Overheating',
    description: 'Blocked vents, faulty thermostat, or control board malfunction in Maytag models',
    urgency: 'Safety Concern',
    safety: true
  },
  {
    problem: 'Maytag Dryer Taking Too Long',
    description: 'Poor airflow, clogged lint filter, or vent blockage affecting Maytag dryer efficiency',
    urgency: 'Efficiency Issue',
    safety: false
  }
]

const maytagModels = [
  'Maytag Centennial Series', 'Maytag Bravos Series', 'Maytag Commercial Technology', 'Maytag Large Capacity',
  'Maytag Electric Dryers', 'Maytag Gas Dryers', 'Maytag Stackable Dryers', 'Maytag Front Load Dryers'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const maytagFaqs = [
  {
    question: 'Do you repair all Maytag dryer models?',
    answer: 'Yes! We repair all Maytag dryer models including Centennial, Bravos, Commercial Technology, and Large Capacity series. We have 10+ years of experience with Maytag dryer-specific issues and parts.'
  },
  {
    question: 'How quickly can you repair my Maytag dryer?',
    answer: 'We offer same-day Maytag dryer repair service when scheduling permits. Most Maytag dryer repairs can be completed efficiently with our well-stocked service trucks containing Maytag-specific parts.'
  },
  {
    question: 'Why is my Maytag dryer not heating up?',
    answer: 'Maytag dryers not heating can be due to heating element failure, blown thermal fuse, faulty gas valve (gas models), or control board issues. Our technicians specialize in Maytag dryer diagnostics.'
  },
  {
    question: 'Do you have Maytag dryer parts in stock?',
    answer: 'Yes, we stock common Maytag dryer parts including heating elements, thermal fuses, door latches, moisture sensors, and control boards. This allows us to complete most Maytag dryer repairs the same day.'
  },
  {
    question: 'What areas do you serve for Maytag dryer repair?',
    answer: 'We provide Maytag dryer repair service throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas.'
  }
]

export default function MaytagDryerRepairNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Maytag Dryer Repair Near Me',
            description: 'Expert Maytag dryer repair service with same-day availability. We repair all Maytag dryer models.',
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
            mainEntity: maytagFaqs.map(faq => ({
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
                Maytag Dryer Repair Near Me
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert Maytag dryer repair service in Northern Virginia. We specialize in all Maytag dryer models
                including Centennial, Bravos, and Commercial Technology series. Not heating? Not drying? We can help!
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
                  Maytag Dryer Not Heating or Not Drying? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let your Maytag dryer problems worsen. Professional Maytag dryer repair with same-day service when scheduling permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Maytag Issues Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Maytag Dryer Problems We Fix
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all Maytag dryer issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonMaytagIssues.map((issue, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 ${issue.safety ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500'}`}>
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {issue.problem}
                      </h3>
                      <p className="text-gray-600 mb-4">{issue.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        issue.safety ? 'bg-red-100 text-red-800' :
                        issue.urgency.includes('No Operation') ? 'bg-orange-100 text-orange-800' :
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

        {/* Maytag Models Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Maytag Models */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Maytag Dryer Models We Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {maytagModels.map((model, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg border-l-4 border-blue-500">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-medium text-gray-900">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us for Maytag */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us for Maytag Dryer Repair?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Maytag Dryer Specialists</h3>
                      <p className="text-gray-600">10+ years experience specifically with Maytag dryer models and common issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Maytag Parts in Stock</h3>
                      <p className="text-gray-600">We stock common Maytag dryer parts for same-day repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Same-Day Service Available</h3>
                      <p className="text-gray-600">When scheduling permits, we provide same-day Maytag dryer repair</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Upfront Pricing</h3>
                      <p className="text-gray-600">Transparent pricing with no hidden fees for Maytag dryer repairs</p>
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
                Maytag Dryer Repair Service Areas
              </h2>
              <p className="text-lg text-gray-600">
                Professional Maytag dryer repair throughout Northern Virginia
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
        <Reviews service="dryer" limit={3} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Maytag Dryer Repair FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {maytagFaqs.map((faq, index) => (
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
              Need Maytag Dryer Repair Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let your Maytag dryer problems get worse. Our expert technicians
              specialize in Maytag dryer repair with same-day service available.
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