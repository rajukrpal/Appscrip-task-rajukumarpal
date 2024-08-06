import React from 'react'
import Navbar from '../navbar/Navbar'
import Discover from '../discover/Discover'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import Card from '../card/Card'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Discover />
      {/* <Sidebar /> */}
      <Card />
      <Footer />
    </div>
  )
}

export default Home
