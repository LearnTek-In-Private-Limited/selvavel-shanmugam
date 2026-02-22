import { createAsyncThunk } from '@reduxjs/toolkit'
import emailjs from '@emailjs/browser'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../lib/firebase'

export const submitContact = createAsyncThunk(
  'contact/submit',
  async ({ formRef, formData }, { rejectWithValue }) => {
    try {
      // 1. Persist to Firestore
      await addDoc(collection(db, 'contacts'), {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        timestamp: serverTimestamp(),
        source: 'portfolio',
      })

      // 2. Send email via EmailJS
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      return { ok: true }
    } catch (err) {
      return rejectWithValue(err.message || 'Submission failed. Please try again.')
    }
  }
)
