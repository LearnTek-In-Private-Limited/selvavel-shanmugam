import { createSlice } from '@reduxjs/toolkit'
import { submitContact } from '../thunks/submitContact'

const initialState = { status: 'idle', error: '', fieldErrors: {} }

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFieldErrors(state, action) { state.fieldErrors = action.payload },
    clearFieldError(state, action) { delete state.fieldErrors[action.payload] },
    resetContact() { return initialState },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.status = 'submitting'
        state.error = ''
        state.fieldErrors = {}
      })
      .addCase(submitContact.fulfilled, (_state) => {
        _state.status = 'success'
        _state.error = ''
        _state.fieldErrors = {}
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.payload || 'Submission failed. Please try again.'
        state.fieldErrors = {}
      })
  },
})

export const { setFieldErrors, clearFieldError, resetContact } = contactSlice.actions
export default contactSlice.reducer
