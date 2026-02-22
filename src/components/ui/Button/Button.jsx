import React from 'react'
import './Button.css'

const Button = React.memo(({
  as: Component = 'button',
  className = '',
  children,
  disabled = false,
  href,
  target,
  rel,
  onClick,
  ...props
}) => {
  const buttonClass = `btn ${className}`

  if (Component === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
