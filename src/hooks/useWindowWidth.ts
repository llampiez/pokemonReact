import { useState, useEffect } from 'react'

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return windowWidth
}
