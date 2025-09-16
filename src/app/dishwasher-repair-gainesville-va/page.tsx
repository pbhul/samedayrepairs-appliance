import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Dishwasher Repair Gainesville VA - Same Day Service Available',
  'Expert dishwasher repair in Gainesville VA. Not cleaning, not draining, or making noise? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/dishwasher-repair-gainesville-va'
)

const commonDishwasherIssues = [
  {
    problem: 'Dishwasher Not Cleaning Dishes',
    description: 'Most common issue - clogged spray arms, dirty filters, or water temperature problems',
    urgency: 'Poor Performance',
    safety: false
  },
  {
    problem: 'Dishwasher Not Draining',
    description: 'Clogged drain hose, garbage disposal connection, or faulty drain pump',
    urgency: 'Urgent - Standing water',
    safety: false
  },
  {
    problem: 'Dishwasher Leaking Water',
    description: 'Door seals, water pump, or loose connections causing leaks',
    urgency: 'Urgent - Water damage risk',
    safety: false
  },
  {
    problem: 'Dishwasher Not Starting',
    description: 'Door latch, control panel, or electrical connection problems',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Dishwasher Making Strange Noises',
    description: 'Wash pump motor, spray arm bearings, or foreign objects in drain',
    urgency: 'Mechanical Issue',
    safety: false
  },
  {
    problem: 'Dishwasher Not Filling with Water',
    description: 'Water inlet valve, float switch, or control board malfunction',
    urgency: 'No Operation',
    safety: false
  }
]

const dishwasherBrands = [
  'Whirlpool', 'GE', 'Bosch', 'KitchenAid', 'Maytag', 'Samsung',
  'LG', 'Frigidaire', 'Kenmore', 'Miele', 'Fisher & Paykel', 'Thermador'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const dishwasherFaqs = [
  {
    question: 'How quickly can you repair my dishwasher in Gainesville VA?',
    answer: 'We offer same-day dishwasher repair service in Gainesville VA when scheduling permits. Most dishwasher repairs can be completed efficiently with our well-stocked service trucks containing common dishwasher parts.'
  },
  {
    question: 'What dishwasher brands do you repair in Gainesville?',
    answer: 'We repair all major dishwasher brands in Gainesville VA including Whirlpool, GE, Bosch, KitchenAid, Maytag, Samsung, LG, Frigidaire, Kenmore, and many others. Our technicians are trained on most residential dishwasher models.'
  },
  {
    question: 'Why is my dishwasher not cleaning dishes properly?',
    answer: 'Dishwashers not cleaning properly can be due to clogged spray arms, dirty filters, incorrect water temperature, or overloading. Our technicians can diagnose and fix all dishwasher cleaning issues.'
  },
  {
    question: 'Do you provide upfront pricing for dishwasher repair in Gainesville?',
    answer: 'Yes, we provide clear upfront pricing with no hidden fees for dishwasher repair in Gainesville VA. Our technician will diagnose the issue and provide you with a transparent quote before proceeding.'
  },
  {
    question: 'Can you repair dishwashers that are not draining?',
    answer: 'Yes! Dishwashers not draining is a common repair we handle. This could be due to clogged drain hose, garbage disposal issues, or faulty drain pump. We can quickly diagnose and fix the problem.'
  }
]

export default function DishwasherRepairGainesvilleVA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Dishwasher Repair Gainesville VA',
            description: 'Expert dishwasher repair service in Gainesville VA with same-day availability. We repair all dishwasher brands.',
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
            mainEntity: dishwasherFaqs.map(faq => ({
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
                Dishwasher Repair Gainesville VA
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert dishwasher repair service in Gainesville VA and surrounding areas.
                Not cleaning? Not draining? Making noise? We provide professional dishwasher repair with 10+ years of experience.
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
                  Dishwasher Not Cleaning or Not Draining? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let dishwasher problems disrupt your kitchen routine. Professional dishwasher repair in Gainesville VA with same-day service when scheduling permits.
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
                Common Dishwasher Problems We Fix in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all dishwasher issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonDishwasherIssues.map((issue, index) => (
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

        {/* Brands & Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Brands */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dishwasher Brands We Service in Gainesville VA
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {dishwasherBrands.map((brand, index) => (
                    <div key={index} className="text-center p-3 border rounded-lg hover:shadow-md transition-shadow border-l-4 border-blue-500">
                      <span className="font-medium text-gray-900">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Dishwasher Repair Services
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Dishwasher Not Cleaning Repair</h3>
                      <p className="text-gray-600">Fix poor cleaning performance and spotty dishes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Drainage Problem Repair</h3>
                      <p className="text-gray-600">Fix dishwashers that won&apos;t drain or have standing water</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Leak Repair</h3>
                      <p className="text-gray-600">Fix water leaks from door seals and connections</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Control Panel Repair</h3>
                      <p className="text-gray-600">Fix dishwashers that won&apos;t start or respond</p>
                    </div>
                  </div>
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
                Dishwasher Maintenance Tips for Gainesville Homeowners
              </h2>
              <p className="text-lg text-gray-600">
                Keep your dishwasher running efficiently with these expert tips
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regular Cleaning</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Clean filter monthly</li>
                  <li>• Wipe door seals regularly</li>
                  <li>• Run cleaning cycle with dishwasher cleaner</li>
                  <li>• Clear spray arms of debris</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Proper Loading</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Don&apos;t overcrowd dishes</li>
                  <li>• Face soiled surfaces toward spray arms</li>
                  <li>• Secure lightweight items</li>
                  <li>• Pre-rinse heavily soiled items</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Call for Repair</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Dishes not getting clean</li>
                  <li>• Water not draining</li>
                  <li>• Unusual noises during operation</li>
                  <li>• Water leaking from unit</li>
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
                Dishwasher Repair Service Areas Near Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Professional dishwasher repair throughout Northern Virginia
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
        <Reviews service="dishwasher" limit={3} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Dishwasher Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {dishwasherFaqs.map((faq, index) => (
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
              Need Dishwasher Repair in Gainesville VA Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let dishwasher problems disrupt your kitchen routine.
              Call now for same-day service and get your dishwasher working perfectly again.
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