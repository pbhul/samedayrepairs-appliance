import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Washer Not Draining Repair - Same Day Service Available',
  'Washer not draining? Standing water in washer? Same-day repair service available. Expert repair for all brands. 10+ years experience. Call (703) 555-0123!',
  '/washer-not-draining-repair'
)

export default function WasherNotDrainingRepair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Washer Not Draining Repair
              <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                Same-Day Service Available
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Washer not draining? Standing water in your washing machine? We provide same-day repair service
              for washers not draining throughout Northern Virginia.
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
            <ExclamationTriangleIcon className="h-8 w-8 text-blue-500 mr-4" />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-blue-800">
                Washer Not Draining Can Cause Water Damage - Call for Repair!
              </h2>
              <p className="text-blue-700">
                Standing water in washer needs immediate attention. Same-day repair service available when scheduling permits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews service="washer" limit={3} />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Washer Not Draining? Call Now!
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let standing water cause damage. Call for same-day washer repair service.
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
        </div>
      </section>
    </div>
  )
}