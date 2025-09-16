import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'

export const metadata: Metadata = createPageSEO(
  'Dryer Not Heating Repair Near Me - Same Day Service',
  'Dryer not heating? Same-day repair service available near you. Expert repair for all brands. Safety priority. 10+ years experience. Call (703) 555-0123!',
  '/dryer-not-heating-repair-near-me'
)

const heatingIssues = [
  {
    problem: 'Heating Element Failure',
    description: 'Most common cause - heating element burned out or broken',
    urgency: 'High Priority - No heat production'
  },
  {
    problem: 'Thermal Fuse Blown',
    description: 'Safety device tripped due to overheating - prevents dryer from heating',
    urgency: 'Safety Issue - Common cause'
  },
  {
    problem: 'Gas Valve Problems',
    description: 'Gas dryers - faulty gas valve or igniter preventing heating',
    urgency: 'High Priority - No heat in gas dryers'
  },
  {
    problem: 'Thermostat Malfunction',
    description: 'Temperature control issues preventing proper heating cycles',
    urgency: 'Control Issue - Inconsistent heating'
  },
  {
    problem: 'Control Board Failure',
    description: 'Electronic control not sending heating signals properly',
    urgency: 'Complex Issue - Professional diagnosis needed'
  },
  {
    problem: 'Blocked Venting',
    description: 'Severe lint blockage causing overheating and thermal fuse trips',
    urgency: 'Safety Concern - Fire hazard risk'
  }
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

export default function DryerNotHeatingRepairNearMe() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Dryer Not Heating Repair Near Me
              <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                Same-Day Service Available
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Dryer not heating? We provide same-day repair service for dryers not heating
              throughout Northern Virginia. Expert diagnosis and repair for all brands.
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
                Dryer Not Heating Can Be a Safety Issue - Professional Repair Available!
              </h2>
              <p className="text-blue-700">
                Same-day repair service available when scheduling permits. Don&apos;t let heating problems worsen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heating Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Causes of Dryers Not Heating
            </h2>
            <p className="text-lg text-gray-600">
              Expert diagnosis and repair for all heating problems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heatingIssues.map((issue, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-md p-6 ${issue.urgency.includes('Safety') ? 'border-l-4 border-red-500' : 'border-l-4 border-blue-500'}`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {issue.problem}
                </h3>
                <p className="text-gray-600 mb-4">{issue.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  issue.urgency.includes('Safety') ? 'bg-red-100 text-red-800' :
                  issue.urgency.includes('High Priority') ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {issue.urgency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Same Day Repairs for Dryer Not Heating Issues?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ExclamationTriangleIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Priority</h3>
              <p className="text-gray-600">
                We understand heating issues can be safety concerns. Our technicians prioritize safe, proper repairs.
              </p>
            </div>
            <div className="text-center">
              <ClockIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
              <p className="text-gray-600">
                Same-day repair service available when scheduling permits. We know you need your dryer working.
              </p>
            </div>
            <div className="text-center">
              <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Brands Serviced</h3>
              <p className="text-gray-600">
                We repair heating issues in all dryer brands with proper parts and expert diagnosis.
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
              Dryer Not Heating Repair Service Areas
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
      <Reviews service="dryer" limit={3} />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Dryer Not Heating? Call Now!
          </h2>
          <p className="text-xl mb-8">
            Don&apos;t let heating problems worsen. Our expert technicians provide same-day
            repair service for dryers not heating throughout Northern Virginia.
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