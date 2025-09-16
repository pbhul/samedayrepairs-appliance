import Link from 'next/link'
import { PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  {
    name: 'Refrigerator Repair',
    href: '/refrigerator-repair-gainesville-va',
    description: 'Same-day refrigerator repair in Gainesville VA'
  },
  {
    name: 'Dryer Repair',
    href: '/dryer-repair-gainesville-va',
    description: 'Professional dryer repair service'
  },
  {
    name: 'Service Areas',
    href: '/northern-virginia-appliance-repair',
    description: 'Serving all of Northern Virginia'
  }
]

const serviceAreas = [
  { name: 'Gainesville VA', href: '/gainesville-va-appliance-repair' },
  { name: 'Haymarket VA', href: '/haymarket-va-appliance-repair' },
  { name: 'Bristow VA', href: '/bristow-va-appliance-repair' },
  { name: 'Centreville VA', href: '/centreville-va-appliance-repair' },
  { name: 'Manassas VA', href: '/manassas-va-appliance-repair' },
  { name: 'Fairfax VA', href: '/fairfax-va-appliance-repair' }
]

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40" role="navigation" aria-label="Main navigation">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span>Serving Northern Virginia</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>Mon-Fri 8AM-6PM, Sat 9AM-5PM</span>
              </div>
            </div>
            <a
              href="tel:7035550123"
              className="flex items-center hover:text-orange-300 transition-colors"
              aria-label="Call Same Day Repairs at 703-555-0123"
            >
              <PhoneIcon className="h-4 w-4 mr-1" />
              <span className="font-semibold">(703) 555-0123</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-900">Same Day Repairs</span>
              <span className="ml-2 text-sm text-gray-600">Gainesville VA</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  title={link.description}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <a
              href="tel:7035550123"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center"
              aria-label="Call now for same-day appliance repair"
            >
              <PhoneIcon className="h-4 w-4 mr-1" />
              Call Now
            </a>
          </div>
        </div>

        {/* Service Areas bar */}
        <div className="border-t border-gray-200 py-2">
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <span className="text-gray-600 font-medium">Service Areas:</span>
            {serviceAreas.map((area, index) => (
              <span key={area.name}>
                <Link
                  href={area.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  title={`Appliance repair in ${area.name}`}
                >
                  {area.name}
                </Link>
                {index < serviceAreas.length - 1 && <span className="text-gray-400 ml-2">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}