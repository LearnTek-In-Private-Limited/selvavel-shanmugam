import React from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css'

/**
 * Accessible star rating component
 * @component
 * @param {Object} props - Component props
 * @param {number} props.count - Number of stars to display
 * @param {number} [props.max=5] - Maximum rating value
 * @returns {React.ReactElement} Star rating with accessible aria-label
 */
const StarRating = React.memo(({ count, max = 5 }) => {
  const stars = Array(count)
    .fill(0)
    .map((_, i) => (
      <FaStar key={i} aria-hidden="true" className="star" />
    ))

  return (
    <div
      className="star-rating"
      role="img"
      aria-label={`${count} out of ${max} stars`}
    >
      {stars}
    </div>
  )
})

StarRating.displayName = 'StarRating'

export default StarRating
