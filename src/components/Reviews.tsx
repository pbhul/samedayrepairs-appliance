import { StarIcon } from '@heroicons/react/24/solid'

interface Review {
  id: number
  name: string
  rating: number
  text: string
  service: string
  date: string
  verified: boolean
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Excellent refrigerator repair service! My fridge stopped cooling and they came out the same day. Technician was professional and fixed it quickly. Highly recommend!",
    service: "Refrigerator Repair",
    date: "2024-08-15",
    verified: true
  },
  {
    id: 2,
    name: "Mike Johnson",
    rating: 5,
    text: "Our dryer wasn't heating and Same Day Repairs diagnosed the problem immediately. Fair pricing and great service. Will definitely use them again.",
    service: "Dryer Repair",
    date: "2024-08-10",
    verified: true
  },
  {
    id: 3,
    name: "Jennifer L.",
    rating: 5,
    text: "Fast and reliable service for our washing machine. The technician explained everything clearly and the repair was done professionally. Very satisfied!",
    service: "Washer Repair",
    date: "2024-08-05",
    verified: true
  },
  {
    id: 4,
    name: "Robert Chen",
    rating: 5,
    text: "Called for dishwasher repair and they were able to come out the same day. Fixed the issue and provided helpful maintenance tips. Great experience overall.",
    service: "Dishwasher Repair",
    date: "2024-07-28",
    verified: true
  },
  {
    id: 5,
    name: "Lisa Thompson",
    rating: 5,
    text: "Professional and knowledgeable technician. Repaired our refrigerator ice maker quickly and efficiently. Reasonable pricing and excellent customer service.",
    service: "Ice Maker Repair",
    date: "2024-07-20",
    verified: true
  },
  {
    id: 6,
    name: "David Martinez",
    rating: 5,
    text: "Same Day Repairs lived up to their name! Our dryer broke down and they came out the same afternoon. Quality work and fair prices. Highly recommended.",
    service: "Dryer Repair",
    date: "2024-07-15",
    verified: true
  }
]

interface ReviewsProps {
  showAll?: boolean
  limit?: number
  service?: string
}

export default function Reviews({ showAll = false, limit = 6, service }: ReviewsProps) {
  const filteredReviews = service
    ? reviews.filter(review => review.service.toLowerCase().includes(service.toLowerCase()))
    : reviews

  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, limit)

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const totalReviews = reviews.length

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-6 w-6 text-yellow-400"
                />
              ))}
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">
              {averageRating.toFixed(1)} out of 5
            </span>
          </div>
          <p className="text-lg text-gray-600">
            Based on 30+ verified Google reviews
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
              {/* Review Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.service}</p>
                </div>
                {review.verified && (
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Star Rating */}
              <div className="flex items-center mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Read More Reviews on Google
            </h3>
            <p className="text-gray-600 mb-6">
              See what more customers are saying about our appliance repair services
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.google.com/maps/place/Sameday+Repairs+Inc/@38.7467151,-77.8763042,11z/data=!3m1!4b1!4m6!3m5!1s0x89b7b685aaaaaaab:0x1175b26e403f2e0c!8m2!3d38.746818!4d-77.5813105!16s%2Fg%2F1vy7hgjt?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View Google Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}