import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'KitchenAid Dishwasher Repair Near Me - Same Day Service',
  'Expert KitchenAid dishwasher repair service near you. Not cleaning, not draining, or making noise? Same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/kitchenaid-dishwasher-repair-near-me'
)

const commonKitchenAidIssues = [
  {
    problem: 'KitchenAid Dishwasher Not Cleaning',
    description: 'Most common KitchenAid issue - clogged spray arms, dirty filters, or water temperature problems',
    urgency: 'Poor Performance'
  },
  {
    problem: 'KitchenAid Dishwasher Not Draining',
    description: 'Clogged drain hose, garbage disposal connection, or faulty drain pump in KitchenAid models',
    urgency: 'Urgent - Standing water'
  },
  {
    problem: 'KitchenAid Dishwasher Leaking',
    description: 'Door seals, water pump, or loose connections causing leaks in KitchenAid dishwashers',
    urgency: 'Urgent - Water damage risk'
  },
  {
    problem: 'KitchenAid Dishwasher Not Starting',
    description: 'Control panel, door latch, or electrical issues specific to KitchenAid models',
    urgency: 'No Operation'
  },
  {
    problem: 'KitchenAid Dishwasher Making Noise',
    description: 'Wash pump motor, spray arm bearings, or debris in KitchenAid dishwasher drain',
    urgency: 'Mechanical Issue'
  },
  {
    problem: 'KitchenAid Dishwasher Not Filling',
    description: 'Water inlet valve, float switch, or control board malfunction in KitchenAid units',
    urgency: 'No Operation'
  }
]

const kitchenAidModels = [
  'KitchenAid Architect Series', 'KitchenAid ProWash Cycle', 'KitchenAid PrintShield Finish',
  'KitchenAid Third Level Rack', 'KitchenAid Built-in Dishwashers', 'KitchenAid Portable Dishwashers'
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const kitchenAidFaqs = [
  {
    question: 'Do you repair all KitchenAid dishwasher models?',
    answer: 'Yes! We repair all KitchenAid dishwasher models including Architect Series, ProWash Cycle, and Third Level Rack models. We have 10+ years of experience with KitchenAid dishwasher-specific issues.'
  },
  {
    question: 'How quickly can you repair my KitchenAid dishwasher?',
    answer: 'We offer same-day KitchenAid dishwasher repair service when scheduling permits. Most KitchenAid dishwasher repairs can be completed efficiently with our KitchenAid-specific parts inventory.'
  },
  {
    question: 'Why is my KitchenAid dishwasher not cleaning dishes properly?',
    answer: 'KitchenAid dishwashers not cleaning properly can be due to clogged spray arms, dirty filters, incorrect water temperature, or control panel issues. Our technicians specialize in KitchenAid diagnostics.'
  },
  {
    question: 'Do you have KitchenAid dishwasher parts in stock?',
    answer: 'Yes, we stock common KitchenAid dishwasher parts including filters, spray arms, door seals, and control boards. This allows us to complete most KitchenAid dishwasher repairs the same day.'
  },
  {
    question: 'What areas do you serve for KitchenAid dishwasher repair?',
    answer: 'We provide KitchenAid dishwasher repair service throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas.'
  }
]

export default function KitchenAidDishwasherRepairNearMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'KitchenAid Dishwasher Repair Near Me',
            description: 'Expert KitchenAid dishwasher repair service with same-day availability.',
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
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                KitchenAid Dishwasher Repair Near Me
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Same-Day Service Available
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Expert KitchenAid dishwasher repair service in Northern Virginia. We specialize in all KitchenAid models
                including Architect Series and ProWash Cycle dishwashers. Not cleaning? Not draining? We can help!
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
                  KitchenAid Dishwasher Not Cleaning or Not Draining? Same-Day Repair Available!
                </h2>
                <p className="text-blue-700">
                  Professional KitchenAid dishwasher repair with same-day service when scheduling permits.
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
                Common KitchenAid Dishwasher Problems We Fix
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonKitchenAidIssues.map((issue, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
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
              ))}
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                KitchenAid Dishwasher Models We Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {kitchenAidModels.map((model, index) => (
                  <div key={index} className="flex items-center p-3 border rounded-lg border-l-4 border-blue-500">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="font-medium text-gray-900">{model}</span>
                  </div>
                ))}
              </div>
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
                KitchenAid Dishwasher Repair FAQ
              </h2>
            </div>
            <div className="space-y-6">
              {kitchenAidFaqs.map((faq, index) => (
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
              Need KitchenAid Dishwasher Repair Today?
            </h2>
            <p className="text-xl mb-8">
              Our expert technicians specialize in KitchenAid dishwasher repair
              with same-day service available.
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