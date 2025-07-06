import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React from 'react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
