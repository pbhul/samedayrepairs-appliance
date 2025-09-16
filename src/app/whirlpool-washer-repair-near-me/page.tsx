import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'
import Link from 'next/link'

export const metadata: Metadata = createPageSEO(
  'Whirlpool Washer Repair Near Me - Same Day Service Available',
  'Expert Whirlpool washer repair service near you. Not spinning, leaking, or not draining? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/whirlpool-washer-repair-near-me'
)

const commonWhirlpoolIssues = [
  {
    problem: 'Whirlpool Washer Not Spinning',
    description: 'Most common Whirlpool washer issue - lid switch, drive belt, or motor coupler problems',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Whirlpool Washer Not Draining',
    description: 'Clogged drain pump, faulty pump, or blocked drain hose in Whirlpool models',
    urgency: 'Urgent - Water backup risk',
    safety: false
  },
  {
    problem: 'Whirlpool Washer Leaking Water',
    description: 'Door seal, water inlet valve, or tub seal issues common in Whirlpool washers',
    urgency: 'Urgent - Water damage risk',
    safety: false
  },
  {
    problem: 'Whirlpool Washer Not Starting',
    description: 'Door latch, control panel, or electrical connection problems in Whirlpool models',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Whirlpool Washer Making Noise',
    description: 'Worn bearings, drive pulley, or suspension rods specific to Whirlpool washers',
    urgency: 'Mechanical Issue',
    safety: false
  },
  {
    problem: 'Whirlpool Washer Not Filling',
    description: 'Water inlet valve, pressure switch, or control board issues in Whirlpool models',
    urgency: 'No Operation',
    safety: false
  }
]

const whirlpoolModels = [
  'Whirlpool Top Load Washers', 'Whirlpool Front Load Washers', 'Whirlpool High Efficiency Washers', 'Whirlpool Compact Washers',
  'Whirlpool Cabrio Series', 'Whirlpool Duet Series', 'Whirlpool WTW Series', 'Whirlpool WFW Series'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const whirlpoolFaqs = [
  {
    question: 'Do you repair all Whirlpool washer models?',
    answer: 'Yes! We repair all Whirlpool washer models including top load, front load, high efficiency, Cabrio, Duet, WTW, and WFW series. We have 10+ years of experience with Whirlpool washer-specific issues and parts.'
  },
  {
    question: 'How quickly can you repair my Whirlpool washer?',
    answer: 'We offer same-day Whirlpool washer repair service when scheduling permits. Most Whirlpool washer repairs can be completed efficiently with our well-stocked service trucks containing Whirlpool-specific parts.'
  },
  {
    question: 'Why is my Whirlpool washer not spinning?',
    answer: 'Whirlpool washers not spinning can be due to lid switch failure, broken drive belt, worn motor coupler, or transmission issues. Our technicians specialize in Whirlpool washer diagnostics and can quickly identify the problem.'
  },
  {
    question: 'Do you have Whirlpool washer parts in stock?',
    answer: 'Yes, we stock common Whirlpool washer parts including lid switches, door seals, drain pumps, water inlet valves, and drive belts. This allows us to complete most Whirlpool washer repairs the same day.'
  },
  {
    question: 'What areas do you serve for Whirlpool washer repair?',
    answer: 'We provide Whirlpool washer repair service throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas.'
  }
]

export default function WhirlpoolWasherRepairNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Whirlpool Washer Repair Near Me',
            description: 'Expert Whirlpool washer repair service with same-day availability. We repair all Whirlpool washer models.',
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
            mainEntity: whirlpoolFaqs.map(faq => ({
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
                Whirlpool Washer Repair Near Me
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert Whirlpool washer repair service in Northern Virginia. We specialize in all Whirlpool washer models
                including Cabrio, Duet, and high efficiency washers. Not spinning? Leaking? We can help!
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
                  Whirlpool Washer Not Spinning or Leaking? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let your Whirlpool washer problems worsen. Professional Whirlpool washer repair with same-day service when scheduling permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Whirlpool Issues Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Whirlpool Washer Problems We Fix
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all Whirlpool washer issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonWhirlpoolIssues.map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {issue.problem}
                      </h3>
                      <p className="text-gray-600 mb-4">{issue.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        issue.urgency.includes('Urgent') ? 'bg-orange-100 text-orange-800' :
                        issue.urgency.includes('No Operation') ? 'bg-red-100 text-red-800' :
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

        {/* Whirlpool Models Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Whirlpool Models */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Whirlpool Washer Models We Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whirlpoolModels.map((model, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg border-l-4 border-blue-500">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-medium text-gray-900">{model}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us for Whirlpool */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Us for Whirlpool Washer Repair?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Whirlpool Washer Specialists</h3>
                      <p className="text-gray-600">10+ years experience specifically with Whirlpool washer models and common issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Whirlpool Parts in Stock</h3>
                      <p className="text-gray-600">We stock common Whirlpool washer parts for same-day repairs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Same-Day Service Available</h3>
                      <p className="text-gray-600">When scheduling permits, we provide same-day Whirlpool washer repair</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Upfront Pricing</h3>
                      <p className="text-gray-600">Transparent pricing with no hidden fees for Whirlpool washer repairs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Whirlpool Troubleshooting Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Whirlpool Washer Troubleshooting Tips
              </h2>
              <p className="text-lg text-gray-600">
                Quick checks before calling for professional Whirlpool washer repair
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Washer Won&apos;t Start</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Check power connection</li>
                  <li>• Ensure lid is completely closed</li>
                  <li>• Verify door latch alignment</li>
                  <li>• Check for tripped breakers</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Not Draining Water</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Check drain hose for kinks</li>
                  <li>• Clean lint filter if present</li>
                  <li>• Verify drain pump access</li>
                  <li>• Inspect for clogs</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Excessive Vibration</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Level the washer properly</li>
                  <li>• Check load distribution</li>
                  <li>• Inspect shock absorbers</li>
                  <li>• Verify floor stability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Whirlpool Washer Repair Service Areas
              </h2>
              <p className="text-lg text-gray-600">
                Professional Whirlpool washer repair throughout Northern Virginia
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
        <Reviews service="washer" limit={3} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Whirlpool Washer Repair FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {whirlpoolFaqs.map((faq, index) => (
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
              Need Whirlpool Washer Repair Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let your Whirlpool washer problems get worse. Our expert technicians
              specialize in Whirlpool washer repair with same-day service available.
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