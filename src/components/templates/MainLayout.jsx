import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-concrete-dark">
      <Header />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout