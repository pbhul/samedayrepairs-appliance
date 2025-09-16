import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Refrigerator Not Cooling Near Me - Same Day Repair Service',
  'Refrigerator not cooling? Same-day repair service available near you. Food spoilage risk! Expert repair for all brands. 10+ years experience. Call (703) 555-0123!',
  '/refrigerator-not-cooling-near-me'
)

const coolingIssues = [
  {
    problem: 'Compressor Failure',
    description: 'Most serious issue - compressor not running or overheating',
    urgency: 'Critical - Immediate attention needed'
  },
  {
    problem: 'Thermostat Problems',
    description: 'Faulty temperature control preventing proper cooling',
    urgency: 'High Priority - Food safety risk'
  },
  {
    problem: 'Refrigerant Leak',
    description: 'Low refrigerant levels causing insufficient cooling',
    urgency: 'Critical - Professional repair required'
  },
  {
    problem: 'Dirty Condenser Coils',
    description: 'Blocked coils preventing heat dissipation',
    urgency: 'Moderate - Can worsen quickly'
  },
  {
    problem: 'Evaporator Fan Issues',
    description: 'Fan not circulating cold air properly',
    urgency: 'High Priority - Poor cooling'
  },
  {
    problem: 'Door Seal Problems',
    description: 'Damaged gaskets allowing warm air infiltration',
    urgency: 'Moderate - Energy waste and cooling loss'
  }
]

const troubleshootingSteps = [
  'Check power connection and circuit breaker',
  'Ensure temperature settings are correct',
  'Verify door is closing completely',
  'Clean condenser coils if accessible',
  'Check for blocked air vents inside',
  'If still not cooling - call immediately!'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const coolingFaqs = [
  {
    question: 'How quickly can you fix my refrigerator that is not cooling?',
    answer: 'We offer same-day refrigerator repair service when scheduling permits. Refrigerators not cooling are treated as priority repairs due to food spoilage risk. Most cooling issues can be diagnosed and repaired promptly.'
  },
  {
    question: 'Why is my refrigerator not cooling but the freezer works?',
    answer: 'This usually indicates evaporator fan problems, damper control issues, or blocked air vents. Our technicians can quickly diagnose and fix the specific cooling problem in your refrigerator compartment.'
  },
  {
    question: 'Is it worth repairing a refrigerator that is not cooling?',
    answer: 'If your refrigerator is less than 10 years old, it is usually worth repairing. We provide honest assessments and upfront pricing to help you make the best decision for your situation.'
  },
  {
    question: 'Can I prevent my refrigerator from stopping cooling?',
    answer: 'Regular maintenance like cleaning condenser coils, checking door seals, and maintaining proper temperature settings can help prevent cooling issues. However, some problems like compressor failure are unavoidable.'
  },
  {
    question: 'What should I do immediately if my refrigerator stops cooling?',
    answer: 'Keep the door closed as much as possible, check the power and temperature settings, and call for professional repair immediately. Consider moving perishables to a cooler or neighbor&apos;s refrigerator if repair will be delayed.'
  }
]

export default function RefrigeratorNotCoolingNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Refrigerator Not Cooling Repair Near Me',
            description: 'Same-day repair service for refrigerators not cooling. Priority service to prevent food spoilage.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Same Day Repairs',
              url: 'https://samedayrepairs.com'
            },
            areaServed: serviceAreas
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Refrigerator Not Cooling Near Me
                <span className="block text-2xl lg:text-3xl text-red-200 mt-2">
                  Same-Day Repair Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
                Refrigerator not cooling? Don&apos;t risk food spoilage! We provide same-day repair service
                for refrigerators not cooling throughout Northern Virginia. Call now for immediate assistance.
              </p>
              <div className="flex justify-center mb-6">
                <a
                  href="tel:7035550123"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
                >
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call (703) 555-0123 NOW
                </a>
              </div>
              <div className="flex items-center justify-center text-red-200">
                <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="mr-4">Priority Service</span>
                <ClockIcon className="h-5 w-5 mr-1" />
                <span>Same-Day Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Notice */}
        <section className="bg-red-50 border-l-4 border-red-500 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mr-4" />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-red-800">
                  Refrigerator Not Cooling is a Food Safety Issue - Call Now!
                </h2>
                <p className="text-red-700">
                  Don&apos;t wait - food spoilage can occur within hours. Same-day repair service available when scheduling permits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cooling Issues Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Causes of Refrigerators Not Cooling
              </h2>
              <p className="text-lg text-gray-600">
                Expert diagnosis and repair for all cooling problems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coolingIssues.map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {issue.problem}
                  </h3>
                  <p className="text-gray-600 mb-4">{issue.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    issue.urgency.includes('Critical') ? 'bg-red-100 text-red-800' :
                    issue.urgency.includes('High Priority') ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {issue.urgency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Troubleshooting */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quick Troubleshooting Steps
                </h2>
                <div className="space-y-4">
                  {troubleshootingSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-900 mb-4">
                  When to Call Immediately
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li>• Refrigerator completely warm</li>
                  <li>• Strange smells from refrigerator</li>
                  <li>• Compressor not running at all</li>
                  <li>• Water leaking inside</li>
                  <li>• Freezer works but refrigerator doesn&apos;t</li>
                  <li>• Any cooling loss over 2 hours</li>
                </ul>
                <div className="mt-6">
                  <a
                    href="tel:7035550123"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Call (703) 555-0123
                  </a>
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
                Same-Day Refrigerator Repair Service Areas
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
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
                Refrigerator Not Cooling FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {coolingFaqs.map((faq, index) => (
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
        <section className="bg-red-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Refrigerator Not Cooling? Call NOW!
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t risk food spoilage. Our expert technicians provide same-day repair
              service for refrigerators not cooling throughout Northern Virginia.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:7035550123"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors flex items-center justify-center"
              >
                <PhoneIcon className="h-6 w-6 mr-2" />
                Call (703) 555-0123 NOW
              </a>
            </div>
            <div className="mt-8 text-red-200">
              <p>⭐ 5.0/5 Stars • 35+ Reviews • Same-Day Service Available • 10+ Years Experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}