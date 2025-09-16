import { Metadata } from 'next'
import { createPageSEO } from '@/lib/seo'
import { faqSchema } from '@/lib/schema'
import { PhoneIcon, CheckIcon, StarIcon, ClockIcon } from '@heroicons/react/24/solid'
import Reviews from '@/components/Reviews'
import Link from 'next/link'

export const metadata: Metadata = createPageSEO(
  'Appliance Repair Services Gainesville VA - Same Day Repairs',
  'Complete appliance repair services in Gainesville VA. Refrigerator, dryer, washer, dishwasher repair and more. Same-day service available. Call (703) 555-0123!',
  '/services'
)

const services = [
  {
    name: 'Refrigerator Repair',
    description: 'Expert refrigerator repair for all major brands. Not cooling, leaking, or making strange noises? Same-day service available.',
    features: ['Same-day service available', 'All major brands', 'Emergency repairs'],
    href: '/refrigerator-repair-gainesville-va',
    icon: '❄️',
    urgent: true
  },
  {
    name: 'Dryer Repair',
    description: 'Professional dryer repair service. Not heating, not drying, or taking too long? We provide fast, reliable repair.',
    features: ['Same-day service available', 'Safety inspections', 'All dryer types'],
    href: '/dryer-repair-gainesville-va',
    icon: '🌀',
    urgent: true
  },
  {
    name: 'Washer Repair',
    description: 'Washing machine repair for all brands. Not spinning, leaking, or won\'t drain? Quick diagnosis and professional repair.',
    features: ['Quick diagnosis', 'All brands serviced', 'Warranty included'],
    href: '/washer-repair-gainesville-va',
    icon: '🧺',
    urgent: false
  },
  {
    name: 'Dishwasher Repair',
    description: 'Dishwasher repair service for all brands. Not cleaning, not draining, or strange noises? Professional repair service.',
    features: ['Professional service', 'Parts in stock', 'Upfront pricing'],
    href: '/dishwasher-repair-gainesville-va',
    icon: '🍽️',
    urgent: false
  },
  {
    name: 'Ice Maker Repair',
    description: 'Ice maker repair and maintenance. Not making ice, leaking, or making bad ice? We can restore your ice maker.',
    features: ['Specialized service', 'All brands', 'Quick turnaround'],
    href: '/ice-maker-repair-gainesville-va',
    icon: '🧊',
    urgent: false
  },
  {
    name: 'Garbage Disposal Repair',
    description: 'Garbage disposal repair and installation. Jammed, leaking, or not working? Professional disposal service.',
    features: ['Same-day service', 'Installation available', 'All brands'],
    href: '/garbage-disposal-repair-gainesville-va',
    icon: '🗑️',
    urgent: false
  }
]

const serviceAreas = [
  'Gainesville VA', 'Haymarket VA', 'Bristow VA', 'Nokesville VA',
  'Warrenton VA', 'Centreville VA', 'Fairfax VA', 'Manassas VA'
]

const servicesFaqs = [
  {
    question: 'What appliance repair services do you provide?',
    answer: 'We provide comprehensive residential appliance repair services including refrigerator repair, dryer repair, washer repair, dishwasher repair, ice maker repair, and garbage disposal repair. We service all major brands and models.'
  },
  {
    question: 'Do you offer same-day appliance repair service?',
    answer: 'Yes, we offer same-day appliance repair service when scheduling permits, especially for urgent issues like refrigerators not cooling or dryers not heating. Contact us early in the day for best availability.'
  },
  {
    question: 'What brands of appliances do you repair?',
    answer: 'We repair all major appliance brands including GE, Whirlpool, Samsung, LG, Maytag, Kenmore, Frigidaire, Bosch, KitchenAid, Electrolux, Amana, and many others. Our technicians are trained on most residential appliance brands.'
  },
  {
    question: 'Do you provide upfront pricing for appliance repairs?',
    answer: 'Yes, we provide clear upfront pricing with no hidden fees. Our technician will diagnose the issue and provide you with a transparent quote before proceeding with any repair work.'
  },
  {
    question: 'What areas do you serve for appliance repair?',
    answer: 'We provide appliance repair services throughout Northern Virginia including Gainesville, Haymarket, Bristow, Nokesville, Warrenton, Centreville, Fairfax, and Manassas.'
  }
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...faqSchema,
            mainEntity: servicesFaqs.map(faq => ({
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
                Professional Appliance Repair Services
                <span className="block text-2xl lg:text-3xl text-blue-200 mt-2">
                  Gainesville VA & Northern Virginia
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Same Day Repairs provides expert appliance repair services throughout Northern Virginia.
                From refrigerator repair to dryer repair, we handle all your appliance needs with 10+ years of experience.
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
                  Need Appliance Repair? Same-Day Service Available!
                </h2>
                <p className="text-blue-700">
                  Professional appliance repair service throughout Northern Virginia. Same-day service available when scheduling permits.
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
                Complete Appliance Repair Services in Gainesville VA
              </h2>
              <p className="text-lg text-gray-600">
                Expert repair for all major appliances with same-day service available
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow ${service.urgent ? 'border-l-4 border-orange-500' : 'border-l-4 border-blue-500'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{service.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    {service.urgent && (
                      <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        Same-Day
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckIcon className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Same Day Repairs for Your Appliance Needs?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ClockIcon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Same-Day Service Available</h3>
                <p className="text-gray-600">
                  Same-day appliance repair service available when scheduling permits. We understand appliance emergencies can&apos;t wait.
                </p>
              </div>
              <div className="text-center">
                <CheckIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10+ Years Experience</h3>
                <p className="text-gray-600">
                  Expert technicians with over 10 years of experience repairing all major appliance brands. Trained and certified professionals.
                </p>
              </div>
              <div className="text-center">
                <StarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.0 Star Rating</h3>
                <p className="text-gray-600">
                  Over 35+ five-star reviews from satisfied customers. Professional, reliable service with upfront pricing and no hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Appliance Repair Service Areas in Northern Virginia
              </h2>
              <p className="text-lg text-gray-600">
                Professional appliance repair service throughout the region
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
        <Reviews limit={6} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Appliance Repair Services
              </h2>
            </div>
            <div className="space-y-6">
              {servicesFaqs.map((faq, index) => (
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
              Need Professional Appliance Repair Service Today?
            </h2>
            <p className="text-xl mb-8">
              Don&apos;t let broken appliances disrupt your life. Same Day Repairs provides fast,
              professional appliance repair service throughout Northern Virginia.
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