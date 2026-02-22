import { createSlice } from '@reduxjs/toolkit'

const initialState = { mobileOpen: false, scrolled: false }

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openMobileNav(state) { state.mobileOpen = true },
    closeMobileNav(state) { state.mobileOpen = false },
    toggleMobileNav(state) { state.mobileOpen = !state.mobileOpen },
    setScrolled(state, action) { state.scrolled = action.payload },
  },
})

export const { openMobileNav, closeMobileNav, toggleMobileNav, setScrolled } = uiSlice.actions
export default uiSlice.reducer
