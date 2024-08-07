import React from 'react'
import Navbar from '../navbar/Navbar'
import Discover from '../discover/Discover'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Discover />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default Home
