import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Garbage Disposal Repair Gainesville VA - Same Day Service',
  'Expert garbage disposal repair in Gainesville VA. Jammed, leaking, or not working? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/garbage-disposal-repair-gainesville-va'
)

const commonDisposalIssues = [
  {
    problem: 'Garbage Disposal Jammed',
    description: 'Most common issue - foreign objects or food waste causing jam',
    urgency: 'Common Issue',
    safety: false
  },
  {
    problem: 'Garbage Disposal Not Working',
    description: 'No power, tripped breaker, or motor failure preventing operation',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Garbage Disposal Leaking',
    description: 'Leaks from mounting assembly, drain connections, or bottom of unit',
    urgency: 'Urgent - Water damage risk',
    safety: false
  },
  {
    problem: 'Garbage Disposal Making Noise',
    description: 'Grinding, humming, or unusual sounds indicating mechanical problems',
    urgency: 'Moderate Issue',
    safety: false
  },
  {
    problem: 'Garbage Disposal Not Draining',
    description: 'Clogged drain line or improper installation causing backup',
    urgency: 'Urgent - Backup risk',
    safety: false
  },
  {
    problem: 'Garbage Disposal Smells Bad',
    description: 'Food buildup, bacterial growth, or improper cleaning causing odors',
    urgency: 'Hygiene Issue',
    safety: false
  }
]

const disposalBrands = [
  'InSinkErator', 'Waste King', 'Moen', 'KitchenAid', 'GE', 'Whirlpool',
  'Badger', 'Evolution', 'Kohler', 'American Standard'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const disposalFaqs = [
  {
    question: 'How quickly can you repair my garbage disposal in Gainesville VA?',
    answer: 'We offer same-day garbage disposal repair service in Gainesville VA when scheduling permits. Most garbage disposal repairs can be completed quickly with our well-stocked service trucks.'
  },
  {
    question: 'What garbage disposal brands do you repair?',
    answer: 'We repair all major garbage disposal brands including InSinkErator, Waste King, Moen, KitchenAid, GE, Whirlpool, and many others. Our technicians are trained on most residential disposal units.'
  },
  {
    question: 'Can you install a new garbage disposal if mine cannot be repaired?',
    answer: 'Yes! If your garbage disposal cannot be economically repaired, we can install a new unit. We provide upfront pricing for both repair and replacement options.'
  },
  {
    question: 'Why is my garbage disposal jammed?',
    answer: 'Garbage disposals commonly jam due to foreign objects, fibrous foods, grease buildup, or overloading. Our technicians can safely unjam your disposal and prevent future issues.'
  },
  {
    question: 'Do you provide same-day garbage disposal installation?',
    answer: 'Yes, we can often provide same-day garbage disposal installation when scheduling permits. We stock popular disposal models for immediate installation.'
  }
]

export default function GarbageDisposalRepairGainesvilleVA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Garbage Disposal Repair Gainesville VA',
            description: 'Expert garbage disposal repair service with same-day availability. We repair and install all garbage disposal brands.',
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
            mainEntity: disposalFaqs.map(faq => ({
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
                Garbage Disposal Repair Gainesville VA
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert garbage disposal repair and installation in Gainesville VA and surrounding areas.
                Jammed? Leaking? Not working? We provide professional repair service with 10+ years of experience.
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
                  Garbage Disposal Jammed or Not Working? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let garbage disposal problems disrupt your kitchen. Professional repair service in Gainesville VA with same-day service when scheduling permits.
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
                Common Garbage Disposal Problems We Fix in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all garbage disposal issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonDisposalIssues.map((issue, index) => (
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
                  Garbage Disposal Brands We Service
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {disposalBrands.map((brand, index) => (
                    <div key={index} className="text-center p-3 border rounded-lg hover:shadow-md transition-shadow border-l-4 border-blue-500">
                      <span className="font-medium text-gray-900">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Garbage Disposal Services
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Garbage Disposal Repair</h3>
                      <p className="text-gray-600">Expert repair for jammed, leaking, or non-working disposals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Garbage Disposal Installation</h3>
                      <p className="text-gray-600">Professional installation of new garbage disposal units</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Disposal Unjamming</h3>
                      <p className="text-gray-600">Safe removal of jams and foreign objects</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Leak Repair</h3>
                      <p className="text-gray-600">Fix leaks from mounting, connections, or unit bottom</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Garbage Disposal Maintenance Tips
              </h2>
              <p className="text-lg text-gray-600">
                Keep your garbage disposal running smoothly with these expert tips
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What NOT to Put Down</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Grease and fats</li>
                  <li>• Fibrous foods (celery, corn husks)</li>
                  <li>• Bones and hard items</li>
                  <li>• Coffee grounds in large amounts</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Regular Cleaning</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Run cold water during use</li>
                  <li>• Clean with ice cubes monthly</li>
                  <li>• Use baking soda and vinegar</li>
                  <li>• Grind citrus peels for freshness</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Call for Repair</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Disposal won&apos;t turn on</li>
                  <li>• Water leaking underneath</li>
                  <li>• Strange grinding noises</li>
                  <li>• Frequent jams or clogs</li>
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
                Garbage Disposal Repair Service Areas in Northern Virginia
              </h2>
              <p className="text-lg text-gray-600">
                Professional garbage disposal repair throughout the region
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
        <Reviews limit={3} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Garbage Disposal Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {disposalFaqs.map((faq, index) => (
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
              Need Garbage Disposal Repair in Gainesville VA Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let garbage disposal problems disrupt your kitchen routine.
              Call now for same-day service and get your disposal working perfectly again.
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