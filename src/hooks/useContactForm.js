import { useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFieldErrors, clearFieldError, resetContact } from '../store/slices/contactSlice'
import { submitContact } from '../store/thunks/submitContact'
import { validateContactForm } from '../utils/validators'

const INITIAL_FORM_DATA = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export function useContactForm() {
  const dispatch = useDispatch()
  const { status, error, fieldErrors } = useSelector((s) => s.contact)
  const formRef = useRef(null)
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
      dispatch(clearFieldError(name))
    },
    [dispatch]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      const errors = validateContactForm(formData)
      if (Object.keys(errors).length > 0) {
        dispatch(setFieldErrors(errors))
        const firstErrorField = Object.keys(errors)[0]
        document.getElementById(firstErrorField)?.focus()
        return
      }
      const result = await dispatch(submitContact({ formRef, formData }))
      if (result.meta.requestStatus === 'fulfilled') {
        setFormData(INITIAL_FORM_DATA)
        setTimeout(() => dispatch(resetContact()), 4000)
      }
    },
    [formData, formRef, dispatch]
  )

  return { formRef, formData, status, error, fieldErrors, handleChange, handleSubmit }
}
