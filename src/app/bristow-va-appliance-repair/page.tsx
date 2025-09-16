import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Appliance Repair Bristow VA - Same Day Service Available',
  'Professional appliance repair in Bristow VA. Refrigerator, dryer, washer repair with same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/bristow-va-appliance-repair'
)

const services = [
  { name: 'Refrigerator Repair', icon: '❄️', href: '/refrigerator-repair-gainesville-va' },
  { name: 'Dryer Repair', icon: '🌀', href: '/dryer-repair-gainesville-va' },
  { name: 'Washer Repair', icon: '🧺', href: '/services' },
  { name: 'Dishwasher Repair', icon: '🍽️', href: '/services' }
]

export default function BristowVAApplianceRepair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Appliance Repair Bristow VA
              <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                Same-Day Service Available
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Same Day Repairs provides expert appliance repair services in Bristow VA.
              With 10+ years of experience, we serve the Bristow community with professional, reliable appliance repair.
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Appliance Repair Services in Bristow VA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center border-l-4 border-blue-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <a
                  href={service.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews limit={3} />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Appliance Repair in Bristow VA Today?
          </h2>
          <p className="text-xl mb-8">
            Same Day Repairs provides fast, professional appliance repair service in Bristow Virginia.
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