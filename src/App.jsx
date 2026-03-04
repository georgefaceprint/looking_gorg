import React from 'react'
import Navbar from './components/Navbar'
import HeroScroller from './sections/HeroScroller'
import Shop from './sections/Shop'
import Services from './sections/Services'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroScroller />
        <Services />
        <Shop />
        <Contact />
      </main>
    </div>
  )
}

export default App
