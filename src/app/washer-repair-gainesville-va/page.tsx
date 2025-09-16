import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Washer Repair Gainesville VA - Same Day Service Available',
  'Expert washer repair in Gainesville VA. Not spinning, leaking, or not draining? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/washer-repair-gainesville-va'
)

const commonWasherIssues = [
  {
    problem: 'Washer Not Spinning',
    description: 'Most common issue - lid switch, drive belt, motor coupler, or transmission problems',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Washer Not Draining',
    description: 'Clogged drain pump, faulty pump motor, or blocked drain hose causing water backup',
    urgency: 'Urgent - Water backup',
    safety: false
  },
  {
    problem: 'Washer Leaking Water',
    description: 'Door seal, water inlet valve, tub seal, or drain hose connection leaks',
    urgency: 'Urgent - Water damage risk',
    safety: false
  },
  {
    problem: 'Washer Not Starting',
    description: 'Door latch, lid switch, control panel, or electrical connection problems',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Washer Making Loud Noises',
    description: 'Worn bearings, drive pulley, suspension rods, or unbalanced load issues',
    urgency: 'Mechanical Issue',
    safety: false
  },
  {
    problem: 'Washer Not Filling with Water',
    description: 'Water inlet valve, pressure switch, water level sensor, or control board failure',
    urgency: 'No Operation',
    safety: false
  }
]

const washerBrands = [
  'Whirlpool', 'GE', 'Maytag', 'Samsung', 'LG', 'Kenmore',
  'Frigidaire', 'Bosch', 'Electrolux', 'Amana', 'Speed Queen', 'Roper'
]

const washerTypes = [
  'Top Load Washers',
  'Front Load Washers',
  'High Efficiency Washers',
  'Compact Washers',
  'Stackable Washers'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const washerFaqs = [
  {
    question: 'How quickly can you repair my washer in Gainesville VA?',
    answer: 'We offer same-day washer repair service in Gainesville VA when scheduling permits. Most washer repairs can be completed efficiently with our well-stocked service trucks containing common washer parts.'
  },
  {
    question: 'What washer brands do you repair in Gainesville?',
    answer: 'We repair all major washer brands in Gainesville VA including Whirlpool, GE, Maytag, Samsung, LG, Kenmore, Frigidaire, Bosch, and many others. Our technicians are trained on most residential washer models.'
  },
  {
    question: 'Why is my washer not spinning?',
    answer: 'Washers not spinning can be due to lid switch failure, broken drive belt, worn motor coupler, or transmission issues. Our technicians can quickly diagnose and fix all washer spinning problems.'
  },
  {
    question: 'Do you provide upfront pricing for washer repair in Gainesville?',
    answer: 'Yes, we provide clear upfront pricing with no hidden fees for washer repair in Gainesville VA. Our technician will diagnose the issue and provide you with a transparent quote before proceeding.'
  },
  {
    question: 'Can you repair washers that are leaking water?',
    answer: 'Yes! Washer leaks are a common repair we handle. This could be due to door seals, water inlet valves, or drain connections. We can quickly identify the source and fix the leak.'
  }
]

export default function WasherRepairGainesvilleVA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Washer Repair Gainesville VA',
            description: 'Expert washer repair service in Gainesville VA with same-day availability. We repair all washer brands and types.',
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
            mainEntity: washerFaqs.map(faq => ({
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
                Washer Repair Gainesville VA
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert washer repair service in Gainesville VA and surrounding areas.
                Not spinning? Leaking? Not draining? We provide professional washing machine repair with 10+ years of experience.
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
                  Washer Not Spinning or Leaking? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let washer problems disrupt your laundry routine. Professional washer repair in Gainesville VA with same-day service when scheduling permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Washer Problems We Fix in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all washing machine issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonWasherIssues.map((issue, index) => (
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

        {/* Brands & Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Washer Types */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Types of Washers We Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {washerTypes.map((type, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg border-l-4 border-blue-500">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-medium text-gray-900">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Washer Brands We Repair
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {washerBrands.map((brand, index) => (
                    <div key={index} className="text-center p-3 border rounded-lg hover:shadow-md transition-shadow border-l-4 border-blue-500">
                      <span className="font-medium text-gray-900">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Washer Troubleshooting Tips for Gainesville Homeowners
              </h2>
              <p className="text-lg text-gray-600">
                Quick checks before calling for professional washer repair
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Washer Won&apos;t Start</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Check power connection</li>
                  <li>• Ensure lid/door is completely closed</li>
                  <li>• Verify water supply is turned on</li>
                  <li>• Check for tripped circuit breakers</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Not Draining Water</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Check drain hose for kinks</li>
                  <li>• Ensure drain hose height is correct</li>
                  <li>• Clean lint filter if present</li>
                  <li>• Check for clogs in drain pump</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Excessive Vibration</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Level the washer properly</li>
                  <li>• Redistribute unbalanced loads</li>
                  <li>• Check that all shipping bolts are removed</li>
                  <li>• Ensure floor is stable and level</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Same Day Repairs for Washer Repair in Gainesville VA?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  Same-day washer repair service available in Gainesville when scheduling permits. We understand laundry can&apos;t wait.
                </p>
              </div>
              <div className="text-center">
                <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10+ Years Experience</h3>
                <p className="text-gray-600">
                  Expert technicians with over 10 years of experience repairing all major washer brands. Trained and certified professionals.
                </p>
              </div>
              <div className="text-center">
                <StarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.0 Star Rating</h3>
                <p className="text-gray-600">
                  Over 35+ five-star reviews from satisfied customers. Professional, reliable service with upfront pricing and no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Washer Repair Service Areas Near Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Professional washer repair throughout Northern Virginia
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
                Frequently Asked Questions About Washer Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {washerFaqs.map((faq, index) => (
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
              Need Washer Repair in Gainesville VA Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let washer problems disrupt your laundry routine.
              Call now for same-day service and get your washing machine working perfectly again.
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