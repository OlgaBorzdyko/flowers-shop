import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    const isHome = location.pathname === '/'
    document.body.className = isHome ? 'home-page-theme' : 'theme-default'
  }, [location])

  return <>{children}</>
}

export default ThemeWrapper
