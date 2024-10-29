import React from 'react'

interface StarRatingProps {
  rating: number
  totalStars: number
  colorStars?: string
  disabledColorStars?: string
}

export const StarRating: React.FC<StarRatingProps> = function ({
  rating,
  totalStars = 5,
  colorStars,
  disabledColorStars,
}: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          className={`h-6 w-6 ${colorStars}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.905c.97 0 1.371 1.24.588 1.81l-3.973 2.888 1.518 4.674c.3.921-.755 1.688-1.54 1.119L10 15.347l-3.969 2.845c-.784.57-1.84-.198-1.54-1.119l1.518-4.674L1.535 9.41c-.784-.57-.382-1.81.588-1.81h4.905l1.518-4.674z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          className={`h-6 w-6 ${colorStars}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.273l-3.516 2.517c-.784.562-1.823-.18-1.525-1.095l1.346-4.13-3.52-2.557c-.784-.57-.382-1.81.587-1.81h4.367l1.347-4.129c.299-.913 1.563-.913 1.862 0l1.347 4.129h4.367c.969 0 1.371 1.24.587 1.81l-3.52 2.557 1.346 4.13c.298.914-.742 1.657-1.525 1.095L10 15.273zM10 2.26l-1.515 4.66H3.268l3.974 2.888-1.516 4.674L10 13.247l3.974 2.88-1.516-4.674 3.974-2.888h-5.217L10 2.26z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={i}
          className={`h-6 w-6 ${disabledColorStars}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.905c.97 0 1.371 1.24.588 1.81l-3.973 2.888 1.518 4.674c.3.921-.755 1.688-1.54 1.119L10 15.347l-3.969 2.845c-.784.57-1.84-.198-1.54-1.119l1.518-4.674L1.535 9.41c-.784-.57-.382-1.81.588-1.81h4.905l1.518-4.674z" />
        </svg>
      ))}
    </div>
  )
}
