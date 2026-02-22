const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(formData) {
  const errors = {}

  if (!formData.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!formData.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_REGEX.test(formData.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required.'
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required.'
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Please write at least 10 characters.'
  }

  return errors
}

export function isValidEmail(email) {
  return EMAIL_REGEX.test(email.trim())
}
