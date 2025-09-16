import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { refrigeratorServiceSchema, faqSchema } from '@/lib/schema'
import { PhoneIcon, ClockIcon, CheckIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = createPageSEO(
  'Refrigerator Repair Gainesville VA - Same Day Service',
  'Expert refrigerator repair in Gainesville VA. Same-day service for all brands. Not cooling? Leaking? We fix it fast. Call (703) 555-0123 now!',
  '/refrigerator-repair-gainesville-va'
)

const commonIssues = [
  {
    problem: 'Refrigerator Not Cooling',
    description: 'Most common issue - can be compressor, thermostat, or refrigerant leak',
    urgency: 'Emergency - Food spoilage risk'
  },
  {
    problem: 'Refrigerator Leaking Water',
    description: 'Usually blocked drain or faulty water line',
    urgency: 'Urgent - Potential water damage'
  },
  {
    problem: 'Ice Maker Not Working',
    description: 'Could be water supply, electrical, or mechanical issue',
    urgency: 'Non-urgent - Convenience issue'
  },
  {
    problem: 'Strange Noises',
    description: 'Compressor, fan motor, or loose parts',
    urgency: 'Moderate - Could indicate bigger problems'
  },
  {
    problem: 'Freezer Too Cold/Warm',
    description: 'Temperature control or airflow problems',
    urgency: 'Urgent - Food safety concern'
  }
]


const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const faqs = [
  {
    question: 'How quickly can you repair my refrigerator in Gainesville VA?',
    answer: 'We offer same-day refrigerator repair service in Gainesville VA when scheduling permits. Many refrigerator repairs can be completed promptly depending on the issue and parts availability.'
  },
  {
    question: 'What refrigerator brands do you repair?',
    answer: 'We repair all major residential refrigerator brands including GE, Whirlpool, Samsung, LG, Maytag, Kenmore, Frigidaire, Bosch, and KitchenAid. Our technicians are trained on most major brands.'
  },
  {
    question: 'Do you provide upfront pricing for refrigerator repair?',
    answer: 'Yes, we provide clear upfront pricing with no hidden fees. Contact us for a quote based on your specific refrigerator issue and we&apos;ll give you honest, transparent pricing.'
  },
  {
    question: 'Do you repair refrigerators that are not cooling?',
    answer: 'Yes! Refrigerators not cooling is our most common repair. This could be due to compressor failure, thermostat issues, or refrigerant leaks. We understand the urgency due to food spoilage concerns.'
  },
  {
    question: 'What areas around Gainesville VA do you serve?',
    answer: 'We provide residential refrigerator repair service throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas.'
  }
]

export default function RefrigeratorRepairGainesvilleVA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(refrigeratorServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Refrigerator Repair Gainesville VA
                  <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                    Same-Day Service Available
                  </span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Expert residential refrigerator repair in Gainesville VA and surrounding areas.
                  Not cooling? Leaking? Strange noises? We provide professional repair with 10+ years of experience.
                </p>
                <div className="flex justify-center">
                  <a
                    href="tel:7035550123"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
                  >
                    <PhoneIcon className="h-6 w-6 mr-2" />
                    Call (703) 555-0123
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/refrigerator-repair-gainesville-va-hero.jpg"
                  alt="Professional refrigerator repair service in Gainesville VA"
                  className="rounded-lg shadow-2xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Priority Service Notice */}
        <section id="priority-service" className="bg-blue-50 border-l-4 border-blue-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <ClockIcon className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-800">
                  Refrigerator Not Cooling? Same-Day Service Available!
                </h2>
                <p className="text-blue-700">
                  Don&apos;t let your food spoil. Call us for prompt refrigerator repair in Gainesville VA.
                  Same-day service available when scheduling permits.
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
                Common Refrigerator Problems We Fix in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Our expert technicians quickly diagnose and repair all refrigerator issues
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {issue.problem}
                  </h3>
                  <p className="text-gray-600 mb-4">{issue.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    issue.urgency.includes('Emergency') ? 'bg-red-100 text-red-800' :
                    issue.urgency.includes('Urgent') ? 'bg-orange-100 text-orange-800' :
                    issue.urgency.includes('Moderate') ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {issue.urgency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Refrigerator Repair Service Areas in Northern Virginia
              </h2>
              <p className="text-lg text-gray-600">
                Professional same-day refrigerator repair throughout the region
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <CheckIcon className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Refrigerator Repair in Gainesville VA
              </h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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
              Need Refrigerator Repair in Gainesville VA Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t wait for your refrigerator problems to get worse.
              Call now for same-day service and get your refrigerator running like new.
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
              <p>⭐ 4.9/5 Stars • 150+ Reviews • Same-Day Service Available • 10+ Years Experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}