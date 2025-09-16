import Link from 'next/link'
import { PhoneIcon, MapPinIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'

const serviceLinks = [
  { name: 'Refrigerator Repair', href: '/refrigerator-repair-gainesville-va' },
  { name: 'Dryer Repair', href: '/dryer-repair-gainesville-va' },
  { name: 'Washer Repair', href: '/washer-repair-gainesville-va' },
  { name: 'Dishwasher Repair', href: '/dishwasher-repair-gainesville-va' },
  { name: 'Garbage Disposal Repair', href: '/garbage-disposal-repair-gainesville-va' },
  { name: 'All Services', href: '/services' }
]

const locationLinks = [
  { name: 'Gainesville VA', href: '/gainesville-va-appliance-repair' },
  { name: 'Haymarket VA', href: '/haymarket-va-appliance-repair' },
  { name: 'Bristow VA', href: '/bristow-va-appliance-repair' },
  { name: 'Centreville VA', href: '/centreville-va-appliance-repair' },
  { name: 'Manassas VA', href: '/manassas-va-appliance-repair' },
  { name: 'Fairfax VA', href: '/fairfax-va-appliance-repair' }
]

const brandLinks = [
  { name: 'GE Refrigerator Repair', href: '/ge-refrigerator-repair-near-me' },
  { name: 'Samsung Dryer Repair', href: '/samsung-dryer-repair-near-me' },
  { name: 'Maytag Dryer Repair', href: '/maytag-dryer-repair-near-me' },
  { name: 'Whirlpool Washer Repair', href: '/whirlpool-washer-repair-near-me' },
  { name: 'KitchenAid Dishwasher Repair', href: '/kitchenaid-dishwasher-repair-near-me' }
]

const commonIssues = [
  { name: 'Refrigerator Not Cooling', href: '/refrigerator-not-cooling-near-me' },
  { name: 'Dryer Not Heating', href: '/dryer-not-heating-repair-near-me' },
  { name: 'Washer Not Draining', href: '/washer-not-draining-repair' },
  { name: 'Ice Maker Repair', href: '/ice-maker-repair-near-me' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Same Day Repairs</h3>
            <p className="text-gray-300 mb-4">
              Professional appliance repair service in Gainesville VA and surrounding areas.
              Same-day service available with 10+ years of experience.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-orange-400" />
                <a href="tel:7035550123" className="hover:text-orange-400 transition-colors">
                  (703) 555-0123
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2 text-orange-400" />
                <span>Gainesville, VA 20155</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2 text-orange-400" />
                <span>Mon-Fri 8AM-6PM, Sat 9AM-5PM</span>
              </div>
              <div className="flex items-center">
                <StarIcon className="h-4 w-4 mr-2 text-yellow-400" />
                <span>5.0/5 Stars • 35+ Reviews</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands & Common Issues */}
          <div>
            <h3 className="text-lg font-bold mb-4">Brand Repairs</h3>
            <ul className="space-y-2 text-sm mb-6">
              {brandLinks.slice(0, 3).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-md font-semibold mb-2">Common Issues</h4>
            <ul className="space-y-2 text-sm">
              {commonIssues.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Need Emergency Appliance Repair?</h3>
            <p className="text-gray-300 mb-4">
              Same-day service available for urgent refrigerator and appliance repairs in Northern Virginia
            </p>
            <a
              href="tel:7035550123"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call (703) 555-0123 Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              <p>&copy; 2024 Same Day Repairs. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}