import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'
import Link from 'next/link'

export const metadata: Metadata = createPageSEO(
  'Appliance Repair Haymarket VA - Same Day Service Available',
  'Professional appliance repair in Haymarket VA. Refrigerator, dryer, washer repair with same-day service available. 10+ years experience. Call (703) 555-0123!',
  '/haymarket-va-appliance-repair'
)

const services = [
  {
    name: 'Refrigerator Repair',
    icon: '❄️',
    description: 'Not cooling, leaking, or making noise? Same-day service available.',
    href: '/refrigerator-repair-gainesville-va'
  },
  {
    name: 'Dryer Repair',
    icon: '🌀',
    description: 'Not heating, not drying, or taking too long? Professional repair.',
    href: '/dryer-repair-gainesville-va'
  },
  {
    name: 'Washer Repair',
    icon: '🧺',
    description: 'Not spinning, leaking, or won\'t drain? Quick diagnosis.',
    href: '/services'
  },
  {
    name: 'Dishwasher Repair',
    icon: '🍽️',
    description: 'Not cleaning, not draining, or strange noises? We can help.',
    href: '/services'
  }
]

export default function HaymarketVAApplianceRepair() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Appliance Repair Haymarket VA
              <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                Same-Day Service Available
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Same Day Repairs provides expert appliance repair services in Haymarket VA.
              With 10+ years of experience, we provide professional repair for all major appliances.
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
            <ClockIcon className="h-8 w-8 text-blue-500 mr-4" />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-blue-800">
                Need Appliance Repair in Haymarket VA? Same-Day Service Available!
              </h2>
              <p className="text-blue-700">
                Professional appliance repair service in Haymarket Virginia. Same-day service available when scheduling permits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Appliance Repair Services in Haymarket VA
            </h2>
            <p className="text-lg text-gray-600">
              Expert repair for all major appliances with same-day service available
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Haymarket */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Haymarket Virginia with Professional Appliance Repair
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Haymarket is a charming town in Prince William County with a rich history and growing community.
              Same Day Repairs has been proud to serve Haymarket residents with reliable appliance repair services.
              Whether you need refrigerator repair, dryer repair, or any other appliance service, we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Haymarket Service</h3>
              <p className="text-gray-600">
                We know Haymarket VA well and provide efficient appliance repair service throughout the area.
              </p>
            </div>
            <div className="text-center">
              <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
              <p className="text-gray-600">
                Same-day appliance repair service available in Haymarket when scheduling permits.
              </p>
            </div>
            <div className="text-center">
              <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">10+ Years Experience</h3>
              <p className="text-gray-600">
                Over 10 years serving Northern Virginia families with professional appliance repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews limit={3} />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Appliance Repair in Haymarket VA Today?
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let broken appliances disrupt your life. Same Day Repairs provides fast,
            professional appliance repair service in Haymarket Virginia.
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
  )
}