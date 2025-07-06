import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React from 'react'

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      {/* Global wrapper */}
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 flex flex-col flex-1">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
