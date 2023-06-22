import React from 'react'
import GoBackButton from '../components/GoBackButton'

function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl">Oops! Page not found.</p>
        <GoBackButton />
      </div>
    </div>
  )
}

export default NotFound