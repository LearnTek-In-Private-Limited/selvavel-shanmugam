import React from 'react'
import './Card.css'

/**
 * Base card component with border, shadow, and hover effects
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Card element
 */
const Card = React.memo(({ children, className = '' }) => {
  const combinedClass = className ? `card ${className}` : 'card'

  return <div className={combinedClass}>{children}</div>
})

Card.displayName = 'Card'

export default Card
