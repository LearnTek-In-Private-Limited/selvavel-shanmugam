import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setScrolled } from '../store/slices/uiSlice'

export function useScrolled(threshold = 20) {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrolled(window.scrollY > threshold))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [dispatch, threshold])
}
