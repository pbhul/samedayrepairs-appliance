import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Ice Maker Repair Near Me - Same Day Service Available',
  'Expert ice maker repair service near you. Not making ice, leaking, or making bad ice? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/ice-maker-repair-near-me'
)

const commonIceMakerIssues = [
  {
    problem: 'Ice Maker Not Making Ice',
    description: 'Most common issue - water supply, filter, freezer temperature, or mechanical problems',
    urgency: 'No Ice Production',
    safety: false
  },
  {
    problem: 'Ice Maker Leaking Water',
    description: 'Water line connections, fill cup overflow, or internal seal failures',
    urgency: 'Urgent - Water damage risk',
    safety: false
  },
  {
    problem: 'Ice Maker Making Bad Tasting Ice',
    description: 'Dirty filter, old water line, mold buildup, or contaminated water supply',
    urgency: 'Quality Issue',
    safety: false
  },
  {
    problem: 'Ice Maker Making Small/Hollow Ice',
    description: 'Low water pressure, clogged filter, or insufficient water fill',
    urgency: 'Quality Issue',
    safety: false
  },
  {
    problem: 'Ice Maker Not Dispensing Ice',
    description: 'Jammed auger, faulty motor, or dispenser door problems',
    urgency: 'Dispenser Issue',
    safety: false
  },
  {
    problem: 'Ice Maker Making Loud Noises',
    description: 'Harvest cycle issues, faulty motor, or ice jam in mechanism',
    urgency: 'Mechanical Issue',
    safety: false
  }
]

const iceMakerTypes = [
  'Built-in Refrigerator Ice Makers',
  'Standalone Ice Makers',
  'Under-Counter Ice Makers',
  'Portable Ice Makers',
  'Commercial Ice Makers'
]

const iceMakerBrands = [
  'GE', 'Whirlpool', 'Samsung', 'LG', 'KitchenAid', 'Frigidaire',
  'Bosch', 'Maytag', 'Kenmore', 'Sub-Zero', 'Scotsman', 'Manitowoc'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const iceMakerFaqs = [
  {
    question: 'How quickly can you repair my ice maker?',
    answer: 'We offer same-day ice maker repair service when scheduling permits. Most ice maker repairs can be completed efficiently with our well-stocked service trucks containing common ice maker parts.'
  },
  {
    question: 'What ice maker brands do you repair?',
    answer: 'We repair all major ice maker brands including GE, Whirlpool, Samsung, LG, KitchenAid, Frigidaire, Bosch, Maytag, Kenmore, and many others. We service both built-in and standalone ice makers.'
  },
  {
    question: 'Why is my ice maker not making ice?',
    answer: 'Ice makers not making ice can be due to water supply issues, clogged filters, incorrect freezer temperature, or mechanical failures. Our technicians can quickly diagnose and fix the problem.'
  },
  {
    question: 'Do you have ice maker parts in stock?',
    answer: 'Yes, we stock common ice maker parts including water filters, water inlet valves, ice maker motors, and control modules. This allows us to complete most ice maker repairs the same day.'
  },
  {
    question: 'Can you repair ice makers that are leaking water?',
    answer: 'Yes! Ice maker leaks are a common repair we handle. This could be due to loose water connections, overflow issues, or internal seal failures. We can quickly identify and fix the source of the leak.'
  }
]

export default function IceMakerRepairNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Ice Maker Repair Near Me',
            description: 'Expert ice maker repair service with same-day availability. We repair all ice maker brands and types.',
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
            mainEntity: iceMakerFaqs.map(faq => ({
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
                Ice Maker Repair Near Me
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert ice maker repair service in Northern Virginia. We specialize in all ice maker types
                including built-in, standalone, and under-counter models. Not making ice? Leaking? We can help!
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
                  Ice Maker Not Making Ice or Leaking? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t go without ice. Professional ice maker repair with same-day service when scheduling permits.
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
                Common Ice Maker Problems We Fix
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all ice maker issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonIceMakerIssues.map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {issue.problem}
                      </h3>
                      <p className="text-gray-600 mb-4">{issue.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        issue.urgency.includes('Urgent') ? 'bg-orange-100 text-orange-800' :
                        issue.urgency.includes('No Ice') ? 'bg-red-100 text-red-800' :
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

        {/* Types & Brands */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Ice Maker Types */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Types of Ice Makers We Service
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {iceMakerTypes.map((type, index) => (
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
                  Ice Maker Brands We Repair
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {iceMakerBrands.map((brand, index) => (
                    <div key={index} className="text-center p-3 border rounded-lg hover:shadow-md transition-shadow border-l-4 border-blue-500">
                      <span className="font-medium text-gray-900">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ice Maker Maintenance Tips
              </h2>
              <p className="text-lg text-gray-600">
                Keep your ice maker running efficiently with these expert tips
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regular Cleaning</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Change water filter every 6 months</li>
                  <li>• Clean ice bin monthly</li>
                  <li>• Sanitize ice maker quarterly</li>
                  <li>• Remove mineral buildup regularly</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimal Conditions</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Maintain freezer at 0-5°F</li>
                  <li>• Ensure adequate water pressure</li>
                  <li>• Keep ice maker level</li>
                  <li>• Provide proper ventilation</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Call for Repair</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• No ice production for 24+ hours</li>
                  <li>• Water leaking from ice maker</li>
                  <li>• Ice tastes bad or smells off</li>
                  <li>• Unusual noises during operation</li>
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
                Why Choose Same Day Repairs for Ice Maker Repair?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ice Maker Specialists</h3>
                <p className="text-gray-600">
                  10+ years experience with all ice maker types and brands. We understand the complexities of ice maker repair.
                </p>
              </div>
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  Same-day ice maker repair service available when scheduling permits. We know you need your ice maker working.
                </p>
              </div>
              <div className="text-center">
                <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Parts in Stock</h3>
                <p className="text-gray-600">
                  We stock common ice maker parts for most major brands, allowing us to complete repairs the same day.
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
                Ice Maker Repair Service Areas
              </h2>
              <p className="text-lg text-gray-600">
                Professional ice maker repair throughout Northern Virginia
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
        <Reviews service="ice maker" limit={3} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ice Maker Repair FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {iceMakerFaqs.map((faq, index) => (
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
              Need Ice Maker Repair Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t go without ice. Our expert technicians specialize in ice maker repair
              with same-day service available throughout Northern Virginia.
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