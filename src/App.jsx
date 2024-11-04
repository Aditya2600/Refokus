// App.js
import React from 'react'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full bg-zinc-900 font-["satoshi"] text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App