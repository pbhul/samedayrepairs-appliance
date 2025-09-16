import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { dryerServiceSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Dryer Repair Gainesville VA - Fast Same Day Service',
  'Professional dryer repair in Gainesville VA. Not heating? Not drying? Same-day service available. 25+ years experience. Call (703) 555-0123!',
  '/dryer-repair-gainesville-va'
)

const commonIssues = [
  {
    problem: 'Dryer Not Heating',
    description: 'Usually heating element, thermal fuse, or gas valve issues',
    urgency: 'Common Issue',
    safety: false
  },
  {
    problem: 'Dryer Not Drying Clothes',
    description: 'Often caused by clogged vents, faulty moisture sensor, or heating problems',
    urgency: 'Efficiency Issue',
    safety: false
  },
  {
    problem: 'Dryer Not Starting',
    description: 'Could be door latch, control panel, or electrical problems',
    urgency: 'No Operation',
    safety: false
  },
  {
    problem: 'Dryer Making Loud Noises',
    description: 'Worn drum rollers, belt, or blower wheel',
    urgency: 'Mechanical Issue',
    safety: false
  },
  {
    problem: 'Dryer Too Hot / Overheating',
    description: 'Blocked vents, faulty thermostat - potential fire hazard',
    urgency: 'Safety Concern',
    safety: true
  },
  {
    problem: 'Dryer Takes Too Long',
    description: 'Poor airflow, clogged lint filter, or vent blockage',
    urgency: 'Efficiency Issue',
    safety: false
  }
]

const servicedBrands = [
  'Whirlpool', 'GE', 'Maytag', 'Samsung', 'LG', 'Kenmore', 'Frigidaire',
  'Bosch', 'Electrolux', 'Amana', 'Speed Queen', 'Roper'
]

const dryerTypes = [
  'Electric Dryers',
  'Gas Dryers',
  'Stackable Dryers',
  'Compact Dryers',
  'Ventless Dryers'
]

const dryerFaqs = [
  {
    question: 'How quickly can you repair my dryer in Gainesville VA?',
    answer: 'We offer same-day dryer repair service in Gainesville VA when scheduling permits. Most dryer repairs can be completed efficiently with our well-stocked service trucks.'
  },
  {
    question: 'Why is my dryer not heating up?',
    answer: 'The most common causes are a blown thermal fuse, faulty heating element (electric dryers), or gas valve issues (gas dryers). Our technicians can quickly diagnose and fix the problem.'
  },
  {
    question: 'Do you provide upfront pricing for dryer repair?',
    answer: 'Yes, we provide clear upfront pricing with no hidden fees. Contact us for a quote based on your specific dryer issue and we&apos;ll give you honest, transparent pricing.'
  },
  {
    question: 'Is it worth repairing an old dryer?',
    answer: 'If your dryer is less than 10 years old, it&apos;s usually worth repairing. We&apos;ll give you an honest assessment and recommendation based on your specific situation and the repair needed.'
  },
  {
    question: 'Do you service residential dryers only?',
    answer: 'Yes, we specialize in residential dryer repair for all major brands. We work on electric and gas dryers in homes throughout Northern Virginia.'
  }
]

export default function DryerRepairGainesvilleVA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dryerServiceSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Dryer Repair Gainesville VA
                  <span className="block text-2xl lg:text-3xl text-orange-200 mt-2">
                    Same-Day Service Available
                  </span>
                </h1>
                <p className="text-xl mb-8 text-orange-100">
                  Expert residential dryer repair in Gainesville VA and surrounding areas.
                  Not heating? Not drying? Taking too long? We provide professional dryer repair service.
                </p>
                <div className="flex justify-center">
                  <a
                    href="tel:7035550123"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
                  >
                    <PhoneIcon className="h-6 w-6 mr-2" />
                    Call (703) 555-0123
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/dryer-repair-gainesville-va-hero.jpg"
                  alt="Professional dryer repair service in Gainesville VA"
                  className="rounded-lg shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Safety Notice */}
        <section id="safety-notice" className="bg-orange-50 border-l-4 border-orange-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-orange-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-orange-800">
                  Dryer Overheating or Not Drying? Professional Repair Available!
                </h2>
                <p className="text-orange-700">
                  Overheating dryers can be safety concerns and indicate mechanical issues.
                  If your dryer is too hot or taking longer than usual, call us for professional diagnosis and repair.
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
                Common Dryer Problems We Fix in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Our expert technicians quickly diagnose and repair all dryer issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonIssues.map((issue, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md p-6 ${issue.safety ? 'border-l-4 border-red-500' : ''}`}>
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

        {/* Dryer Types & Brands */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Dryer Types */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Types of Dryers We Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dryerTypes.map((type, index) => (
                    <div key={index} className="flex items-center p-3 border rounded-lg">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="font-medium text-gray-900">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dryer Brands We Repair
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {servicedBrands.map((brand, index) => (
                    <div key={index} className="text-center p-3 border rounded-lg hover:shadow-md transition-shadow">
                      <span className="font-medium text-gray-900">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
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
                Frequently Asked Questions About Dryer Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {dryerFaqs.map((faq, index) => (
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

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dryer Repair Service Throughout Northern Virginia
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional same-day dryer repair in Gainesville, Haymarket, Bristow, Nokesville,
              Warrenton, Centreville, Fairfax, and Manassas
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Why Choose Same Day Repairs for Your Dryer?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <CheckIcon className="h-6 w-6 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900">Same-Day Service</h4>
                  <p className="text-gray-600">Most repairs completed the same day</p>
                </div>
                <div>
                  <CheckIcon className="h-6 w-6 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900">25+ Years Experience</h4>
                  <p className="text-gray-600">Expert technicians, all dryer brands</p>
                </div>
                <div>
                  <CheckIcon className="h-6 w-6 text-green-500 mb-2" />
                  <h4 className="font-semibold text-gray-900">Upfront Pricing</h4>
                  <p className="text-gray-600">No hidden fees, transparent costs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Dryer Repair in Gainesville VA Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let dryer problems disrupt your routine or create safety hazards.
              Call now for same-day service and get your dryer working perfectly again.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:7035550123"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call (703) 555-0123 Now
              </a>
            </div>
            <div className="mt-8 text-orange-200">
              <p>⭐ 4.9/5 Stars • 150+ Reviews • Same-Day Service Available • 10+ Years Experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}