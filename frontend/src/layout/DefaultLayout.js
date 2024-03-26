import React from 'react'
import { AppContent, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppHeader />
      <div className="wrapper d-flex flex-column min-vh-100 bg-white">
        <div className="body flex-grow-1 px-2">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
