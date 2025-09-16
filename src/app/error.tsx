'use client'

import { useEffect } from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            We&apos;re experiencing a technical issue. Don&apos;t worry - your appliance repair needs are still our priority!
          </p>

          <div className="space-y-4">
            <button
              onClick={reset}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Try Again
            </button>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-3">Need immediate appliance repair?</p>
              <a
                href="tel:7035550123"
                className="inline-flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call (703) 555-0123
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Same Day Repairs - Appliance Repair Gainesville VA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}