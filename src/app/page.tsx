import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Homeitems from './components/homeitems'
import TopPickups from './components/TopPickups'
import AsgaardSofa from './components/AsgaardSofa'
import Ourblogs from './components/Ourblogs'
import Insta from './components/insta'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Homeitems/>
       <TopPickups/>
      <AsgaardSofa/>
      <Ourblogs/>
      <Insta/>
    </div>
  )
}

export default Home